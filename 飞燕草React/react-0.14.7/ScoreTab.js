var ListItem=React.createClass({
   render:function(){
       var styleTd = {border: '1px solid #bfc3c9', width: '100px', height: '30px'};
       return (<tr>
           <td style={styleTd}>{this.props.index + 1}</td>
           <td style={styleTd}>{this.props.item.name}</td>
           <td style={styleTd}>{this.props.item.gender}</td>
           <td style={styleTd}>{this.props.item.age}</td>
           <td style={styleTd}>{this.props.item.job}</td>
           <td style={styleTd}>
               <button data-index={this.props.index} onClick={this.props.appearModify}>修改</button>
               <button data-index={this.props.index} onClick={this.props.del}>删除</button>
           </td>
       </tr>)
   }
});
var List = React.createClass({
    getInitialState: function () {
        return {
            genders: ['all', '男', '女']
        }
    },
    del: function (e) {
        var index = e.target.getAttribute('data-index');
        this.props.del(index);
    },
    appearModify: function (e) {
        var index = e.target.getAttribute('data-index');
        this.props.appearModify(index);
    },
    render: function () {
        console.log(this.props.nameFilter)
        var _this = this;
        var styleTab = {
            borderCollapse: 'collapse',
            textAlign: 'center',
            position: 'absolute',
            left: '50%',
            top: '18%',
            marginLeft: '-250px',
            marginRight: '-100px'
        };
        var styleTd = {border: '1px solid #bfc3c9', width: '100px', height: '30px'};
        var _this = this;
        return <table style={styleTab}>
            <tbody>
            <tr>
                <td style={styleTd} className="userId">用户编号</td>
                <td style={styleTd}>用户名</td>
                <td style={styleTd}>性别</td>
                <td style={styleTd}>年龄</td>
                <td style={styleTd}>职业</td>
                <td style={styleTd}>操作</td>
            </tr>
            {this.props.data.map(function (item, index) {

                if(_this.props.nameFilter==''){
                    if (item.gender == _this.state.genders[_this.props.genderFilter]) {
                        return (
                           <ListItem item={item} index={index} appearModify={_this.appearModify} del={_this.del}></ListItem>
                        )


                    }
                    if (_this.state.genders[_this.props.genderFilter] == 'all') {
                        return (
                            <ListItem item={item} index={index} appearModify={_this.appearModify} del={_this.del}></ListItem>
                        )

                    }
                }
                if(_this.props.nameFilter!==''){
                     if(_this.state.genders[_this.props.genderFilter] == 'all'&&item.name.indexOf(_this.props.nameFilter)>-1){
                         return (
                             <ListItem item={item} index={index} appearModify={_this.appearModify} del={_this.del}></ListItem>
                         )
                     }
                    if (_this.state.genders[_this.props.genderFilter] ==item.gender&&item.name.indexOf(_this.props.nameFilter)>-1) {
                        return (
                            <ListItem item={item} index={index} appearModify={_this.appearModify} del={_this.del}></ListItem>
                        )

                    }

                }



            })}
            </tbody>
        </table>
    }
});
var Action = React.createClass({
    getInitialState: function () {
        return {
            data: [{name: '小明', gender: '男', age: '10', job: '学生'},
                {name: '小孙', gender: '男', age: '25', job: '数学老师'},
                {name: '小王', gender: '女', age: '28', job: '英语老师'},
                {name: '小王', gender: '男', age: '30', job: '英语老师'}],
            index: '',
            genderFilter: '0',
            nameFilter: '',
        }
    },
    genderFilter: function (e) {
        this.setState({genderFilter: e.target.value})

    },
    del: function (index) {
        var currentData = [];
        for (var i in this.state.data) {
            if (i != index) {
                currentData.push(this.state.data[i])
            }
        }
        this.setState({data: currentData});
    },
    nameFilter: function (e) {
        var currentnameFilter= e.target.value;
        this.setState({nameFilter:currentnameFilter});

    },
    appearModify: function (index) {
        this.refs.modalModify.className = 'modal down ';
        this.refs.modify.style.display = "block";
        this.refs.modify1.value = this.state.data[index].name;
        this.refs.modify4.value = this.state.data[index].gender;
        this.refs.modify2.value = this.state.data[index].age;
        this.refs.modify3.value = this.state.data[index].job;
        this.setState({index: index});

    },
    modify: function () {
        var index = this.state.index;
        console.log('下标'+index);
        var currentItem = {};
        var currentData = this.state.data;
        currentItem.name = this.refs.modify1.value;
        currentItem.gender = this.refs.modify4.value;
        currentItem.age = this.refs.modify2.value;
        currentItem.job = this.refs.modify3.value;
        for (var i in currentData) {
            if (i == index) {
                currentData[i] = currentItem;
            }

        }
        console.log('DATA数组'+this.state.data);
        this.setState({data: currentData});
        this.refs.modalModify.className = 'modal up';
        setTimeout(function () {
            document.getElementsByClassName('modal-backdrop')[1].style.display = 'none';
        }, 350);
    },
    add: function () {
        if (this.refs.add1.value && this.refs.add2.value && this.refs.add3.value) {
            var item = {};
            item.name = this.refs.add1.value;
            item.gender = this.refs.add4.value;
            item.age = this.refs.add2.value;
            item.job = this.refs.add3.value;
            var nextdata = this.state.data.concat([item]);
            this.setState({data: nextdata})
            this.refs.modalAdd.className = 'modal up';
            setTimeout(function () {
                document.getElementsByClassName('modal-backdrop')[0].style.display = 'none';
            }, 350);
           this.refs.add1.value='';
           this.refs.add4.value='';
           this.refs.add2.value='';
            this.refs.add3.value='';
        }
    },
    appearAdd: function () {
        this.refs.modalAdd.className = 'modal down ';
        this.refs.add.style.display = "block";

    },
    close: function () {
        this.refs.modalModify.className = 'modal up';
        setTimeout(function () {
            document.getElementsByClassName('modal-backdrop')[1].style.display = 'none';
        }, 350);
    },
    closeAdd: function () {
        this.refs.modalAdd.className = 'modal up';
        setTimeout(function () {
            document.getElementsByClassName('modal-backdrop')[0].style.display = 'none';
        }, 350);

    },
    render: function () {
     
        return (<div>
            <List data={this.state.data} del={this.del} appearModify={this.appearModify}
                  genderFilter={this.state.genderFilter} nameFilter={this.state.nameFilter}></List>
            {/*添加用户按钮*/}
            <button className="add-button" onClick={this.appearAdd}>添加新用户</button>
            {/*性别筛选器*/}
            <select className="select" onChange={this.genderFilter} ref="genderFilter">
                <option value="0">性别查询(全部)</option>
                <option value="1">男</option>
                <option value="2">女</option>
            </select>
            {/*姓名筛选器*/}
            <input  placeholder="输入要查询的姓名" onChange={this.nameFilter} className="nameFilter"/>
            {/*添加用户的页面*/}
            <div className="modal-backdrop" ref="add">
                <div className="modal down" ref="modalAdd">
                    <p className="modal-title">添加新用户</p>
                    <div className="modal-body">
                        <label for="add1">注册用户名:</label><br/><br/><input id="add1" placeholder="用户名" ref='add1'></input>
                        <br/><br/>
                        <label for="add4">注册性别:</label><br/><br/><input id="add4" placeholder="性别" ref='add4'></input>
                        <br/><br/>
                        <label for="add2">注册年龄:</label><br/><br/><input id="add2" placeholder="年龄" ref='add2'></input>
                        <br/><br/>
                        <label for="add3">注册职业:</label><br/><br/><input id="add3" placeholder="职业" ref='add3'></input>
                        <br/><br/>
                        <button onClick={this.add}>提 交</button>
                        <button onClick={this.closeAdd}>取 消</button>
                    </div>
                </div>
            </div>
            {/*修改用户的页面*/}
            <div className="modal-backdrop" ref="modify">
                <div className="modal down" ref="modalModify">
                    <p className="modal-title">修改用户信息</p>
                    <div className="modal-body">
                        <label for="modify1">更新用户名:</label><br/><br/><input id="modify1" placeholder="用户名"
                                                                            ref='modify1'></input>
                        <br/><br/>
                        <label for="modify4">更新用户性别:</label><br/><br/><input id="modify4" placeholder="性别"
                                                                             ref='modify4'></input>
                        <br/><br/>
                        <label for="modify2">更新年龄:</label><br/><br/><input placeholder="年龄" id="modify2"
                                                                           ref='modify2'></input>
                        <br/><br/>
                        <label for="modify3">更新职业:</label><br/><br/><input placeholder="职业" id="modify3"
                                                                           ref='modify3'></input>
                        <br/><br/>
                        <button onClick={this.modify}>提 交</button>
                        &nbsp;
                        <button onClick={this.close}>取 消</button>
                    </div>
                </div>

            </div>

        </div>    )

    }
});
React.render(<Action></Action>, document.body);