J(function($,p,pub){
	pub.id = "file";
	pub.cache={};
	p.C = {
		_init:function(){

			J.base.$win.on(J.dataProject.id+'OnGetFiles',function(e,d){
				if ( (!d.isOk) || d.cntFile===0 ) {
					return;
				};
				p.C.cacheFiles(d.files,d.cntFile);
			});

			$("#projectPanelList").on('click','li',function(e){
				var id=this.getAttribute('data-id'),
					fileObj = J.file.cache[id];

				
				console.log(fileObj);
				return false;
			});
		},//init
		cacheFiles:function(files,len){
			for (var i = len - 1; i >= 0; i--) {
				pub.cache[files[i].id]=files[i];
			};
		}
	};

});