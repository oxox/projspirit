J(function($,p,pub){
    pub.id="mail";

    p.V = {
        $d:$('#popPublishList'),
        show:function(files){
            this.$d.modal('show');
            var html = [],
                domPFT = document.getElementById('publishFileTxt'),
                len = files.length;
            for (var i = len - 1; i >= 0; i--) {
                html.push(files[i].publishPath);
            };
            domPFT.innerHTML = html.join('\r\n').replace(/\\/gi,'/');
            domPFT.select();
        },
        _onLoad:function(){
            this.$d.modal({
                backdrop:'static',
                show:false
            }).on("hide",function(){
                p.V.reset();
            });

            $('#btnUpdPublishList').on('click',function(e){
                p.C.preparePublish();
            });

        },
        reset:function(){
            document.getElementById('publishFileTxt').innerHTML="";
        }
    };

    p.C = {
        _onLoad:function(){
            $('#ipt_publishPrefix').on('change',function(e){
                p.C.processPaths();
                p.V.show(p.C.files);
            });
        },
        preparePublish:function(){
            var items = J.ftpUpload.getUploadedFiles();
            if (items.length===0) {
                J.alert.show('没有任何待提单文件！');
                return;
            };

            this.files = items;
            //获取workspace
            var wsObj = J.home.getWorkspaceByFilePath(items[0].path);
            this.workspace = wsObj = wsObj || {'rootPath':'','remotePath':''};
            document.getElementById('ipt_publishPrefix').value = wsObj.remotePath;
            //处理成发布地址
            this.processPaths();
            p.V.show(this.files);
        },
        processPaths:function(){
            var remotePathPrefix = document.getElementById('ipt_publishPrefix').value,
                rootPath = this.workspace.rootPath;

            var len = this.files.length;
            for (var i = len - 1; i >= 0; i--) {
                this.files[i].publishPath = remotePathPrefix+this.files[i].path.replace(rootPath,'');
            };

        }
    };

});