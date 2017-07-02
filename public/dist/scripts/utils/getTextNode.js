(function () {
    /**
     * @param {HTMLElement} node
     * @return {Node}
     */
    function getTextNode(node) {
        var children = node.childNodes;
        var i = 0;
        var l = children.length;

        for (; i !== l; i += 1) {
            if (children[i].nodeName === '#text') {
                return children[i];
            }
        }

        var result = document.createTextNode('');
        node.appendChild(result);
        return result;
    }

    TODO_APP.utils.getTextNode = getTextNode;
}());