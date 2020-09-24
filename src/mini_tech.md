1. git stash实践:
	可以在同一个分支上使用，也可以在不同分支，如果是同一个分支，确定不在同一个地方做修改，否则git stash pop后
	会产生冲突，修改后可以push到远端，不会push stash的内容；
	如果不在同一个分支就行修改，可以先暂存当前内容，切换分支修改，然后提交；切换回开发分支后，可以采用cherry-pick commitid,将修改内容同步到当前分支，进行自动commit，
	但是还是要进行push才能到远端；push后可以stash pop 继续进行开发；
	
2. import深入理解，为什么会加载不出页面，弄清楚相互引用出现问题的原因:
	并不是相互引用出现的问题，只能说相互引用会有一个先后顺序，这里是因为home组件的顺序最靠前，
	也就是需要最新编译，但是hone组件的import包含有api，也就是axios的引用，导致home不能完成编译，
	是undefined,其实home依然正常使用，因为home是实时的，不会一直是undefined,只是运行才会实时，比如在函数中调用时，
	就已经实时了，但是router这里是直接给对象赋值了，所以没有实时更新到,直接赋值undefined,
	所以不能出现，可以才用await impot()的等其他方式引入，就不收顺序影响；

3. 弄清楚下载添加download后的诡异现象:
	部分浏览器会发生这种现象，查询后可能是高版本chrome对字节流进行了限制，
	建议添加content-length后验证，看是否能解决

4. 下载超链接不会重新刷新路由的原因:
	vue history模式下，服务器配置，当匹配不到资源的时候，
	才会进行返回默认的html,所以如果下载有对应的资源就不会跳转到404

5. react项目class背景图的引入方式:
	（1）background: ~"url('@/assets/wangan.png')";
	（2）以相对路径引入，但是不方便代码移动；

6. umi或antd pro中 app.ts以及global.ts文件探索：

7. react的事件并没有直接绑定到元素上，所以阻止时间冒泡不能成功，但是阻止原生事件冒泡却可以阻止react事件的发生，当点击元素时，会先触发原生事件，然后触发react的合成事件，这样会导致一些问题出现，可以有两种处理方式；
	```
		<!-- 1、不将合成事件与原生事件混用 -->
		componentDidMount() {
			document.body.addEventListener('click', e => { 
				this.setState({ 
				active: false, 
				}); 
			}); 
			document.querySelector('.code').addEventListener('click', e => { 
				e.stopPropagation();
			}) 
		} 
		componentWillUnmount() { 
			document.body.removeEventListener('click'); 
			document.querySelector('.code').removeEventListener('click'); 
		} 
	
		<!-- 2、通过e.target判断避免 -->

		componentDidMount() {
			document.body.addEventListener('click', e => { 
				if (e.target && e.target.matches('div.code')) { 
					return; 
				} 
				this.setState({ 
					active: false, 
				}); 
			}); 
		}
	
	```
	
