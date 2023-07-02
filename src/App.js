import React, { useState, useEffect } from 'react';
import Explorer from './data/FolderData';
import Folder from './components/Folder';
import useTraverseTree from './hooks/useTraverseTree';
import './style.css';

export default function App() {
  const [explorerData, setExplorerData] = useState(Explorer);

  const { insertNode } = useTraverseTree();

  const handleInsertNode = (folderId, item, isFolder) => {
    const finalTree = insertNode(explorerData, folderId, item, isFolder);
    setExplorerData(finalTree);
  };

  return (
    <div className="app">
      <Folder explorer={explorerData} handleInsertNode={handleInsertNode} />
    </div>
  );
}
