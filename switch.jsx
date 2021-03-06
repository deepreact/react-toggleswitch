var React = require('react');


var Switch = React.createClass({
	getIntialState:function(){
		return {
			filterSwitch: {},
			switchDivOn: {},
			switchBtn: {},
			switchDivOff: {},
			switchBtnBars: {},
			textPos:{},
			onState:'',
			offState:'',
			stateValue:'',
		};
	},

	getDefaultProps:function(){
		return {
			background:"#16a085",
			width:140,
			toggleColor:"#34495e",
			onValue:"ON",
			offValue:"OFF",
			onChange:"",
		}
	},

	componentWillMount: function(){
		this.setState({
			filterSwitch:{
				display:"inline-block",
				background:this.props.background,
				width:this.props.width,
				marginLeft:10,
				borderRadius:4,
				color:"#ecf0f1",
				fontFamily:"verdana",
				paddingTop:3,
				paddingBottom:3,
				paddingLeft:2,
				paddingRight:2,
				textAlign:"center",
				fontSize:16,
			},
			switchDivOn:{
				display:"inline-block",
				width:"49%",
				height:30,
				color:"#ecf0f1",
				paddingTop:2,
				cursor:"pointer",
				transition:"width 250ms",
				WebkitTransition:"width 250ms",
			},
			switchDivOff:{
				display:"inline-block",
				width:0,
				height:0,
				fontSize:0,
				color:"transparent",
				paddingTop:2,
				transition:"width 250ms",
				WebkitTransition:"width 250ms",
			},
			switchBtn:{
				display:"inline-block",
				background :this.props.toggleColor,
				width:"50%",
				height:30,
				paddingTop:2,
				borderRadius:"0px 4px 4px 0px",
			},
			switchBtnBars:{
				display:"inline-block"
			},
			textPos:{
				position:"relative",
				top:1
			},
			onState:this.props.onValue.length != 0 ? this.props.onValue : "ON",
			offState:this.props.offValue.length != 0 ? this.props.offValue : "OFF",
			stateValue:"ON"
		});
	},

	// Handling Switch
	switch:function(status){

		if(status == "on"){
			this.setState({switchDivOff:{
					display:"inline-block",
					width:"49%",
					height:30,
					color:"#ecf0f1",
					paddingTop:2,
					cursor:"pointer",
					transition:"width 250ms",
					WebkitTransition:"width 250ms",
				},
				switchDivOn:{
					display:"inline-block",
					width:0,
					height:0,
					fontSize:0,
					color:"transparent",
					paddingTop:2,
					transition:"width 250ms",
					WebkitTransition:"width 250ms",
				},
				switchBtn:{
					display:"inline-block",
					background :"#34495e",
					width:"50%",
					height:30,
					paddingTop:2,
					borderRadius:"4px 0px 0px 4px",
				},
				stateValue:"OFF",
			});
		}
		if(status == "off"){
			this.setState({switchDivOff:{
					display:"inline-block",
					width:0,
					height:0,
					fontSize:0,
					color:"transparent",
					paddingTop:2,
					transition:"width 250ms",
					WebkitTransition:"width 250ms",
				},
				switchDivOn:{
					display:"inline-block",
					width:"49%",
					height:30,
					color:"#ecf0f1",
					cursor:"pointer",
					paddingTop:2,
					transition:"width 250ms",
					WebkitTransition:"width 250ms",
				},
				switchBtn:{
					display:"inline-block",
					background :"#34495e",
					width:"50%",
					height:30,
					paddingTop:2,
					borderRadius:"0px 4px 4px 0px",
				},
				stateValue:"ON",
			});
		}

		// Returning Onchange Value
		if(typeof this.props.onChange === 'function'){
				this.props.onChange(this.state.stateValue);
		}
	},

	// Render View
	render:function(){
		const filterSwitch = (
			<div style={this.state.filterSwitch}>
				<div style={this.state.switchDivOn} onClick={this.switch.bind(this, "on")}>
					<div style={this.state.textPos}>{this.state.onState}</div>
				</div>
				<div style={this.state.switchBtn}>
					<div style={this.state.switchBtnBars}>|</div>
					<div style={this.state.switchBtnBars}>|</div>
					<div style={this.state.switchBtnBars}>|</div>
				</div>
				<div style={this.state.switchDivOff} onClick={this.switch.bind(this, "off")}>
					<div style={this.state.textPos}>{this.state.offState}</div>
				</div>
			</div>
		);

		return(
			<div>
				{filterSwitch}
			</div>
		);
	}
});

module.exports = Switch;