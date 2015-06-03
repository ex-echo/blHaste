
define(['character'], function(Character) {
    
    var Mob = Character.extend({
        init: function(id, kind) {
            this._super(id, kind);
        
            this.aggroRange = 0;
            this.isAggressive = true;
        }
    });
    
    return Mob;
});
