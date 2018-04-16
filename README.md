# vue-chartsjs-es6 [![Package Quality](http://npm.packagequality.com/shield/vue-chartsjs-es6.svg)](http://packagequality.com/#?package=vue-chartsjs-es6)
Based on **Vue.js**, wrapper for **ChartJs**.    
- [Vue js](https://vuejs.org/)  
- [Chart js](http://www.chartjs.org/)  
- Works well with [Laravel Mix](https://github.com/JeffreyWay/laravel-mix)  


# Render a Chart Easily  
- Single Line
![](https://raw.githubusercontent.com/hchstera/vue-charts/master/pictures/easy_use.png)  
- Multiple Bar
![](https://raw.githubusercontent.com/hchstera/vue-charts/master/pictures/multiple.png)  
- Multiple Mix Chart
![](https://raw.githubusercontent.com/hchstera/vue-charts/master/pictures/mix.png)  

# Features  
- Single Chart   
- Multiple Chart   
- [Multiple Mix Chart](http://vue-charts.hchspersonal.tk/mixcharts)    
- [Override Datasets](http://vue-charts.hchspersonal.tk/line#datasets)    
- [Override Option](http://vue-charts.hchspersonal.tk/line#option)    
- [Pass Json data](http://vue-charts.hchspersonal.tk/passjson)    
- [DataBinding & Auto Render](http://vue-charts.hchspersonal.tk/databinding)    


# Document and Demo
[Home page](http://vue-charts.hchspersonal.tk/)    
[Line](http://vue-charts.hchspersonal.tk/line)   
[Bar](http://vue-charts.hchspersonal.tk/bar)   
[Horizontal Bar](http://vue-charts.hchspersonal.tk/bar#h-default)   
[Radar](http://vue-charts.hchspersonal.tk/radar)   
[Polar Area](http://vue-charts.hchspersonal.tk/polar-area)   
[Pie](http://vue-charts.hchspersonal.tk/pie)   
[Doughnut](http://vue-charts.hchspersonal.tk/doughnut)   
[DataBinding](http://vue-charts.hchspersonal.tk/databinding)  
[Jsondata](http://vue-charts.hchspersonal.tk/passjson)      

# NPM Package  
[NPM Package](https://www.npmjs.com/package/vue-chartsjs-es6)

# Install

	npm install vue-chartsjs-es6   

or  

	yarn add vue-chartsjs-es6 


# Notice
- vue-charts base on Vue 2  
- vue-charts base on Chart.js 2  

# How to use
Laravel Mix


open your app.js

```javascript
    /**
     * First we will load all of this project's JavaScript dependencies which
     * include Vue and Vue Resource. This gives a great starting point for
     * building robust, powerful web applications using Vue and Laravel.
     */
     
    // vue-charts package
    import Vue from 'vue'
    import VueCharts from 'vue-chartsjs-es6'
    import Example from './components/Example.vue'
    Vue.use(VueCharts)


    /**
     * Next, we will create a fresh Vue application instance and attach it to
     * the page. Then, you may begin adding components to this application
     * or customize the JavaScript scaffolding to fit your unique needs.
     */

    Vue.component('example', Example)

    const app = new Vue({
        el: '#app'
    })
```

in your view
```html
	<body>
	  <div class="flex-center position-ref full-height">
		  <div id="app" class="content">
			  <!--line chart component-->
			  <chartjs-line></chartjs-line>
			  <div class="title m-b-md">
				  Laravel
			  </div>

			  <div class="links">
				  <a href="https://laravel.com/docs">Documentation</a>
				  <a href="https://laracasts.com">Laracasts</a>
				  <a href="https://laravel-news.com">News</a>
				  <a href="https://forge.laravel.com">Forge</a>
				  <a href="https://github.com/laravel/laravel">GitHub</a>
			  </div>
		  </div>
	  </div>
  	</body>
  	<!--set script src-->
  	<script src="{{mix('js/app.js')}}"></script>
```     


![](https://raw.githubusercontent.com/hchstera/vue-charts/master/pictures/welcome_demo.PNG)     


# Thanks
[@hchstera](https://github.com/hchstera) - Original component, for laravel elixir

[@yeknava](https://github.com/yeknava) - Horizontal Bar
