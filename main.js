enchant();

window.onload = function(){
	core = new Game(320, 320);
	core.preload("map0.png");
	core.fps = 15;
	Scene = core.rootScene;
	
	core.onload = function(){
		//背景の生成---------------------------------------------
		var bg = new Sprite(320, 320);
		var maptip = core.assets["map0.png"];
		var image = new Surface(320, 320);
		for(var j = 0; j <= 320; j += 16){
			for(var i = 0; i <= 320; i += 16){
				image.draw(maptip, 32, 0, 16, 16, i, j, 16, 16);
			}
		}
		bg.image = image;
		Scene.addChild(bg);
		//------------------------------------------------------
		//自機の作成--------------------------------------------
		var mine = new todo(todo, todo);
		//------------------------------------------------------
		//敵の機体----------------------------------------------
		var wave = new Array();//波のように動く敵
		
	}
	core.start();		//ゲーム開始
};
