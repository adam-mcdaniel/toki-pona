import React, { useState, useEffect } from 'react';
import Tree from 'react-d3-tree';
import './SentenceVisualizer.css';

// Transform AST node to D3 format
const transformToD3 = (node, highlightedNode) => {
    let name = node.kind;
    if (node.token) {
        // Just the token, no tag text
        name = node.token;
    }
    
    // Pass original data for hover handling
    const attributes = {};
    if (node.tag) attributes.tag = node.tag;
    
    const isHighlighted = highlightedNode && (node === highlightedNode);

    return {
        name: name,
        attributes,
        token: node.token,
        kind: node.kind,
        // Pass style directly to node props for highlighting
        nodeSvgShape: {
             shapeProps: {
                 r: 10,
                 fill: isHighlighted ? '#facc15' : 'var(--pos-noun)', 
                 stroke: isHighlighted ? '#a16207' : 'none',
                 strokeWidth: isHighlighted ? 3 : 0,
             },
        },
        children: node.children ? node.children.map(c => transformToD3(c, highlightedNode)) : []
    };
};

const NodeRenderer = ({ node, onHover, sentenceIndex }) => {
    if (node.token) {
        return (
            <span 
                className={`token pos-${node.tag?.toLowerCase()}`}
                onMouseEnter={() => onHover(node, sentenceIndex)}
                onMouseLeave={() => onHover(null, sentenceIndex)}
            >
                {node.token}
            </span>
        )
    }

    // Recursively render children
    return (
        <span 
            className={`constituent kind-${node.kind?.toLowerCase()}`} 
        >
            {node.children.map((child, i) => (
                <NodeRenderer key={i} node={child} onHover={onHover} sentenceIndex={sentenceIndex} />
            ))}
        </span>
    )
}

const SentenceVisualizer = ({ tree, mode, onHover, activeSentenceIndex, highlightedNode }) => {
    
    if (mode === 'text') {
        return (
            <div className="text-display">
                {tree.map((utterance, i) => (
                    <div key={i} className="utterance-block">
                        <span className="utterance-label">{i + 1}. </span>
                        <NodeRenderer 
                            node={utterance} 
                            onHover={onHover} 
                            sentenceIndex={i}
                        />
                    </div>
                ))}
            </div>
        )
    }

    if (mode === 'graph') {
        const sentenceNode = tree[activeSentenceIndex];
        if (!sentenceNode) return null;

        const d3Data = transformToD3(sentenceNode, highlightedNode);
        
        return (
            <div style={{ width: '100%', height: '100%' }}>
                <Tree 
                    data={d3Data} 
                    orientation="vertical" 
                    pathFunc="step"
                    translate={{ x: 300, y: 50 }}
                    nodeSize={{ x: 90, y: 100 }}
                    separation={{ siblings: 1.2, nonSiblings: 1.5 }}
                    zoomable={true}
                    collapsible={false}
                    rootNodeClassName="node__root"
                    branchNodeClassName="node__branch"
                    leafNodeClassName="node__leaf"
                    renderCustomNodeElement={(rd3tProps) => renderCustomNode(rd3tProps, highlightedNode, onHover)}
                />
            </div>
        )
    }

    return null;
}

// Custom Node Renderer for D3
const renderCustomNode = ({ nodeDatum, toggleNode }, highlightedNode, onHover) => {
    const isLeaf = !nodeDatum.children || nodeDatum.children.length === 0;
    const isRoot = nodeDatum.name === 'Utterance';
    
    const style = nodeDatum.nodeSvgShape?.shapeProps || {};
    
    // Determine Fill Color
    let fill = '#f1f5f9'; // Default gray
    if (isLeaf) fill = '#ffffff'; // White default for leaves
    if (isRoot) fill = '#e0e7ff';
    
    const tag = nodeDatum.attributes?.tag;
    if (tag) {
        switch(tag) {
            case 'Noun': fill = '#2563eb'; break; // --pos-noun
            case 'Verb': fill = '#db2777'; break; // --pos-verb
            case 'Modifier': fill = '#ca8a04'; break; // --pos-modifier
            case 'Particle': fill = '#64748b'; break; // --pos-particle
            case 'Preposition': fill = '#059669'; break; // --pos-preposition
            case 'Pronoun': fill = '#9333ea'; break; // --pos-pronoun
            case 'Preverb': fill = '#e11d48'; break; // --pos-preverb
            case 'Other': fill = '#475569'; break; // --pos-other
            default: break;
        }
    }

    // Highlighting overrides
    let stroke = style.stroke;
    let strokeWidth = style.strokeWidth;

    return (
      <g 
        onMouseEnter={() => onHover && onHover(nodeDatum)}
        onMouseLeave={() => onHover && onHover(null)}
        style={{ cursor: 'pointer' }}
      >
        <circle 
            r="15" 
            fill={fill} 
            stroke={stroke !== 'none' ? stroke : (tag ? 'none' : '#94a3b8')}
            strokeWidth={strokeWidth || 2}
        />
        <text 
            fill="black" 
            strokeWidth="0" 
            x="20" 
            dy="5"
            style={{ fontSize: '14px', fontFamily: 'Inter', fontWeight: '500' }}
        >
          {nodeDatum.name}
        </text>
      </g>
    );
}

export default SentenceVisualizer;
