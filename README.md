########################
Author - "Deep Prakash"
########################

# React Toggle Switch

> A full customizable Toggle switch. No Jquery.

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

1. onValue
2. offValue 
3. width
4. onChange
5. background
6. toggleColor


### Descriptions

1. onValue - Display value for ON state.

		```
		<Switch onValue = "ON"/>
		```

2. offValue - Display value for OFF state.

		```
		<Switch offValue = "OFF"/>
		```

3. width - Width of the switch.

		```
		<Switch width = "140"/>
		```

4. onChange - Function for handling switch toggle.

		```
		<Switch onChange = {this.toggle} />
		```
	
		```
		toggle:function(val){
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
		}
		```

5. background - Set switch background color.

		```
		<Switch background = "#16a085"/>
		```

6. toggleColor - Set switch toggle button color.

		```
		<Switch toggleColor = "#34495e" />
		```
