import { useState, useEffect } from 'react'
import init, { parse_to_tree } from 'toki-pona-wasm'
import SentenceVisualizer from './components/SentenceVisualizer'
import { dictionary } from './dictionary'
import './App.css'

function App() {
  const [isWasmReady, setIsWasmReady] = useState(false)
  const [input, setInput] = useState("mi wile e ni: sina kama sona e toki pona!")
  const [parsedTree, setParsedTree] = useState(null)
  
  // Interaction State
  const [activeSentenceIndex, setActiveSentenceIndex] = useState(0)
  const [hoveredNode, setHoveredNode] = useState(null)
  const [hoveredWord, setHoveredWord] = useState(null)

  useEffect(() => {
    init().then(() => setIsWasmReady(true))
  }, [])

  const handleParse = () => {
    if (!isWasmReady) return
    try {
        const tree = parse_to_tree(input)
        setParsedTree(tree)
        setActiveSentenceIndex(0) // Reset to first sentence
    } catch (e) {
        console.error("Parse error", e)
    }
  }

  useEffect(() => {
      if (isWasmReady) handleParse()
  }, [isWasmReady])

  // Get definition if a word is hovered
  const definition = hoveredWord ? (dictionary[hoveredWord.toLowerCase()] || "No definition found") : null;

  return (
    <div className="app-container">
       <div className="left-pane">
           <header className="header">
              <h1>Toki Pona Grammar Visualizer</h1>
           </header>
           
           <div className="input-section">
              <textarea 
                className="input-area"
                value={input} 
                onChange={(e) => setInput(e.target.value)}
                spellCheck="false"
                placeholder="Enter toki pona text..."
              />
              <div className="actions">
                  <button className="primary-btn" onClick={handleParse} disabled={!isWasmReady}>
                    {isWasmReady ? 'Analyze' : 'Loading...'}
                  </button>
              </div>
           </div>

           <div className="text-display-section">
              {parsedTree && (
                  <SentenceVisualizer 
                      tree={parsedTree} 
                      mode="text"
                      onHover={(node, sentenceIdx) => {
                          setHoveredNode(node)
                          // If node has token, show its definition. 
                          // If it's a constituent (no token), use its kind.
                          if (node) {
                              if (node.token) {
                                  setHoveredWord(node.token)
                              } else {
                                  setHoveredWord(node.kind)
                              }
                          } else {
                              setHoveredWord(null)
                          }
                          
                          if (sentenceIdx !== undefined) setActiveSentenceIndex(sentenceIdx)
                      }}
                  />
              )}
           </div>
       </div>

       <div className="right-pane">
           <div className="right-pane-header">
               <h3 className="section-title">Analysis & Definitions</h3>
               {hoveredWord ? (
                   <div className="definition-box">
                       <div className="def-word">{hoveredWord}</div>
                       <div className="def-text">{definition}</div>
                   </div>
               ) : (
                   <div className="definition-placeholder">
                       Hover over words or tree nodes to see definitions.
                   </div>
               )}
           </div>

           <div className="tree-container-sticky">
               {parsedTree && parsedTree[activeSentenceIndex] ? (
                   <div className="tree-wrapper">
                       <SentenceVisualizer 
                           tree={parsedTree} 
                           mode="graph"
                           activeSentenceIndex={activeSentenceIndex}
                           highlightedNode={hoveredNode}
                           onHover={(node) => {
                               setHoveredNode(node)
                               if (node) {
                                   if (node.token) {
                                      setHoveredWord(node.token)
                                   } else {
                                      setHoveredWord(node.kind)
                                   }
                               } else {
                                   setHoveredWord(null)
                               }
                           }}
                       />
                   </div>
               ) : (
                   <div className="placeholder-text">
                       Hover over the text to see the grammatical structure.
                   </div>
               )}
           </div>
       </div>
    </div>
  )
}

export default App
