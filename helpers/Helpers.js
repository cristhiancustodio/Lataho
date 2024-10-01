const Helpers = {
    block: function (name) {
        const blocks = this._blocks || (this._blocks = {});
        const content = blocks[name] || [];
        return content.join('\n');
    },
    contentFor: function (name, options) {
        const blocks = this._blocks || (this._blocks = {});
        blocks[name] = blocks[name] || [];
        blocks[name].push(options.fn(this));
    },
    condIf : function(valor1, valor2){		
        if(valor1 == valor2){
            return true;
        }
        return false;
    },
    json: function(context){
        return JSON.stringify(context, null, 2); // Formato bonito
    }
}

export default Helpers