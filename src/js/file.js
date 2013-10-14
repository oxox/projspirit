J(function($,p,pub){
	pub.id = "file";
	pub.cache={};
	var cprocess = require('child_process');
	p.V={
		$curFile:null,
		render:function(fileObj){
			if (this.$curFile) {
				this.$curFile.removeClass('active');
			};
			this.$curFile = $('#'+fileObj.id).addClass('active');
			J.session[pub.id+'.curFileId'] = fileObj.id;
			J.home.setProjectTip(fileObj.path);
		}
	};
	p.C = {
		_init:function(){

			J.base.$win.on(J.dataProject.id+'OnGetFiles',function(e,d){
				if ( (!d.isOk) || d.cntFile===0 ) {
					return;
				};
				p.C.cacheFiles(d.files,d.cntFile);
				p.C.assertCurrentFile();
			}).on(J.home.id+'OnSelectProject',function(e,d){
				p.C.assertCurrentFile();
			});

			$("#projectPanelList").on('click','li',function(e){
				var id=this.getAttribute('data-id'),
					fileObj = J.file.cache[id];
				p.V.render(fileObj);
				J.ftpUpload.showUploadPanel();
				return false;
			});

		},//init
		openFile:function(filePath){
			//系统默认打开方式
			J.base.gui.Shell.openItem(filePath);
		},//openFile
		editFile:function(filePath){
			//获取配置的程序
			var exe = J.dataSetting.getExeByFile(filePath);
			if ( (!exe) || (exe.length==0) ) {
				if (!window.confirm(filePath+'\r\n文件编辑器没有设置哦亲！调用系统默认程序打开文件？')) {
					return;
				};
				this.openFile(filePath);
				return;
			};
			//reference:http://nodejs.org/api/child_process.html#child_process_child_process_execfile_file_args_options_callback
			var child = cprocess.execFile(exe,[filePath],function(err,stdout,stderr){
				//console.info('stdout',stdout);
				//console.info('stderr',stderr);
				if (err!==null) {
					J.alert.show(err.toString());
				};
			});
			//console.info('child',child);
		},//editFile
		assertCurrentFile:function(){
			var fid = J.session[pub.id+'.curFileId'];
			if (!fid) {
				//J.home.hideExtPanel();
				return;
			};
			var $f = $('#'+fid);
			if ($f.length===0) {
				//J.home.hideExtPanel();
				return;
			};
			$f.trigger('click');

		},
		cacheFiles:function(files,len){
			for (var i = len - 1; i >= 0; i--) {
				pub.cache[files[i].id]=files[i];
			};
		}
	};

	p.contextMenu = {
		_init:function(){
			// Create an empty menu
			var menu = new J.base.gui.Menu();
			// Add some items
			menu.append(new J.base.gui.MenuItem({ label: '编辑' ,click:function(){p.contextMenu.onClick(1);}}));
			menu.append(new J.base.gui.MenuItem({ label: '打开' ,click:function(){p.contextMenu.onClick(2);}}));
			menu.append(new J.base.gui.MenuItem({ type: 'separator' }));
			menu.append(new J.base.gui.MenuItem({ label: '打开所在文件夹' ,click:function(){p.contextMenu.onClick(3);}}));

			this.menu = menu;

			$("#projectPanelList").on('contextmenu','li',function(e){
				var id=this.getAttribute('data-id'),
					fileObj = J.file.cache[id];
				p.contextMenu.show(e.clientX+5,e.clientY+5,fileObj);
				return false;
			});

		},
		onClick:function(actId){
			switch(actId){
				case 1:
					p.C.openFile(this.menu.rel.path);
				break;
				case 2:
					p.C.editFile(this.menu.rel.path);
				break;
				case 3:
					J.base.openFileInFolder(this.menu.rel.path);
				break;
			};//switch
		},
		show:function(x,y,rel){
			this.menu.rel = rel;
			// Popup as context menu
			this.menu.popup(x, y);
		}
	};

});