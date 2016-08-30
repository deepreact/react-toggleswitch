########################
React Switch, No Jquery
Author - "Deep Prakash"
########################

# React Toggle Switch

> A full customizable Toggle switch

## Install

```
npm install react-toggleswitch --save
```

## Usage

```js
var Switch = require("react-toggleswitch");

React.render(<Switch />, document.getElementById("myApp"));
```

### Options

1. onValue="Trip" // Display value for ON state
2. offValue="Date" // Display value for OFF state
3. width="140" // Width of the switch
4. onChange={this.toggle} // Function for handling
						  // toggle:function(val){
								if(val == "ON"){
								/*
									Do something you need to do if switch is on
								*/	
								}
								if(val == "OFF"){
								/*
									Do something you need to do if switch is off
								*/	
							}
						},
5. background="#16a085" // Set switch background color
6. toggleColor="#34495e" // Set switch toggle button color

```