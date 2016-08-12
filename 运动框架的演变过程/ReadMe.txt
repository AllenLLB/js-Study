	运动框架的设计思路
		--运动框架的实现思路运动，其实就是在一段时间内改变left、right、width、height、opactiy的值，到达目的地之后停止。

	运动框架的发展的几个阶段：
		--运动startMove(element)
			--匀速运动startMove(element,iTarget)
			--缓冲运动startMove(element,iTarget)
			--多物体运动startMove(element,iTarget)
			--任意值运动startMove(element,attr,iTarget)
			--链式运动startMove(element,attr,iTarget,func)
			--同时运动(多值同时运动)startMove(element,json,func)