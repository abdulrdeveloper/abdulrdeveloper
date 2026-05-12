function security() {
    const handleContextMenu = (e) => {
        e.preventDefault();
    };

    const handleKeyDown = (e) => {
        if (e.key === "F12" || e.keyCode === 123) {
            e.preventDefault();
        }
        
        if (
            e.ctrlKey && 
            e.shiftKey && 
            ["I", "i", "J", "j", "C", "c"].includes(e.key)
        ) {
            e.preventDefault();
        }

        if (e.ctrlKey && ["U", "u", "S", "s", "P", "p"].includes(e.key)) {
            e.preventDefault();
        }
    };

    const handleSelectStart = (e) => e.preventDefault();
    const handleCopy = (e) => {
        e.preventDefault();
        if (e.clipboardData) {
            e.clipboardData.setData("text/plain", "This content is protected.");
        }
    };
    const handleDragStart = (e) => e.preventDefault();

    const blockDevTools = setInterval(() => {
        Function("debugger")();
    }, 50);

    document.addEventListener("contextmenu", handleContextMenu);
    document.addEventListener("keydown", handleKeyDown);
    document.addEventListener("selectstart", handleSelectStart);
    document.addEventListener("copy", handleCopy);
    document.addEventListener("dragstart", handleDragStart);

    return () => {
        document.removeEventListener("contextmenu", handleContextMenu);
        document.removeEventListener("keydown", handleKeyDown);
        document.removeEventListener("selectstart", handleSelectStart);
        document.removeEventListener("copy", handleCopy);
        document.removeEventListener("dragstart", handleDragStart);
        clearInterval(blockDevTools);
    };
}

export default security;