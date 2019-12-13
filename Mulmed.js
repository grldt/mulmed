(function (cjs, an) {

var p; // shortcut to reference prototypes
var lib={};var ss={};var img={};
lib.ssMetadata = [
		{name:"Mulmed_atlas_", frames: [[0,0,600,800],[1204,0,600,800],[0,802,600,800],[602,802,600,800],[602,0,600,800]]}
];


// symbols:



(lib.alpaca_red = function() {
	this.spriteSheet = ss["Mulmed_atlas_"];
	this.gotoAndStop(0);
}).prototype = p = new cjs.Sprite();



(lib.dolphin_red = function() {
	this.spriteSheet = ss["Mulmed_atlas_"];
	this.gotoAndStop(1);
}).prototype = p = new cjs.Sprite();



(lib.lion_red = function() {
	this.spriteSheet = ss["Mulmed_atlas_"];
	this.gotoAndStop(2);
}).prototype = p = new cjs.Sprite();



(lib.octopus_red = function() {
	this.spriteSheet = ss["Mulmed_atlas_"];
	this.gotoAndStop(3);
}).prototype = p = new cjs.Sprite();



(lib.owl_red = function() {
	this.spriteSheet = ss["Mulmed_atlas_"];
	this.gotoAndStop(4);
}).prototype = p = new cjs.Sprite();



(lib.an_Video = function(options) {
	this._element = new $.an.Video(options);
	this._el = this._element.create();
	var $this = this;
	this.addEventListener('added', function() {
		$this._lastAddedFrame = $this.parent.currentFrame;
		$this._element.attach($('#dom_overlay_container'));
	});
}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,400,300);

p._tick = _tick;
p._handleDrawEnd = _handleDrawEnd;
p._updateVisibility = _updateVisibility;



(lib.Tween26 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.instance = new lib.dolphin_red();
	this.instance.parent = this;
	this.instance.setTransform(-90,-120,0.3,0.3);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-90,-120,180,240);


(lib.Tween25 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.instance = new lib.dolphin_red();
	this.instance.parent = this;
	this.instance.setTransform(-90,-120,0.3,0.3);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-90,-120,180,240);


(lib.Tween22 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.instance = new lib.octopus_red();
	this.instance.parent = this;
	this.instance.setTransform(-90,-120,0.3,0.3);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-90,-120,180,240);


(lib.Tween21 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.instance = new lib.octopus_red();
	this.instance.parent = this;
	this.instance.setTransform(-90,-120,0.3,0.3);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-90,-120,180,240);


(lib.Tween20 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.instance = new lib.alpaca_red();
	this.instance.parent = this;
	this.instance.setTransform(-90,-120,0.3,0.3);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-90,-120,180,240);


(lib.Tween19 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.instance = new lib.alpaca_red();
	this.instance.parent = this;
	this.instance.setTransform(-90,-120,0.3,0.3);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-90,-120,180,240);


(lib.Tween18 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#0099CC").s().p("AgIAJQgDgDgBgGQABgFADgEQAEgDAEAAQAFAAAEADQAEAEAAAFQAAAGgEADQgEAEgFAAQgEAAgEgEg");
	this.shape.setTransform(-238.7,122.7);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#0099CC").s().p("ABCA2IAAg7QgBgMgGgHQgGgHgNAAQgIAAgHAFQgHAEgDAHQgDAIgBAIIAAA1IgVAAIAAg7QgBgMgGgHQgHgHgLAAQgKAAgHAFQgGAEgEAHQgDAIAAAIIAAA1IgXAAIAAhqIAXAAIAAAVQAFgLAKgFQAKgGAOABQANAAAKAGQAJAHADAMQAFgNALgGQAKgHAPABQASAAALAKQAJALABAUIAABBg");
	this.shape_1.setTransform(-251.1,118.4);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#0099CC").s().p("AgnArQgJgLgBgTIAAhCIAXAAIAAA7QAAAMAHAHQAGAHAMAAQAIAAAGgFQAHgEADgHQAEgIAAgIIAAg1IAXAAIAABqIgXAAIAAgVQgGALgJAFQgKAFgMABQgSgBgLgKg");
	this.shape_2.setTransform(-268.4,118.5);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#0099CC").s().p("AgdA2IAAhqIAXAAIAAAVQAGgLAIgFQAJgGANABIAAAVQgLAAgIADQgHAEgFAHQgEAHgBAJIAAA3g");
	this.shape_3.setTransform(-278,118.5);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#0099CC").s().p("AgcAvQgNgHgGgMQgIgMABgQQgBgPAIgMQAGgNANgGQAMgHAQAAQARAAAMAHQANAGAGANQAIAMgBAPQABAQgIAMQgGAMgNAHQgMAGgRABQgQgBgMgGgAgQgdQgHAEgEAIQgFAHAAAKQABAQAIAJQAJAKAOgBQAPABAJgKQAIgJABgQQgBgKgEgHQgEgIgHgEQgHgFgKAAQgIAAgIAFg");
	this.shape_4.setTransform(-288.9,118.5);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#0099CC").s().p("AgQBGQgJgFgHgKIAAATIgWAAIAAiUIAWAAIAAA9QAHgKAJgEQAJgFAMAAQAPAAAMAGQAKAHAHAMQAGAMAAAQQAAAQgGAMQgGAMgLAHQgMAGgPABQgMgBgJgEgAgQgJQgHAFgEAGQgEAIgBAKQABAQAIAJQAKAKANAAQAJAAAIgFQAHgEAEgIQAEgIABgKQgBgKgEgIQgEgGgHgFQgIgEgJAAQgJAAgHAEg");
	this.shape_5.setTransform(-301.4,116.4);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#0099CC").s().p("AgdAyQgIgFgFgHQgEgIgBgJQABgOAKgIQAKgJAUAAIAfAAIAAgDQAAgKgHgGQgGgFgMgBQgHABgIACQgIACgIAGIgJgQIAOgHIAOgFQAHgBAKAAQAUAAALAJQALAKAAASIABBFIgXAAIAAgNQgGAHgJAEQgJADgKAAQgMAAgIgEgAgUAJQgFADAAAIQAAAHAGAFQAFAEAKAAQALgBAJgFQAIgFABgJIAAgKIgcAAIgDAAQgJAAgFADg");
	this.shape_6.setTransform(-314.9,118.5);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#0099CC").s().p("AgLBKIAAiTIAWAAIAACTg");
	this.shape_7.setTransform(-323.3,116.4);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#0099CC").s().p("AgEA/QgHgDgEgHQgEgHAAgLIAAg2IgQAAIAAgRIAQAAIAAgdIAVAAIAAAdIAgAAIAAARIggAAIAAAyQABAIADADQADAEAFgBIAIgBIAIgDIAFARQgFAEgHACQgHACgHAAQgHAAgGgDg");
	this.shape_8.setTransform(321.9,84.4);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#0099CC").s().p("AgWAyQgLgDgIgIIAJgQQAEAEAGADIANAFIALABQAIAAAEgDQAFgCABgGQgBgHgGgDQgFgDgIgDIgQgFQgIgDgGgGQgFgGAAgLQAAgLAFgHQAFgHAKgDQAJgDAJAAQAKAAAKADQAJACAIAGIgJARQgGgFgIgCQgJgDgHAAQgGAAgEADQgFACAAAGQABAFAFAEQAGADAHACIARAGQAIADAGAGQAGAGAAALQAAALgGAHQgGAHgJAEQgJADgLAAQgLAAgMgEg");
	this.shape_9.setTransform(313,85.6);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#0099CC").s().p("AgZAvQgMgHgHgMQgHgMAAgQQAAgPAHgNQAHgLAMgIQAMgGAPAAQATAAALAHQAMAIAFAOQAEAOgBATIhPAAQACAMAJAHQAJAHAMAAQAIAAAIgDQAIgDAGgGIAMANQgIAIgLAFQgLAEgOABQgQAAgMgHgAAggHQgBgNgIgIQgIgHgNAAQgMAAgIAHQgIAIgCANIA8AAIAAAAg");
	this.shape_10.setTransform(302.5,85.6);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#0099CC").s().p("AgfBEQgLgHgGgMQgHgNAAgQQAAgQAHgLQAGgMALgHQAMgHAPAAQAMAAAJAFQAKAFAGAKIAAg9IAXAAIAACUIgXAAIAAgTQgGAKgJAFQgKAFgMAAQgPAAgMgHgAgQgJQgHAFgEAHQgFAIAAAKQAAAKAFAIQAEAIAHAEQAHAEAJAAQAKAAAHgEQAHgEAEgIQAFgIAAgKQAAgKgFgIQgEgHgHgFQgHgEgKAAQgJAAgHAEg");
	this.shape_11.setTransform(279,83.5);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#0099CC").s().p("AgLBLIAAhpIAWAAIAABpgAgJgzQgDgEAAgFQAAgHADgDQAEgEAFAAQAGAAADAEQAEADABAHQgBAFgEAEQgDAEgGAAQgFAAgEgEg");
	this.shape_12.setTransform(269.9,83.4);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#0099CC").s().p("ABCA2IAAg7QgBgMgGgHQgGgHgNAAQgIAAgHAFQgGAEgEAHQgDAIgBAIIAAA1IgVAAIAAg7QgBgMgGgHQgHgHgLAAQgKAAgHAFQgGAEgDAHQgEAIAAAIIAAA1IgXAAIAAhqIAXAAIAAAVQAFgLAKgFQAKgGAOABQANAAAKAGQAJAHADAMQAFgNALgGQAKgHAPABQASAAALAKQAJALABAUIAABBg");
	this.shape_13.setTransform(246.6,85.5);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#0099CC").s().p("AgLBLIAAhpIAWAAIAABpgAgJgzQgEgEABgFQgBgHAEgDQAEgEAFAAQAGAAAEAEQADADAAAHQAAAFgDAEQgEAEgGAAQgFAAgEgEg");
	this.shape_14.setTransform(233.1,83.4);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#0099CC").s().p("AAcA2IAAg7QgBgMgGgHQgGgHgNAAQgMAAgIAJQgHAHgCANIAAA4IgXAAIAAhqIAXAAIAAAVQAGgLAKgFQAKgGAMABQATAAALAKQAJALABAUIAABBg");
	this.shape_15.setTransform(223.8,85.5);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#0099CC").s().p("AgdAxQgIgDgFgIQgEgHgBgKQABgOAKgIQAKgJAUAAIAfAAIAAgDQAAgLgHgFQgGgGgMABQgHAAgIACQgIADgIAFIgJgQIAOgIIAOgDQAHgCAKAAQAUAAALAKQALAJAAASIABBFIgXAAIAAgNQgGAHgJADQgJAEgKAAQgMAAgIgFgAgUAJQgFADAAAIQAAAIAGADQAFAEAKABQALAAAJgGQAIgFABgKIAAgJIgcAAIgDAAQgJAAgFADg");
	this.shape_16.setTransform(210.9,85.6);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#0099CC").s().p("AgFA/QgGgDgEgHQgEgHAAgLIAAg2IgPAAIAAgRIAPAAIAAgdIAVAAIAAAdIAgAAIAAARIggAAIAAAyQAAAIADADQADAEAGgBIAHgBIAJgDIAGARQgHAEgGACQgHACgGAAQgJAAgGgDg");
	this.shape_17.setTransform(191.1,84.4);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#0099CC").s().p("AgKBLIAAhpIAVAAIAABpgAgJgzQgDgEAAgFQAAgHADgDQAEgEAFAAQAGAAADAEQAEADABAHQgBAFgEAEQgDAEgGAAQgFAAgEgEg");
	this.shape_18.setTransform(184.1,83.4);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#0099CC").s().p("AgKBKIAAiTIAVAAIAACTg");
	this.shape_19.setTransform(178.4,83.5);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#0099CC").s().p("AgKBKIAAiTIAVAAIAACTg");
	this.shape_20.setTransform(172.5,83.5);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#0099CC").s().p("AgcAvQgNgHgGgMQgIgMABgQQgBgQAIgMQAGgLANgIQAMgGAQAAQARAAAMAGQANAIAGALQAIAMgBAQQABAQgIAMQgGAMgNAHQgMAHgRAAQgQAAgMgHgAgQgdQgHAEgEAIQgFAIAAAJQABAPAIAKQAJAKAOgBQAPABAJgKQAIgKABgPQgBgJgEgIQgEgIgHgEQgHgFgKABQgIgBgIAFg");
	this.shape_21.setTransform(163.3,85.6);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("#0099CC").s().p("ABCA2IAAg7QgBgMgGgHQgHgHgMAAQgJAAgGAFQgHAEgDAHQgDAIAAAIIAAA1IgXAAIAAg7QAAgMgGgHQgHgHgLAAQgKAAgGAFQgHAEgDAHQgFAIAAAIIAAA1IgWAAIAAhqIAWAAIAAAVQAHgLAJgFQAKgGAOABQAOAAAJAGQAIAHAFAMQAEgNALgGQAKgHAPABQASAAAKAKQALALAAAUIAABBg");
	this.shape_22.setTransform(146.8,85.5);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f("#0099CC").s().p("AgEA/QgHgDgEgHQgEgHgBgLIAAg2IgOAAIAAgRIAOAAIAAgdIAXAAIAAAdIAfAAIAAARIgfAAIAAAyQAAAIACADQADAEAGgBIAIgBIAIgDIAFARQgGAEgGACQgHACgGAAQgJAAgFgDg");
	this.shape_23.setTransform(122,84.4);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f("#0099CC").s().p("AAcA2IAAg7QgBgMgGgHQgHgHgMAAQgMAAgIAJQgHAHgCANIAAA4IgXAAIAAhqIAXAAIAAAVQAGgLAKgFQAKgGAMABQATAAAKAKQALALAAAUIAABBg");
	this.shape_24.setTransform(111.4,85.5);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f("#0099CC").s().p("AgnArQgJgLgBgTIAAhCIAXAAIAAA7QAAAMAHAHQAGAHAMAAQAIAAAGgFQAHgEADgHQAEgIAAgIIAAg1IAXAAIAABqIgXAAIAAgVQgGALgJAFQgKAFgMABQgSgBgLgKg");
	this.shape_25.setTransform(97.9,85.6);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f("#0099CC").s().p("AgdA2IAAhqIAXAAIAAAVQAGgKAIgGQAJgFANgBIAAAWQgLAAgIAEQgHADgFAHQgEAHgBAJIAAA3g");
	this.shape_26.setTransform(88.3,85.6);

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.f("#0099CC").s().p("AgZAvQgMgHgHgMQgHgMAAgQQAAgPAHgNQAHgLAMgIQAMgGAPAAQATAAALAHQAMAIAFAOQAEAOgBATIhPAAQACAMAJAHQAJAHAMAAQAIAAAIgDQAIgDAGgGIAMANQgIAIgLAFQgLAEgOABQgQAAgMgHgAAggHQgBgNgIgIQgIgHgNAAQgMAAgIAHQgIAIgCANIA8AAIAAAAg");
	this.shape_27.setTransform(77.8,85.6);

	this.shape_28 = new cjs.Shape();
	this.shape_28.graphics.f("#0099CC").s().p("AgVAyQgLgDgJgIIAIgQQAFAEAGADIANAFIALABQAHAAAGgDQAEgCAAgGQAAgHgFgDQgGgDgIgDIgQgFQgIgDgFgGQgGgGAAgLQAAgLAFgHQAGgHAIgDQAKgDAJAAQAKAAAKADQAJACAIAGIgIARQgIgFgHgCQgJgDgHAAQgGAAgEADQgEACgBAGQAAAFAGAEQAGADAIACIAQAGQAJADAFAGQAFAGABALQgBALgFAHQgFAHgKAEQgJADgLAAQgLAAgLgEg");
	this.shape_28.setTransform(67.1,85.6);

	this.shape_29 = new cjs.Shape();
	this.shape_29.graphics.f("#0099CC").s().p("AgZAvQgMgHgHgMQgHgMAAgQQAAgPAHgNQAHgLAMgIQAMgGAPAAQATAAALAHQAMAIAFAOQAEAOgBATIhPAAQACAMAJAHQAJAHAMAAQAIAAAIgDQAIgDAGgGIAMANQgIAIgLAFQgLAEgOABQgQAAgMgHgAAggHQgBgNgIgIQgIgHgNAAQgMAAgIAHQgIAIgCANIA8AAIAAAAg");
	this.shape_29.setTransform(56.7,85.6);

	this.shape_30 = new cjs.Shape();
	this.shape_30.graphics.f("#0099CC").s().p("AgfBEQgLgHgGgMQgHgNAAgQQAAgQAHgLQAGgMALgHQAMgHAPAAQAMAAAJAFQAKAFAGAKIAAg9IAXAAIAACUIgXAAIAAgTQgGAKgJAFQgKAFgMAAQgPAAgMgHgAgQgJQgHAFgEAHQgFAIAAAKQAAAKAFAIQAEAIAHAEQAHAEAJAAQAKAAAHgEQAHgEAEgIQAFgIAAgKQAAgKgFgIQgEgHgHgFQgHgEgKAAQgJAAgHAEg");
	this.shape_30.setTransform(43.4,83.5);

	this.shape_31 = new cjs.Shape();
	this.shape_31.graphics.f("#0099CC").s().p("AgdAxQgIgDgFgIQgEgHgBgKQABgOAKgIQAKgJAUAAIAfAAIAAgDQAAgLgHgFQgGgGgMABQgHAAgIACQgIADgIAFIgJgQIAOgIIAOgDQAHgCAKAAQAUAAALAKQALAJAAASIABBFIgXAAIAAgNQgGAHgJADQgJAEgKAAQgMAAgIgFgAgUAJQgFADAAAIQAAAIAGADQAFAEAKABQALAAAJgGQAIgFABgKIAAgJIgcAAIgDAAQgJAAgFADg");
	this.shape_31.setTransform(20.8,85.6);

	this.shape_32 = new cjs.Shape();
	this.shape_32.graphics.f("#0099CC").s().p("AgLBLIAAhpIAWAAIAABpgAgJgzQgDgEAAgFQAAgHADgDQAEgEAFAAQAGAAADAEQAEADABAHQgBAFgEAEQgDAEgGAAQgFAAgEgEg");
	this.shape_32.setTransform(12.4,83.4);

	this.shape_33 = new cjs.Shape();
	this.shape_33.graphics.f("#0099CC").s().p("AgXAvQgMgHgHgMQgGgMgBgQQABgPAGgNQAHgLAMgIQAMgGAPAAQAOAAALAEQALAFAIAIIgMAPQgGgGgIgDQgHgDgKAAQgJAAgGAEQgHAFgFAHQgDAIAAAJQAAAKADAIQAFAIAHAEQAGAEAJAAQAKAAAIgDQAIgDAGgHIAMANQgHAKgMAEQgLAFgPABQgPAAgMgHg");
	this.shape_33.setTransform(3.9,85.6);

	this.shape_34 = new cjs.Shape();
	this.shape_34.graphics.f("#0099CC").s().p("AgLBLIAAhpIAWAAIAABpgAgJgzQgDgEAAgFQAAgHADgDQAEgEAFAAQAGAAADAEQAEADABAHQgBAFgEAEQgDAEgGAAQgFAAgEgEg");
	this.shape_34.setTransform(-4.6,83.4);

	this.shape_35 = new cjs.Shape();
	this.shape_35.graphics.f("#0099CC").s().p("AgWBLIAAhVIgOAAIAAgRIAOAAIAAgKQAAgMAFgJQAFgIAJgEQAHgEAJAAQAHAAAGACQAGACAFAEIgJARQgDgCgEgBIgHgCQgGAAgEAEQgEADAAAIIAAAMIAbAAIAAARIgbAAIAABVg");
	this.shape_35.setTransform(-9.8,83.4);

	this.shape_36 = new cjs.Shape();
	this.shape_36.graphics.f("#0099CC").s().p("AgWBLIAAhVIgOAAIAAgRIAOAAIAAgKQAAgMAFgJQAFgIAJgEQAHgEAJAAQAHAAAGACQAGACAFAEIgJARQgDgCgEgBIgHgCQgGAAgEAEQgEADAAAIIAAAMIAbAAIAAARIgbAAIAABVg");
	this.shape_36.setTransform(-16.7,83.4);

	this.shape_37 = new cjs.Shape();
	this.shape_37.graphics.f("#0099CC").s().p("AgcAvQgNgHgGgMQgIgMABgQQgBgQAIgMQAGgLANgIQAMgGAQAAQARAAAMAGQANAIAGALQAIAMgBAQQABAQgIAMQgGAMgNAHQgMAHgRAAQgQAAgMgHgAgQgdQgHAEgEAIQgEAIgBAJQABAPAIAKQAJAKAOgBQAPABAJgKQAIgKABgPQAAgJgFgIQgEgIgHgEQgIgFgJABQgJgBgHAFg");
	this.shape_37.setTransform(-27.4,85.6);

	this.shape_38 = new cjs.Shape();
	this.shape_38.graphics.f("#0099CC").s().p("AgKBLIAAhpIAVAAIAABpgAgJgzQgDgEAAgFQAAgHADgDQAEgEAFAAQAGAAADAEQAEADABAHQgBAFgEAEQgDAEgGAAQgFAAgEgEg");
	this.shape_38.setTransform(-46.7,83.4);

	this.shape_39 = new cjs.Shape();
	this.shape_39.graphics.f("#0099CC").s().p("AgmArQgKgLgBgTIAAhCIAXAAIAAA7QAAAMAHAHQAHAHALAAQAIAAAGgFQAHgEAEgHQADgIAAgIIAAg1IAXAAIAABqIgXAAIAAgVQgGALgJAFQgKAFgMABQgTgBgJgKg");
	this.shape_39.setTransform(-56.3,85.6);

	this.shape_40 = new cjs.Shape();
	this.shape_40.graphics.f("#0099CC").s().p("AAhBJIAAg5QgGAJgJAFQgKAFgMAAQgPAAgMgHQgLgHgGgMQgHgLAAgQQAAgQAHgMQAGgNALgGQAMgHAPAAQAMAAAJAFQAKAFAGAJIAAgSIAXAAIAACQgAgQgwQgHAEgEAIQgFAIAAAKQAAALAFAHQAEAHAHAEQAHAFAJAAQAKAAAHgFQAHgEAEgHQAFgHAAgLQAAgKgFgIQgEgIgHgEQgHgEgKgBQgJABgHAEg");
	this.shape_40.setTransform(-70,87.5);

	this.shape_41 = new cjs.Shape();
	this.shape_41.graphics.f("#0099CC").s().p("AgdAxQgIgDgFgIQgEgHgBgKQABgOAKgIQAKgJAUAAIAfAAIAAgDQAAgLgHgFQgGgGgMABQgHAAgIACQgIADgIAFIgJgQIAOgIIAOgDQAHgCAKAAQAUAAALAKQALAJAAASIABBFIgXAAIAAgNQgGAHgJADQgJAEgKAAQgMAAgIgFgAgUAJQgFADAAAIQAAAIAGADQAFAEAKABQALAAAJgGQAIgFABgKIAAgJIgcAAIgDAAQgJAAgFADg");
	this.shape_41.setTransform(-92.6,85.6);

	this.shape_42 = new cjs.Shape();
	this.shape_42.graphics.f("#0099CC").s().p("Ag2BJIAAiQIAWAAIAAASQAHgJAJgFQAJgFALAAQAQAAALAGQALAIAHALQAGANAAAQQAAAQgGALQgGAMgMAHQgKAHgQAAQgMgBgJgEQgJgFgHgKIAAA6gAgQgxQgHAFgEAIQgFAHAAALQABAPAIAIQAJAKAOAAQAJAAAIgEQAHgEAEgHQAEgJABgJQgBgLgEgHQgEgIgHgFQgIgEgJAAQgIAAgIAEg");
	this.shape_42.setTransform(-104.4,87.5);

	this.shape_43 = new cjs.Shape();
	this.shape_43.graphics.f("#0099CC").s().p("AgKBKIAAiTIAVAAIAACTg");
	this.shape_43.setTransform(-114.7,83.5);

	this.shape_44 = new cjs.Shape();
	this.shape_44.graphics.f("#0099CC").s().p("AgnArQgJgLgBgTIAAhCIAXAAIAAA7QAAAMAHAHQAHAHALAAQAIAAAGgFQAHgEADgHQAEgIAAgIIAAg1IAXAAIAABqIgXAAIAAgVQgGALgJAFQgKAFgMABQgSgBgLgKg");
	this.shape_44.setTransform(-124.3,85.6);

	this.shape_45 = new cjs.Shape();
	this.shape_45.graphics.f("#0099CC").s().p("AgXAvQgMgHgGgMQgIgMAAgQQAAgPAIgNQAGgLAMgIQAMgGAPAAQAPAAALAEQALAFAHAIIgNAPQgFgGgIgDQgIgDgJAAQgIAAgIAEQgGAFgFAHQgDAIAAAJQAAAKADAIQAFAIAGAEQAIAEAIAAQAKAAAIgDQAIgDAGgHIAMANQgHAKgLAEQgLAFgQABQgPAAgMgHg");
	this.shape_45.setTransform(-136.3,85.6);

	this.shape_46 = new cjs.Shape();
	this.shape_46.graphics.f("#0099CC").s().p("AAcA2IAAg7QgBgMgGgHQgGgHgNAAQgMAAgIAJQgHAHgCANIAAA4IgXAAIAAhqIAXAAIAAAVQAGgLAKgFQAKgGAMABQATAAALAKQAJALABAUIAABBg");
	this.shape_46.setTransform(-158.7,85.5);

	this.shape_47 = new cjs.Shape();
	this.shape_47.graphics.f("#0099CC").s().p("AgKBLIAAhpIAVAAIAABpgAgIgzQgEgEgBgFQABgHAEgDQADgEAFAAQAGAAADAEQAEADAAAHQAAAFgEAEQgDAEgGAAQgFAAgDgEg");
	this.shape_47.setTransform(-168.3,83.4);

	this.shape_48 = new cjs.Shape();
	this.shape_48.graphics.f("#0099CC").s().p("AgFA/QgGgDgEgHQgEgHAAgLIAAg2IgQAAIAAgRIAQAAIAAgdIAVAAIAAAdIAgAAIAAARIggAAIAAAyQAAAIAEADQADAEAFgBIAHgBIAJgDIAGARQgHAEgGACQgHACgHAAQgIAAgGgDg");
	this.shape_48.setTransform(-185.4,84.4);

	this.shape_49 = new cjs.Shape();
	this.shape_49.graphics.f("#0099CC").s().p("AAcA2IAAg7QgBgMgGgHQgGgHgNAAQgMAAgIAJQgHAHgCANIAAA4IgXAAIAAhqIAXAAIAAAVQAGgLAKgFQAKgGAMABQATAAALAKQAJALABAUIAABBg");
	this.shape_49.setTransform(-196,85.5);

	this.shape_50 = new cjs.Shape();
	this.shape_50.graphics.f("#0099CC").s().p("AgmArQgLgLAAgTIAAhCIAXAAIAAA7QAAAMAHAHQAHAHALAAQAIAAAHgFQAGgEAEgHQADgIAAgIIAAg1IAXAAIAABqIgXAAIAAgVQgGALgJAFQgKAFgMABQgSgBgKgKg");
	this.shape_50.setTransform(-209.5,85.6);

	this.shape_51 = new cjs.Shape();
	this.shape_51.graphics.f("#0099CC").s().p("AgVAyQgLgDgJgIIAJgQQAEAEAGADIAMAFIAMABQAIAAAFgDQAEgCAAgGQAAgHgFgDQgGgDgIgDIgQgFQgIgDgFgGQgGgGgBgLQABgLAFgHQAGgHAIgDQAJgDAKAAQAKAAAKADQAKACAHAGIgIARQgIgFgIgCQgIgDgHAAQgGAAgFADQgDACAAAGQgBAFAGAEQAGADAIACIAQAGQAIADAGAGQAFAGABALQgBALgFAHQgGAHgJAEQgJADgLAAQgLAAgLgEg");
	this.shape_51.setTransform(-220.7,85.6);

	this.shape_52 = new cjs.Shape();
	this.shape_52.graphics.f("#0099CC").s().p("AgMAUIAHgRIgEgEIgBgGQAAgFADgEQAEgDAEAAQAGAAADADQADADABAGIgBAGIgDAEIgLARg");
	this.shape_52.setTransform(-237.8,90.5);

	this.shape_53 = new cjs.Shape();
	this.shape_53.graphics.f("#0099CC").s().p("AgFA/QgGgDgEgHQgEgHAAgLIAAg2IgQAAIAAgRIAQAAIAAgdIAVAAIAAAdIAgAAIAAARIggAAIAAAyQAAAIAEADQADAEAFgBIAHgBIAJgDIAFARQgFAEgHACQgHACgHAAQgHAAgHgDg");
	this.shape_53.setTransform(-243.8,84.4);

	this.shape_54 = new cjs.Shape();
	this.shape_54.graphics.f("#0099CC").s().p("AAcA2IAAg7QAAgMgHgHQgGgHgNAAQgMAAgIAJQgIAHgBANIAAA4IgXAAIAAhqIAXAAIAAAVQAGgLAKgFQAJgGANABQATAAALAKQAKALAAAUIAABBg");
	this.shape_54.setTransform(-254.4,85.5);

	this.shape_55 = new cjs.Shape();
	this.shape_55.graphics.f("#0099CC").s().p("AgZAvQgMgHgHgMQgHgMAAgQQAAgPAHgNQAHgLAMgIQAMgGAPAAQATAAALAHQAMAIAFAOQAEAOgBATIhPAAQACAMAJAHQAJAHAMAAQAIAAAIgDQAIgDAGgGIAMANQgIAIgLAFQgLAEgOABQgQAAgMgHgAAggHQgBgNgIgIQgIgHgNAAQgMAAgIAHQgIAIgCANIA8AAIAAAAg");
	this.shape_55.setTransform(-267.1,85.6);

	this.shape_56 = new cjs.Shape();
	this.shape_56.graphics.f("#0099CC").s().p("AgfBEQgLgHgGgMQgHgNAAgQQAAgQAHgLQAGgMALgHQAMgHAPAAQAMAAAJAFQAKAFAGAKIAAg9IAXAAIAACUIgXAAIAAgTQgGAKgJAFQgKAFgMAAQgPAAgMgHgAgQgJQgHAFgEAHQgFAIAAAKQAAAKAFAIQAEAIAHAEQAHAEAJAAQAKAAAHgEQAHgEAEgIQAFgIAAgKQAAgKgFgIQgEgHgHgFQgHgEgKAAQgJAAgHAEg");
	this.shape_56.setTransform(-280.3,83.5);

	this.shape_57 = new cjs.Shape();
	this.shape_57.graphics.f("#0099CC").s().p("AgLBLIAAhpIAWAAIAABpgAgJgzQgDgEAAgFQAAgHADgDQAEgEAFAAQAGAAADAEQAEADABAHQgBAFgEAEQgDAEgGAAQgFAAgEgEg");
	this.shape_57.setTransform(-289.4,83.4);

	this.shape_58 = new cjs.Shape();
	this.shape_58.graphics.f("#0099CC").s().p("AgcAvQgNgHgGgMQgIgMAAgQQAAgQAIgMQAGgLANgIQAMgGAQAAQAQAAANAGQAMAIAIALQAGAMAAAQQAAAQgGAMQgIAMgMAHQgNAHgQAAQgQAAgMgHgAgQgdQgHAEgFAIQgDAIAAAJQAAAPAJAKQAIAKAOgBQAOABAKgKQAJgKAAgPQAAgJgFgIQgEgIgHgEQgHgFgKABQgJgBgHAFg");
	this.shape_58.setTransform(-298.5,85.6);

	this.shape_59 = new cjs.Shape();
	this.shape_59.graphics.f("#0099CC").s().p("AgdA2IAAhqIAXAAIAAAVQAFgKAJgGQAJgFANgBIAAAWQgLAAgIAEQgHADgFAHQgEAHgBAJIAAA3g");
	this.shape_59.setTransform(-308,85.6);

	this.shape_60 = new cjs.Shape();
	this.shape_60.graphics.f("#0099CC").s().p("Ag3BJIAAiQIAXAAIAAASQAHgJAJgFQAJgFALAAQAQAAALAGQALAIAHALQAGANABAQQgBAQgGALQgGAMgMAHQgLAHgPAAQgLgBgKgEQgJgFgHgKIAAA6gAgQgxQgHAFgFAIQgEAHAAALQAAAPAJAIQAKAKANAAQAKAAAGgEQAIgEAEgHQAEgJAAgJQAAgLgEgHQgEgIgIgFQgGgEgKAAQgJAAgHAEg");
	this.shape_60.setTransform(-318.9,87.5);

	this.shape_61 = new cjs.Shape();
	this.shape_61.graphics.f("#0099CC").s().p("AAcA2IAAg7QgBgMgGgHQgHgHgMAAQgMAAgIAJQgHAHgCANIAAA4IgXAAIAAhqIAXAAIAAAVQAGgLAKgFQAKgGAMABQATAAALAKQAJALABAUIAABBg");
	this.shape_61.setTransform(319.6,52.6);

	this.shape_62 = new cjs.Shape();
	this.shape_62.graphics.f("#0099CC").s().p("AgcAvQgNgHgGgMQgIgMABgQQgBgPAIgMQAGgNANgGQAMgHAQAAQARAAAMAHQANAGAGANQAIAMgBAPQABAQgIAMQgGAMgNAHQgMAHgRAAQgQAAgMgHgAgQgdQgHAEgEAIQgEAHgBAKQABAQAIAJQAJAKAOAAQAPAAAJgKQAIgJABgQQAAgKgFgHQgEgIgHgEQgIgEgJgBQgJABgHAEg");
	this.shape_62.setTransform(306.5,52.7);

	this.shape_63 = new cjs.Shape();
	this.shape_63.graphics.f("#0099CC").s().p("AAcA2IAAg7QgBgMgGgHQgHgHgMAAQgMAAgIAJQgIAHgBANIAAA4IgXAAIAAhqIAXAAIAAAVQAGgLAKgFQAKgGAMABQATAAAKAKQAKALABAUIAABBg");
	this.shape_63.setTransform(293.8,52.6);

	this.shape_64 = new cjs.Shape();
	this.shape_64.graphics.f("#0099CC").s().p("AgFA/QgGgDgEgHQgEgHAAgLIAAg2IgQAAIAAgRIAQAAIAAgdIAVAAIAAAdIAgAAIAAARIggAAIAAAyQAAAIAEADQADAEAFgBIAHgBIAJgDIAFARQgFAEgHACQgHACgHAAQgHAAgHgDg");
	this.shape_64.setTransform(269.2,51.5);

	this.shape_65 = new cjs.Shape();
	this.shape_65.graphics.f("#0099CC").s().p("AgdAyQgIgFgFgHQgEgHgBgKQABgOAKgIQAKgIAUgBIAfAAIAAgDQAAgKgHgGQgGgFgMgBQgHABgIACQgIACgIAGIgJgQIAOgHIAOgFQAHgBAKAAQAUAAALAJQALAKAAASIABBFIgXAAIAAgNQgGAHgJAEQgJADgKAAQgMAAgIgEgAgUAJQgFADAAAIQAAAHAGAFQAFAEAKAAQALgBAJgFQAIgGABgIIAAgKIgcAAIgDAAQgJAAgFADg");
	this.shape_65.setTransform(258.9,52.7);

	this.shape_66 = new cjs.Shape();
	this.shape_66.graphics.f("#0099CC").s().p("AgFA/QgGgDgEgHQgEgHAAgLIAAg2IgQAAIAAgRIAQAAIAAgdIAVAAIAAAdIAgAAIAAARIggAAIAAAyQAAAIAEADQADAEAFgBIAHgBIAJgDIAFARQgFAEgHACQgHACgHAAQgHAAgHgDg");
	this.shape_66.setTransform(249.4,51.5);

	this.shape_67 = new cjs.Shape();
	this.shape_67.graphics.f("#0099CC").s().p("AgdAyQgIgFgFgHQgEgHgBgKQABgOAKgIQAKgIAUgBIAfAAIAAgDQAAgKgHgGQgGgFgMgBQgHABgIACQgIACgIAGIgJgQIAOgHIAOgFQAHgBAKAAQAUAAALAJQALAKAAASIABBFIgXAAIAAgNQgGAHgJAEQgJADgKAAQgMAAgIgEgAgUAJQgFADAAAIQAAAHAGAFQAFAEAKAAQALgBAJgFQAIgGABgIIAAgKIgcAAIgDAAQgJAAgFADg");
	this.shape_67.setTransform(239.1,52.7);

	this.shape_68 = new cjs.Shape();
	this.shape_68.graphics.f("#0099CC").s().p("AgfBEQgLgHgGgMQgHgNAAgQQAAgQAHgLQAGgMALgHQAMgHAPAAQAMAAAJAFQAKAFAGAKIAAg9IAXAAIAACUIgXAAIAAgTQgGAKgJAFQgKAFgMAAQgPAAgMgHgAgQgJQgHAFgEAHQgFAIAAAKQAAAKAFAIQAEAIAHAEQAHAEAJAAQAKAAAHgEQAHgEAEgIQAFgIAAgKQAAgKgFgIQgEgHgHgFQgHgEgKAAQgJAAgHAEg");
	this.shape_68.setTransform(226.2,50.6);

	this.shape_69 = new cjs.Shape();
	this.shape_69.graphics.f("#0099CC").s().p("AgKBLIAAhpIAVAAIAABpgAgJgzQgDgEAAgFQAAgHADgDQAEgEAFAAQAGAAADAEQAEADABAHQgBAFgEAEQgDAEgGAAQgFAAgEgEg");
	this.shape_69.setTransform(217.1,50.5);

	this.shape_70 = new cjs.Shape();
	this.shape_70.graphics.f("#0099CC").s().p("Ag2BJIAAiRIAWAAIAAATQAHgKAJgEQAJgFAMAAQAPAAAMAHQAKAGAHANQAGAMAAAQQAAAQgGALQgGAMgLAHQgMAHgPAAQgMAAgJgFQgJgFgHgJIAAA5gAgQgwQgHAEgEAHQgEAJgBAJQABAQAIAJQAJAJAOAAQAJAAAIgFQAHgDAEgHQAEgJABgKQgBgJgEgJQgEgHgHgEQgIgFgJAAQgJAAgHAFg");
	this.shape_70.setTransform(208,54.6);

	this.shape_71 = new cjs.Shape();
	this.shape_71.graphics.f("#0099CC").s().p("AgmArQgKgLgBgTIAAhCIAXAAIAAA7QAAAMAHAHQAHAHALAAQAIAAAGgFQAHgEAEgHQADgIAAgIIAAg1IAXAAIAABqIgXAAIAAgVQgGALgJAFQgKAFgMABQgTgBgJgKg");
	this.shape_71.setTransform(193.9,52.7);

	this.shape_72 = new cjs.Shape();
	this.shape_72.graphics.f("#0099CC").s().p("AgXAvQgMgHgGgMQgIgMAAgQQAAgPAIgMQAGgNAMgGQAMgHAPAAQAPAAALAFQALAEAHAIIgMAPQgGgGgIgDQgHgDgKAAQgIAAgIAFQgHADgEAIQgDAIAAAJQAAAKADAIQAEAIAHADQAIAFAIAAQAKAAAIgEQAIgDAGgGIAMANQgHAKgMAEQgLAGgPAAQgPAAgMgHg");
	this.shape_72.setTransform(181.9,52.7);

	this.shape_73 = new cjs.Shape();
	this.shape_73.graphics.f("#0099CC").s().p("AgEA/QgHgDgEgHQgEgHgBgLIAAg2IgOAAIAAgRIAOAAIAAgdIAXAAIAAAdIAfAAIAAARIgfAAIAAAyQAAAIACADQADAEAGgBIAIgBIAIgDIAFARQgGAEgGACQgHACgGAAQgJAAgFgDg");
	this.shape_73.setTransform(158.4,51.5);

	this.shape_74 = new cjs.Shape();
	this.shape_74.graphics.f("#0099CC").s().p("AgdAyQgIgFgFgHQgEgHgBgKQABgOAKgIQAKgIAUgBIAfAAIAAgDQAAgKgHgGQgGgFgMgBQgHABgIACQgIACgIAGIgJgQIAOgHIAOgFQAHgBAKAAQAUAAALAJQALAKAAASIABBFIgXAAIAAgNQgGAHgJAEQgJADgKAAQgMAAgIgEgAgUAJQgFADAAAIQAAAHAGAFQAFAEAKAAQALgBAJgFQAIgGABgIIAAgKIgcAAIgDAAQgJAAgFADg");
	this.shape_74.setTransform(148.2,52.7);

	this.shape_75 = new cjs.Shape();
	this.shape_75.graphics.f("#0099CC").s().p("AgXAvQgMgHgHgMQgGgMAAgQQAAgPAGgMQAHgNAMgGQAMgHAPAAQAPAAAKAFQALAEAIAIIgNAPQgFgGgHgDQgJgDgJAAQgIAAgHAFQgIADgDAIQgFAIAAAJQAAAKAFAIQADAIAIADQAHAFAIAAQAKAAAIgEQAIgDAFgGIAOANQgIAKgLAEQgMAGgPAAQgPAAgMgHg");
	this.shape_75.setTransform(137,52.7);

	this.shape_76 = new cjs.Shape();
	this.shape_76.graphics.f("#0099CC").s().p("AgZAvQgMgHgHgMQgHgMAAgQQAAgPAHgMQAHgNAMgGQAMgHAPAAQATAAALAIQAMAHAFAOQAEAOgBASIhPAAQACANAJAHQAJAHAMAAQAIAAAIgDQAIgDAGgGIAMANQgIAJgLAEQgLAFgOAAQgQAAgMgHgAAggHQgBgNgIgHQgIgIgNAAQgMAAgIAIQgIAHgCANIA8AAIAAAAg");
	this.shape_76.setTransform(125.5,52.7);

	this.shape_77 = new cjs.Shape();
	this.shape_77.graphics.f("#0099CC").s().p("AgdAyQgIgFgFgHQgEgHgBgKQABgOAKgIQAKgIAUgBIAfAAIAAgDQAAgKgHgGQgGgFgMgBQgHABgIACQgIACgIAGIgJgQIAOgHIAOgFQAHgBAKAAQAUAAALAJQALAKAAASIABBFIgXAAIAAgNQgGAHgJAEQgJADgKAAQgMAAgIgEgAgUAJQgFADAAAIQAAAHAGAFQAFAEAKAAQALgBAJgFQAIgGABgIIAAgKIgcAAIgDAAQgJAAgFADg");
	this.shape_77.setTransform(113.5,52.7);

	this.shape_78 = new cjs.Shape();
	this.shape_78.graphics.f("#0099CC").s().p("AgXAvQgMgHgHgMQgGgMAAgQQAAgPAGgMQAHgNAMgGQAMgHAPAAQAPAAAKAFQALAEAIAIIgNAPQgFgGgHgDQgJgDgJAAQgIAAgHAFQgIADgDAIQgFAIAAAJQAAAKAFAIQADAIAIADQAHAFAIAAQAKAAAIgEQAIgDAFgGIAOANQgIAKgLAEQgMAGgPAAQgPAAgMgHg");
	this.shape_78.setTransform(102.3,52.7);

	this.shape_79 = new cjs.Shape();
	this.shape_79.graphics.f("#0099CC").s().p("AgXAvQgMgHgGgMQgIgMAAgQQAAgPAIgMQAGgNAMgGQAMgHAPAAQAPAAALAFQALAEAHAIIgMAPQgGgGgIgDQgHgDgKAAQgIAAgIAFQgHADgEAIQgDAIAAAJQAAAKADAIQAEAIAHADQAIAFAIAAQAKAAAIgEQAIgDAGgGIAMANQgHAKgMAEQgLAGgPAAQgPAAgMgHg");
	this.shape_79.setTransform(91,52.7);

	this.shape_80 = new cjs.Shape();
	this.shape_80.graphics.f("#0099CC").s().p("AgcAvQgMgHgHgMQgIgMAAgQQAAgPAIgMQAHgNAMgGQANgHAPAAQAQAAANAHQAMAGAIANQAGAMABAPQgBAQgGAMQgIAMgMAHQgNAHgQAAQgPAAgNgHgAgQgdQgHAEgFAIQgDAHAAAKQgBAQAKAJQAIAKAOAAQAOAAAJgKQAKgJgBgQQAAgKgDgHQgFgIgHgEQgHgEgKgBQgIABgIAEg");
	this.shape_80.setTransform(79.1,52.7);

	this.shape_81 = new cjs.Shape();
	this.shape_81.graphics.f("#0099CC").s().p("AgEA/QgHgDgEgHQgEgHgBgLIAAg2IgOAAIAAgRIAOAAIAAgdIAXAAIAAAdIAfAAIAAARIgfAAIAAAyQAAAIACADQADAEAGgBIAHgBIAJgDIAGARQgHAEgGACQgHACgGAAQgIAAgGgDg");
	this.shape_81.setTransform(55,51.5);

	this.shape_82 = new cjs.Shape();
	this.shape_82.graphics.f("#0099CC").s().p("AAcA2IAAg7QgBgMgGgHQgHgHgMAAQgMAAgIAJQgHAHgCANIAAA4IgXAAIAAhqIAXAAIAAAVQAGgLAKgFQAKgGAMABQATAAAKAKQALALAAAUIAABBg");
	this.shape_82.setTransform(44.4,52.6);

	this.shape_83 = new cjs.Shape();
	this.shape_83.graphics.f("#0099CC").s().p("AgLBLIAAhpIAWAAIAABpgAgIgzQgFgEAAgFQAAgHAFgDQADgEAFAAQAGAAAEAEQADADAAAHQAAAFgDAEQgEAEgGAAQgFAAgDgEg");
	this.shape_83.setTransform(34.8,50.5);

	this.shape_84 = new cjs.Shape();
	this.shape_84.graphics.f("#0099CC").s().p("AgWAyQgLgDgIgIIAJgQQAEAEAGADIAMAFIAMABQAIAAAEgDQAFgCABgGQgBgHgGgDQgFgDgIgDIgQgFQgIgDgGgGQgFgGAAgLQAAgLAFgHQAFgHAKgDQAIgDAKAAQAKAAAKADQAJACAIAGIgJARQgGgFgJgCQgIgDgHAAQgGAAgFADQgEACAAAGQABAFAFAEQAGADAHACIARAGQAIADAGAGQAGAGAAALQAAALgGAHQgFAHgKAEQgJADgLAAQgLAAgMgEg");
	this.shape_84.setTransform(27.1,52.7);

	this.shape_85 = new cjs.Shape();
	this.shape_85.graphics.f("#0099CC").s().p("AgdA1IAAhpIAXAAIAAAVQAGgKAIgGQAJgGANABIAAAVQgLAAgIADQgIAEgDAHQgFAGgBAKIAAA2g");
	this.shape_85.setTransform(5.5,52.7);

	this.shape_86 = new cjs.Shape();
	this.shape_86.graphics.f("#0099CC").s().p("AgnArQgKgLAAgTIAAhCIAXAAIAAA7QAAAMAHAHQAGAHAMAAQAIAAAHgFQAGgEADgHQAEgIAAgIIAAg1IAXAAIAABqIgXAAIAAgVQgGALgJAFQgKAFgMABQgTgBgKgKg");
	this.shape_86.setTransform(-5.9,52.7);

	this.shape_87 = new cjs.Shape();
	this.shape_87.graphics.f("#0099CC").s().p("AgZAvQgMgHgHgMQgHgMAAgQQAAgPAHgMQAHgNAMgGQAMgHAPAAQATAAALAIQAMAHAFAOQAEAOgBASIhPAAQACANAJAHQAJAHAMAAQAIAAAIgDQAIgDAGgGIAMANQgIAJgLAEQgLAFgOAAQgQAAgMgHgAAggHQgBgNgIgHQgIgIgNAAQgMAAgIAIQgIAHgCANIA8AAIAAAAg");
	this.shape_87.setTransform(-18.1,52.7);

	this.shape_88 = new cjs.Shape();
	this.shape_88.graphics.f("#0099CC").s().p("AgEA/QgHgDgEgHQgEgHgBgLIAAg2IgPAAIAAgRIAPAAIAAgdIAXAAIAAAdIAfAAIAAARIgfAAIAAAyQAAAIACADQADAEAGgBIAIgBIAIgDIAFARQgFAEgHACQgHACgHAAQgIAAgFgDg");
	this.shape_88.setTransform(-28,51.5);

	this.shape_89 = new cjs.Shape();
	this.shape_89.graphics.f("#0099CC").s().p("Ag2BJIAAiRIAWAAIAAATQAHgKAJgEQAJgFALAAQAQAAALAHQALAGAHANQAGAMAAAQQAAAQgGALQgGAMgMAHQgKAHgQAAQgMAAgJgFQgJgFgHgJIAAA5gAgQgwQgHAEgEAHQgFAJAAAJQABAQAIAJQAKAJANAAQAJAAAIgFQAHgDAEgHQAEgJAAgKQAAgJgEgJQgEgHgHgEQgIgFgJAAQgIAAgIAFg");
	this.shape_89.setTransform(-38.4,54.6);

	this.shape_90 = new cjs.Shape();
	this.shape_90.graphics.f("#0099CC").s().p("AgZAvQgMgHgHgMQgHgMAAgQQAAgPAHgMQAHgNAMgGQAMgHAPAAQATAAALAIQAMAHAFAOQAEAOgBASIhPAAQACANAJAHQAJAHAMAAQAIAAAIgDQAIgDAGgGIAMANQgIAJgLAEQgLAFgOAAQgQAAgMgHgAAggHQgBgNgIgHQgIgIgNAAQgMAAgIAIQgIAHgCANIA8AAIAAAAg");
	this.shape_90.setTransform(-51.6,52.7);

	this.shape_91 = new cjs.Shape();
	this.shape_91.graphics.f("#0099CC").s().p("AgXAvQgMgHgGgMQgIgMABgQQgBgPAIgMQAGgNAMgGQAMgHAPAAQAOAAAMAFQAKAEAIAIIgNAPQgFgGgHgDQgJgDgJAAQgIAAgIAFQgGADgEAIQgEAIgBAJQABAKAEAIQAEAIAGADQAIAFAIAAQAKAAAIgEQAIgDAFgGIAOANQgIAKgLAEQgMAGgPAAQgPAAgMgHg");
	this.shape_91.setTransform(-63.1,52.7);

	this.shape_92 = new cjs.Shape();
	this.shape_92.graphics.f("#0099CC").s().p("AAaA1IgagnIgaAnIgZAAIAlg1Igjg0IAbAAIAWAkIAZgkIAZAAIgiA0IAkA1g");
	this.shape_92.setTransform(-74.3,52.7);

	this.shape_93 = new cjs.Shape();
	this.shape_93.graphics.f("#0099CC").s().p("AgyBGIAAiLIBjAAIAAAVIhMAAIAAAmIBEAAIAAAUIhEAAIAAAnIBOAAIAAAVg");
	this.shape_93.setTransform(-86,51);

	this.shape_94 = new cjs.Shape();
	this.shape_94.graphics.f("#0099CC").s().p("AgIAJQgDgDgBgGQABgFADgEQAEgDAEAAQAFAAAEADQAEAEAAAFQAAAGgEADQgEAEgFAAQgEAAgEgEg");
	this.shape_94.setTransform(-109,56.9);

	this.shape_95 = new cjs.Shape();
	this.shape_95.graphics.f("#0099CC").s().p("AgdA1IAAhpIAXAAIAAAVQAGgKAIgGQAJgGANABIAAAVQgLAAgIADQgIAEgDAHQgFAGgBAKIAAA2g");
	this.shape_95.setTransform(-114.3,52.7);

	this.shape_96 = new cjs.Shape();
	this.shape_96.graphics.f("#0099CC").s().p("AgmArQgLgLAAgTIAAhCIAXAAIAAA7QAAAMAHAHQAGAHAMAAQAIAAAHgFQAGgEAEgHQADgIAAgIIAAg1IAXAAIAABqIgXAAIAAgVQgGALgJAFQgKAFgMABQgTgBgJgKg");
	this.shape_96.setTransform(-125.7,52.7);

	this.shape_97 = new cjs.Shape();
	this.shape_97.graphics.f("#0099CC").s().p("AgEA/QgHgDgEgHQgEgHgBgLIAAg2IgPAAIAAgRIAPAAIAAgdIAXAAIAAAdIAfAAIAAARIgfAAIAAAyQAAAIADADQADAEAFgBIAIgBIAIgDIAFARQgFAEgHACQgHACgHAAQgHAAgGgDg");
	this.shape_97.setTransform(-136.1,51.5);

	this.shape_98 = new cjs.Shape();
	this.shape_98.graphics.f("#0099CC").s().p("AgdAyQgIgFgFgHQgEgHgBgKQABgOAKgIQAKgIAUgBIAfAAIAAgDQAAgKgHgGQgGgFgMgBQgHABgIACQgIACgIAGIgJgQIAOgHIAOgFQAHgBAKAAQAUAAALAJQALAKAAASIABBFIgXAAIAAgNQgGAHgJAEQgJADgKAAQgMAAgIgEgAgUAJQgFADAAAIQAAAHAGAFQAFAEAKAAQALgBAJgFQAIgGABgIIAAgKIgcAAIgDAAQgJAAgFADg");
	this.shape_98.setTransform(-146.3,52.7);

	this.shape_99 = new cjs.Shape();
	this.shape_99.graphics.f("#0099CC").s().p("AgKBLIAAhpIAVAAIAABpgAgJgzQgDgEAAgFQAAgHADgDQAEgEAFAAQAGAAADAEQAEADABAHQgBAFgEAEQgDAEgGAAQgFAAgEgEg");
	this.shape_99.setTransform(-154.7,50.5);

	this.shape_100 = new cjs.Shape();
	this.shape_100.graphics.f("#0099CC").s().p("AgdA1IAAhpIAXAAIAAAVQAGgKAIgGQAJgGANABIAAAVQgLAAgIADQgIAEgDAHQgFAGgBAKIAAA2g");
	this.shape_100.setTransform(-160.8,52.7);

	this.shape_101 = new cjs.Shape();
	this.shape_101.graphics.f("#0099CC").s().p("AgdAyQgIgFgFgHQgEgHgBgKQABgOAKgIQAKgIAUgBIAfAAIAAgDQAAgKgHgGQgGgFgMgBQgHABgIACQgIACgIAGIgJgQIAOgHIAOgFQAHgBAKAAQAUAAALAJQALAKAAASIABBFIgXAAIAAgNQgGAHgJAEQgJADgKAAQgMAAgIgEgAgUAJQgFADAAAIQAAAHAGAFQAFAEAKAAQALgBAJgFQAIgGABgIIAAgKIgcAAIgDAAQgJAAgFADg");
	this.shape_101.setTransform(-171.6,52.7);

	this.shape_102 = new cjs.Shape();
	this.shape_102.graphics.f("#0099CC").s().p("Ag2BJIAAiRIAWAAIAAATQAHgKAJgEQAJgFALAAQAQAAALAHQALAGAHANQAGAMABAQQgBAQgGALQgGAMgMAHQgLAHgPAAQgLAAgKgFQgJgFgHgJIAAA5gAgQgwQgHAEgEAHQgFAJAAAJQAAAQAJAJQAKAJANAAQAJAAAIgFQAHgDAEgHQAEgJAAgKQAAgJgEgJQgEgHgHgEQgIgFgJAAQgIAAgIAFg");
	this.shape_102.setTransform(-183.4,54.6);

	this.shape_103 = new cjs.Shape();
	this.shape_103.graphics.f("#0099CC").s().p("AgdAyQgIgFgFgHQgEgHgBgKQABgOAKgIQAKgIAUgBIAfAAIAAgDQAAgKgHgGQgGgFgMgBQgHABgIACQgIACgIAGIgJgQIAOgHIAOgFQAHgBAKAAQAUAAALAJQALAKAAASIABBFIgXAAIAAgNQgGAHgJAEQgJADgKAAQgMAAgIgEgAgUAJQgFADAAAIQAAAHAGAFQAFAEAKAAQALgBAJgFQAIgGABgIIAAgKIgcAAIgDAAQgJAAgFADg");
	this.shape_103.setTransform(-210.7,52.7);

	this.shape_104 = new cjs.Shape();
	this.shape_104.graphics.f("#0099CC").s().p("AgLBKIAAiTIAXAAIAACTg");
	this.shape_104.setTransform(-219.1,50.6);

	this.shape_105 = new cjs.Shape();
	this.shape_105.graphics.f("#0099CC").s().p("AgLBKIAAiTIAXAAIAACTg");
	this.shape_105.setTransform(-225,50.6);

	this.shape_106 = new cjs.Shape();
	this.shape_106.graphics.f("#0099CC").s().p("AgmArQgLgLAAgTIAAhCIAXAAIAAA7QAAAMAHAHQAGAHAMAAQAIAAAHgFQAGgEAEgHQADgIAAgIIAAg1IAXAAIAABqIgXAAIAAgVQgGALgJAFQgKAFgMABQgTgBgJgKg");
	this.shape_106.setTransform(-234.6,52.7);

	this.shape_107 = new cjs.Shape();
	this.shape_107.graphics.f("#0099CC").s().p("AAcA2IAAg7QgBgMgGgHQgHgHgMAAQgMAAgIAJQgHAHgCANIAAA4IgXAAIAAhqIAXAAIAAAVQAGgLAKgFQAKgGAMABQATAAALAKQAJALABAUIAABBg");
	this.shape_107.setTransform(-247.4,52.6);

	this.shape_108 = new cjs.Shape();
	this.shape_108.graphics.f("#0099CC").s().p("AgEA/QgHgDgEgHQgEgHAAgLIAAg2IgQAAIAAgRIAQAAIAAgdIAVAAIAAAdIAgAAIAAARIggAAIAAAyQABAIADADQADAEAFgBIAIgBIAIgDIAFARQgFAEgHACQgHACgHAAQgHAAgGgDg");
	this.shape_108.setTransform(-272.1,51.5);

	this.shape_109 = new cjs.Shape();
	this.shape_109.graphics.f("#0099CC").s().p("AgdAyQgIgFgFgHQgEgHgBgKQABgOAKgIQAKgIAUgBIAfAAIAAgDQAAgKgHgGQgGgFgMgBQgHABgIACQgIACgIAGIgJgQIAOgHIAOgFQAHgBAKAAQAUAAALAJQALAKAAASIABBFIgXAAIAAgNQgGAHgJAEQgJADgKAAQgMAAgIgEgAgUAJQgFADAAAIQAAAHAGAFQAFAEAKAAQALgBAJgFQAIgGABgIIAAgKIgcAAIgDAAQgJAAgFADg");
	this.shape_109.setTransform(-282.3,52.7);

	this.shape_110 = new cjs.Shape();
	this.shape_110.graphics.f("#0099CC").s().p("AgKBLIAAhpIAVAAIAABpgAgIgzQgEgEgBgFQABgHAEgDQADgEAFAAQAGAAADAEQAEADAAAHQAAAFgEAEQgDAEgGAAQgFAAgDgEg");
	this.shape_110.setTransform(-290.7,50.5);

	this.shape_111 = new cjs.Shape();
	this.shape_111.graphics.f("#0099CC").s().p("AgYBFQgMgDgJgHIAKgQQAHAFAIADQAIADAKAAQAOAAAJgIQAJgIAAgOIAAgNQgFAIgJAFQgJAFgLAAQgOgBgLgGQgLgGgGgMQgGgKAAgQQAAgPAGgLQAGgMAKgGQALgGAOAAQAMgBAIAFQAJAFAGAIIAAgRIAXAAIAABfQAAAQgHALQgGALgNAGQgNAGgPAAQgMAAgLgEgAgPgyQgIAEgDAIQgEAHgBAKQABAJAEAIQADAGAIAEQAGAFAJAAQAIAAAHgFQAHgEAFgGQADgIAAgJQAAgPgJgJQgHgJgOAAQgJAAgGAEg");
	this.shape_111.setTransform(-300.4,54.6);

	this.shape_112 = new cjs.Shape();
	this.shape_112.graphics.f("#0099CC").s().p("AgnArQgKgLAAgTIAAhCIAXAAIAAA7QAAAMAHAHQAGAHAMAAQAIAAAGgFQAHgEADgHQAEgIAAgIIAAg1IAXAAIAABqIgXAAIAAgVQgFALgKAFQgKAFgMABQgSgBgLgKg");
	this.shape_112.setTransform(-313.1,52.7);

	this.shape_113 = new cjs.Shape();
	this.shape_113.graphics.f("#0099CC").s().p("AgWBLIAAhVIgOAAIAAgRIAOAAIAAgKQAAgMAFgJQAFgIAJgEQAHgEAJAAQAHAAAGACQAGACAFAEIgJARQgDgCgEgBIgHgCQgGAAgEAEQgEADAAAIIAAAMIAbAAIAAARIgbAAIAABVg");
	this.shape_113.setTransform(-321.8,50.5);

	this.shape_114 = new cjs.Shape();
	this.shape_114.graphics.f("#0099CC").s().p("AgmArQgLgLAAgTIAAhCIAXAAIAAA7QAAAMAHAHQAGAHAMAAQAIAAAHgFQAGgEAEgHQADgIAAgIIAAg1IAXAAIAABqIgXAAIAAgVQgGALgJAFQgKAFgMABQgTgBgJgKg");
	this.shape_114.setTransform(319.3,19.8);

	this.shape_115 = new cjs.Shape();
	this.shape_115.graphics.f("#0099CC").s().p("AgZAvQgMgHgHgMQgHgMAAgQQAAgPAHgNQAHgMAMgHQAMgGAPAAQATAAALAHQAMAIAFAOQAEAOgBASIhPAAQACANAJAHQAJAHAMAAQAIAAAIgDQAIgDAGgGIAMANQgIAJgLAEQgLAFgOAAQgQAAgMgHgAAggHQgBgNgIgIQgIgHgNAAQgMAAgIAHQgIAIgCANIA8AAIAAAAg");
	this.shape_115.setTransform(307.1,19.8);

	this.shape_116 = new cjs.Shape();
	this.shape_116.graphics.f("#0099CC").s().p("AgZAvQgMgHgHgMQgHgMAAgQQAAgPAHgNQAHgMAMgHQAMgGAPAAQATAAALAHQAMAIAFAOQAEAOgBASIhPAAQACANAJAHQAJAHAMAAQAIAAAIgDQAIgDAGgGIAMANQgIAJgLAEQgLAFgOAAQgQAAgMgHgAAggHQgBgNgIgIQgIgHgNAAQgMAAgIAHQgIAIgCANIA8AAIAAAAg");
	this.shape_116.setTransform(285.1,19.8);

	this.shape_117 = new cjs.Shape();
	this.shape_117.graphics.f("#0099CC").s().p("AgdA2IAAhqIAXAAIAAAVQAFgKAJgGQAJgFANgBIAAAWQgLAAgIAEQgIADgDAHQgFAHgBAJIAAA3g");
	this.shape_117.setTransform(276,19.8);

	this.shape_118 = new cjs.Shape();
	this.shape_118.graphics.f("#0099CC").s().p("AgcAvQgMgHgIgMQgGgMgBgQQABgQAGgMQAIgMAMgHQANgGAPAAQAQAAANAGQAMAHAIAMQAGAMABAQQgBAQgGAMQgIAMgMAHQgNAHgQAAQgPAAgNgHgAgQgdQgHAEgFAIQgDAIAAAJQgBAPAKAKQAJAJANAAQAOAAAJgJQAKgKgBgPQAAgJgDgIQgFgIgHgEQgIgFgJABQgIgBgIAFg");
	this.shape_118.setTransform(265.1,19.8);

	this.shape_119 = new cjs.Shape();
	this.shape_119.graphics.f("#0099CC").s().p("AgKBKIAAiTIAVAAIAACTg");
	this.shape_119.setTransform(255.9,17.7);

	this.shape_120 = new cjs.Shape();
	this.shape_120.graphics.f("#0099CC").s().p("AgcAvQgMgHgIgMQgGgMgBgQQABgQAGgMQAIgMAMgHQANgGAPAAQAQAAANAGQAMAHAIAMQAHAMAAAQQAAAQgHAMQgIAMgMAHQgNAHgQAAQgPAAgNgHgAgQgdQgHAEgFAIQgEAIAAAJQAAAPAJAKQAKAJANAAQAPAAAIgJQAKgKgBgPQAAgJgDgIQgFgIgHgEQgIgFgJABQgJgBgHAFg");
	this.shape_120.setTransform(246.7,19.8);

	this.shape_121 = new cjs.Shape();
	this.shape_121.graphics.f("#0099CC").s().p("AgfBEQgLgHgGgMQgHgNAAgQQAAgQAHgLQAGgMALgHQAMgHAPAAQAMAAAJAFQAKAFAGAKIAAg9IAXAAIAACUIgXAAIAAgTQgGAKgJAFQgKAFgMAAQgPAAgMgHgAgQgJQgHAFgEAHQgFAIAAAKQAAAKAFAIQAEAIAHAEQAHAEAJAAQAKAAAHgEQAHgEAEgIQAFgIAAgKQAAgKgFgIQgEgHgHgFQgHgEgKAAQgJAAgHAEg");
	this.shape_121.setTransform(233.1,17.7);

	this.shape_122 = new cjs.Shape();
	this.shape_122.graphics.f("#0099CC").s().p("ABCA2IAAg7QgBgMgGgHQgHgHgMAAQgJAAgGAFQgHAEgDAHQgDAIAAAIIAAA1IgXAAIAAg7QAAgMgGgHQgHgHgLAAQgKAAgGAFQgHAEgDAHQgFAIAAAIIAAA1IgWAAIAAhqIAWAAIAAAVQAHgLAJgFQAKgGAOABQAOAAAJAGQAIAHAFAMQAEgNALgGQAKgHAPABQASAAAKAKQALALAAAUIAABBg");
	this.shape_122.setTransform(206.2,19.7);

	this.shape_123 = new cjs.Shape();
	this.shape_123.graphics.f("#0099CC").s().p("AgnArQgKgLAAgTIAAhCIAXAAIAAA7QAAAMAHAHQAGAHAMAAQAIAAAHgFQAGgEADgHQAEgIAAgIIAAg1IAXAAIAABqIgXAAIAAgVQgGALgJAFQgKAFgMABQgTgBgKgKg");
	this.shape_123.setTransform(188.9,19.8);

	this.shape_124 = new cjs.Shape();
	this.shape_124.graphics.f("#0099CC").s().p("AgLBKIAAiTIAXAAIAACTg");
	this.shape_124.setTransform(179.7,17.7);

	this.shape_125 = new cjs.Shape();
	this.shape_125.graphics.f("#0099CC").s().p("AgLBKIAAiTIAXAAIAACTg");
	this.shape_125.setTransform(173.8,17.7);

	this.shape_126 = new cjs.Shape();
	this.shape_126.graphics.f("#0099CC").s().p("AgKBLIAAhpIAVAAIAABpgAgJgzQgDgEAAgFQAAgHADgDQAEgEAFAAQAGAAADAEQAEADABAHQgBAFgEAEQgDAEgGAAQgFAAgEgEg");
	this.shape_126.setTransform(168,17.6);

	this.shape_127 = new cjs.Shape();
	this.shape_127.graphics.f("#0099CC").s().p("AgXAvQgMgHgHgMQgHgMAAgQQAAgPAHgNQAHgMAMgHQAMgGAPAAQAOAAALAEQAMAFAHAIIgMAPQgGgGgIgDQgIgDgJAAQgIAAgIAEQgGAFgFAHQgDAIAAAJQAAAKADAHQAFAIAGAFQAIAEAIAAQAKAAAIgDQAIgDAGgHIAMANQgHAJgMAGQgLAEgPABQgPAAgMgHg");
	this.shape_127.setTransform(159.5,19.8);

	this.shape_128 = new cjs.Shape();
	this.shape_128.graphics.f("#0099CC").s().p("AgZAvQgMgHgHgMQgHgMAAgQQAAgPAHgNQAHgMAMgHQAMgGAPAAQATAAALAHQAMAIAFAOQAEAOgBASIhPAAQACANAJAHQAJAHAMAAQAIAAAIgDQAIgDAGgGIAMANQgIAJgLAEQgLAFgOAAQgQAAgMgHgAAggHQgBgNgIgIQgIgHgNAAQgMAAgIAHQgIAIgCANIA8AAIAAAAg");
	this.shape_128.setTransform(137.7,19.8);

	this.shape_129 = new cjs.Shape();
	this.shape_129.graphics.f("#0099CC").s().p("AgWAyQgLgDgIgIIAJgQQAEAEAGADIAMAFIAMABQAIAAAEgDQAFgCABgGQgBgHgGgDQgFgDgIgDIgQgFQgIgDgGgGQgFgGAAgLQAAgLAFgHQAFgHAKgDQAIgDAKAAQAKAAAKADQAJACAIAGIgJARQgGgFgJgCQgIgDgHAAQgGAAgFADQgEACABAGQAAAFAFAEQAGADAHACIARAGQAIADAGAGQAGAGAAALQAAALgGAHQgFAHgKAEQgJADgLAAQgLAAgMgEg");
	this.shape_129.setTransform(127,19.8);

	this.shape_130 = new cjs.Shape();
	this.shape_130.graphics.f("#0099CC").s().p("AgVAyQgLgDgJgIIAIgQQAFAEAGADIAMAFIAMABQAHAAAGgDQAEgCAAgGQAAgHgFgDQgGgDgIgDIgQgFQgIgDgFgGQgGgGgBgLQABgLAFgHQAGgHAIgDQAJgDAKAAQAKAAAKADQAKACAHAGIgIARQgHgFgIgCQgJgDgHAAQgGAAgFADQgDACAAAGQgBAFAGAEQAGADAIACIAQAGQAIADAGAGQAFAGABALQgBALgFAHQgGAHgJAEQgJADgLAAQgLAAgLgEg");
	this.shape_130.setTransform(117.6,19.8);

	this.shape_131 = new cjs.Shape();
	this.shape_131.graphics.f("#0099CC").s().p("AgZAvQgMgHgHgMQgHgMAAgQQAAgPAHgNQAHgMAMgHQAMgGAPAAQATAAALAHQAMAIAFAOQAEAOgBASIhPAAQACANAJAHQAJAHAMAAQAIAAAIgDQAIgDAGgGIAMANQgIAJgLAEQgLAFgOAAQgQAAgMgHgAAggHQgBgNgIgIQgIgHgNAAQgMAAgIAHQgIAIgCANIA8AAIAAAAg");
	this.shape_131.setTransform(107.2,19.8);

	this.shape_132 = new cjs.Shape();
	this.shape_132.graphics.f("#0099CC").s().p("AgEA/QgHgDgEgHQgEgHgBgLIAAg2IgOAAIAAgRIAOAAIAAgdIAXAAIAAAdIAfAAIAAARIgfAAIAAAyQAAAIACADQADAEAGgBIAHgBIAJgDIAGARQgHAEgGACQgHACgGAAQgIAAgGgDg");
	this.shape_132.setTransform(87,18.6);

	this.shape_133 = new cjs.Shape();
	this.shape_133.graphics.f("#0099CC").s().p("AgKBLIAAhpIAVAAIAABpgAgIgzQgFgEAAgFQAAgHAFgDQADgEAFAAQAGAAAEAEQADADAAAHQAAAFgDAEQgEAEgGAAQgFAAgDgEg");
	this.shape_133.setTransform(80,17.6);

	this.shape_134 = new cjs.Shape();
	this.shape_134.graphics.f("#0099CC").s().p("AgKBKIAAiTIAVAAIAACTg");
	this.shape_134.setTransform(74.2,17.7);

	this.shape_135 = new cjs.Shape();
	this.shape_135.graphics.f("#0099CC").s().p("AgZAvQgMgHgHgMQgHgMAAgQQAAgPAHgNQAHgMAMgHQAMgGAPAAQATAAALAHQAMAIAFAOQAEAOgBASIhPAAQACANAJAHQAJAHAMAAQAIAAAIgDQAIgDAGgGIAMANQgIAJgLAEQgLAFgOAAQgQAAgMgHgAAggHQgBgNgIgIQgIgHgNAAQgMAAgIAHQgIAIgCANIA8AAIAAAAg");
	this.shape_135.setTransform(65.4,19.8);

	this.shape_136 = new cjs.Shape();
	this.shape_136.graphics.f("#0099CC").s().p("AgKA1IgqhpIAYAAIAdBTIAdhTIAXAAIgpBpg");
	this.shape_136.setTransform(54.4,19.8);

	this.shape_137 = new cjs.Shape();
	this.shape_137.graphics.f("#0099CC").s().p("AgZAvQgMgHgHgMQgHgMAAgQQAAgPAHgNQAHgMAMgHQAMgGAPAAQATAAALAHQAMAIAFAOQAEAOgBASIhPAAQACANAJAHQAJAHAMAAQAIAAAIgDQAIgDAGgGIAMANQgIAJgLAEQgLAFgOAAQgQAAgMgHgAAggHQgBgNgIgIQgIgHgNAAQgMAAgIAHQgIAIgCANIA8AAIAAAAg");
	this.shape_137.setTransform(32.9,19.8);

	this.shape_138 = new cjs.Shape();
	this.shape_138.graphics.f("#0099CC").s().p("AgFA/QgGgDgEgHQgEgHgBgLIAAg2IgOAAIAAgRIAOAAIAAgdIAXAAIAAAdIAfAAIAAARIgfAAIAAAyQAAAIACADQADAEAGgBIAHgBIAJgDIAGARQgHAEgGACQgHACgGAAQgIAAgHgDg");
	this.shape_138.setTransform(23.1,18.6);

	this.shape_139 = new cjs.Shape();
	this.shape_139.graphics.f("#0099CC").s().p("AgdAxQgIgDgFgIQgEgHgBgKQABgPAKgHQAKgJAUAAIAfAAIAAgDQAAgKgHgGQgGgGgMABQgHAAgIACQgIADgIAFIgJgQIAOgIIAOgDQAHgCAKAAQAUAAALAKQALAJAAASIABBFIgXAAIAAgNQgGAHgJADQgJAEgKAAQgMAAgIgFgAgUAJQgFAEAAAHQAAAIAGADQAFAEAKABQALAAAJgGQAIgFABgKIAAgJIgcAAIgDAAQgJAAgFADg");
	this.shape_139.setTransform(12.8,19.8);

	this.shape_140 = new cjs.Shape();
	this.shape_140.graphics.f("#0099CC").s().p("AgEA/QgHgDgEgHQgEgHgBgLIAAg2IgOAAIAAgRIAOAAIAAgdIAXAAIAAAdIAfAAIAAARIgfAAIAAAyQAAAIACADQADAEAGgBIAIgBIAIgDIAGARQgHAEgGACQgHACgGAAQgIAAgGgDg");
	this.shape_140.setTransform(3.3,18.6);

	this.shape_141 = new cjs.Shape();
	this.shape_141.graphics.f("#0099CC").s().p("Ag2BJIAAiQIAWAAIAAASQAHgKAJgEQAJgFAMAAQAPAAAMAGQAKAHAHAMQAGANAAAQQAAAQgGALQgGAMgLAHQgMAHgPAAQgMAAgJgFQgJgFgHgKIAAA6gAgQgxQgHAFgEAHQgEAJgBAJQABAQAIAIQAJAKAOAAQAJAAAIgEQAHgFAEgHQAEgHABgLQgBgJgEgJQgEgHgHgFQgIgEgJAAQgJAAgHAEg");
	this.shape_141.setTransform(-7.1,21.7);

	this.shape_142 = new cjs.Shape();
	this.shape_142.graphics.f("#0099CC").s().p("AgmArQgKgLgBgTIAAhCIAXAAIAAA7QAAAMAHAHQAHAHALAAQAIAAAGgFQAHgEAEgHQADgIAAgIIAAg1IAXAAIAABqIgXAAIAAgVQgGALgJAFQgKAFgMABQgTgBgJgKg");
	this.shape_142.setTransform(-21.2,19.8);

	this.shape_143 = new cjs.Shape();
	this.shape_143.graphics.f("#0099CC").s().p("AgKBKIAAiTIAVAAIAACTg");
	this.shape_143.setTransform(-30.4,17.7);

	this.shape_144 = new cjs.Shape();
	this.shape_144.graphics.f("#0099CC").s().p("AgcAvQgNgHgGgMQgIgMABgQQgBgQAIgMQAGgMANgHQAMgGAQAAQARAAAMAGQANAHAGAMQAIAMgBAQQABAQgIAMQgGAMgNAHQgMAHgRAAQgQAAgMgHgAgQgdQgHAEgEAIQgFAIAAAJQABAPAIAKQAJAJAOAAQAPAAAJgJQAIgKABgPQgBgJgEgIQgEgIgHgEQgHgFgKABQgIgBgIAFg");
	this.shape_144.setTransform(-39.6,19.8);

	this.shape_145 = new cjs.Shape();
	this.shape_145.graphics.f("#0099CC").s().p("AgLA1IgphpIAYAAIAdBTIAdhTIAXAAIgpBpg");
	this.shape_145.setTransform(-51,19.8);

	this.shape_146 = new cjs.Shape();
	this.shape_146.graphics.f("#0099CC").s().p("AAcA2IAAg7QgBgMgGgHQgHgHgMAAQgMAAgIAJQgHAHgCANIAAA4IgXAAIAAhqIAXAAIAAAVQAGgLAKgFQAKgGAMABQATAAAKAKQALALAAAUIAABBg");
	this.shape_146.setTransform(-73.1,19.7);

	this.shape_147 = new cjs.Shape();
	this.shape_147.graphics.f("#0099CC").s().p("AgLBLIAAhpIAWAAIAABpgAgJgzQgEgEAAgFQAAgHAEgDQAEgEAFAAQAGAAAEAEQADADAAAHQAAAFgDAEQgEAEgGAAQgFAAgEgEg");
	this.shape_147.setTransform(-82.8,17.6);

	this.shape_148 = new cjs.Shape();
	this.shape_148.graphics.f("#0099CC").s().p("AgEA/QgHgDgEgHQgEgHgBgLIAAg2IgPAAIAAgRIAPAAIAAgdIAXAAIAAAdIAfAAIAAARIgfAAIAAAyQAAAIACADQADAEAGgBIAIgBIAIgDIAFARQgFAEgHACQgHACgHAAQgIAAgFgDg");
	this.shape_148.setTransform(-100,18.6);

	this.shape_149 = new cjs.Shape();
	this.shape_149.graphics.f("#0099CC").s().p("AgLBLIAAhpIAWAAIAABpgAgIgzQgFgEAAgFQAAgHAFgDQADgEAFAAQAGAAAEAEQADADAAAHQAAAFgDAEQgEAEgGAAQgFAAgDgEg");
	this.shape_149.setTransform(-107,17.6);

	this.shape_150 = new cjs.Shape();
	this.shape_150.graphics.f("#0099CC").s().p("AgdA2IAAhqIAXAAIAAAVQAGgKAIgGQAJgFANgBIAAAWQgLAAgIAEQgHADgFAHQgEAHgBAJIAAA3g");
	this.shape_150.setTransform(-113,19.8);

	this.shape_151 = new cjs.Shape();
	this.shape_151.graphics.f("#0099CC").s().p("AgZAvQgMgHgHgMQgHgMAAgQQAAgPAHgNQAHgMAMgHQAMgGAPAAQATAAALAHQAMAIAFAOQAEAOgBASIhPAAQACANAJAHQAJAHAMAAQAIAAAIgDQAIgDAGgGIAMANQgIAJgLAEQgLAFgOAAQgQAAgMgHgAAggHQgBgNgIgIQgIgHgNAAQgMAAgIAHQgIAIgCANIA8AAIAAAAg");
	this.shape_151.setTransform(-123.6,19.8);

	this.shape_152 = new cjs.Shape();
	this.shape_152.graphics.f("#0099CC").s().p("AgfBEQgLgHgGgMQgHgNAAgQQAAgQAHgLQAGgMALgHQAMgHAPAAQAMAAAJAFQAKAFAGAKIAAg9IAXAAIAACUIgXAAIAAgTQgGAKgJAFQgKAFgMAAQgPAAgMgHgAgQgJQgHAFgEAHQgFAIAAAKQAAAKAFAIQAEAIAHAEQAHAEAJAAQAKAAAHgEQAHgEAEgIQAFgIAAgKQAAgKgFgIQgEgHgHgFQgHgEgKAAQgJAAgHAEg");
	this.shape_152.setTransform(-136.8,17.7);

	this.shape_153 = new cjs.Shape();
	this.shape_153.graphics.f("#0099CC").s().p("AAcA2IAAg7QgBgMgGgHQgHgHgMAAQgMAAgIAJQgHAHgCANIAAA4IgXAAIAAhqIAXAAIAAAVQAGgLAKgFQAKgGAMABQATAAAKAKQALALAAAUIAABBg");
	this.shape_153.setTransform(-149.5,19.7);

	this.shape_154 = new cjs.Shape();
	this.shape_154.graphics.f("#0099CC").s().p("AgZAvQgMgHgHgMQgHgMAAgQQAAgPAHgNQAHgMAMgHQAMgGAPAAQATAAALAHQAMAIAFAOQAEAOgBASIhPAAQACANAJAHQAJAHAMAAQAIAAAIgDQAIgDAGgGIAMANQgIAJgLAEQgLAFgOAAQgQAAgMgHgAAggHQgBgNgIgIQgIgHgNAAQgMAAgIAHQgIAIgCANIA8AAIAAAAg");
	this.shape_154.setTransform(-162.2,19.8);

	this.shape_155 = new cjs.Shape();
	this.shape_155.graphics.f("#0099CC").s().p("AAcBKIAAg8QAAgMgHgFQgHgHgMAAQgIAAgHAEQgHAEgEAHQgDAHAAAKIAAA0IgXAAIAAiTIAXAAIAAA/QAGgMAKgFQAJgFANAAQATAAALALQAKALAAASIAABCg");
	this.shape_155.setTransform(-174.5,17.7);

	this.shape_156 = new cjs.Shape();
	this.shape_156.graphics.f("#0099CC").s().p("AgZAvQgMgHgHgMQgHgMAAgQQAAgPAHgNQAHgMAMgHQAMgGAPAAQATAAALAHQAMAIAFAOQAEAOgBASIhPAAQACANAJAHQAJAHAMAAQAIAAAIgDQAIgDAGgGIAMANQgIAJgLAEQgLAFgOAAQgQAAgMgHgAAggHQgBgNgIgIQgIgHgNAAQgMAAgIAHQgIAIgCANIA8AAIAAAAg");
	this.shape_156.setTransform(-187.3,19.8);

	this.shape_157 = new cjs.Shape();
	this.shape_157.graphics.f("#0099CC").s().p("AgdA2IAAhqIAXAAIAAAVQAGgKAIgGQAJgFANgBIAAAWQgLAAgIAEQgIADgDAHQgFAHgBAJIAAA3g");
	this.shape_157.setTransform(-196.3,19.8);

	this.shape_158 = new cjs.Shape();
	this.shape_158.graphics.f("#0099CC").s().p("Ag3BJIAAiQIAYAAIAAASQAFgKAKgEQAJgFAMAAQAPAAAMAGQAKAHAHAMQAHANgBAQQABAQgHALQgGAMgLAHQgMAHgPAAQgMAAgJgFQgKgFgFgKIAAA6gAgQgxQgHAFgFAHQgDAJAAAJQAAAQAJAIQAIAKAOAAQAJAAAHgEQAIgFAEgHQAEgHABgLQgBgJgEgJQgEgHgIgFQgHgEgJAAQgJAAgHAEg");
	this.shape_158.setTransform(-207.3,21.7);

	this.shape_159 = new cjs.Shape();
	this.shape_159.graphics.f("#0099CC").s().p("AgZAvQgMgHgHgMQgHgMAAgQQAAgPAHgNQAHgMAMgHQAMgGAPAAQATAAALAHQAMAIAFAOQAEAOgBASIhPAAQACANAJAHQAJAHAMAAQAIAAAIgDQAIgDAGgGIAMANQgIAJgLAEQgLAFgOAAQgQAAgMgHgAAggHQgBgNgIgIQgIgHgNAAQgMAAgIAHQgIAIgCANIA8AAIAAAAg");
	this.shape_159.setTransform(-220.5,19.8);

	this.shape_160 = new cjs.Shape();
	this.shape_160.graphics.f("#0099CC").s().p("AgdA2IAAhqIAXAAIAAAVQAGgKAIgGQAJgFANgBIAAAWQgLAAgIAEQgIADgDAHQgFAHgBAJIAAA3g");
	this.shape_160.setTransform(-229.5,19.8);

	this.shape_161 = new cjs.Shape();
	this.shape_161.graphics.f("#0099CC").s().p("AAcA2IAAg7QgBgMgGgHQgHgHgMAAQgMAAgIAJQgHAHgCANIAAA4IgXAAIAAhqIAXAAIAAAVQAGgLAKgFQAKgGAMABQATAAALAKQAJALABAUIAABBg");
	this.shape_161.setTransform(-251,19.7);

	this.shape_162 = new cjs.Shape();
	this.shape_162.graphics.f("#0099CC").s().p("AgKBLIAAhpIAVAAIAABpgAgIgzQgFgEAAgFQAAgHAFgDQADgEAFAAQAGAAAEAEQADADAAAHQAAAFgDAEQgEAEgGAAQgFAAgDgEg");
	this.shape_162.setTransform(-260.7,17.6);

	this.shape_163 = new cjs.Shape();
	this.shape_163.graphics.f("#0099CC").s().p("AgdA2IAAhqIAXAAIAAAVQAGgKAIgGQAJgFANgBIAAAWQgLAAgIAEQgHADgFAHQgEAHgBAJIAAA3g");
	this.shape_163.setTransform(-277.1,19.8);

	this.shape_164 = new cjs.Shape();
	this.shape_164.graphics.f("#0099CC").s().p("AgcAvQgNgHgGgMQgIgMABgQQgBgQAIgMQAGgMANgHQAMgGAQAAQARAAAMAGQANAHAGAMQAIAMgBAQQABAQgIAMQgGAMgNAHQgMAHgRAAQgQAAgMgHgAgQgdQgHAEgEAIQgEAIgBAJQABAPAIAKQAJAJAOAAQAPAAAJgJQAIgKABgPQgBgJgEgIQgEgIgHgEQgHgFgKABQgIgBgIAFg");
	this.shape_164.setTransform(-288,19.8);

	this.shape_165 = new cjs.Shape();
	this.shape_165.graphics.f("#0099CC").s().p("AgLBKIAAiTIAXAAIAACTg");
	this.shape_165.setTransform(-297.2,17.7);

	this.shape_166 = new cjs.Shape();
	this.shape_166.graphics.f("#0099CC").s().p("AgcAvQgNgHgGgMQgIgMABgQQgBgQAIgMQAGgMANgHQAMgGAQAAQARAAAMAGQANAHAGAMQAIAMgBAQQABAQgIAMQgGAMgNAHQgMAHgRAAQgQAAgMgHgAgQgdQgHAEgEAIQgEAIgBAJQABAPAIAKQAJAJAOAAQAPAAAJgJQAIgKABgPQAAgJgFgIQgEgIgHgEQgIgFgJABQgJgBgHAFg");
	this.shape_166.setTransform(-306.4,19.8);

	this.shape_167 = new cjs.Shape();
	this.shape_167.graphics.f("#0099CC").s().p("AgfBEQgLgHgGgMQgHgNAAgQQAAgQAHgLQAGgMALgHQAMgHAPAAQAMAAAJAFQAKAFAGAKIAAg9IAXAAIAACUIgXAAIAAgTQgGAKgJAFQgKAFgMAAQgPAAgMgHgAgQgJQgHAFgEAHQgFAIAAAKQAAAKAFAIQAEAIAHAEQAHAEAJAAQAKAAAHgEQAHgEAEgIQAFgIAAgKQAAgKgFgIQgEgHgHgFQgHgEgKAAQgJAAgHAEg");
	this.shape_167.setTransform(-320,17.7);

	this.shape_168 = new cjs.Shape();
	this.shape_168.graphics.f("#0099CC").s().p("AgZAvQgMgHgHgMQgHgMAAgQQAAgPAHgMQAHgNAMgGQAMgHAPAAQATAAALAIQAMAHAFAOQAEAOgBATIhPAAQACAMAJAHQAJAHAMAAQAIAAAIgDQAIgDAGgGIAMANQgIAJgLAEQgLAEgOABQgQgBgMgGgAAggHQgBgNgIgHQgIgIgNAAQgMAAgIAIQgIAHgCANIA8AAIAAAAg");
	this.shape_168.setTransform(320.2,-13.1);

	this.shape_169 = new cjs.Shape();
	this.shape_169.graphics.f("#0099CC").s().p("AgdA1IAAhpIAXAAIAAAVQAFgKAJgGQAJgGANAAIAAAWQgLAAgIADQgIAEgEAHQgEAGgBAKIAAA2g");
	this.shape_169.setTransform(311.1,-13.1);

	this.shape_170 = new cjs.Shape();
	this.shape_170.graphics.f("#0099CC").s().p("AgnArQgKgLAAgTIAAhCIAXAAIAAA7QAAAMAHAHQAGAHAMAAQAIAAAGgFQAHgEADgHQAEgIAAgIIAAg1IAXAAIAABqIgXAAIAAgVQgFALgKAFQgKAFgMABQgTgBgKgKg");
	this.shape_170.setTransform(299.7,-13.1);

	this.shape_171 = new cjs.Shape();
	this.shape_171.graphics.f("#0099CC").s().p("AgdA1IAAhpIAXAAIAAAVQAGgKAIgGQAJgGANAAIAAAWQgLAAgIADQgHAEgFAHQgEAGgBAKIAAA2g");
	this.shape_171.setTransform(290.2,-13.1);

	this.shape_172 = new cjs.Shape();
	this.shape_172.graphics.f("#0099CC").s().p("AgLBLIAAhpIAWAAIAABpgAgJgzQgEgEAAgFQAAgHAEgDQAEgEAFAAQAGAAAEAEQADADAAAHQAAAFgDAEQgEAEgGAAQgFAAgEgEg");
	this.shape_172.setTransform(282.6,-15.3);

	this.shape_173 = new cjs.Shape();
	this.shape_173.graphics.f("#0099CC").s().p("AgZAvQgMgHgHgMQgHgMAAgQQAAgPAHgMQAHgNAMgGQAMgHAPAAQATAAALAIQAMAHAFAOQAEAOgBATIhPAAQACAMAJAHQAJAHAMAAQAIAAAIgDQAIgDAGgGIAMANQgIAJgLAEQgLAEgOABQgQgBgMgGgAAggHQgBgNgIgHQgIgIgNAAQgMAAgIAIQgIAHgCANIA8AAIAAAAg");
	this.shape_173.setTransform(267.2,-13.1);

	this.shape_174 = new cjs.Shape();
	this.shape_174.graphics.f("#0099CC").s().p("AgEA/QgHgDgEgHQgEgHgBgLIAAg2IgPAAIAAgRIAPAAIAAgdIAXAAIAAAdIAfAAIAAARIgfAAIAAAyQAAAIADADQACAEAGgBIAIgBIAIgDIAFARQgFAEgHACQgHACgHAAQgIAAgFgDg");
	this.shape_174.setTransform(257.3,-14.3);

	this.shape_175 = new cjs.Shape();
	this.shape_175.graphics.f("#0099CC").s().p("AgnArQgJgLgBgTIAAhCIAXAAIAAA7QAAAMAHAHQAHAHALAAQAIAAAGgFQAHgEADgHQAEgIAAgIIAAg1IAXAAIAABqIgXAAIAAgVQgGALgJAFQgKAFgMABQgSgBgLgKg");
	this.shape_175.setTransform(246.5,-13.1);

	this.shape_176 = new cjs.Shape();
	this.shape_176.graphics.f("#0099CC").s().p("AgdAxQgIgEgFgHQgEgIgBgJQABgOAKgIQAKgIAUgBIAfAAIAAgDQAAgKgHgGQgGgFgMgBQgHABgIACQgIACgIAGIgJgQIAOgHIAOgFQAHgBAKAAQAUAAALAJQALAKAAASIABBFIgXAAIAAgNQgGAHgJAEQgJADgKAAQgMAAgIgFgAgUAJQgFAEAAAHQAAAHAGAEQAFAFAKAAQALgBAJgFQAIgGABgIIAAgKIgcAAIgDAAQgJAAgFADg");
	this.shape_176.setTransform(234,-13.1);

	this.shape_177 = new cjs.Shape();
	this.shape_177.graphics.f("#0099CC").s().p("AgWAyQgLgDgIgIIAJgQQAEAEAGADIAMAFIAMABQAIAAAEgDQAFgCABgGQgBgHgFgDQgGgDgIgDIgQgFQgIgDgGgGQgFgGgBgLQABgLAFgHQAFgHAKgDQAJgDAJAAQAKAAAKADQAJACAIAGIgIARQgIgFgIgCQgIgDgHAAQgGAAgFADQgDACAAAGQAAAFAFAEQAGADAHACIARAGQAJADAFAGQAFAGABALQgBALgFAHQgFAHgKAEQgJADgLAAQgLAAgMgEg");
	this.shape_177.setTransform(216.9,-13.1);

	this.shape_178 = new cjs.Shape();
	this.shape_178.graphics.f("#0099CC").s().p("AgLBLIAAhpIAWAAIAABpgAgIgzQgFgEAAgFQAAgHAFgDQADgEAFAAQAGAAAEAEQADADAAAHQAAAFgDAEQgEAEgGAAQgFAAgDgEg");
	this.shape_178.setTransform(209.5,-15.3);

	this.shape_179 = new cjs.Shape();
	this.shape_179.graphics.f("#0099CC").s().p("AgnArQgKgLAAgTIAAhCIAXAAIAAA7QAAAMAHAHQAGAHAMAAQAIAAAGgFQAHgEADgHQAEgIAAgIIAAg1IAXAAIAABqIgXAAIAAgVQgFALgKAFQgKAFgMABQgSgBgLgKg");
	this.shape_179.setTransform(199.9,-13.1);

	this.shape_180 = new cjs.Shape();
	this.shape_180.graphics.f("#0099CC").s().p("AhABGIAAiLIA6AAQAUAAAQAJQAQAJAKAQQAJAPAAAUQAAAUgJAQQgKAQgQAJQgRAJgUAAgAgoAxIAiAAQANgBALgFQAKgHAHgKQAGgLAAgPQAAgOgGgKQgHgLgLgHQgLgFgNgBIghAAg");
	this.shape_180.setTransform(186.4,-14.8);

	this.shape_181 = new cjs.Shape();
	this.shape_181.graphics.f("#0099CC").s().p("AgIAJQgDgDgBgGQABgFADgEQAEgDAEAAQAFAAAEADQAEAEAAAFQAAAGgEADQgEAEgFAAQgEAAgEgEg");
	this.shape_181.setTransform(169.1,-8.9);

	this.shape_182 = new cjs.Shape();
	this.shape_182.graphics.f("#0099CC").s().p("AgFA/QgGgDgEgHQgEgHAAgLIAAg2IgQAAIAAgRIAQAAIAAgdIAVAAIAAAdIAgAAIAAARIggAAIAAAyQAAAIAEADQADAEAFgBIAHgBIAJgDIAGARQgGAEgHACQgHACgHAAQgHAAgHgDg");
	this.shape_182.setTransform(163,-14.3);

	this.shape_183 = new cjs.Shape();
	this.shape_183.graphics.f("#0099CC").s().p("AgdAxQgIgEgFgHQgEgIgBgJQABgOAKgIQAKgIAUgBIAfAAIAAgDQAAgKgHgGQgGgFgMgBQgHABgIACQgIACgIAGIgJgQIAOgHIAOgFQAHgBAKAAQAUAAALAJQALAKAAASIABBFIgXAAIAAgNQgGAHgJAEQgJADgKAAQgMAAgIgFgAgUAJQgFAEAAAHQAAAHAGAEQAFAFAKAAQALgBAJgFQAIgGABgIIAAgKIgcAAIgDAAQgJAAgFADg");
	this.shape_183.setTransform(152.7,-13.1);

	this.shape_184 = new cjs.Shape();
	this.shape_184.graphics.f("#0099CC").s().p("AgmArQgLgLAAgTIAAhCIAXAAIAAA7QAAAMAHAHQAGAHAMAAQAIAAAHgFQAGgEAEgHQADgIAAgIIAAg1IAXAAIAABqIgXAAIAAgVQgFALgKAFQgKAFgMABQgTgBgJgKg");
	this.shape_184.setTransform(140.5,-13.1);

	this.shape_185 = new cjs.Shape();
	this.shape_185.graphics.f("#0099CC").s().p("AAhBJIAAg5QgGAJgJAFQgKAFgMAAQgPAAgMgHQgLgHgGgMQgHgLAAgQQAAgQAHgMQAGgNALgGQAMgHAPAAQAMAAAJAFQAKAFAGAJIAAgSIAXAAIAACQgAgQgwQgHAEgEAIQgFAIAAAKQAAALAFAHQAEAHAHAEQAHAFAJAAQAKAAAHgFQAHgEAEgHQAFgHAAgLQAAgKgFgIQgEgIgHgEQgHgEgKgBQgJABgHAEg");
	this.shape_185.setTransform(126.7,-11.2);

	this.shape_186 = new cjs.Shape();
	this.shape_186.graphics.f("#0099CC").s().p("AgZAvQgMgHgHgMQgHgMAAgQQAAgPAHgMQAHgNAMgGQAMgHAPAAQATAAALAIQAMAHAFAOQAEAOgBATIhPAAQACAMAJAHQAJAHAMAAQAIAAAIgDQAIgDAGgGIAMANQgIAJgLAEQgLAEgOABQgQgBgMgGgAAggHQgBgNgIgHQgIgIgNAAQgMAAgIAIQgIAHgCANIA8AAIAAAAg");
	this.shape_186.setTransform(114.6,-13.1);

	this.shape_187 = new cjs.Shape();
	this.shape_187.graphics.f("#0099CC").s().p("AgWAyQgLgDgIgIIAJgQQAEAEAGADIAMAFIAMABQAIAAAEgDQAFgCABgGQgBgHgGgDQgFgDgIgDIgQgFQgIgDgGgGQgFgGgBgLQABgLAFgHQAFgHAKgDQAJgDAJAAQAKAAAKADQAJACAIAGIgJARQgHgFgIgCQgIgDgHAAQgGAAgFADQgDACAAAGQAAAFAFAEQAGADAHACIARAGQAJADAFAGQAFAGABALQgBALgFAHQgFAHgKAEQgJADgLAAQgLAAgMgEg");
	this.shape_187.setTransform(104,-13.1);

	this.shape_188 = new cjs.Shape();
	this.shape_188.graphics.f("#0099CC").s().p("AAcA2IAAg7QgBgMgGgHQgHgHgMAAQgMAAgIAJQgHAHgCANIAAA4IgXAAIAAhqIAXAAIAAAVQAGgLAKgFQAKgGAMABQATAAAKAKQALALAAAUIAABBg");
	this.shape_188.setTransform(92.9,-13.2);

	this.shape_189 = new cjs.Shape();
	this.shape_189.graphics.f("#0099CC").s().p("AgcAvQgMgHgIgMQgGgMAAgQQAAgPAGgMQAIgNAMgGQANgHAPAAQARAAAMAHQANAGAGANQAIAMAAAPQAAAQgIAMQgGAMgNAHQgMAGgRABQgPgBgNgGgAgQgdQgHAEgEAIQgFAIAAAJQAAAQAJAJQAKAKANAAQAPAAAIgKQAJgJAAgQQAAgJgDgIQgFgIgHgEQgHgEgKgBQgIABgIAEg");
	this.shape_189.setTransform(79.9,-13.1);

	this.shape_190 = new cjs.Shape();
	this.shape_190.graphics.f("#0099CC").s().p("AgXAvQgMgHgGgMQgIgMAAgQQAAgPAIgMQAGgNAMgGQAMgHAPAAQAPAAALAEQALAFAHAIIgNAPQgFgGgIgDQgIgDgJAAQgIAAgIAFQgGAEgFAHQgDAIAAAJQAAAKADAIQAFAHAGAEQAIAFAIAAQAKAAAIgEQAIgDAGgGIANANQgIAKgLAEQgLAGgQAAQgPgBgMgGg");
	this.shape_190.setTransform(68,-13.1);

	this.shape_191 = new cjs.Shape();
	this.shape_191.graphics.f("#0099CC").s().p("AgcAvQgNgHgGgMQgIgMAAgQQAAgPAIgMQAGgNANgGQAMgHAQAAQAQAAANAHQAMAGAIANQAGAMAAAPQAAAQgGAMQgIAMgMAHQgNAGgQABQgQgBgMgGgAgQgdQgHAEgFAIQgDAIAAAJQAAAQAJAJQAIAKAOAAQAOAAAKgKQAJgJAAgQQAAgJgFgIQgEgIgHgEQgIgEgJgBQgJABgHAEg");
	this.shape_191.setTransform(49.3,-13.1);

	this.shape_192 = new cjs.Shape();
	this.shape_192.graphics.f("#0099CC").s().p("AgfBEQgLgHgGgMQgHgNAAgQQAAgQAHgLQAGgMALgHQAMgHAPAAQAMAAAJAFQAKAFAGAKIAAg9IAXAAIAACUIgXAAIAAgTQgGAKgJAFQgKAFgMAAQgPAAgMgHgAgQgJQgHAFgEAHQgFAIAAAKQAAAKAFAIQAEAIAHAEQAHAEAJAAQAKAAAHgEQAHgEAEgIQAFgIAAgKQAAgKgFgIQgEgHgHgFQgHgEgKAAQgJAAgHAEg");
	this.shape_192.setTransform(35.7,-15.2);

	this.shape_193 = new cjs.Shape();
	this.shape_193.graphics.f("#0099CC").s().p("AgcAvQgMgHgIgMQgGgMAAgQQAAgPAGgMQAIgNAMgGQANgHAPAAQARAAAMAHQANAGAGANQAIAMAAAPQAAAQgIAMQgGAMgNAHQgMAGgRABQgPgBgNgGgAgQgdQgHAEgEAIQgFAIAAAJQAAAQAJAJQAKAKANAAQAPAAAIgKQAJgJAAgQQAAgJgDgIQgFgIgHgEQgHgEgKgBQgIABgIAEg");
	this.shape_193.setTransform(23.2,-13.1);

	this.shape_194 = new cjs.Shape();
	this.shape_194.graphics.f("#0099CC").s().p("ABCA2IAAg7QAAgMgHgHQgGgHgMAAQgKAAgGAFQgHAEgDAHQgEAIABAIIAAA1IgXAAIAAg7QAAgMgHgHQgGgHgMAAQgJAAgGAFQgHAEgEAHQgEAIAAAIIAAA1IgWAAIAAhqIAWAAIAAAVQAHgLAJgFQAKgGANABQAPAAAJAGQAIAHAEAMQAGgNAKgGQAKgHAPABQASAAAKAKQALALAAAUIAABBg");
	this.shape_194.setTransform(6.7,-13.2);

	this.shape_195 = new cjs.Shape();
	this.shape_195.graphics.f("#0099CC").s().p("ABCA2IAAg7QgBgMgGgHQgHgHgMAAQgIAAgHAFQgGAEgEAHQgDAIgBAIIAAA1IgWAAIAAg7QAAgMgGgHQgHgHgLAAQgKAAgGAFQgHAEgDAHQgFAIAAAIIAAA1IgWAAIAAhqIAWAAIAAAVQAHgLAJgFQAKgGAOABQAOAAAJAGQAIAHAFAMQAEgNALgGQAKgHAPABQASAAAKAKQAKALABAUIAABBg");
	this.shape_195.setTransform(-14.2,-13.2);

	this.shape_196 = new cjs.Shape();
	this.shape_196.graphics.f("#0099CC").s().p("AgcAvQgMgHgIgMQgGgMgBgQQABgPAGgMQAIgNAMgGQANgHAPAAQAQAAANAHQAMAGAIANQAGAMABAPQgBAQgGAMQgIAMgMAHQgNAGgQABQgPgBgNgGgAgQgdQgHAEgFAIQgDAIAAAJQgBAQAKAJQAJAKANAAQAOAAAJgKQAKgJgBgQQAAgJgDgIQgFgIgHgEQgIgEgJgBQgIABgIAEg");
	this.shape_196.setTransform(-31,-13.1);

	this.shape_197 = new cjs.Shape();
	this.shape_197.graphics.f("#0099CC").s().p("AgXAvQgMgHgGgMQgIgMABgQQgBgPAIgMQAGgNAMgGQAMgHAPAAQAOAAAMAEQAKAFAIAIIgNAPQgFgGgHgDQgJgDgJAAQgIAAgIAFQgHAEgDAHQgFAIAAAJQAAAKAFAIQADAHAHAEQAIAFAIAAQAKAAAIgEQAIgDAFgGIAOANQgIAKgLAEQgMAGgPAAQgPgBgMgGg");
	this.shape_197.setTransform(-42.9,-13.1);

	this.shape_198 = new cjs.Shape();
	this.shape_198.graphics.f("#0099CC").s().p("AgdAxQgIgEgFgHQgEgIgBgJQABgOAKgIQAKgIAUgBIAfAAIAAgDQAAgKgHgGQgGgFgMgBQgHABgIACQgIACgIAGIgJgQIAOgHIAOgFQAHgBAKAAQAUAAALAJQALAKAAASIABBFIgXAAIAAgNQgGAHgJAEQgJADgKAAQgMAAgIgFgAgUAJQgFAEAAAHQAAAHAGAEQAFAFAKAAQALgBAJgFQAIgGABgIIAAgKIgcAAIgDAAQgJAAgFADg");
	this.shape_198.setTransform(-61.4,-13.1);

	this.shape_199 = new cjs.Shape();
	this.shape_199.graphics.f("#0099CC").s().p("AgZAvQgMgHgHgMQgHgMAAgQQAAgPAHgMQAHgNAMgGQAMgHAPAAQATAAALAIQAMAHAFAOQAEAOgBATIhPAAQACAMAJAHQAJAHAMAAQAIAAAIgDQAIgDAGgGIAMANQgIAJgLAEQgLAEgOABQgQgBgMgGgAAggHQgBgNgIgHQgIgIgNAAQgMAAgIAIQgIAHgCANIA8AAIAAAAg");
	this.shape_199.setTransform(-72.8,-13.1);

	this.shape_200 = new cjs.Shape();
	this.shape_200.graphics.f("#0099CC").s().p("AAaA1IgagnIgaAnIgZAAIAlg1Igjg0IAbAAIAWAkIAZgkIAZAAIgiA0IAkA1g");
	this.shape_200.setTransform(-91,-13.1);

	this.shape_201 = new cjs.Shape();
	this.shape_201.graphics.f("#0099CC").s().p("AgZAvQgMgHgHgMQgHgMAAgQQAAgPAHgMQAHgNAMgGQAMgHAPAAQATAAALAIQAMAHAFAOQAEAOgBATIhPAAQACAMAJAHQAJAHAMAAQAIAAAIgDQAIgDAGgGIAMANQgIAJgLAEQgLAEgOABQgQgBgMgGgAAggHQgBgNgIgHQgIgIgNAAQgMAAgIAIQgIAHgCANIA8AAIAAAAg");
	this.shape_201.setTransform(-102.4,-13.1);

	this.shape_202 = new cjs.Shape();
	this.shape_202.graphics.f("#0099CC").s().p("Ag3BJIAAiRIAYAAIAAATQAFgKAKgEQAJgFAMAAQAPAAAMAHQALAGAGANQAHAMgBAQQABAQgHALQgGAMgLAHQgMAGgPABQgLgBgKgEQgKgFgFgJIAAA5gAgQgwQgHAEgFAIQgDAHAAALQAAAPAJAJQAIAJAOAAQAJAAAHgFQAIgEAEgGQAEgJABgJQgBgLgEgHQgEgIgIgEQgHgFgJAAQgJAAgHAFg");
	this.shape_202.setTransform(-121.2,-11.2);

	this.shape_203 = new cjs.Shape();
	this.shape_203.graphics.f("#0099CC").s().p("AgKBLIAAhpIAVAAIAABpgAgIgzQgEgEgBgFQABgHAEgDQADgEAFAAQAGAAADAEQAEADAAAHQAAAFgEAEQgDAEgGAAQgFAAgDgEg");
	this.shape_203.setTransform(-131.4,-15.3);

	this.shape_204 = new cjs.Shape();
	this.shape_204.graphics.f("#0099CC").s().p("AgnArQgJgLgBgTIAAhCIAXAAIAAA7QAAAMAHAHQAHAHALAAQAIAAAGgFQAHgEADgHQAEgIAAgIIAAg1IAXAAIAABqIgXAAIAAgVQgGALgJAFQgKAFgMABQgSgBgLgKg");
	this.shape_204.setTransform(-141,-13.1);

	this.shape_205 = new cjs.Shape();
	this.shape_205.graphics.f("#0099CC").s().p("AAhBJIAAg5QgGAJgJAFQgKAFgMAAQgPAAgMgHQgLgHgGgMQgHgLAAgQQAAgQAHgMQAGgNALgGQAMgHAPAAQAMAAAJAFQAKAFAGAJIAAgSIAXAAIAACQgAgQgwQgHAEgEAIQgFAIAAAKQAAALAFAHQAEAHAHAEQAHAFAJAAQAKAAAHgFQAHgEAEgHQAFgHAAgLQAAgKgFgIQgEgIgHgEQgHgEgKgBQgJABgHAEg");
	this.shape_205.setTransform(-154.7,-11.2);

	this.shape_206 = new cjs.Shape();
	this.shape_206.graphics.f("#0099CC").s().p("AgKBLIAAhpIAVAAIAABpgAgIgzQgEgEgBgFQABgHAEgDQADgEAFAAQAGAAADAEQAEADAAAHQAAAFgEAEQgDAEgGAAQgFAAgDgEg");
	this.shape_206.setTransform(-163.8,-15.3);

	this.shape_207 = new cjs.Shape();
	this.shape_207.graphics.f("#0099CC").s().p("AgKBKIAAiTIAVAAIAACTg");
	this.shape_207.setTransform(-169.6,-15.2);

	this.shape_208 = new cjs.Shape();
	this.shape_208.graphics.f("#0099CC").s().p("AgdAxQgIgEgFgHQgEgIgBgJQABgOAKgIQAKgIAUgBIAfAAIAAgDQAAgKgHgGQgGgFgMgBQgHABgIACQgIACgIAGIgJgQIAOgHIAOgFQAHgBAKAAQAUAAALAJQALAKAAASIABBFIgXAAIAAgNQgGAHgJAEQgJADgKAAQgMAAgIgFgAgUAJQgFAEAAAHQAAAHAGAEQAFAFAKAAQALgBAJgFQAIgGABgIIAAgKIgcAAIgDAAQgJAAgFADg");
	this.shape_208.setTransform(-178.6,-13.1);

	this.shape_209 = new cjs.Shape();
	this.shape_209.graphics.f("#0099CC").s().p("AgEA/QgHgDgEgHQgEgHgBgLIAAg2IgPAAIAAgRIAPAAIAAgdIAXAAIAAAdIAfAAIAAARIgfAAIAAAyQAAAIACADQADAEAGgBIAIgBIAIgDIAFARQgFAEgHACQgHACgHAAQgIAAgFgDg");
	this.shape_209.setTransform(-194.9,-14.3);

	this.shape_210 = new cjs.Shape();
	this.shape_210.graphics.f("#0099CC").s().p("AgnArQgJgLgBgTIAAhCIAXAAIAAA7QAAAMAHAHQAHAHALAAQAIAAAGgFQAHgEADgHQAEgIAAgIIAAg1IAXAAIAABqIgXAAIAAgVQgGALgJAFQgKAFgMABQgSgBgLgKg");
	this.shape_210.setTransform(-205.8,-13.1);

	this.shape_211 = new cjs.Shape();
	this.shape_211.graphics.f("#0099CC").s().p("AgLBLIAAhpIAWAAIAABpgAgIgzQgFgEAAgFQAAgHAFgDQADgEAFAAQAGAAAEAEQADADAAAHQAAAFgDAEQgEAEgGAAQgFAAgDgEg");
	this.shape_211.setTransform(-221.7,-15.3);

	this.shape_212 = new cjs.Shape();
	this.shape_212.graphics.f("#0099CC").s().p("AgWAyQgLgDgIgIIAJgQQAEAEAGADIAMAFIAMABQAIAAAEgDQAFgCABgGQgBgHgGgDQgFgDgIgDIgQgFQgIgDgGgGQgFgGAAgLQAAgLAFgHQAFgHAKgDQAIgDAKAAQAKAAAKADQAJACAIAGIgJARQgGgFgJgCQgIgDgHAAQgGAAgFADQgEACAAAGQABAFAFAEQAGADAHACIARAGQAIADAGAGQAGAGAAALQAAALgGAHQgFAHgKAEQgJADgLAAQgLAAgMgEg");
	this.shape_212.setTransform(-229.4,-13.1);

	this.shape_213 = new cjs.Shape();
	this.shape_213.graphics.f("#0099CC").s().p("AgKBLIAAhpIAVAAIAABpgAgIgzQgFgEAAgFQAAgHAFgDQADgEAFAAQAGAAAEAEQADADAAAHQAAAFgDAEQgEAEgGAAQgFAAgDgEg");
	this.shape_213.setTransform(-236.8,-15.3);

	this.shape_214 = new cjs.Shape();
	this.shape_214.graphics.f("#0099CC").s().p("AAcA2IAAg7QAAgMgHgHQgGgHgNAAQgMAAgIAJQgIAHgBANIAAA4IgXAAIAAhqIAXAAIAAAVQAGgLAKgFQAJgGANABQATAAAKAKQALALAAAUIAABBg");
	this.shape_214.setTransform(-246.1,-13.2);

	this.shape_215 = new cjs.Shape();
	this.shape_215.graphics.f("#0099CC").s().p("AgWAyQgLgDgIgIIAJgQQAEAEAGADIAMAFIAMABQAIAAAEgDQAFgCABgGQgBgHgGgDQgFgDgIgDIgQgFQgIgDgGgGQgFgGAAgLQAAgLAFgHQAFgHAKgDQAIgDAKAAQAKAAAKADQAJACAIAGIgJARQgGgFgJgCQgIgDgHAAQgGAAgFADQgEACAAAGQABAFAFAEQAGADAHACIARAGQAIADAGAGQAGAGAAALQAAALgGAHQgFAHgKAEQgJADgLAAQgLAAgMgEg");
	this.shape_215.setTransform(-264.5,-13.1);

	this.shape_216 = new cjs.Shape();
	this.shape_216.graphics.f("#0099CC").s().p("AgKBLIAAhpIAVAAIAABpgAgIgzQgEgEgBgFQABgHAEgDQADgEAFAAQAGAAAEAEQADADAAAHQAAAFgDAEQgEAEgGAAQgFAAgDgEg");
	this.shape_216.setTransform(-271.9,-15.3);

	this.shape_217 = new cjs.Shape();
	this.shape_217.graphics.f("#0099CC").s().p("AgdA1IAAhpIAXAAIAAAVQAGgKAIgGQAJgGANAAIAAAWQgLAAgIADQgHAEgFAHQgEAGgBAKIAAA2g");
	this.shape_217.setTransform(-278,-13.1);

	this.shape_218 = new cjs.Shape();
	this.shape_218.graphics.f("#0099CC").s().p("AgcAvQgNgHgGgMQgIgMABgQQgBgPAIgMQAGgNANgGQAMgHAQAAQARAAAMAHQANAGAGANQAIAMgBAPQABAQgIAMQgGAMgNAHQgMAGgRABQgQgBgMgGgAgQgdQgHAEgEAIQgFAIAAAJQABAQAIAJQAJAKAOAAQAPAAAJgKQAIgJABgQQgBgJgEgIQgEgIgHgEQgHgEgKgBQgIABgIAEg");
	this.shape_218.setTransform(-288.9,-13.1);

	this.shape_219 = new cjs.Shape();
	this.shape_219.graphics.f("#0099CC").s().p("AgQBGQgJgFgHgKIAAATIgWAAIAAiUIAWAAIAAA9QAHgKAJgEQAJgFAMAAQAPAAAMAGQAKAHAHAMQAGAMAAAQQAAAQgGAMQgGAMgLAHQgMAGgPABQgMgBgJgEgAgQgJQgHAFgEAGQgEAIgBAKQABAQAIAJQAKAKANAAQAJAAAIgFQAHgEAEgIQAEgIABgKQgBgKgEgIQgEgGgHgFQgIgEgJAAQgJAAgHAEg");
	this.shape_219.setTransform(-301.4,-15.2);

	this.shape_220 = new cjs.Shape();
	this.shape_220.graphics.f("#0099CC").s().p("AgdAxQgIgEgFgHQgEgIgBgJQABgOAKgIQAKgIAUgBIAfAAIAAgDQAAgKgHgGQgGgFgMgBQgHABgIACQgIACgIAGIgJgQIAOgHIAOgFQAHgBAKAAQAUAAALAJQALAKAAASIABBFIgXAAIAAgNQgGAHgJAEQgJADgKAAQgMAAgIgFgAgUAJQgFAEAAAHQAAAHAGAEQAFAFAKAAQALgBAJgFQAIgGABgIIAAgKIgcAAIgDAAQgJAAgFADg");
	this.shape_220.setTransform(-314.9,-13.1);

	this.shape_221 = new cjs.Shape();
	this.shape_221.graphics.f("#0099CC").s().p("AgLBKIAAiTIAWAAIAACTg");
	this.shape_221.setTransform(-323.3,-15.2);

	this.shape_222 = new cjs.Shape();
	this.shape_222.graphics.f("#0099CC").s().p("AgcAvQgMgHgIgMQgGgMgBgQQABgQAGgMQAIgLAMgIQANgGAPAAQAQAAANAGQAMAIAHALQAIAMAAAQQAAAQgIAMQgHAMgMAHQgNAHgQAAQgPAAgNgHgAgQgdQgHAEgFAIQgEAHAAAKQAAAPAJAKQAKAJANAAQAPAAAIgJQAKgKgBgPQAAgKgDgHQgFgIgHgEQgIgFgJABQgJgBgHAFg");
	this.shape_222.setTransform(320.1,-46);

	this.shape_223 = new cjs.Shape();
	this.shape_223.graphics.f("#0099CC").s().p("AgXAvQgMgHgGgMQgIgMABgQQgBgPAIgNQAGgLAMgIQAMgGAPAAQAOAAAMAFQAKAEAIAIIgNAPQgFgGgHgDQgJgDgJAAQgIAAgIAEQgGAEgEAIQgEAIgBAJQABAKAEAHQAEAIAGAFQAIAEAIAAQAKAAAIgDQAIgDAFgHIAOANQgIAJgLAGQgMAEgPABQgPAAgMgHg");
	this.shape_223.setTransform(308.2,-46);

	this.shape_224 = new cjs.Shape();
	this.shape_224.graphics.f("#0099CC").s().p("ABCA2IAAg7QgBgMgGgHQgHgHgMAAQgIAAgHAFQgGAEgEAHQgDAIgBAIIAAA1IgWAAIAAg7QAAgMgGgHQgHgHgLAAQgKAAgGAFQgHAEgDAHQgFAIAAAIIAAA1IgWAAIAAhqIAWAAIAAAVQAHgLAJgFQAKgGAOABQAOAAAJAGQAIAHAFAMQAEgNALgGQAKgHAPABQASAAAKAKQAKALABAUIAABBg");
	this.shape_224.setTransform(292.3,-46.1);

	this.shape_225 = new cjs.Shape();
	this.shape_225.graphics.f("#0099CC").s().p("AgdAyQgIgEgFgIQgEgHgBgKQABgPAKgHQAKgIAUgBIAfAAIAAgDQAAgKgHgGQgGgGgMAAQgHAAgIADQgIACgIAGIgJgQIAOgIIAOgDQAHgCAKAAQAUAAALAJQALALAAARIABBFIgXAAIAAgNQgGAHgJADQgJAEgKAAQgMAAgIgEgAgUAJQgFAEAAAHQAAAIAGAEQAFADAKABQALAAAJgGQAIgFABgKIAAgJIgcAAIgDAAQgJAAgFADg");
	this.shape_225.setTransform(275.6,-46);

	this.shape_226 = new cjs.Shape();
	this.shape_226.graphics.f("#0099CC").s().p("AgLBKIAAiTIAXAAIAACTg");
	this.shape_226.setTransform(267.1,-48.1);

	this.shape_227 = new cjs.Shape();
	this.shape_227.graphics.f("#0099CC").s().p("AgKBKIAAiTIAWAAIAACTg");
	this.shape_227.setTransform(261.3,-48.1);

	this.shape_228 = new cjs.Shape();
	this.shape_228.graphics.f("#0099CC").s().p("AgmArQgLgLAAgTIAAhCIAXAAIAAA7QAAAMAHAHQAGAHAMAAQAIAAAHgFQAGgEAEgHQADgIAAgIIAAg1IAXAAIAABqIgXAAIAAgVQgFALgKAFQgKAFgMABQgTgBgJgKg");
	this.shape_228.setTransform(251.6,-46);

	this.shape_229 = new cjs.Shape();
	this.shape_229.graphics.f("#0099CC").s().p("AAcA2IAAg7QgBgMgGgHQgHgHgMAAQgMAAgIAJQgHAHgCANIAAA4IgXAAIAAhqIAXAAIAAAVQAGgLAKgFQAKgGAMABQATAAALAKQAJALABAUIAABBg");
	this.shape_229.setTransform(222.8,-46.1);

	this.shape_230 = new cjs.Shape();
	this.shape_230.graphics.f("#0099CC").s().p("AgcAvQgNgHgGgMQgIgMABgQQgBgQAIgMQAGgLANgIQAMgGAQAAQARAAAMAGQANAIAGALQAIAMgBAQQABAQgIAMQgGAMgNAHQgMAHgRAAQgQAAgMgHgAgQgdQgHAEgEAIQgEAHgBAKQABAPAIAKQAJAJAOAAQAPAAAJgJQAIgKABgPQAAgKgFgHQgEgIgHgEQgIgFgJABQgJgBgHAFg");
	this.shape_230.setTransform(209.8,-46);

	this.shape_231 = new cjs.Shape();
	this.shape_231.graphics.f("#0099CC").s().p("AgKBLIAAhpIAVAAIAABpgAgIgzQgEgEgBgFQABgHAEgDQADgEAFAAQAGAAADAEQAEADAAAHQAAAFgEAEQgDAEgGAAQgFAAgDgEg");
	this.shape_231.setTransform(200.7,-48.2);

	this.shape_232 = new cjs.Shape();
	this.shape_232.graphics.f("#0099CC").s().p("AgFA/QgGgDgEgHQgEgHAAgLIAAg2IgPAAIAAgRIAPAAIAAgdIAVAAIAAAdIAgAAIAAARIggAAIAAAyQAAAIADADQADAEAGgBIAHgBIAJgDIAGARQgHAEgGACQgHACgGAAQgIAAgHgDg");
	this.shape_232.setTransform(193.8,-47.2);

	this.shape_233 = new cjs.Shape();
	this.shape_233.graphics.f("#0099CC").s().p("AgdAyQgIgEgFgIQgEgHgBgKQABgPAKgHQAKgIAUgBIAfAAIAAgDQAAgKgHgGQgGgGgMAAQgHAAgIADQgIACgIAGIgJgQIAOgIIAOgDQAHgCAKAAQAUAAALAJQALALAAARIABBFIgXAAIAAgNQgGAHgJADQgJAEgKAAQgMAAgIgEgAgUAJQgFAEAAAHQAAAIAGAEQAFADAKABQALAAAJgGQAIgFABgKIAAgJIgcAAIgDAAQgJAAgFADg");
	this.shape_233.setTransform(183.6,-46);

	this.shape_234 = new cjs.Shape();
	this.shape_234.graphics.f("#0099CC").s().p("AgFA/QgGgDgEgHQgEgHAAgLIAAg2IgPAAIAAgRIAPAAIAAgdIAVAAIAAAdIAgAAIAAARIggAAIAAAyQAAAIADADQADAEAGgBIAHgBIAJgDIAGARQgHAEgGACQgHACgGAAQgJAAgGgDg");
	this.shape_234.setTransform(174,-47.2);

	this.shape_235 = new cjs.Shape();
	this.shape_235.graphics.f("#0099CC").s().p("AgKBLIAAhpIAVAAIAABpgAgIgzQgEgEAAgFQAAgHAEgDQADgEAFAAQAGAAADAEQAEADABAHQgBAFgEAEQgDAEgGAAQgFAAgDgEg");
	this.shape_235.setTransform(167,-48.2);

	this.shape_236 = new cjs.Shape();
	this.shape_236.graphics.f("#0099CC").s().p("AgXAvQgMgHgGgMQgIgMAAgQQAAgPAIgNQAGgLAMgIQAMgGAPAAQAPAAALAFQALAEAHAIIgMAPQgGgGgIgDQgHgDgKAAQgIAAgIAEQgHAEgEAIQgDAIAAAJQAAAKADAHQAEAIAHAFQAIAEAIAAQAKAAAIgDQAIgDAGgHIAMANQgHAJgLAGQgMAEgPABQgPAAgMgHg");
	this.shape_236.setTransform(158.5,-46);

	this.shape_237 = new cjs.Shape();
	this.shape_237.graphics.f("#0099CC").s().p("AgdA2IAAhqIAXAAIAAAVQAFgLAJgFQAJgFANAAIAAAVQgLAAgIAEQgIADgEAHQgEAGgBAKIAAA3g");
	this.shape_237.setTransform(149.7,-46);

	this.shape_238 = new cjs.Shape();
	this.shape_238.graphics.f("#0099CC").s().p("AgZAvQgMgHgHgMQgHgMAAgQQAAgPAHgNQAHgLAMgIQAMgGAPAAQATAAALAHQAMAIAFAOQAEAOgBASIhPAAQACANAJAHQAJAHAMAAQAIAAAIgDQAIgDAGgGIAMANQgIAJgLAEQgLAFgOAAQgQAAgMgHgAAggHQgBgNgIgIQgIgHgNAAQgMAAgIAHQgIAIgCANIA8AAIAAAAg");
	this.shape_238.setTransform(139.1,-46);

	this.shape_239 = new cjs.Shape();
	this.shape_239.graphics.f("#0099CC").s().p("AAaA1IgagnIgaAnIgZAAIAlg1Igjg0IAbAAIAWAkIAZgkIAZAAIgiA0IAkA1g");
	this.shape_239.setTransform(127.7,-46);

	this.shape_240 = new cjs.Shape();
	this.shape_240.graphics.f("#0099CC").s().p("AgZAvQgMgHgHgMQgHgMAAgQQAAgPAHgNQAHgLAMgIQAMgGAPAAQATAAALAHQAMAIAFAOQAEAOgBASIhPAAQACANAJAHQAJAHAMAAQAIAAAIgDQAIgDAGgGIAMANQgIAJgLAEQgLAFgOAAQgQAAgMgHgAAggHQgBgNgIgIQgIgHgNAAQgMAAgIAHQgIAIgCANIA8AAIAAAAg");
	this.shape_240.setTransform(116.3,-46);

	this.shape_241 = new cjs.Shape();
	this.shape_241.graphics.f("#0099CC").s().p("AgfBEQgLgHgGgMQgHgNAAgQQAAgQAHgLQAGgMALgHQAMgHAPAAQAMAAAJAFQAKAFAGAKIAAg9IAXAAIAACUIgXAAIAAgTQgGAKgJAFQgKAFgMAAQgPAAgMgHgAgQgJQgHAFgEAHQgFAIAAAKQAAAKAFAIQAEAIAHAEQAHAEAJAAQAKAAAHgEQAHgEAEgIQAFgIAAgKQAAgKgFgIQgEgHgHgFQgHgEgKAAQgJAAgHAEg");
	this.shape_241.setTransform(87.1,-48.1);

	this.shape_242 = new cjs.Shape();
	this.shape_242.graphics.f("#0099CC").s().p("AgnArQgJgLgBgTIAAhCIAXAAIAAA7QAAAMAHAHQAHAHALAAQAIAAAGgFQAHgEADgHQAEgIAAgIIAAg1IAXAAIAABqIgXAAIAAgVQgGALgJAFQgKAFgMABQgSgBgLgKg");
	this.shape_242.setTransform(74.1,-46);

	this.shape_243 = new cjs.Shape();
	this.shape_243.graphics.f("#0099CC").s().p("AgdA2IAAhqIAXAAIAAAVQAFgLAJgFQAJgFANAAIAAAVQgLAAgIAEQgHADgEAHQgFAGgBAKIAAA3g");
	this.shape_243.setTransform(64.6,-46);

	this.shape_244 = new cjs.Shape();
	this.shape_244.graphics.f("#0099CC").s().p("AgFA/QgGgDgEgHQgEgHAAgLIAAg2IgQAAIAAgRIAQAAIAAgdIAVAAIAAAdIAgAAIAAARIggAAIAAAyQAAAIAEADQADAEAFgBIAHgBIAJgDIAFARQgFAEgHACQgHACgHAAQgHAAgHgDg");
	this.shape_244.setTransform(55.9,-47.2);

	this.shape_245 = new cjs.Shape();
	this.shape_245.graphics.f("#0099CC").s().p("AgWAyQgLgDgIgIIAJgQQAEAEAGADIAMAFIAMABQAIAAAEgDQAFgCABgGQgBgHgGgDQgFgDgIgDIgQgFQgIgDgGgGQgFgGAAgLQAAgLAFgHQAFgHAKgDQAIgDAKAAQAKAAAKADQAJACAIAGIgJARQgGgFgJgCQgIgDgHAAQgGAAgFADQgEACABAGQAAAFAFAEQAGADAHACIARAGQAIADAGAGQAGAGAAALQAAALgGAHQgFAHgKAEQgJADgLAAQgLAAgMgEg");
	this.shape_245.setTransform(46.9,-46);

	this.shape_246 = new cjs.Shape();
	this.shape_246.graphics.f("#0099CC").s().p("AgcAvQgNgHgGgMQgIgMABgQQgBgQAIgMQAGgLANgIQAMgGAQAAQARAAAMAGQANAIAGALQAIAMgBAQQABAQgIAMQgGAMgNAHQgMAHgRAAQgQAAgMgHgAgQgdQgHAEgEAIQgEAHgBAKQABAPAIAKQAJAJAOAAQAPAAAJgJQAIgKABgPQAAgKgFgHQgEgIgHgEQgIgFgJABQgJgBgHAFg");
	this.shape_246.setTransform(36.1,-46);

	this.shape_247 = new cjs.Shape();
	this.shape_247.graphics.f("#0099CC").s().p("AAcA2IAAg7QAAgMgHgHQgHgHgMAAQgMAAgIAJQgIAHgBANIAAA4IgXAAIAAhqIAXAAIAAAVQAGgLAKgFQAKgGAMABQATAAAKAKQAKALABAUIAABBg");
	this.shape_247.setTransform(23.4,-46.1);

	this.shape_248 = new cjs.Shape();
	this.shape_248.graphics.f("#0099CC").s().p("AgVAyQgLgDgJgIIAJgQQAEAEAGADIAMAFIAMABQAIAAAFgDQAEgCAAgGQAAgHgFgDQgGgDgIgDIgQgFQgIgDgFgGQgGgGgBgLQABgLAFgHQAGgHAIgDQAJgDAKAAQAKAAAKADQAKACAHAGIgIARQgIgFgIgCQgIgDgHAAQgGAAgFADQgDACAAAGQgBAFAGAEQAGADAIACIAQAGQAIADAGAGQAFAGABALQgBALgFAHQgGAHgJAEQgJADgLAAQgLAAgLgEg");
	this.shape_248.setTransform(-4.2,-46);

	this.shape_249 = new cjs.Shape();
	this.shape_249.graphics.f("#0099CC").s().p("AgLBLIAAhpIAWAAIAABpgAgJgzQgEgEAAgFQAAgHAEgDQAEgEAFAAQAGAAAEAEQADADAAAHQAAAFgDAEQgEAEgGAAQgFAAgEgEg");
	this.shape_249.setTransform(-11.7,-48.2);

	this.shape_250 = new cjs.Shape();
	this.shape_250.graphics.f("#0099CC").s().p("AgnArQgKgLAAgTIAAhCIAXAAIAAA7QAAAMAHAHQAGAHAMAAQAIAAAHgFQAGgEADgHQAEgIAAgIIAAg1IAXAAIAABqIgXAAIAAgVQgGALgJAFQgKAFgMABQgTgBgKgKg");
	this.shape_250.setTransform(-21.2,-46);

	this.shape_251 = new cjs.Shape();
	this.shape_251.graphics.f("#0099CC").s().p("AAhBJIAAg5QgGAJgJAFQgKAFgMAAQgPAAgMgHQgLgHgGgMQgHgLAAgQQAAgQAHgMQAGgNALgGQAMgHAPAAQAMAAAJAFQAKAFAGAJIAAgSIAXAAIAACQgAgQgwQgHAEgEAIQgFAIAAAKQAAALAFAHQAEAHAHAEQAHAFAJAAQAKAAAHgFQAHgEAEgHQAFgHAAgLQAAgKgFgIQgEgIgHgEQgHgEgKgBQgJABgHAEg");
	this.shape_251.setTransform(-35,-44.1);

	this.shape_252 = new cjs.Shape();
	this.shape_252.graphics.f("#0099CC").s().p("AgMAUIAHgRIgEgEIgBgGQAAgFAEgEQADgDAFAAQAFAAADADQADADABAGIgBAGIgDAEIgLARg");
	this.shape_252.setTransform(-59.5,-41.1);

	this.shape_253 = new cjs.Shape();
	this.shape_253.graphics.f("#0099CC").s().p("ABCA2IAAg7QgBgMgGgHQgHgHgMAAQgIAAgHAFQgGAEgEAHQgDAIgBAIIAAA1IgWAAIAAg7QAAgMgGgHQgHgHgLAAQgKAAgGAFQgHAEgDAHQgFAIAAAIIAAA1IgWAAIAAhqIAWAAIAAAVQAHgLAJgFQAKgGAOABQAOAAAJAGQAIAHAFAMQAEgNALgGQAKgHAPABQASAAAKAKQAKALABAUIAABBg");
	this.shape_253.setTransform(-71.8,-46.1);

	this.shape_254 = new cjs.Shape();
	this.shape_254.graphics.f("#0099CC").s().p("AgdAyQgIgEgFgIQgEgHgBgKQABgPAKgHQAKgIAUgBIAfAAIAAgDQAAgKgHgGQgGgGgMAAQgHAAgIADQgIACgIAGIgJgQIAOgIIAOgDQAHgCAKAAQAUAAALAJQALALAAARIABBFIgXAAIAAgNQgGAHgJADQgJAEgKAAQgMAAgIgEgAgUAJQgFAEAAAHQAAAIAGAEQAFADAKABQALAAAJgGQAIgFABgKIAAgJIgcAAIgDAAQgJAAgFADg");
	this.shape_254.setTransform(-88.5,-46);

	this.shape_255 = new cjs.Shape();
	this.shape_255.graphics.f("#0099CC").s().p("AgKBLIAAhpIAVAAIAABpgAgIgzQgFgEAAgFQAAgHAFgDQADgEAFAAQAGAAAEAEQADADAAAHQAAAFgDAEQgEAEgGAAQgFAAgDgEg");
	this.shape_255.setTransform(-96.9,-48.2);

	this.shape_256 = new cjs.Shape();
	this.shape_256.graphics.f("#0099CC").s().p("AAcA2IAAg7QAAgMgHgHQgGgHgNAAQgMAAgIAJQgIAHgBANIAAA4IgXAAIAAhqIAXAAIAAAVQAGgLAKgFQAJgGANABQATAAAKAKQALALAAAUIAABBg");
	this.shape_256.setTransform(-106.2,-46.1);

	this.shape_257 = new cjs.Shape();
	this.shape_257.graphics.f("#0099CC").s().p("AgZAvQgMgHgHgMQgHgMAAgQQAAgPAHgNQAHgLAMgIQAMgGAPAAQATAAALAHQAMAIAFAOQAEAOgBASIhPAAQACANAJAHQAJAHAMAAQAIAAAIgDQAIgDAGgGIAMANQgIAJgLAEQgLAFgOAAQgQAAgMgHgAAggHQgBgNgIgIQgIgHgNAAQgMAAgIAHQgIAIgCANIA8AAIAAAAg");
	this.shape_257.setTransform(-118.8,-46);

	this.shape_258 = new cjs.Shape();
	this.shape_258.graphics.f("#0099CC").s().p("AgLA1IgphpIAYAAIAdBTIAdhTIAXAAIgpBpg");
	this.shape_258.setTransform(-129.8,-46);

	this.shape_259 = new cjs.Shape();
	this.shape_259.graphics.f("#0099CC").s().p("ABCA2IAAg7QAAgMgHgHQgGgHgMAAQgJAAgHAFQgGAEgEAHQgEAIAAAIIAAA1IgVAAIAAg7QgBgMgHgHQgGgHgMAAQgJAAgHAFQgGAEgEAHQgDAIAAAIIAAA1IgXAAIAAhqIAXAAIAAAVQAFgLAKgFQAKgGANABQAPAAAJAGQAJAHADAMQAGgNAKgGQAKgHAPABQASAAALAKQAKALAAAUIAABBg");
	this.shape_259.setTransform(-161.4,-46.1);

	this.shape_260 = new cjs.Shape();
	this.shape_260.graphics.f("#0099CC").s().p("AgLBLIAAhpIAWAAIAABpgAgIgzQgFgEAAgFQAAgHAFgDQADgEAFAAQAGAAAEAEQADADAAAHQAAAFgDAEQgEAEgGAAQgFAAgDgEg");
	this.shape_260.setTransform(-174.8,-48.2);

	this.shape_261 = new cjs.Shape();
	this.shape_261.graphics.f("#0099CC").s().p("AAcA2IAAg7QAAgMgHgHQgGgHgNAAQgMAAgIAJQgIAHgBANIAAA4IgXAAIAAhqIAXAAIAAAVQAGgLAKgFQAJgGANABQATAAALAKQAKALAAAUIAABBg");
	this.shape_261.setTransform(-184.1,-46.1);

	this.shape_262 = new cjs.Shape();
	this.shape_262.graphics.f("#0099CC").s().p("AgKBLIAAhpIAVAAIAABpgAgJgzQgDgEAAgFQAAgHADgDQAEgEAFAAQAGAAADAEQAEADABAHQgBAFgEAEQgDAEgGAAQgFAAgEgEg");
	this.shape_262.setTransform(-193.8,-48.2);

	this.shape_263 = new cjs.Shape();
	this.shape_263.graphics.f("#0099CC").s().p("ABCA2IAAg7QgBgMgGgHQgHgHgMAAQgJAAgGAFQgHAEgDAHQgDAIAAAIIAAA1IgXAAIAAg7QAAgMgGgHQgHgHgLAAQgKAAgGAFQgHAEgDAHQgFAIAAAIIAAA1IgWAAIAAhqIAWAAIAAAVQAHgLAJgFQAKgGAOABQAOAAAJAGQAIAHAFAMQAEgNALgGQAKgHAPABQASAAAKAKQALALAAAUIAABBg");
	this.shape_263.setTransform(-206.9,-46.1);

	this.shape_264 = new cjs.Shape();
	this.shape_264.graphics.f("#0099CC").s().p("AgfBEQgLgHgGgMQgHgNAAgQQAAgQAHgLQAGgMALgHQAMgHAPAAQAMAAAJAFQAKAFAGAKIAAg9IAXAAIAACUIgXAAIAAgTQgGAKgJAFQgKAFgMAAQgPAAgMgHgAgQgJQgHAFgEAHQgFAIAAAKQAAAKAFAIQAEAIAHAEQAHAEAJAAQAKAAAHgEQAHgEAEgIQAFgIAAgKQAAgKgFgIQgEgHgHgFQgHgEgKAAQgJAAgHAEg");
	this.shape_264.setTransform(-240.9,-48.1);

	this.shape_265 = new cjs.Shape();
	this.shape_265.graphics.f("#0099CC").s().p("AgdAyQgIgEgFgIQgEgHgBgKQABgPAKgHQAKgIAUgBIAfAAIAAgDQAAgKgHgGQgGgGgMAAQgHAAgIADQgIACgIAGIgJgQIAOgIIAOgDQAHgCAKAAQAUAAALAJQALALAAARIABBFIgXAAIAAgNQgGAHgJADQgJAEgKAAQgMAAgIgEgAgUAJQgFAEAAAHQAAAIAGAEQAFADAKABQALAAAJgGQAIgFABgKIAAgJIgcAAIgDAAQgJAAgFADg");
	this.shape_265.setTransform(-253.2,-46);

	this.shape_266 = new cjs.Shape();
	this.shape_266.graphics.f("#0099CC").s().p("ABCA2IAAg7QAAgMgHgHQgGgHgMAAQgKAAgGAFQgGAEgEAHQgDAIAAAIIAAA1IgXAAIAAg7QAAgMgHgHQgGgHgMAAQgJAAgHAFQgGAEgEAHQgDAIAAAIIAAA1IgXAAIAAhqIAXAAIAAAVQAFgLAKgFQAKgGANABQAPAAAJAGQAJAHADAMQAGgNAKgGQAKgHAPABQASAAAKAKQALALAAAUIAABBg");
	this.shape_266.setTransform(-285,-46.1);

	this.shape_267 = new cjs.Shape();
	this.shape_267.graphics.f("#0099CC").s().p("AgKBLIAAhpIAVAAIAABpgAgIgzQgFgEAAgFQAAgHAFgDQADgEAFAAQAGAAAEAEQADADAAAHQAAAFgDAEQgEAEgGAAQgFAAgDgEg");
	this.shape_267.setTransform(-298.5,-48.2);

	this.shape_268 = new cjs.Shape();
	this.shape_268.graphics.f("#0099CC").s().p("AAcA2IAAg7QAAgMgHgHQgGgHgNAAQgMAAgIAJQgIAHgBANIAAA4IgXAAIAAhqIAXAAIAAAVQAGgLAKgFQAJgGANABQATAAAKAKQALALAAAUIAABBg");
	this.shape_268.setTransform(-307.8,-46.1);

	this.shape_269 = new cjs.Shape();
	this.shape_269.graphics.f("#0099CC").s().p("AgZAvQgMgHgHgMQgHgMAAgQQAAgPAHgNQAHgLAMgIQAMgGAPAAQATAAALAHQAMAIAFAOQAEAOgBASIhPAAQACANAJAHQAJAHAMAAQAIAAAIgDQAIgDAGgGIAMANQgIAJgLAEQgLAFgOAAQgQAAgMgHgAAggHQgBgNgIgIQgIgHgNAAQgMAAgIAHQgIAIgCANIA8AAIAAAAg");
	this.shape_269.setTransform(-320.4,-46);

	this.shape_270 = new cjs.Shape();
	this.shape_270.graphics.f("#0099CC").s().p("AgFA/QgGgDgEgHQgEgHgBgLIAAg2IgOAAIAAgRIAOAAIAAgdIAWAAIAAAdIAgAAIAAARIggAAIAAAyQAAAIADADQAEAEAFgBIAHgBIAJgDIAGARQgHAEgGACQgHACgGAAQgIAAgHgDg");
	this.shape_270.setTransform(322,-80.1);

	this.shape_271 = new cjs.Shape();
	this.shape_271.graphics.f("#0099CC").s().p("AggBAQgNgIgHgNQgIgNAAgSIAAhRIAYAAIAABRQAAASAKAJQAKAKARAAQAQAAALgJQAJgLABgRIAAhRIAXAAIAABRQAAASgHANQgIANgOAIQgNAGgTAAQgSAAgOgGg");
	this.shape_271.setTransform(310.2,-80.5);

	this.shape_272 = new cjs.Shape();
	this.shape_272.graphics.f("#0099CC").s().p("AgIAJQgDgDgBgGQABgFADgEQAEgDAEAAQAFAAAEADQAEAEAAAFQAAAGgEADQgEAEgFAAQgEAAgEgEg");
	this.shape_272.setTransform(293.7,-74.7);

	this.shape_273 = new cjs.Shape();
	this.shape_273.graphics.f("#0099CC").s().p("AgdAxQgIgEgFgHQgEgIgBgJQABgOAKgIQAKgJAUAAIAfAAIAAgDQAAgLgHgFQgGgFgMAAQgHgBgIADQgIACgIAGIgJgQIAOgIIAOgEQAHgBAKAAQAUAAALAKQALAKAAARIABBFIgXAAIAAgNQgGAHgJADQgJAEgKAAQgMAAgIgFgAgUAJQgFAEAAAHQAAAHAGAEQAFAFAKAAQALgBAJgFQAIgGABgIIAAgKIgcAAIgDAAQgJAAgFADg");
	this.shape_273.setTransform(285.5,-78.9);

	this.shape_274 = new cjs.Shape();
	this.shape_274.graphics.f("#0099CC").s().p("AgmArQgLgLAAgTIAAhCIAXAAIAAA7QAAAMAHAHQAGAHAMAAQAIAAAHgFQAGgEAEgHQADgIAAgIIAAg1IAXAAIAABqIgXAAIAAgVQgFALgKAFQgKAFgMABQgTgBgJgKg");
	this.shape_274.setTransform(273.2,-78.9);

	this.shape_275 = new cjs.Shape();
	this.shape_275.graphics.f("#0099CC").s().p("AAhBJIAAg5QgGAJgJAFQgKAFgMAAQgPAAgMgHQgLgHgGgMQgHgLAAgQQAAgQAHgMQAGgNALgGQAMgHAPAAQAMAAAJAFQAKAFAGAJIAAgSIAXAAIAACQgAgQgwQgHAEgEAIQgFAIAAAKQAAALAFAHQAEAHAHAEQAHAFAJAAQAKAAAHgFQAHgEAEgHQAFgHAAgLQAAgKgFgIQgEgIgHgEQgHgEgKgBQgJABgHAEg");
	this.shape_275.setTransform(259.5,-77);

	this.shape_276 = new cjs.Shape();
	this.shape_276.graphics.f("#0099CC").s().p("AgKBLIAAhpIAVAAIAABpgAgJgzQgDgEAAgFQAAgHADgDQAEgEAFAAQAGAAADAEQAEADABAHQgBAFgEAEQgDAEgGAAQgFAAgEgEg");
	this.shape_276.setTransform(250.4,-81.1);

	this.shape_277 = new cjs.Shape();
	this.shape_277.graphics.f("#0099CC").s().p("AgLBKIAAiTIAXAAIAACTg");
	this.shape_277.setTransform(244.6,-81);

	this.shape_278 = new cjs.Shape();
	this.shape_278.graphics.f("#0099CC").s().p("AgdAxQgIgEgFgHQgEgIgBgJQABgOAKgIQAKgJAUAAIAfAAIAAgDQAAgLgHgFQgGgFgMAAQgHgBgIADQgIACgIAGIgJgQIAOgIIAOgEQAHgBAKAAQAUAAALAKQALAKAAARIABBFIgXAAIAAgNQgGAHgJADQgJAEgKAAQgMAAgIgFgAgUAJQgFAEAAAHQAAAHAGAEQAFAFAKAAQALgBAJgFQAIgGABgIIAAgKIgcAAIgDAAQgJAAgFADg");
	this.shape_278.setTransform(235.6,-78.9);

	this.shape_279 = new cjs.Shape();
	this.shape_279.graphics.f("#0099CC").s().p("AgdAxQgIgEgFgHQgEgIgBgJQABgOAKgIQAKgJAUAAIAfAAIAAgDQAAgLgHgFQgGgFgMAAQgHgBgIADQgIACgIAGIgJgQIAOgIIAOgEQAHgBAKAAQAUAAALAKQALAKAAARIABBFIgXAAIAAgNQgGAHgJADQgJAEgKAAQgMAAgIgFgAgUAJQgFAEAAAHQAAAHAGAEQAFAFAKAAQALgBAJgFQAIgGABgIIAAgKIgcAAIgDAAQgJAAgFADg");
	this.shape_279.setTransform(217.3,-78.9);

	this.shape_280 = new cjs.Shape();
	this.shape_280.graphics.f("#0099CC").s().p("AAcA2IAAg7QAAgMgHgHQgGgHgNAAQgMAAgIAJQgIAHgBANIAAA4IgXAAIAAhqIAXAAIAAAVQAGgLAKgFQAJgGANABQATAAAKAKQALALAAAUIAABBg");
	this.shape_280.setTransform(205.3,-79);

	this.shape_281 = new cjs.Shape();
	this.shape_281.graphics.f("#0099CC").s().p("AgYBFQgLgDgLgHIAKgQQAIAFAIADQAIADAKAAQAOAAAJgIQAJgIAAgOIAAgNQgFAIgJAFQgJAFgLAAQgPgBgKgGQgLgGgGgMQgGgKAAgQQAAgPAGgLQAGgMAKgGQALgGAOAAQAMgBAIAFQAKAFAFAIIAAgRIAXAAIAABfQAAAQgHALQgGALgNAGQgNAGgPAAQgNAAgKgEgAgPgyQgHAEgFAIQgDAHAAAKQAAAJADAIQAFAGAHAEQAHAFAIAAQAJAAAGgFQAIgEADgGQAEgIAAgJQAAgPgIgJQgJgJgNAAQgIAAgHAEg");
	this.shape_281.setTransform(191.7,-77);

	this.shape_282 = new cjs.Shape();
	this.shape_282.graphics.f("#0099CC").s().p("AgdAxQgIgEgFgHQgEgIgBgJQABgOAKgIQAKgJAUAAIAfAAIAAgDQAAgLgHgFQgGgFgMAAQgHgBgIADQgIACgIAGIgJgQIAOgIIAOgEQAHgBAKAAQAUAAALAKQALAKAAARIABBFIgXAAIAAgNQgGAHgJADQgJAEgKAAQgMAAgIgFgAgUAJQgFAEAAAHQAAAHAGAEQAFAFAKAAQALgBAJgFQAIgGABgIIAAgKIgcAAIgDAAQgJAAgFADg");
	this.shape_282.setTransform(179.6,-78.9);

	this.shape_283 = new cjs.Shape();
	this.shape_283.graphics.f("#0099CC").s().p("ABCA2IAAg7QgBgMgGgHQgHgHgMAAQgJAAgGAFQgHAEgDAHQgEAIABAIIAAA1IgXAAIAAg7QAAgMgHgHQgGgHgMAAQgJAAgGAFQgHAEgDAHQgFAIAAAIIAAA1IgWAAIAAhqIAWAAIAAAVQAHgLAJgFQAKgGANABQAOAAAKAGQAIAHAFAMQAEgNALgGQAKgHAPABQASAAAKAKQALALAAAUIAABBg");
	this.shape_283.setTransform(163.8,-79);

	this.shape_284 = new cjs.Shape();
	this.shape_284.graphics.f("#0099CC").s().p("AgZAvQgMgHgHgMQgHgMAAgQQAAgPAHgMQAHgNAMgGQAMgHAPAAQATAAALAIQAMAHAFAOQAEAOgBATIhPAAQACAMAJAHQAJAHAMAAQAIAAAIgDQAIgDAGgGIAMANQgIAIgLAFQgLAEgOABQgQgBgMgGgAAggHQgBgNgIgHQgIgIgNAAQgMAAgIAIQgIAHgCANIA8AAIAAAAg");
	this.shape_284.setTransform(140.8,-78.9);

	this.shape_285 = new cjs.Shape();
	this.shape_285.graphics.f("#0099CC").s().p("AgdA1IAAhpIAXAAIAAAVQAGgLAIgFQAJgGANAAIAAAWQgLAAgIADQgIAEgDAHQgFAGgBAKIAAA2g");
	this.shape_285.setTransform(131.7,-78.9);

	this.shape_286 = new cjs.Shape();
	this.shape_286.graphics.f("#0099CC").s().p("AgcAvQgMgHgHgMQgIgMAAgQQAAgPAIgMQAHgNAMgGQAMgHAQAAQAQAAANAHQAMAGAIANQAGAMAAAPQAAAQgGAMQgIAMgMAHQgNAGgQABQgQgBgMgGgAgQgdQgHAEgEAIQgEAIAAAJQAAAPAJAKQAIAKAOAAQAOAAAKgKQAIgKABgPQAAgJgFgIQgEgIgHgEQgIgEgJgBQgJABgHAEg");
	this.shape_286.setTransform(120.8,-78.9);

	this.shape_287 = new cjs.Shape();
	this.shape_287.graphics.f("#0099CC").s().p("AgLBKIAAiTIAXAAIAACTg");
	this.shape_287.setTransform(111.6,-81);

	this.shape_288 = new cjs.Shape();
	this.shape_288.graphics.f("#0099CC").s().p("AgcAvQgNgHgGgMQgIgMAAgQQAAgPAIgMQAGgNANgGQAMgHAQAAQAQAAANAHQAMAGAIANQAGAMAAAPQAAAQgGAMQgIAMgMAHQgNAGgQABQgQgBgMgGgAgQgdQgHAEgFAIQgDAIAAAJQAAAPAJAKQAIAKAOAAQAOAAAKgKQAJgKAAgPQAAgJgFgIQgEgIgHgEQgIgEgJgBQgJABgHAEg");
	this.shape_288.setTransform(102.4,-78.9);

	this.shape_289 = new cjs.Shape();
	this.shape_289.graphics.f("#0099CC").s().p("AgfBEQgLgHgGgMQgHgNAAgQQAAgQAHgLQAGgMALgHQAMgHAPAAQAMAAAJAFQAKAFAGAKIAAg9IAXAAIAACUIgXAAIAAgTQgGAKgJAFQgKAFgMAAQgPAAgMgHgAgQgJQgHAFgEAHQgFAIAAAKQAAAKAFAIQAEAIAHAEQAHAEAJAAQAKAAAHgEQAHgEAEgIQAFgIAAgKQAAgKgFgIQgEgHgHgFQgHgEgKAAQgJAAgHAEg");
	this.shape_289.setTransform(88.8,-81);

	this.shape_290 = new cjs.Shape();
	this.shape_290.graphics.f("#0099CC").s().p("AgEA/QgHgDgEgHQgEgHgBgLIAAg2IgPAAIAAgRIAPAAIAAgdIAXAAIAAAdIAfAAIAAARIgfAAIAAAyQAAAIACADQADAEAGgBIAIgBIAIgDIAFARQgFAEgHACQgHACgHAAQgIAAgFgDg");
	this.shape_290.setTransform(71.9,-80.1);

	this.shape_291 = new cjs.Shape();
	this.shape_291.graphics.f("#0099CC").s().p("AgZAvQgMgHgHgMQgHgMAAgQQAAgPAHgMQAHgNAMgGQAMgHAPAAQATAAALAIQAMAHAFAOQAEAOgBATIhPAAQACAMAJAHQAJAHAMAAQAIAAAIgDQAIgDAGgGIAMANQgIAIgLAFQgLAEgOABQgQgBgMgGgAAggHQgBgNgIgHQgIgIgNAAQgMAAgIAIQgIAHgCANIA8AAIAAAAg");
	this.shape_291.setTransform(61.9,-78.9);

	this.shape_292 = new cjs.Shape();
	this.shape_292.graphics.f("#0099CC").s().p("AgZAvQgMgHgHgMQgHgMAAgQQAAgPAHgMQAHgNAMgGQAMgHAPAAQATAAALAIQAMAHAFAOQAEAOgBATIhPAAQACAMAJAHQAJAHAMAAQAIAAAIgDQAIgDAGgGIAMANQgIAIgLAFQgLAEgOABQgQgBgMgGgAAggHQgBgNgIgHQgIgIgNAAQgMAAgIAIQgIAHgCANIA8AAIAAAAg");
	this.shape_292.setTransform(43.6,-78.9);

	this.shape_293 = new cjs.Shape();
	this.shape_293.graphics.f("#0099CC").s().p("AgdA1IAAhpIAXAAIAAAVQAGgLAIgFQAJgGANAAIAAAWQgLAAgIADQgHAEgFAHQgEAGgBAKIAAA2g");
	this.shape_293.setTransform(34.6,-78.9);

	this.shape_294 = new cjs.Shape();
	this.shape_294.graphics.f("#0099CC").s().p("AgcAvQgMgHgIgMQgGgMAAgQQAAgPAGgMQAIgNAMgGQANgHAPAAQARAAAMAHQANAGAGANQAIAMAAAPQAAAQgIAMQgGAMgNAHQgMAGgRABQgPgBgNgGgAgQgdQgHAEgEAIQgFAIAAAJQAAAPAJAKQAKAKANAAQAPAAAIgKQAJgKAAgPQAAgJgDgIQgFgIgHgEQgHgEgKgBQgIABgIAEg");
	this.shape_294.setTransform(23.6,-78.9);

	this.shape_295 = new cjs.Shape();
	this.shape_295.graphics.f("#0099CC").s().p("AgQBGQgJgFgHgKIAAATIgWAAIAAiUIAWAAIAAA9QAHgKAJgEQAJgFALAAQAQAAALAGQALAHAHAMQAGAMAAAQQAAAQgGAMQgGAMgMAHQgKAGgQABQgMgBgJgEgAgQgJQgHAFgEAGQgFAIAAAKQABAQAIAJQAKAKANAAQAJAAAIgFQAHgEAEgIQAEgIAAgKQAAgKgEgIQgEgGgHgFQgIgEgJAAQgIAAgIAEg");
	this.shape_295.setTransform(11.1,-81);

	this.shape_296 = new cjs.Shape();
	this.shape_296.graphics.f("#0099CC").s().p("AgdAxQgIgEgFgHQgEgIgBgJQABgOAKgIQAKgJAUAAIAfAAIAAgDQAAgLgHgFQgGgFgMAAQgHgBgIADQgIACgIAGIgJgQIAOgIIAOgEQAHgBAKAAQAUAAALAKQALAKAAARIABBFIgXAAIAAgNQgGAHgJADQgJAEgKAAQgMAAgIgFgAgUAJQgFAEAAAHQAAAHAGAEQAFAFAKAAQALgBAJgFQAIgGABgIIAAgKIgcAAIgDAAQgJAAgFADg");
	this.shape_296.setTransform(-2.3,-78.9);

	this.shape_297 = new cjs.Shape();
	this.shape_297.graphics.f("#0099CC").s().p("AgLBKIAAiTIAXAAIAACTg");
	this.shape_297.setTransform(-10.8,-81);

	this.shape_298 = new cjs.Shape();
	this.shape_298.graphics.f("#0099CC").s().p("AgFA/QgGgDgEgHQgEgHAAgLIAAg2IgQAAIAAgRIAQAAIAAgdIAVAAIAAAdIAgAAIAAARIggAAIAAAyQAAAIAEADQADAEAFgBIAHgBIAJgDIAGARQgHAEgGACQgHACgHAAQgIAAgGgDg");
	this.shape_298.setTransform(-24.3,-80.1);

	this.shape_299 = new cjs.Shape();
	this.shape_299.graphics.f("#0099CC").s().p("AgnArQgKgLAAgTIAAhCIAXAAIAAA7QAAAMAHAHQAGAHAMAAQAIAAAHgFQAGgEADgHQAEgIAAgIIAAg1IAXAAIAABqIgXAAIAAgVQgGALgJAFQgKAFgMABQgTgBgKgKg");
	this.shape_299.setTransform(-35.2,-78.9);

	this.shape_300 = new cjs.Shape();
	this.shape_300.graphics.f("#0099CC").s().p("AgFA/QgGgDgEgHQgEgHAAgLIAAg2IgQAAIAAgRIAQAAIAAgdIAVAAIAAAdIAgAAIAAARIggAAIAAAyQAAAIAEADQADAEAFgBIAHgBIAJgDIAFARQgFAEgHACQgHACgHAAQgHAAgHgDg");
	this.shape_300.setTransform(-52.1,-80.1);

	this.shape_301 = new cjs.Shape();
	this.shape_301.graphics.f("#0099CC").s().p("AAcA2IAAg7QAAgMgHgHQgGgHgNAAQgMAAgIAJQgIAHgBANIAAA4IgXAAIAAhqIAXAAIAAAVQAGgLAKgFQAJgGANABQATAAALAKQAKALAAAUIAABBg");
	this.shape_301.setTransform(-62.7,-79);

	this.shape_302 = new cjs.Shape();
	this.shape_302.graphics.f("#0099CC").s().p("AgmArQgLgLAAgTIAAhCIAXAAIAAA7QAAAMAHAHQAGAHAMAAQAIAAAHgFQAGgEAEgHQADgIAAgIIAAg1IAXAAIAABqIgXAAIAAgVQgGALgJAFQgKAFgMABQgTgBgJgKg");
	this.shape_302.setTransform(-76.2,-78.9);

	this.shape_303 = new cjs.Shape();
	this.shape_303.graphics.f("#0099CC").s().p("AgfBEQgLgHgGgMQgHgNAAgQQAAgQAHgLQAGgMALgHQAMgHAPAAQAMAAAJAFQAKAFAGAKIAAg9IAXAAIAACUIgXAAIAAgTQgGAKgJAFQgKAFgMAAQgPAAgMgHgAgQgJQgHAFgEAHQgFAIAAAKQAAAKAFAIQAEAIAHAEQAHAEAJAAQAKAAAHgEQAHgEAEgIQAFgIAAgKQAAgKgFgIQgEgHgHgFQgHgEgKAAQgJAAgHAEg");
	this.shape_303.setTransform(-90,-81);

	this.shape_304 = new cjs.Shape();
	this.shape_304.graphics.f("#0099CC").s().p("AgLBLIAAhpIAWAAIAABpgAgJgzQgDgEAAgFQAAgHADgDQAEgEAFAAQAGAAADAEQAEADABAHQgBAFgEAEQgDAEgGAAQgFAAgEgEg");
	this.shape_304.setTransform(-99.1,-81.1);

	this.shape_305 = new cjs.Shape();
	this.shape_305.graphics.f("#0099CC").s().p("AgfBEQgLgHgGgMQgHgNAAgQQAAgQAHgLQAGgMALgHQAMgHAPAAQAMAAAJAFQAKAFAGAKIAAg9IAXAAIAACUIgXAAIAAgTQgGAKgJAFQgKAFgMAAQgPAAgMgHgAgQgJQgHAFgEAHQgFAIAAAKQAAAKAFAIQAEAIAHAEQAHAEAJAAQAKAAAHgEQAHgEAEgIQAFgIAAgKQAAgKgFgIQgEgHgHgFQgHgEgKAAQgJAAgHAEg");
	this.shape_305.setTransform(-109.3,-81);

	this.shape_306 = new cjs.Shape();
	this.shape_306.graphics.f("#0099CC").s().p("AgLBLIAAhpIAWAAIAABpgAgJgzQgDgEAAgFQAAgHADgDQAEgEAFAAQAGAAADAEQAEADABAHQgBAFgEAEQgDAEgGAAQgFAAgEgEg");
	this.shape_306.setTransform(-118.4,-81.1);

	this.shape_307 = new cjs.Shape();
	this.shape_307.graphics.f("#0099CC").s().p("AgXAvQgMgHgHgMQgGgMgBgQQABgPAGgMQAHgNAMgGQAMgHAPAAQAOAAALAEQALAFAIAIIgMAPQgGgGgIgDQgHgDgKAAQgJAAgGAFQgHAEgFAHQgEAIAAAJQAAAKAEAIQAFAHAHAEQAGAFAJAAQAKAAAIgEQAIgDAFgGIANANQgHAKgMAEQgKAGgQAAQgPgBgMgGg");
	this.shape_307.setTransform(-126.9,-78.9);

	this.shape_308 = new cjs.Shape();
	this.shape_308.graphics.f("#0099CC").s().p("AAcA2IAAg7QAAgMgHgHQgGgHgNAAQgMAAgIAJQgIAHgBANIAAA4IgXAAIAAhqIAXAAIAAAVQAGgLAKgFQAJgGANABQATAAAKAKQALALAAAUIAABBg");
	this.shape_308.setTransform(-139,-79);

	this.shape_309 = new cjs.Shape();
	this.shape_309.graphics.f("#0099CC").s().p("AgLBLIAAhpIAWAAIAABpgAgJgzQgDgEAAgFQAAgHADgDQAEgEAFAAQAGAAADAEQAEADABAHQgBAFgEAEQgDAEgGAAQgFAAgEgEg");
	this.shape_309.setTransform(-148.7,-81.1);

	this.shape_310 = new cjs.Shape();
	this.shape_310.graphics.f("#0099CC").s().p("AgdA1IAAhpIAXAAIAAAVQAFgLAJgFQAJgGANAAIAAAWQgLAAgIADQgHAEgEAHQgFAGgBAKIAAA2g");
	this.shape_310.setTransform(-161.3,-78.9);

	this.shape_311 = new cjs.Shape();
	this.shape_311.graphics.f("#0099CC").s().p("AgcAvQgNgHgGgMQgIgMABgQQgBgPAIgMQAGgNANgGQAMgHAQAAQARAAAMAHQANAGAGANQAIAMgBAPQABAQgIAMQgGAMgNAHQgMAGgRABQgQgBgMgGgAgQgdQgHAEgEAIQgEAIgBAJQABAPAIAKQAJAKAOAAQAPAAAJgKQAIgKABgPQAAgJgFgIQgEgIgHgEQgIgEgJgBQgJABgHAEg");
	this.shape_311.setTransform(-172.3,-78.9);

	this.shape_312 = new cjs.Shape();
	this.shape_312.graphics.f("#0099CC").s().p("Ag3BJIAAiQIAYAAIAAASQAFgJAKgFQAJgFAMAAQAPAAAMAHQAKAGAHANQAHAMgBAQQABAQgHALQgGAMgLAHQgMAGgPABQgMgBgJgEQgKgFgFgJIAAA5gAgQgxQgHAFgFAIQgDAHAAALQAAAPAJAJQAIAJAOAAQAJAAAHgFQAIgEAEgGQAEgIABgKQgBgLgEgHQgEgIgIgFQgHgEgJAAQgJAAgHAEg");
	this.shape_312.setTransform(-184.8,-77);

	this.shape_313 = new cjs.Shape();
	this.shape_313.graphics.f("#0099CC").s().p("ABCA2IAAg7QgBgMgGgHQgHgHgMAAQgJAAgGAFQgHAEgDAHQgDAIAAAIIAAA1IgXAAIAAg7QAAgMgGgHQgHgHgLAAQgKAAgGAFQgHAEgDAHQgFAIAAAIIAAA1IgWAAIAAhqIAWAAIAAAVQAHgLAJgFQAKgGAOABQAOAAAJAGQAIAHAFAMQAEgNALgGQAKgHAPABQASAAAKAKQALALAAAUIAABBg");
	this.shape_313.setTransform(-202.4,-79);

	this.shape_314 = new cjs.Shape();
	this.shape_314.graphics.f("#0099CC").s().p("AgZAvQgMgHgHgMQgHgMAAgQQAAgPAHgMQAHgNAMgGQAMgHAPAAQATAAALAIQAMAHAFAOQAEAOgBATIhPAAQACAMAJAHQAJAHAMAAQAIAAAIgDQAIgDAGgGIAMANQgIAIgLAFQgLAEgOABQgQgBgMgGgAAggHQgBgNgIgHQgIgIgNAAQgMAAgIAIQgIAHgCANIA8AAIAAAAg");
	this.shape_314.setTransform(-218.8,-78.9);

	this.shape_315 = new cjs.Shape();
	this.shape_315.graphics.f("#0099CC").s().p("AgEA/QgHgDgEgHQgEgHgBgLIAAg2IgPAAIAAgRIAPAAIAAgdIAXAAIAAAdIAfAAIAAARIgfAAIAAAyQAAAIACADQADAEAGgBIAIgBIAIgDIAFARQgFAEgHACQgHACgHAAQgIAAgFgDg");
	this.shape_315.setTransform(-228.7,-80.1);

	this.shape_316 = new cjs.Shape();
	this.shape_316.graphics.f("#0099CC").s().p("AgfBEQgLgHgGgMQgHgNAAgQQAAgQAHgLQAGgMALgHQAMgHAPAAQAMAAAJAFQAKAFAGAKIAAg9IAXAAIAACUIgXAAIAAgTQgGAKgJAFQgKAFgMAAQgPAAgMgHgAgQgJQgHAFgEAHQgFAIAAAKQAAAKAFAIQAEAIAHAEQAHAEAJAAQAKAAAHgEQAHgEAEgIQAFgIAAgKQAAgKgFgIQgEgHgHgFQgHgEgKAAQgJAAgHAEg");
	this.shape_316.setTransform(-246.8,-81);

	this.shape_317 = new cjs.Shape();
	this.shape_317.graphics.f("#0099CC").s().p("AgcAvQgMgHgIgMQgGgMAAgQQAAgPAGgMQAIgNAMgGQAMgHAQAAQARAAAMAHQAMAGAHANQAIAMgBAPQABAQgIAMQgHAMgMAHQgMAGgRABQgQgBgMgGgAgQgdQgHAEgEAIQgFAIAAAJQABAPAIAKQAKAKANAAQAPAAAIgKQAJgKAAgPQAAgJgEgIQgEgIgHgEQgHgEgKgBQgIABgIAEg");
	this.shape_317.setTransform(-259.3,-78.9);

	this.shape_318 = new cjs.Shape();
	this.shape_318.graphics.f("#0099CC").s().p("ABCA2IAAg7QgBgMgGgHQgHgHgMAAQgJAAgGAFQgHAEgDAHQgEAIABAIIAAA1IgXAAIAAg7QAAgMgHgHQgGgHgMAAQgJAAgGAFQgHAEgDAHQgFAIAAAIIAAA1IgWAAIAAhqIAWAAIAAAVQAHgLAJgFQAKgGANABQAPAAAJAGQAIAHAFAMQAEgNALgGQAKgHAPABQASAAAKAKQALALAAAUIAABBg");
	this.shape_318.setTransform(-275.8,-79);

	this.shape_319 = new cjs.Shape();
	this.shape_319.graphics.f("#0099CC").s().p("AgVAyQgLgDgJgIIAJgQQAEAEAGADIAMAFIAMABQAIAAAEgDQAFgCABgGQgBgHgFgDQgGgDgIgDIgQgFQgIgDgGgGQgFgGgBgLQABgLAFgHQAGgHAJgDQAIgDAKAAQAKAAAKADQAKACAHAGIgIARQgIgFgIgCQgIgDgHAAQgGAAgFADQgDACAAAGQgBAFAGAEQAGADAHACIARAGQAIADAGAGQAFAGABALQgBALgFAHQgGAHgJAEQgJADgLAAQgLAAgLgEg");
	this.shape_319.setTransform(-291.2,-78.9);

	this.shape_320 = new cjs.Shape();
	this.shape_320.graphics.f("#0099CC").s().p("AgnArQgJgLgBgTIAAhCIAXAAIAAA7QAAAMAHAHQAHAHALAAQAIAAAGgFQAHgEADgHQAEgIAAgIIAAg1IAXAAIAABqIgXAAIAAgVQgGALgJAFQgKAFgMABQgSgBgLgKg");
	this.shape_320.setTransform(-302.5,-78.9);

	this.shape_321 = new cjs.Shape();
	this.shape_321.graphics.f("#0099CC").s().p("AgLBLIAAhpIAWAAIAABpgAgIgzQgFgEAAgFQAAgHAFgDQADgEAFAAQAGAAAEAEQADADAAAHQAAAFgDAEQgEAEgGAAQgFAAgDgEg");
	this.shape_321.setTransform(-311.7,-81.1);

	this.shape_322 = new cjs.Shape();
	this.shape_322.graphics.f("#0099CC").s().p("AgZAvQgMgHgHgMQgHgMAAgQQAAgPAHgMQAHgNAMgGQAMgHAPAAQATAAALAIQAMAHAFAOQAEAOgBATIhPAAQACAMAJAHQAJAHAMAAQAIAAAIgDQAIgDAGgGIAMANQgIAIgLAFQgLAEgOABQgQgBgMgGgAAggHQgBgNgIgHQgIgIgNAAQgMAAgIAIQgIAHgCANIA8AAIAAAAg");
	this.shape_322.setTransform(-320.4,-78.9);

	this.shape_323 = new cjs.Shape();
	this.shape_323.graphics.f("#0099CC").s().p("AgcAvQgMgHgIgMQgGgMAAgQQAAgPAGgNQAIgLAMgIQANgGAPAAQARAAAMAGQAMAIAHALQAIANAAAPQAAAQgIAMQgHAMgMAHQgMAGgRABQgPgBgNgGgAgQgdQgHAEgEAIQgFAHAAAKQABAPAIAKQAKAJANAAQAPAAAIgJQAJgKAAgPQAAgKgEgHQgEgIgHgEQgHgFgKAAQgIAAgIAFg");
	this.shape_323.setTransform(319.8,-111.8);

	this.shape_324 = new cjs.Shape();
	this.shape_324.graphics.f("#0099CC").s().p("AgfBEQgLgHgGgMQgHgNAAgQQAAgQAHgLQAGgMALgHQAMgHAPAAQAMAAAJAFQAKAFAGAKIAAg9IAXAAIAACUIgXAAIAAgTQgGAKgJAFQgKAFgMAAQgPAAgMgHgAgQgJQgHAFgEAHQgFAIAAAKQAAAKAFAIQAEAIAHAEQAHAEAJAAQAKAAAHgEQAHgEAEgIQAFgIAAgKQAAgKgFgIQgEgHgHgFQgHgEgKAAQgJAAgHAEg");
	this.shape_324.setTransform(306.2,-113.9);

	this.shape_325 = new cjs.Shape();
	this.shape_325.graphics.f("#0099CC").s().p("AgfBEQgLgHgGgMQgHgNAAgQQAAgQAHgLQAGgMALgHQAMgHAPAAQAMAAAJAFQAKAFAGAKIAAg9IAXAAIAACUIgXAAIAAgTQgGAKgJAFQgKAFgMAAQgPAAgMgHgAgQgJQgHAFgEAHQgFAIAAAKQAAAKAFAIQAEAIAHAEQAHAEAJAAQAKAAAHgEQAHgEAEgIQAFgIAAgKQAAgKgFgIQgEgHgHgFQgHgEgKAAQgJAAgHAEg");
	this.shape_325.setTransform(284.1,-113.9);

	this.shape_326 = new cjs.Shape();
	this.shape_326.graphics.f("#0099CC").s().p("AgZAvQgMgHgHgMQgHgMAAgQQAAgPAHgNQAHgLAMgIQAMgGAPAAQATAAALAHQAMAIAFAOQAEAOgBASIhPAAQACANAJAHQAJAHAMAAQAIAAAIgDQAIgDAGgGIAMANQgIAIgLAFQgLAFgOAAQgQgBgMgGgAAggHQgBgNgIgIQgIgHgNAAQgMAAgIAHQgIAIgCANIA8AAIAAAAg");
	this.shape_326.setTransform(272,-111.8);

	this.shape_327 = new cjs.Shape();
	this.shape_327.graphics.f("#0099CC").s().p("AgWAyQgKgDgJgIIAIgQQAFAEAGADIANAFIALABQAHAAAFgDQAFgCAAgGQAAgHgGgDQgFgDgIgDIgQgFQgIgDgGgGQgFgGAAgLQAAgLAFgHQAFgHAJgDQAKgDAJAAQAKAAAKADQAKACAHAGIgJARQgHgFgHgCQgJgDgHAAQgGAAgEADQgFACAAAGQABAFAFAEQAGADAHACIARAGQAIADAGAGQAGAGAAALQAAALgGAHQgGAHgJAEQgJADgLAAQgLAAgMgEg");
	this.shape_327.setTransform(261.3,-111.8);

	this.shape_328 = new cjs.Shape();
	this.shape_328.graphics.f("#0099CC").s().p("AgNAUIAIgRIgEgEIgBgGQAAgFADgEQAEgDAEAAQAFAAAEADQAEADgBAGIgBAGIgCAEIgKARg");
	this.shape_328.setTransform(246,-106.9);

	this.shape_329 = new cjs.Shape();
	this.shape_329.graphics.f("#0099CC").s().p("AgFA/QgGgDgEgHQgEgHgBgLIAAg2IgOAAIAAgRIAOAAIAAgdIAXAAIAAAdIAfAAIAAARIgfAAIAAAyQAAAIACADQADAEAGgBIAHgBIAJgDIAGARQgHAEgGACQgHACgGAAQgIAAgHgDg");
	this.shape_329.setTransform(240,-113);

	this.shape_330 = new cjs.Shape();
	this.shape_330.graphics.f("#0099CC").s().p("AgKBLIAAhpIAVAAIAABpgAgIgzQgFgEAAgFQAAgHAFgDQADgEAFAAQAGAAAEAEQADADAAAHQAAAFgDAEQgEAEgGAAQgFAAgDgEg");
	this.shape_330.setTransform(233,-114);

	this.shape_331 = new cjs.Shape();
	this.shape_331.graphics.f("#0099CC").s().p("AgKBKIAAiTIAVAAIAACTg");
	this.shape_331.setTransform(227.2,-113.9);

	this.shape_332 = new cjs.Shape();
	this.shape_332.graphics.f("#0099CC").s().p("AgZAvQgMgHgHgMQgHgMAAgQQAAgPAHgNQAHgLAMgIQAMgGAPAAQATAAALAHQAMAIAFAOQAEAOgBASIhPAAQACANAJAHQAJAHAMAAQAIAAAIgDQAIgDAGgGIAMANQgIAIgLAFQgLAFgOAAQgQgBgMgGgAAggHQgBgNgIgIQgIgHgNAAQgMAAgIAHQgIAIgCANIA8AAIAAAAg");
	this.shape_332.setTransform(218.4,-111.8);

	this.shape_333 = new cjs.Shape();
	this.shape_333.graphics.f("#0099CC").s().p("AgYBFQgMgDgJgHIAKgQQAHAFAIADQAIADAKAAQAOAAAJgIQAJgIAAgOIAAgNQgFAIgJAFQgJAFgLAAQgOgBgLgGQgLgGgGgMQgGgKAAgQQAAgPAGgLQAGgMAKgGQALgGAOAAQALgBAJAFQAJAFAGAIIAAgRIAXAAIAABfQAAAQgHALQgGALgNAGQgNAGgPAAQgMAAgLgEgAgPgyQgIAEgDAIQgEAHgBAKQABAJAEAIQADAGAIAEQAGAFAJAAQAIAAAHgFQAHgEAFgGQADgIAAgJQAAgPgJgJQgHgJgOAAQgJAAgGAEg");
	this.shape_333.setTransform(197.3,-109.9);

	this.shape_334 = new cjs.Shape();
	this.shape_334.graphics.f("#0099CC").s().p("AAcA2IAAg7QAAgMgHgHQgGgHgNAAQgMAAgIAJQgIAHgBANIAAA4IgXAAIAAhqIAXAAIAAAVQAGgLAKgFQAJgGANABQATAAALAKQAKALAAAUIAABBg");
	this.shape_334.setTransform(184.9,-111.9);

	this.shape_335 = new cjs.Shape();
	this.shape_335.graphics.f("#0099CC").s().p("AgKBLIAAhpIAVAAIAABpgAgJgzQgDgEAAgFQAAgHADgDQAEgEAFAAQAGAAADAEQAEADABAHQgBAFgEAEQgDAEgGAAQgFAAgEgEg");
	this.shape_335.setTransform(175.2,-114);

	this.shape_336 = new cjs.Shape();
	this.shape_336.graphics.f("#0099CC").s().p("AgXAvQgMgHgHgMQgHgMAAgQQAAgPAHgNQAHgLAMgIQAMgGAPAAQAOAAALAFQAMAEAHAIIgMAPQgGgGgIgDQgIgDgJAAQgIAAgIAEQgGAEgFAIQgDAIAAAJQAAAKADAHQAFAIAGAFQAIAEAIAAQAKAAAIgDQAIgEAGgGIAMANQgHAJgMAGQgLAFgPAAQgPgBgMgGg");
	this.shape_336.setTransform(166.7,-111.8);

	this.shape_337 = new cjs.Shape();
	this.shape_337.graphics.f("#0099CC").s().p("AgWAyQgLgDgIgIIAJgQQAEAEAGADIAMAFIAMABQAIAAAEgDQAFgCABgGQgBgHgGgDQgFgDgIgDIgQgFQgIgDgGgGQgFgGAAgLQAAgLAFgHQAFgHAKgDQAIgDAKAAQAKAAAKADQAJACAIAGIgJARQgGgFgJgCQgIgDgHAAQgGAAgFADQgEACABAGQAAAFAFAEQAGADAHACIARAGQAIADAGAGQAGAGAAALQAAALgGAHQgFAHgKAEQgJADgLAAQgLAAgMgEg");
	this.shape_337.setTransform(156.3,-111.8);

	this.shape_338 = new cjs.Shape();
	this.shape_338.graphics.f("#0099CC").s().p("AgKBLIAAhpIAVAAIAABpgAgIgzQgFgEAAgFQAAgHAFgDQADgEAFAAQAGAAAEAEQADADAAAHQAAAFgDAEQgEAEgGAAQgFAAgDgEg");
	this.shape_338.setTransform(148.8,-114);

	this.shape_339 = new cjs.Shape();
	this.shape_339.graphics.f("#0099CC").s().p("Ag2BJIAAiRIAWAAIAAATQAHgJAJgFQAJgFALAAQAQAAALAGQALAIAHALQAGANABAQQgBAQgGALQgGAMgMAHQgLAGgPABQgLAAgKgFQgJgFgHgKIAAA6gAgQgwQgHAEgEAHQgFAIAAAKQAAAQAJAIQAKAKANAAQAJAAAIgEQAHgFAEgHQAEgHAAgLQAAgKgEgIQgEgHgHgEQgIgFgJAAQgIAAgIAFg");
	this.shape_339.setTransform(139.7,-109.9);

	this.shape_340 = new cjs.Shape();
	this.shape_340.graphics.f("#0099CC").s().p("AgLBLIAAhpIAWAAIAABpgAgJgzQgDgEAAgFQAAgHADgDQAEgEAFAAQAGAAADAEQAEADABAHQgBAFgEAEQgDAEgGAAQgFAAgEgEg");
	this.shape_340.setTransform(129.5,-114);

	this.shape_341 = new cjs.Shape();
	this.shape_341.graphics.f("#0099CC").s().p("AgfBEQgLgHgGgMQgHgNAAgQQAAgQAHgLQAGgMALgHQAMgHAPAAQAMAAAJAFQAKAFAGAKIAAg9IAXAAIAACUIgXAAIAAgTQgGAKgJAFQgKAFgMAAQgPAAgMgHgAgQgJQgHAFgEAHQgFAIAAAKQAAAKAFAIQAEAIAHAEQAHAEAJAAQAKAAAHgEQAHgEAEgIQAFgIAAgKQAAgKgFgIQgEgHgHgFQgHgEgKAAQgJAAgHAEg");
	this.shape_341.setTransform(119.3,-113.9);

	this.shape_342 = new cjs.Shape();
	this.shape_342.graphics.f("#0099CC").s().p("AgdAyQgIgFgFgHQgEgIgBgJQABgPAKgHQAKgIAUgBIAfAAIAAgDQAAgLgHgFQgGgGgMAAQgHAAgIADQgIADgIAFIgJgQIAOgHIAOgFQAHgBAKAAQAUAAALAJQALALAAARIABBFIgXAAIAAgNQgGAHgJAEQgJADgKAAQgMAAgIgEgAgUAJQgFADAAAIQAAAHAGAFQAFAEAKAAQALAAAJgGQAIgFABgKIAAgJIgcAAIgDAAQgJAAgFADg");
	this.shape_342.setTransform(106.9,-111.8);

	this.shape_343 = new cjs.Shape();
	this.shape_343.graphics.f("#0099CC").s().p("AgdA2IAAhqIAXAAIAAAVQAFgLAJgFQAJgGANABIAAAVQgLAAgIAEQgIADgEAHQgEAHgBAJIAAA3g");
	this.shape_343.setTransform(89.7,-111.8);

	this.shape_344 = new cjs.Shape();
	this.shape_344.graphics.f("#0099CC").s().p("AgnArQgKgLAAgTIAAhCIAXAAIAAA7QAAAMAHAHQAGAHAMAAQAIAAAHgFQAGgEADgHQAEgIAAgIIAAg1IAXAAIAABqIgXAAIAAgVQgFALgKAFQgKAFgMABQgTgBgKgKg");
	this.shape_344.setTransform(78.3,-111.8);

	this.shape_345 = new cjs.Shape();
	this.shape_345.graphics.f("#0099CC").s().p("AgEA/QgHgDgEgHQgEgHgBgLIAAg2IgOAAIAAgRIAOAAIAAgdIAXAAIAAAdIAfAAIAAARIgfAAIAAAyQAAAIACADQADAEAGgBIAIgBIAIgDIAFARQgGAEgGACQgHACgGAAQgJAAgFgDg");
	this.shape_345.setTransform(68,-113);

	this.shape_346 = new cjs.Shape();
	this.shape_346.graphics.f("#0099CC").s().p("AgZAvQgMgHgHgMQgHgMAAgQQAAgPAHgNQAHgLAMgIQAMgGAPAAQATAAALAHQAMAIAFAOQAEAOgBASIhPAAQACANAJAHQAJAHAMAAQAIAAAIgDQAIgDAGgGIAMANQgIAIgLAFQgLAFgOAAQgQgBgMgGgAAggHQgBgNgIgIQgIgHgNAAQgMAAgIAHQgIAIgCANIA8AAIAAAAg");
	this.shape_346.setTransform(58,-111.8);

	this.shape_347 = new cjs.Shape();
	this.shape_347.graphics.f("#0099CC").s().p("AgFA/QgGgDgEgHQgEgHAAgLIAAg2IgQAAIAAgRIAQAAIAAgdIAVAAIAAAdIAgAAIAAARIggAAIAAAyQAAAIAEADQADAEAFgBIAHgBIAJgDIAGARQgHAEgGACQgHACgHAAQgIAAgGgDg");
	this.shape_347.setTransform(48.1,-113);

	this.shape_348 = new cjs.Shape();
	this.shape_348.graphics.f("#0099CC").s().p("AgXAvQgMgHgHgMQgGgMAAgQQAAgPAGgNQAHgLAMgIQAMgGAPAAQAPAAAKAFQALAEAIAIIgNAPQgFgGgHgDQgIgDgKAAQgJAAgGAEQgIAEgDAIQgFAIAAAJQAAAKAFAHQADAIAIAFQAGAEAJAAQAKAAAIgDQAIgEAFgGIAOANQgIAJgMAGQgKAFgQAAQgPgBgMgGg");
	this.shape_348.setTransform(38.3,-111.8);

	this.shape_349 = new cjs.Shape();
	this.shape_349.graphics.f("#0099CC").s().p("AgZAvQgMgHgHgMQgHgMAAgQQAAgPAHgNQAHgLAMgIQAMgGAPAAQATAAALAHQAMAIAFAOQAEAOgBASIhPAAQACANAJAHQAJAHAMAAQAIAAAIgDQAIgDAGgGIAMANQgIAIgLAFQgLAFgOAAQgQgBgMgGgAAggHQgBgNgIgIQgIgHgNAAQgMAAgIAHQgIAIgCANIA8AAIAAAAg");
	this.shape_349.setTransform(26.8,-111.8);

	this.shape_350 = new cjs.Shape();
	this.shape_350.graphics.f("#0099CC").s().p("AgWAyQgKgDgJgIIAIgQQAFAEAGADIANAFIALABQAHAAAGgDQAEgCAAgGQAAgHgGgDQgFgDgIgDIgQgFQgIgDgFgGQgGgGAAgLQAAgLAFgHQAFgHAJgDQAKgDAJAAQAKAAAKADQAJACAIAGIgJARQgHgFgHgCQgJgDgHAAQgGAAgEADQgFACAAAGQAAAFAGAEQAGADAIACIAQAGQAJADAFAGQAGAGAAALQAAALgGAHQgGAHgJAEQgJADgLAAQgLAAgMgEg");
	this.shape_350.setTransform(16.2,-111.8);

	this.shape_351 = new cjs.Shape();
	this.shape_351.graphics.f("#0099CC").s().p("AAcA2IAAg7QgBgMgGgHQgGgHgNAAQgMAAgIAJQgHAHgCANIAAA4IgXAAIAAhqIAXAAIAAAVQAGgLAKgFQAKgGAMABQATAAALAKQAJALABAUIAABBg");
	this.shape_351.setTransform(5.1,-111.9);

	this.shape_352 = new cjs.Shape();
	this.shape_352.graphics.f("#0099CC").s().p("AgcAvQgMgHgHgMQgIgMAAgQQAAgPAIgNQAHgLAMgIQAMgGAQAAQAQAAANAGQAMAIAIALQAGANAAAPQAAAQgGAMQgIAMgMAHQgNAGgQABQgQgBgMgGgAgQgdQgHAEgFAIQgDAHAAAKQAAAPAJAKQAIAJAOAAQAOAAAKgJQAIgKABgPQAAgKgFgHQgEgIgHgEQgIgFgJAAQgJAAgHAFg");
	this.shape_352.setTransform(-7.9,-111.8);

	this.shape_353 = new cjs.Shape();
	this.shape_353.graphics.f("#0099CC").s().p("AgXAvQgMgHgHgMQgGgMgBgQQABgPAGgNQAHgLAMgIQAMgGAPAAQAOAAALAFQALAEAIAIIgMAPQgGgGgIgDQgHgDgKAAQgJAAgGAEQgHAEgFAIQgEAIAAAJQAAAKAEAHQAFAIAHAFQAGAEAJAAQAKAAAIgDQAIgEAFgGIANANQgHAJgMAGQgKAFgQAAQgPgBgMgGg");
	this.shape_353.setTransform(-19.8,-111.8);

	this.shape_354 = new cjs.Shape();
	this.shape_354.graphics.f("#0099CC").s().p("AgMAUIAHgRIgEgEIgBgGQAAgFADgEQAEgDAEAAQAGAAADADQADADABAGIgBAGIgDAEIgLARg");
	this.shape_354.setTransform(-36.2,-106.9);

	this.shape_355 = new cjs.Shape();
	this.shape_355.graphics.f("#0099CC").s().p("AgFA/QgGgDgEgHQgEgHAAgLIAAg2IgQAAIAAgRIAQAAIAAgdIAVAAIAAAdIAgAAIAAARIggAAIAAAyQAAAIAEADQADAEAFgBIAHgBIAJgDIAFARQgFAEgHACQgHACgHAAQgHAAgHgDg");
	this.shape_355.setTransform(-42.2,-113);

	this.shape_356 = new cjs.Shape();
	this.shape_356.graphics.f("#0099CC").s().p("AgZAvQgMgHgHgMQgHgMAAgQQAAgPAHgNQAHgLAMgIQAMgGAPAAQATAAALAHQAMAIAFAOQAEAOgBASIhPAAQACANAJAHQAJAHAMAAQAIAAAIgDQAIgDAGgGIAMANQgIAIgLAFQgLAFgOAAQgQgBgMgGgAAggHQgBgNgIgIQgIgHgNAAQgMAAgIAHQgIAIgCANIA8AAIAAAAg");
	this.shape_356.setTransform(-52.2,-111.8);

	this.shape_357 = new cjs.Shape();
	this.shape_357.graphics.f("#0099CC").s().p("ABCA2IAAg7QAAgMgHgHQgHgHgLAAQgJAAgHAFQgHAEgDAHQgEAIAAAIIAAA1IgVAAIAAg7QgBgMgHgHQgGgHgMAAQgJAAgHAFQgGAEgEAHQgDAIAAAIIAAA1IgXAAIAAhqIAXAAIAAAVQAFgLAKgFQAKgGANABQAOAAAKAGQAJAHADAMQAGgNAKgGQAKgHAPABQASAAALAKQAKALAAAUIAABBg");
	this.shape_357.setTransform(-68.3,-111.9);

	this.shape_358 = new cjs.Shape();
	this.shape_358.graphics.f("#0099CC").s().p("AgdAyQgIgFgFgHQgEgIgBgJQABgPAKgHQAKgIAUgBIAfAAIAAgDQAAgLgHgFQgGgGgMAAQgHAAgIADQgIADgIAFIgJgQIAOgHIAOgFQAHgBAKAAQAUAAALAJQALALAAARIABBFIgXAAIAAgNQgGAHgJAEQgJADgKAAQgMAAgIgEgAgUAJQgFADAAAIQAAAHAGAFQAFAEAKAAQALAAAJgGQAIgFABgKIAAgJIgcAAIgDAAQgJAAgFADg");
	this.shape_358.setTransform(-85,-111.8);

	this.shape_359 = new cjs.Shape();
	this.shape_359.graphics.f("#0099CC").s().p("AgEA/QgHgDgEgHQgEgHgBgLIAAg2IgOAAIAAgRIAOAAIAAgdIAXAAIAAAdIAfAAIAAARIgfAAIAAAyQAAAIACADQADAEAGgBIAIgBIAIgDIAFARQgGAEgGACQgHACgGAAQgJAAgFgDg");
	this.shape_359.setTransform(-103,-113);

	this.shape_360 = new cjs.Shape();
	this.shape_360.graphics.f("#0099CC").s().p("AgLBLIAAhpIAWAAIAABpgAgIgzQgFgEAAgFQAAgHAFgDQADgEAFAAQAGAAAEAEQADADAAAHQAAAFgDAEQgEAEgGAAQgFAAgDgEg");
	this.shape_360.setTransform(-110,-114);

	this.shape_361 = new cjs.Shape();
	this.shape_361.graphics.f("#0099CC").s().p("AgWAyQgLgDgIgIIAIgQQAFAEAGADIANAFIALABQAIAAAEgDQAFgCABgGQgBgHgGgDQgFgDgIgDIgQgFQgIgDgGgGQgFgGAAgLQAAgLAFgHQAFgHAKgDQAJgDAJAAQAKAAAKADQAJACAIAGIgJARQgGgFgIgCQgJgDgHAAQgGAAgEADQgFACAAAGQABAFAFAEQAGADAHACIARAGQAIADAGAGQAGAGAAALQAAALgGAHQgGAHgJAEQgJADgLAAQgLAAgMgEg");
	this.shape_361.setTransform(-117.7,-111.8);

	this.shape_362 = new cjs.Shape();
	this.shape_362.graphics.f("#0099CC").s().p("AgdA2IAAhqIAXAAIAAAVQAFgLAJgFQAJgGANABIAAAVQgLAAgIAEQgIADgEAHQgEAHgBAJIAAA3g");
	this.shape_362.setTransform(-133.9,-111.8);

	this.shape_363 = new cjs.Shape();
	this.shape_363.graphics.f("#0099CC").s().p("AgcAvQgMgHgIgMQgGgMgBgQQABgPAGgNQAIgLAMgIQANgGAPAAQAQAAANAGQAMAIAIALQAGANABAPQgBAQgGAMQgIAMgMAHQgNAGgQABQgPgBgNgGgAgQgdQgHAEgFAIQgDAHAAAKQgBAPAKAKQAJAJANAAQAOAAAJgJQAKgKgBgPQAAgKgDgHQgFgIgHgEQgIgFgJAAQgIAAgIAFg");
	this.shape_363.setTransform(-144.9,-111.8);

	this.shape_364 = new cjs.Shape();
	this.shape_364.graphics.f("#0099CC").s().p("AgKBKIAAiTIAVAAIAACTg");
	this.shape_364.setTransform(-154,-113.9);

	this.shape_365 = new cjs.Shape();
	this.shape_365.graphics.f("#0099CC").s().p("AgcAvQgMgHgIgMQgGgMgBgQQABgPAGgNQAIgLAMgIQANgGAPAAQAQAAANAGQAMAIAHALQAIANAAAPQAAAQgIAMQgHAMgMAHQgNAGgQABQgPgBgNgGgAgQgdQgHAEgFAIQgEAHAAAKQAAAPAJAKQAKAJANAAQAPAAAIgJQAKgKgBgPQAAgKgDgHQgFgIgHgEQgIgFgJAAQgJAAgHAFg");
	this.shape_365.setTransform(-163.2,-111.8);

	this.shape_366 = new cjs.Shape();
	this.shape_366.graphics.f("#0099CC").s().p("AgfBEQgLgHgGgMQgHgNAAgQQAAgQAHgLQAGgMALgHQAMgHAPAAQAMAAAJAFQAKAFAGAKIAAg9IAXAAIAACUIgXAAIAAgTQgGAKgJAFQgKAFgMAAQgPAAgMgHgAgQgJQgHAFgEAHQgFAIAAAKQAAAKAFAIQAEAIAHAEQAHAEAJAAQAKAAAHgEQAHgEAEgIQAFgIAAgKQAAgKgFgIQgEgHgHgFQgHgEgKAAQgJAAgHAEg");
	this.shape_366.setTransform(-176.9,-113.9);

	this.shape_367 = new cjs.Shape();
	this.shape_367.graphics.f("#0099CC").s().p("ABCA2IAAg7QgBgMgGgHQgHgHgMAAQgIAAgHAFQgGAEgEAHQgDAIgBAIIAAA1IgWAAIAAg7QAAgMgGgHQgHgHgLAAQgKAAgGAFQgHAEgDAHQgFAIAAAIIAAA1IgWAAIAAhqIAWAAIAAAVQAHgLAJgFQAKgGAOABQAOAAAJAGQAIAHAFAMQAEgNALgGQAKgHAPABQASAAAKAKQAKALABAUIAABBg");
	this.shape_367.setTransform(-201.8,-111.9);

	this.shape_368 = new cjs.Shape();
	this.shape_368.graphics.f("#0099CC").s().p("AgnArQgKgLAAgTIAAhCIAXAAIAAA7QAAAMAHAHQAGAHAMAAQAIAAAGgFQAHgEADgHQAEgIAAgIIAAg1IAXAAIAABqIgXAAIAAgVQgFALgKAFQgKAFgMABQgTgBgKgKg");
	this.shape_368.setTransform(-219.1,-111.8);

	this.shape_369 = new cjs.Shape();
	this.shape_369.graphics.f("#0099CC").s().p("AgWAyQgLgDgIgIIAJgQQAEAEAGADIAMAFIAMABQAIAAAEgDQAFgCABgGQgBgHgGgDQgFgDgIgDIgQgFQgIgDgGgGQgFgGAAgLQAAgLAFgHQAFgHAKgDQAIgDAKAAQAKAAAKADQAJACAIAGIgJARQgGgFgJgCQgIgDgHAAQgGAAgFADQgEACAAAGQABAFAFAEQAGADAHACIARAGQAIADAGAGQAGAGAAALQAAALgGAHQgFAHgKAEQgJADgLAAQgLAAgMgEg");
	this.shape_369.setTransform(-230.3,-111.8);

	this.shape_370 = new cjs.Shape();
	this.shape_370.graphics.f("#0099CC").s().p("Ag2BJIAAiRIAWAAIAAATQAHgJAJgFQAJgFAMAAQAPAAAMAGQAKAIAHALQAGANAAAQQAAAQgGALQgGAMgLAHQgMAGgPABQgMAAgJgFQgJgFgHgKIAAA6gAgQgwQgHAEgEAHQgEAIgBAKQABAQAIAIQAJAKAOAAQAJAAAIgEQAHgFAEgHQAEgHABgLQgBgKgEgIQgEgHgHgEQgIgFgJAAQgJAAgHAFg");
	this.shape_370.setTransform(-241.1,-109.9);

	this.shape_371 = new cjs.Shape();
	this.shape_371.graphics.f("#0099CC").s().p("AgLBLIAAhpIAWAAIAABpgAgIgzQgFgEAAgFQAAgHAFgDQADgEAFAAQAGAAAEAEQADADAAAHQAAAFgDAEQgEAEgGAAQgFAAgDgEg");
	this.shape_371.setTransform(-251.3,-114);

	this.shape_372 = new cjs.Shape();
	this.shape_372.graphics.f("#0099CC").s().p("ABCA2IAAg7QAAgMgHgHQgGgHgMAAQgKAAgGAFQgGAEgEAHQgDAIAAAIIAAA1IgXAAIAAg7QAAgMgHgHQgGgHgMAAQgJAAgHAFQgGAEgEAHQgDAIAAAIIAAA1IgXAAIAAhqIAXAAIAAAVQAFgLAKgFQAKgGANABQAPAAAJAGQAJAHADAMQAGgNAKgGQAKgHAPABQASAAAKAKQALALAAAUIAABBg");
	this.shape_372.setTransform(-272.9,-111.9);

	this.shape_373 = new cjs.Shape();
	this.shape_373.graphics.f("#0099CC").s().p("AgZAvQgMgHgHgMQgHgMAAgQQAAgPAHgNQAHgLAMgIQAMgGAPAAQATAAALAHQAMAIAFAOQAEAOgBASIhPAAQACANAJAHQAJAHAMAAQAIAAAIgDQAIgDAGgGIAMANQgIAIgLAFQgLAFgOAAQgQgBgMgGgAAggHQgBgNgIgIQgIgHgNAAQgMAAgIAHQgIAIgCANIA8AAIAAAAg");
	this.shape_373.setTransform(-289.3,-111.8);

	this.shape_374 = new cjs.Shape();
	this.shape_374.graphics.f("#0099CC").s().p("AgdA2IAAhqIAXAAIAAAVQAGgLAIgFQAJgGANABIAAAVQgLAAgIAEQgIADgDAHQgFAHgBAJIAAA3g");
	this.shape_374.setTransform(-298.4,-111.8);

	this.shape_375 = new cjs.Shape();
	this.shape_375.graphics.f("#0099CC").s().p("AgcAvQgNgHgGgMQgIgMAAgQQAAgPAIgNQAGgLANgIQANgGAPAAQAQAAANAGQAMAIAIALQAGANAAAPQAAAQgGAMQgIAMgMAHQgNAGgQABQgPgBgNgGgAgQgdQgHAEgFAIQgDAHAAAKQAAAPAJAKQAIAJAOAAQAOAAAKgJQAJgKAAgPQAAgKgFgHQgEgIgHgEQgIgFgJAAQgJAAgHAFg");
	this.shape_375.setTransform(-309.3,-111.8);

	this.shape_376 = new cjs.Shape();
	this.shape_376.graphics.f("#0099CC").s().p("AgpBGIAAiLIAXAAIAAB2IA8AAIAAAVg");
	this.shape_376.setTransform(-320.2,-113.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_376},{t:this.shape_375},{t:this.shape_374},{t:this.shape_373},{t:this.shape_372},{t:this.shape_371},{t:this.shape_370},{t:this.shape_369},{t:this.shape_368},{t:this.shape_367},{t:this.shape_366},{t:this.shape_365},{t:this.shape_364},{t:this.shape_363},{t:this.shape_362},{t:this.shape_361},{t:this.shape_360},{t:this.shape_359},{t:this.shape_358},{t:this.shape_357},{t:this.shape_356},{t:this.shape_355},{t:this.shape_354},{t:this.shape_353},{t:this.shape_352},{t:this.shape_351},{t:this.shape_350},{t:this.shape_349},{t:this.shape_348},{t:this.shape_347},{t:this.shape_346},{t:this.shape_345},{t:this.shape_344},{t:this.shape_343},{t:this.shape_342},{t:this.shape_341},{t:this.shape_340},{t:this.shape_339},{t:this.shape_338},{t:this.shape_337},{t:this.shape_336},{t:this.shape_335},{t:this.shape_334},{t:this.shape_333},{t:this.shape_332},{t:this.shape_331},{t:this.shape_330},{t:this.shape_329},{t:this.shape_328},{t:this.shape_327},{t:this.shape_326},{t:this.shape_325},{t:this.shape_324},{t:this.shape_323},{t:this.shape_322},{t:this.shape_321},{t:this.shape_320},{t:this.shape_319},{t:this.shape_318},{t:this.shape_317},{t:this.shape_316},{t:this.shape_315},{t:this.shape_314},{t:this.shape_313},{t:this.shape_312},{t:this.shape_311},{t:this.shape_310},{t:this.shape_309},{t:this.shape_308},{t:this.shape_307},{t:this.shape_306},{t:this.shape_305},{t:this.shape_304},{t:this.shape_303},{t:this.shape_302},{t:this.shape_301},{t:this.shape_300},{t:this.shape_299},{t:this.shape_298},{t:this.shape_297},{t:this.shape_296},{t:this.shape_295},{t:this.shape_294},{t:this.shape_293},{t:this.shape_292},{t:this.shape_291},{t:this.shape_290},{t:this.shape_289},{t:this.shape_288},{t:this.shape_287},{t:this.shape_286},{t:this.shape_285},{t:this.shape_284},{t:this.shape_283},{t:this.shape_282},{t:this.shape_281},{t:this.shape_280},{t:this.shape_279},{t:this.shape_278},{t:this.shape_277},{t:this.shape_276},{t:this.shape_275},{t:this.shape_274},{t:this.shape_273},{t:this.shape_272},{t:this.shape_271},{t:this.shape_270},{t:this.shape_269},{t:this.shape_268},{t:this.shape_267},{t:this.shape_266},{t:this.shape_265},{t:this.shape_264},{t:this.shape_263},{t:this.shape_262},{t:this.shape_261},{t:this.shape_260},{t:this.shape_259},{t:this.shape_258},{t:this.shape_257},{t:this.shape_256},{t:this.shape_255},{t:this.shape_254},{t:this.shape_253},{t:this.shape_252},{t:this.shape_251},{t:this.shape_250},{t:this.shape_249},{t:this.shape_248},{t:this.shape_247},{t:this.shape_246},{t:this.shape_245},{t:this.shape_244},{t:this.shape_243},{t:this.shape_242},{t:this.shape_241},{t:this.shape_240},{t:this.shape_239},{t:this.shape_238},{t:this.shape_237},{t:this.shape_236},{t:this.shape_235},{t:this.shape_234},{t:this.shape_233},{t:this.shape_232},{t:this.shape_231},{t:this.shape_230},{t:this.shape_229},{t:this.shape_228},{t:this.shape_227},{t:this.shape_226},{t:this.shape_225},{t:this.shape_224},{t:this.shape_223},{t:this.shape_222},{t:this.shape_221},{t:this.shape_220},{t:this.shape_219},{t:this.shape_218},{t:this.shape_217},{t:this.shape_216},{t:this.shape_215},{t:this.shape_214},{t:this.shape_213},{t:this.shape_212},{t:this.shape_211},{t:this.shape_210},{t:this.shape_209},{t:this.shape_208},{t:this.shape_207},{t:this.shape_206},{t:this.shape_205},{t:this.shape_204},{t:this.shape_203},{t:this.shape_202},{t:this.shape_201},{t:this.shape_200},{t:this.shape_199},{t:this.shape_198},{t:this.shape_197},{t:this.shape_196},{t:this.shape_195},{t:this.shape_194},{t:this.shape_193},{t:this.shape_192},{t:this.shape_191},{t:this.shape_190},{t:this.shape_189},{t:this.shape_188},{t:this.shape_187},{t:this.shape_186},{t:this.shape_185},{t:this.shape_184},{t:this.shape_183},{t:this.shape_182},{t:this.shape_181},{t:this.shape_180},{t:this.shape_179},{t:this.shape_178},{t:this.shape_177},{t:this.shape_176},{t:this.shape_175},{t:this.shape_174},{t:this.shape_173},{t:this.shape_172},{t:this.shape_171},{t:this.shape_170},{t:this.shape_169},{t:this.shape_168},{t:this.shape_167},{t:this.shape_166},{t:this.shape_165},{t:this.shape_164},{t:this.shape_163},{t:this.shape_162},{t:this.shape_161},{t:this.shape_160},{t:this.shape_159},{t:this.shape_158},{t:this.shape_157},{t:this.shape_156},{t:this.shape_155},{t:this.shape_154},{t:this.shape_153},{t:this.shape_152},{t:this.shape_151},{t:this.shape_150},{t:this.shape_149},{t:this.shape_148},{t:this.shape_147},{t:this.shape_146},{t:this.shape_145},{t:this.shape_144},{t:this.shape_143},{t:this.shape_142},{t:this.shape_141},{t:this.shape_140},{t:this.shape_139},{t:this.shape_138},{t:this.shape_137},{t:this.shape_136},{t:this.shape_135},{t:this.shape_134},{t:this.shape_133},{t:this.shape_132},{t:this.shape_131},{t:this.shape_130},{t:this.shape_129},{t:this.shape_128},{t:this.shape_127},{t:this.shape_126},{t:this.shape_125},{t:this.shape_124},{t:this.shape_123},{t:this.shape_122},{t:this.shape_121},{t:this.shape_120},{t:this.shape_119},{t:this.shape_118},{t:this.shape_117},{t:this.shape_116},{t:this.shape_115},{t:this.shape_114},{t:this.shape_113},{t:this.shape_112},{t:this.shape_111},{t:this.shape_110},{t:this.shape_109},{t:this.shape_108},{t:this.shape_107},{t:this.shape_106},{t:this.shape_105},{t:this.shape_104},{t:this.shape_103},{t:this.shape_102},{t:this.shape_101},{t:this.shape_100},{t:this.shape_99},{t:this.shape_98},{t:this.shape_97},{t:this.shape_96},{t:this.shape_95},{t:this.shape_94},{t:this.shape_93},{t:this.shape_92},{t:this.shape_91},{t:this.shape_90},{t:this.shape_89},{t:this.shape_88},{t:this.shape_87},{t:this.shape_86},{t:this.shape_85},{t:this.shape_84},{t:this.shape_83},{t:this.shape_82},{t:this.shape_81},{t:this.shape_80},{t:this.shape_79},{t:this.shape_78},{t:this.shape_77},{t:this.shape_76},{t:this.shape_75},{t:this.shape_74},{t:this.shape_73},{t:this.shape_72},{t:this.shape_71},{t:this.shape_70},{t:this.shape_69},{t:this.shape_68},{t:this.shape_67},{t:this.shape_66},{t:this.shape_65},{t:this.shape_64},{t:this.shape_63},{t:this.shape_62},{t:this.shape_61},{t:this.shape_60},{t:this.shape_59},{t:this.shape_58},{t:this.shape_57},{t:this.shape_56},{t:this.shape_55},{t:this.shape_54},{t:this.shape_53},{t:this.shape_52},{t:this.shape_51},{t:this.shape_50},{t:this.shape_49},{t:this.shape_48},{t:this.shape_47},{t:this.shape_46},{t:this.shape_45},{t:this.shape_44},{t:this.shape_43},{t:this.shape_42},{t:this.shape_41},{t:this.shape_40},{t:this.shape_39},{t:this.shape_38},{t:this.shape_37},{t:this.shape_36},{t:this.shape_35},{t:this.shape_34},{t:this.shape_33},{t:this.shape_32},{t:this.shape_31},{t:this.shape_30},{t:this.shape_29},{t:this.shape_28},{t:this.shape_27},{t:this.shape_26},{t:this.shape_25},{t:this.shape_24},{t:this.shape_23},{t:this.shape_22},{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-328.3,-132.6,656.6,265.2);


(lib.Tween17 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.instance = new lib.owl_red();
	this.instance.parent = this;
	this.instance.setTransform(-90,-120,0.3,0.3);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-90,-120,180,240);


(lib.Tween16 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.instance = new lib.owl_red();
	this.instance.parent = this;
	this.instance.setTransform(-90,-120,0.3,0.3);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-90,-120,180,240);


(lib.Tween15 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#0099CC").s().p("AgIAJQgDgDgBgGQABgFADgEQAEgDAEAAQAFAAAEADQAEAEAAAFQAAAGgEADQgEAEgFAAQgEAAgEgEg");
	this.shape.setTransform(-238.7,122.7);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#0099CC").s().p("ABCA2IAAg7QgBgMgGgHQgGgHgNAAQgIAAgHAFQgHAEgDAHQgDAIgBAIIAAA1IgVAAIAAg7QgBgMgGgHQgHgHgLAAQgKAAgHAFQgGAEgEAHQgDAIAAAIIAAA1IgXAAIAAhqIAXAAIAAAVQAFgLAKgFQAKgGAOABQANAAAKAGQAJAHADAMQAFgNALgGQAKgHAPABQASAAALAKQAJALABAUIAABBg");
	this.shape_1.setTransform(-251.1,118.4);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#0099CC").s().p("AgnArQgJgLgBgTIAAhCIAXAAIAAA7QAAAMAHAHQAGAHAMAAQAIAAAGgFQAHgEADgHQAEgIAAgIIAAg1IAXAAIAABqIgXAAIAAgVQgGALgJAFQgKAFgMABQgSgBgLgKg");
	this.shape_2.setTransform(-268.4,118.5);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#0099CC").s().p("AgdA2IAAhqIAXAAIAAAVQAGgLAIgFQAJgGANABIAAAVQgLAAgIADQgHAEgFAHQgEAHgBAJIAAA3g");
	this.shape_3.setTransform(-278,118.5);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#0099CC").s().p("AgcAvQgNgHgGgMQgIgMABgQQgBgPAIgMQAGgNANgGQAMgHAQAAQARAAAMAHQANAGAGANQAIAMgBAPQABAQgIAMQgGAMgNAHQgMAGgRABQgQgBgMgGgAgQgdQgHAEgEAIQgFAHAAAKQABAQAIAJQAJAKAOgBQAPABAJgKQAIgJABgQQgBgKgEgHQgEgIgHgEQgHgFgKAAQgIAAgIAFg");
	this.shape_4.setTransform(-288.9,118.5);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#0099CC").s().p("AgQBGQgJgFgHgKIAAATIgWAAIAAiUIAWAAIAAA9QAHgKAJgEQAJgFAMAAQAPAAAMAGQAKAHAHAMQAGAMAAAQQAAAQgGAMQgGAMgLAHQgMAGgPABQgMgBgJgEgAgQgJQgHAFgEAGQgEAIgBAKQABAQAIAJQAKAKANAAQAJAAAIgFQAHgEAEgIQAEgIABgKQgBgKgEgIQgEgGgHgFQgIgEgJAAQgJAAgHAEg");
	this.shape_5.setTransform(-301.4,116.4);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#0099CC").s().p("AgdAyQgIgFgFgHQgEgIgBgJQABgOAKgIQAKgJAUAAIAfAAIAAgDQAAgKgHgGQgGgFgMgBQgHABgIACQgIACgIAGIgJgQIAOgHIAOgFQAHgBAKAAQAUAAALAJQALAKAAASIABBFIgXAAIAAgNQgGAHgJAEQgJADgKAAQgMAAgIgEgAgUAJQgFADAAAIQAAAHAGAFQAFAEAKAAQALgBAJgFQAIgFABgJIAAgKIgcAAIgDAAQgJAAgFADg");
	this.shape_6.setTransform(-314.9,118.5);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#0099CC").s().p("AgLBKIAAiTIAWAAIAACTg");
	this.shape_7.setTransform(-323.3,116.4);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#0099CC").s().p("AgEA/QgHgDgEgHQgEgHAAgLIAAg2IgQAAIAAgRIAQAAIAAgdIAVAAIAAAdIAgAAIAAARIggAAIAAAyQABAIADADQADAEAFgBIAIgBIAIgDIAFARQgFAEgHACQgHACgHAAQgHAAgGgDg");
	this.shape_8.setTransform(321.9,84.4);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#0099CC").s().p("AgWAyQgLgDgIgIIAJgQQAEAEAGADIANAFIALABQAIAAAEgDQAFgCABgGQgBgHgGgDQgFgDgIgDIgQgFQgIgDgGgGQgFgGAAgLQAAgLAFgHQAFgHAKgDQAJgDAJAAQAKAAAKADQAJACAIAGIgJARQgGgFgIgCQgJgDgHAAQgGAAgEADQgFACAAAGQABAFAFAEQAGADAHACIARAGQAIADAGAGQAGAGAAALQAAALgGAHQgGAHgJAEQgJADgLAAQgLAAgMgEg");
	this.shape_9.setTransform(313,85.6);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#0099CC").s().p("AgZAvQgMgHgHgMQgHgMAAgQQAAgPAHgNQAHgLAMgIQAMgGAPAAQATAAALAHQAMAIAFAOQAEAOgBATIhPAAQACAMAJAHQAJAHAMAAQAIAAAIgDQAIgDAGgGIAMANQgIAIgLAFQgLAEgOABQgQAAgMgHgAAggHQgBgNgIgIQgIgHgNAAQgMAAgIAHQgIAIgCANIA8AAIAAAAg");
	this.shape_10.setTransform(302.5,85.6);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#0099CC").s().p("AgfBEQgLgHgGgMQgHgNAAgQQAAgQAHgLQAGgMALgHQAMgHAPAAQAMAAAJAFQAKAFAGAKIAAg9IAXAAIAACUIgXAAIAAgTQgGAKgJAFQgKAFgMAAQgPAAgMgHgAgQgJQgHAFgEAHQgFAIAAAKQAAAKAFAIQAEAIAHAEQAHAEAJAAQAKAAAHgEQAHgEAEgIQAFgIAAgKQAAgKgFgIQgEgHgHgFQgHgEgKAAQgJAAgHAEg");
	this.shape_11.setTransform(279,83.5);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#0099CC").s().p("AgLBLIAAhpIAWAAIAABpgAgJgzQgDgEAAgFQAAgHADgDQAEgEAFAAQAGAAADAEQAEADABAHQgBAFgEAEQgDAEgGAAQgFAAgEgEg");
	this.shape_12.setTransform(269.9,83.4);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#0099CC").s().p("ABCA2IAAg7QgBgMgGgHQgGgHgNAAQgIAAgHAFQgGAEgEAHQgDAIgBAIIAAA1IgVAAIAAg7QgBgMgGgHQgHgHgLAAQgKAAgHAFQgGAEgDAHQgEAIAAAIIAAA1IgXAAIAAhqIAXAAIAAAVQAFgLAKgFQAKgGAOABQANAAAKAGQAJAHADAMQAFgNALgGQAKgHAPABQASAAALAKQAJALABAUIAABBg");
	this.shape_13.setTransform(246.6,85.5);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#0099CC").s().p("AgLBLIAAhpIAWAAIAABpgAgJgzQgEgEABgFQgBgHAEgDQAEgEAFAAQAGAAAEAEQADADAAAHQAAAFgDAEQgEAEgGAAQgFAAgEgEg");
	this.shape_14.setTransform(233.1,83.4);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#0099CC").s().p("AAcA2IAAg7QgBgMgGgHQgGgHgNAAQgMAAgIAJQgHAHgCANIAAA4IgXAAIAAhqIAXAAIAAAVQAGgLAKgFQAKgGAMABQATAAALAKQAJALABAUIAABBg");
	this.shape_15.setTransform(223.8,85.5);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#0099CC").s().p("AgdAxQgIgDgFgIQgEgHgBgKQABgOAKgIQAKgJAUAAIAfAAIAAgDQAAgLgHgFQgGgGgMABQgHAAgIACQgIADgIAFIgJgQIAOgIIAOgDQAHgCAKAAQAUAAALAKQALAJAAASIABBFIgXAAIAAgNQgGAHgJADQgJAEgKAAQgMAAgIgFgAgUAJQgFADAAAIQAAAIAGADQAFAEAKABQALAAAJgGQAIgFABgKIAAgJIgcAAIgDAAQgJAAgFADg");
	this.shape_16.setTransform(210.9,85.6);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#0099CC").s().p("AgFA/QgGgDgEgHQgEgHAAgLIAAg2IgPAAIAAgRIAPAAIAAgdIAVAAIAAAdIAgAAIAAARIggAAIAAAyQAAAIADADQADAEAGgBIAHgBIAJgDIAGARQgHAEgGACQgHACgGAAQgJAAgGgDg");
	this.shape_17.setTransform(191.1,84.4);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#0099CC").s().p("AgKBLIAAhpIAVAAIAABpgAgJgzQgDgEAAgFQAAgHADgDQAEgEAFAAQAGAAADAEQAEADABAHQgBAFgEAEQgDAEgGAAQgFAAgEgEg");
	this.shape_18.setTransform(184.1,83.4);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#0099CC").s().p("AgKBKIAAiTIAVAAIAACTg");
	this.shape_19.setTransform(178.4,83.5);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#0099CC").s().p("AgKBKIAAiTIAVAAIAACTg");
	this.shape_20.setTransform(172.5,83.5);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#0099CC").s().p("AgcAvQgNgHgGgMQgIgMABgQQgBgQAIgMQAGgLANgIQAMgGAQAAQARAAAMAGQANAIAGALQAIAMgBAQQABAQgIAMQgGAMgNAHQgMAHgRAAQgQAAgMgHgAgQgdQgHAEgEAIQgFAIAAAJQABAPAIAKQAJAKAOgBQAPABAJgKQAIgKABgPQgBgJgEgIQgEgIgHgEQgHgFgKABQgIgBgIAFg");
	this.shape_21.setTransform(163.3,85.6);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("#0099CC").s().p("ABCA2IAAg7QgBgMgGgHQgHgHgMAAQgJAAgGAFQgHAEgDAHQgDAIAAAIIAAA1IgXAAIAAg7QAAgMgGgHQgHgHgLAAQgKAAgGAFQgHAEgDAHQgFAIAAAIIAAA1IgWAAIAAhqIAWAAIAAAVQAHgLAJgFQAKgGAOABQAOAAAJAGQAIAHAFAMQAEgNALgGQAKgHAPABQASAAAKAKQALALAAAUIAABBg");
	this.shape_22.setTransform(146.8,85.5);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f("#0099CC").s().p("AgEA/QgHgDgEgHQgEgHgBgLIAAg2IgOAAIAAgRIAOAAIAAgdIAXAAIAAAdIAfAAIAAARIgfAAIAAAyQAAAIACADQADAEAGgBIAIgBIAIgDIAFARQgGAEgGACQgHACgGAAQgJAAgFgDg");
	this.shape_23.setTransform(122,84.4);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f("#0099CC").s().p("AAcA2IAAg7QgBgMgGgHQgHgHgMAAQgMAAgIAJQgHAHgCANIAAA4IgXAAIAAhqIAXAAIAAAVQAGgLAKgFQAKgGAMABQATAAAKAKQALALAAAUIAABBg");
	this.shape_24.setTransform(111.4,85.5);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f("#0099CC").s().p("AgnArQgJgLgBgTIAAhCIAXAAIAAA7QAAAMAHAHQAGAHAMAAQAIAAAGgFQAHgEADgHQAEgIAAgIIAAg1IAXAAIAABqIgXAAIAAgVQgGALgJAFQgKAFgMABQgSgBgLgKg");
	this.shape_25.setTransform(97.9,85.6);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f("#0099CC").s().p("AgdA2IAAhqIAXAAIAAAVQAGgKAIgGQAJgFANgBIAAAWQgLAAgIAEQgHADgFAHQgEAHgBAJIAAA3g");
	this.shape_26.setTransform(88.3,85.6);

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.f("#0099CC").s().p("AgZAvQgMgHgHgMQgHgMAAgQQAAgPAHgNQAHgLAMgIQAMgGAPAAQATAAALAHQAMAIAFAOQAEAOgBATIhPAAQACAMAJAHQAJAHAMAAQAIAAAIgDQAIgDAGgGIAMANQgIAIgLAFQgLAEgOABQgQAAgMgHgAAggHQgBgNgIgIQgIgHgNAAQgMAAgIAHQgIAIgCANIA8AAIAAAAg");
	this.shape_27.setTransform(77.8,85.6);

	this.shape_28 = new cjs.Shape();
	this.shape_28.graphics.f("#0099CC").s().p("AgVAyQgLgDgJgIIAIgQQAFAEAGADIANAFIALABQAHAAAGgDQAEgCAAgGQAAgHgFgDQgGgDgIgDIgQgFQgIgDgFgGQgGgGAAgLQAAgLAFgHQAGgHAIgDQAKgDAJAAQAKAAAKADQAJACAIAGIgIARQgIgFgHgCQgJgDgHAAQgGAAgEADQgEACgBAGQAAAFAGAEQAGADAIACIAQAGQAJADAFAGQAFAGABALQgBALgFAHQgFAHgKAEQgJADgLAAQgLAAgLgEg");
	this.shape_28.setTransform(67.1,85.6);

	this.shape_29 = new cjs.Shape();
	this.shape_29.graphics.f("#0099CC").s().p("AgZAvQgMgHgHgMQgHgMAAgQQAAgPAHgNQAHgLAMgIQAMgGAPAAQATAAALAHQAMAIAFAOQAEAOgBATIhPAAQACAMAJAHQAJAHAMAAQAIAAAIgDQAIgDAGgGIAMANQgIAIgLAFQgLAEgOABQgQAAgMgHgAAggHQgBgNgIgIQgIgHgNAAQgMAAgIAHQgIAIgCANIA8AAIAAAAg");
	this.shape_29.setTransform(56.7,85.6);

	this.shape_30 = new cjs.Shape();
	this.shape_30.graphics.f("#0099CC").s().p("AgfBEQgLgHgGgMQgHgNAAgQQAAgQAHgLQAGgMALgHQAMgHAPAAQAMAAAJAFQAKAFAGAKIAAg9IAXAAIAACUIgXAAIAAgTQgGAKgJAFQgKAFgMAAQgPAAgMgHgAgQgJQgHAFgEAHQgFAIAAAKQAAAKAFAIQAEAIAHAEQAHAEAJAAQAKAAAHgEQAHgEAEgIQAFgIAAgKQAAgKgFgIQgEgHgHgFQgHgEgKAAQgJAAgHAEg");
	this.shape_30.setTransform(43.4,83.5);

	this.shape_31 = new cjs.Shape();
	this.shape_31.graphics.f("#0099CC").s().p("AgdAxQgIgDgFgIQgEgHgBgKQABgOAKgIQAKgJAUAAIAfAAIAAgDQAAgLgHgFQgGgGgMABQgHAAgIACQgIADgIAFIgJgQIAOgIIAOgDQAHgCAKAAQAUAAALAKQALAJAAASIABBFIgXAAIAAgNQgGAHgJADQgJAEgKAAQgMAAgIgFgAgUAJQgFADAAAIQAAAIAGADQAFAEAKABQALAAAJgGQAIgFABgKIAAgJIgcAAIgDAAQgJAAgFADg");
	this.shape_31.setTransform(20.8,85.6);

	this.shape_32 = new cjs.Shape();
	this.shape_32.graphics.f("#0099CC").s().p("AgLBLIAAhpIAWAAIAABpgAgJgzQgDgEAAgFQAAgHADgDQAEgEAFAAQAGAAADAEQAEADABAHQgBAFgEAEQgDAEgGAAQgFAAgEgEg");
	this.shape_32.setTransform(12.4,83.4);

	this.shape_33 = new cjs.Shape();
	this.shape_33.graphics.f("#0099CC").s().p("AgXAvQgMgHgHgMQgGgMgBgQQABgPAGgNQAHgLAMgIQAMgGAPAAQAOAAALAEQALAFAIAIIgMAPQgGgGgIgDQgHgDgKAAQgJAAgGAEQgHAFgFAHQgDAIAAAJQAAAKADAIQAFAIAHAEQAGAEAJAAQAKAAAIgDQAIgDAGgHIAMANQgHAKgMAEQgLAFgPABQgPAAgMgHg");
	this.shape_33.setTransform(3.9,85.6);

	this.shape_34 = new cjs.Shape();
	this.shape_34.graphics.f("#0099CC").s().p("AgLBLIAAhpIAWAAIAABpgAgJgzQgDgEAAgFQAAgHADgDQAEgEAFAAQAGAAADAEQAEADABAHQgBAFgEAEQgDAEgGAAQgFAAgEgEg");
	this.shape_34.setTransform(-4.6,83.4);

	this.shape_35 = new cjs.Shape();
	this.shape_35.graphics.f("#0099CC").s().p("AgWBLIAAhVIgOAAIAAgRIAOAAIAAgKQAAgMAFgJQAFgIAJgEQAHgEAJAAQAHAAAGACQAGACAFAEIgJARQgDgCgEgBIgHgCQgGAAgEAEQgEADAAAIIAAAMIAbAAIAAARIgbAAIAABVg");
	this.shape_35.setTransform(-9.8,83.4);

	this.shape_36 = new cjs.Shape();
	this.shape_36.graphics.f("#0099CC").s().p("AgWBLIAAhVIgOAAIAAgRIAOAAIAAgKQAAgMAFgJQAFgIAJgEQAHgEAJAAQAHAAAGACQAGACAFAEIgJARQgDgCgEgBIgHgCQgGAAgEAEQgEADAAAIIAAAMIAbAAIAAARIgbAAIAABVg");
	this.shape_36.setTransform(-16.7,83.4);

	this.shape_37 = new cjs.Shape();
	this.shape_37.graphics.f("#0099CC").s().p("AgcAvQgNgHgGgMQgIgMABgQQgBgQAIgMQAGgLANgIQAMgGAQAAQARAAAMAGQANAIAGALQAIAMgBAQQABAQgIAMQgGAMgNAHQgMAHgRAAQgQAAgMgHgAgQgdQgHAEgEAIQgEAIgBAJQABAPAIAKQAJAKAOgBQAPABAJgKQAIgKABgPQAAgJgFgIQgEgIgHgEQgIgFgJABQgJgBgHAFg");
	this.shape_37.setTransform(-27.4,85.6);

	this.shape_38 = new cjs.Shape();
	this.shape_38.graphics.f("#0099CC").s().p("AgKBLIAAhpIAVAAIAABpgAgJgzQgDgEAAgFQAAgHADgDQAEgEAFAAQAGAAADAEQAEADABAHQgBAFgEAEQgDAEgGAAQgFAAgEgEg");
	this.shape_38.setTransform(-46.7,83.4);

	this.shape_39 = new cjs.Shape();
	this.shape_39.graphics.f("#0099CC").s().p("AgmArQgKgLgBgTIAAhCIAXAAIAAA7QAAAMAHAHQAHAHALAAQAIAAAGgFQAHgEAEgHQADgIAAgIIAAg1IAXAAIAABqIgXAAIAAgVQgGALgJAFQgKAFgMABQgTgBgJgKg");
	this.shape_39.setTransform(-56.3,85.6);

	this.shape_40 = new cjs.Shape();
	this.shape_40.graphics.f("#0099CC").s().p("AAhBJIAAg5QgGAJgJAFQgKAFgMAAQgPAAgMgHQgLgHgGgMQgHgLAAgQQAAgQAHgMQAGgNALgGQAMgHAPAAQAMAAAJAFQAKAFAGAJIAAgSIAXAAIAACQgAgQgwQgHAEgEAIQgFAIAAAKQAAALAFAHQAEAHAHAEQAHAFAJAAQAKAAAHgFQAHgEAEgHQAFgHAAgLQAAgKgFgIQgEgIgHgEQgHgEgKgBQgJABgHAEg");
	this.shape_40.setTransform(-70,87.5);

	this.shape_41 = new cjs.Shape();
	this.shape_41.graphics.f("#0099CC").s().p("AgdAxQgIgDgFgIQgEgHgBgKQABgOAKgIQAKgJAUAAIAfAAIAAgDQAAgLgHgFQgGgGgMABQgHAAgIACQgIADgIAFIgJgQIAOgIIAOgDQAHgCAKAAQAUAAALAKQALAJAAASIABBFIgXAAIAAgNQgGAHgJADQgJAEgKAAQgMAAgIgFgAgUAJQgFADAAAIQAAAIAGADQAFAEAKABQALAAAJgGQAIgFABgKIAAgJIgcAAIgDAAQgJAAgFADg");
	this.shape_41.setTransform(-92.6,85.6);

	this.shape_42 = new cjs.Shape();
	this.shape_42.graphics.f("#0099CC").s().p("Ag2BJIAAiQIAWAAIAAASQAHgJAJgFQAJgFALAAQAQAAALAGQALAIAHALQAGANAAAQQAAAQgGALQgGAMgMAHQgKAHgQAAQgMgBgJgEQgJgFgHgKIAAA6gAgQgxQgHAFgEAIQgFAHAAALQABAPAIAIQAJAKAOAAQAJAAAIgEQAHgEAEgHQAEgJABgJQgBgLgEgHQgEgIgHgFQgIgEgJAAQgIAAgIAEg");
	this.shape_42.setTransform(-104.4,87.5);

	this.shape_43 = new cjs.Shape();
	this.shape_43.graphics.f("#0099CC").s().p("AgKBKIAAiTIAVAAIAACTg");
	this.shape_43.setTransform(-114.7,83.5);

	this.shape_44 = new cjs.Shape();
	this.shape_44.graphics.f("#0099CC").s().p("AgnArQgJgLgBgTIAAhCIAXAAIAAA7QAAAMAHAHQAHAHALAAQAIAAAGgFQAHgEADgHQAEgIAAgIIAAg1IAXAAIAABqIgXAAIAAgVQgGALgJAFQgKAFgMABQgSgBgLgKg");
	this.shape_44.setTransform(-124.3,85.6);

	this.shape_45 = new cjs.Shape();
	this.shape_45.graphics.f("#0099CC").s().p("AgXAvQgMgHgGgMQgIgMAAgQQAAgPAIgNQAGgLAMgIQAMgGAPAAQAPAAALAEQALAFAHAIIgNAPQgFgGgIgDQgIgDgJAAQgIAAgIAEQgGAFgFAHQgDAIAAAJQAAAKADAIQAFAIAGAEQAIAEAIAAQAKAAAIgDQAIgDAGgHIAMANQgHAKgLAEQgLAFgQABQgPAAgMgHg");
	this.shape_45.setTransform(-136.3,85.6);

	this.shape_46 = new cjs.Shape();
	this.shape_46.graphics.f("#0099CC").s().p("AAcA2IAAg7QgBgMgGgHQgGgHgNAAQgMAAgIAJQgHAHgCANIAAA4IgXAAIAAhqIAXAAIAAAVQAGgLAKgFQAKgGAMABQATAAALAKQAJALABAUIAABBg");
	this.shape_46.setTransform(-158.7,85.5);

	this.shape_47 = new cjs.Shape();
	this.shape_47.graphics.f("#0099CC").s().p("AgKBLIAAhpIAVAAIAABpgAgIgzQgEgEgBgFQABgHAEgDQADgEAFAAQAGAAADAEQAEADAAAHQAAAFgEAEQgDAEgGAAQgFAAgDgEg");
	this.shape_47.setTransform(-168.3,83.4);

	this.shape_48 = new cjs.Shape();
	this.shape_48.graphics.f("#0099CC").s().p("AgFA/QgGgDgEgHQgEgHAAgLIAAg2IgQAAIAAgRIAQAAIAAgdIAVAAIAAAdIAgAAIAAARIggAAIAAAyQAAAIAEADQADAEAFgBIAHgBIAJgDIAGARQgHAEgGACQgHACgHAAQgIAAgGgDg");
	this.shape_48.setTransform(-185.4,84.4);

	this.shape_49 = new cjs.Shape();
	this.shape_49.graphics.f("#0099CC").s().p("AAcA2IAAg7QgBgMgGgHQgGgHgNAAQgMAAgIAJQgHAHgCANIAAA4IgXAAIAAhqIAXAAIAAAVQAGgLAKgFQAKgGAMABQATAAALAKQAJALABAUIAABBg");
	this.shape_49.setTransform(-196,85.5);

	this.shape_50 = new cjs.Shape();
	this.shape_50.graphics.f("#0099CC").s().p("AgmArQgLgLAAgTIAAhCIAXAAIAAA7QAAAMAHAHQAHAHALAAQAIAAAHgFQAGgEAEgHQADgIAAgIIAAg1IAXAAIAABqIgXAAIAAgVQgGALgJAFQgKAFgMABQgSgBgKgKg");
	this.shape_50.setTransform(-209.5,85.6);

	this.shape_51 = new cjs.Shape();
	this.shape_51.graphics.f("#0099CC").s().p("AgVAyQgLgDgJgIIAJgQQAEAEAGADIAMAFIAMABQAIAAAFgDQAEgCAAgGQAAgHgFgDQgGgDgIgDIgQgFQgIgDgFgGQgGgGgBgLQABgLAFgHQAGgHAIgDQAJgDAKAAQAKAAAKADQAKACAHAGIgIARQgIgFgIgCQgIgDgHAAQgGAAgFADQgDACAAAGQgBAFAGAEQAGADAIACIAQAGQAIADAGAGQAFAGABALQgBALgFAHQgGAHgJAEQgJADgLAAQgLAAgLgEg");
	this.shape_51.setTransform(-220.7,85.6);

	this.shape_52 = new cjs.Shape();
	this.shape_52.graphics.f("#0099CC").s().p("AgMAUIAHgRIgEgEIgBgGQAAgFADgEQAEgDAEAAQAGAAADADQADADABAGIgBAGIgDAEIgLARg");
	this.shape_52.setTransform(-237.8,90.5);

	this.shape_53 = new cjs.Shape();
	this.shape_53.graphics.f("#0099CC").s().p("AgFA/QgGgDgEgHQgEgHAAgLIAAg2IgQAAIAAgRIAQAAIAAgdIAVAAIAAAdIAgAAIAAARIggAAIAAAyQAAAIAEADQADAEAFgBIAHgBIAJgDIAFARQgFAEgHACQgHACgHAAQgHAAgHgDg");
	this.shape_53.setTransform(-243.8,84.4);

	this.shape_54 = new cjs.Shape();
	this.shape_54.graphics.f("#0099CC").s().p("AAcA2IAAg7QAAgMgHgHQgGgHgNAAQgMAAgIAJQgIAHgBANIAAA4IgXAAIAAhqIAXAAIAAAVQAGgLAKgFQAJgGANABQATAAALAKQAKALAAAUIAABBg");
	this.shape_54.setTransform(-254.4,85.5);

	this.shape_55 = new cjs.Shape();
	this.shape_55.graphics.f("#0099CC").s().p("AgZAvQgMgHgHgMQgHgMAAgQQAAgPAHgNQAHgLAMgIQAMgGAPAAQATAAALAHQAMAIAFAOQAEAOgBATIhPAAQACAMAJAHQAJAHAMAAQAIAAAIgDQAIgDAGgGIAMANQgIAIgLAFQgLAEgOABQgQAAgMgHgAAggHQgBgNgIgIQgIgHgNAAQgMAAgIAHQgIAIgCANIA8AAIAAAAg");
	this.shape_55.setTransform(-267.1,85.6);

	this.shape_56 = new cjs.Shape();
	this.shape_56.graphics.f("#0099CC").s().p("AgfBEQgLgHgGgMQgHgNAAgQQAAgQAHgLQAGgMALgHQAMgHAPAAQAMAAAJAFQAKAFAGAKIAAg9IAXAAIAACUIgXAAIAAgTQgGAKgJAFQgKAFgMAAQgPAAgMgHgAgQgJQgHAFgEAHQgFAIAAAKQAAAKAFAIQAEAIAHAEQAHAEAJAAQAKAAAHgEQAHgEAEgIQAFgIAAgKQAAgKgFgIQgEgHgHgFQgHgEgKAAQgJAAgHAEg");
	this.shape_56.setTransform(-280.3,83.5);

	this.shape_57 = new cjs.Shape();
	this.shape_57.graphics.f("#0099CC").s().p("AgLBLIAAhpIAWAAIAABpgAgJgzQgDgEAAgFQAAgHADgDQAEgEAFAAQAGAAADAEQAEADABAHQgBAFgEAEQgDAEgGAAQgFAAgEgEg");
	this.shape_57.setTransform(-289.4,83.4);

	this.shape_58 = new cjs.Shape();
	this.shape_58.graphics.f("#0099CC").s().p("AgcAvQgNgHgGgMQgIgMAAgQQAAgQAIgMQAGgLANgIQAMgGAQAAQAQAAANAGQAMAIAIALQAGAMAAAQQAAAQgGAMQgIAMgMAHQgNAHgQAAQgQAAgMgHgAgQgdQgHAEgFAIQgDAIAAAJQAAAPAJAKQAIAKAOgBQAOABAKgKQAJgKAAgPQAAgJgFgIQgEgIgHgEQgHgFgKABQgJgBgHAFg");
	this.shape_58.setTransform(-298.5,85.6);

	this.shape_59 = new cjs.Shape();
	this.shape_59.graphics.f("#0099CC").s().p("AgdA2IAAhqIAXAAIAAAVQAFgKAJgGQAJgFANgBIAAAWQgLAAgIAEQgHADgFAHQgEAHgBAJIAAA3g");
	this.shape_59.setTransform(-308,85.6);

	this.shape_60 = new cjs.Shape();
	this.shape_60.graphics.f("#0099CC").s().p("Ag3BJIAAiQIAXAAIAAASQAHgJAJgFQAJgFALAAQAQAAALAGQALAIAHALQAGANABAQQgBAQgGALQgGAMgMAHQgLAHgPAAQgLgBgKgEQgJgFgHgKIAAA6gAgQgxQgHAFgFAIQgEAHAAALQAAAPAJAIQAKAKANAAQAKAAAGgEQAIgEAEgHQAEgJAAgJQAAgLgEgHQgEgIgIgFQgGgEgKAAQgJAAgHAEg");
	this.shape_60.setTransform(-318.9,87.5);

	this.shape_61 = new cjs.Shape();
	this.shape_61.graphics.f("#0099CC").s().p("AAcA2IAAg7QgBgMgGgHQgHgHgMAAQgMAAgIAJQgHAHgCANIAAA4IgXAAIAAhqIAXAAIAAAVQAGgLAKgFQAKgGAMABQATAAALAKQAJALABAUIAABBg");
	this.shape_61.setTransform(319.6,52.6);

	this.shape_62 = new cjs.Shape();
	this.shape_62.graphics.f("#0099CC").s().p("AgcAvQgNgHgGgMQgIgMABgQQgBgPAIgMQAGgNANgGQAMgHAQAAQARAAAMAHQANAGAGANQAIAMgBAPQABAQgIAMQgGAMgNAHQgMAHgRAAQgQAAgMgHgAgQgdQgHAEgEAIQgEAHgBAKQABAQAIAJQAJAKAOAAQAPAAAJgKQAIgJABgQQAAgKgFgHQgEgIgHgEQgIgEgJgBQgJABgHAEg");
	this.shape_62.setTransform(306.5,52.7);

	this.shape_63 = new cjs.Shape();
	this.shape_63.graphics.f("#0099CC").s().p("AAcA2IAAg7QgBgMgGgHQgHgHgMAAQgMAAgIAJQgIAHgBANIAAA4IgXAAIAAhqIAXAAIAAAVQAGgLAKgFQAKgGAMABQATAAAKAKQAKALABAUIAABBg");
	this.shape_63.setTransform(293.8,52.6);

	this.shape_64 = new cjs.Shape();
	this.shape_64.graphics.f("#0099CC").s().p("AgFA/QgGgDgEgHQgEgHAAgLIAAg2IgQAAIAAgRIAQAAIAAgdIAVAAIAAAdIAgAAIAAARIggAAIAAAyQAAAIAEADQADAEAFgBIAHgBIAJgDIAFARQgFAEgHACQgHACgHAAQgHAAgHgDg");
	this.shape_64.setTransform(269.2,51.5);

	this.shape_65 = new cjs.Shape();
	this.shape_65.graphics.f("#0099CC").s().p("AgdAyQgIgFgFgHQgEgHgBgKQABgOAKgIQAKgIAUgBIAfAAIAAgDQAAgKgHgGQgGgFgMgBQgHABgIACQgIACgIAGIgJgQIAOgHIAOgFQAHgBAKAAQAUAAALAJQALAKAAASIABBFIgXAAIAAgNQgGAHgJAEQgJADgKAAQgMAAgIgEgAgUAJQgFADAAAIQAAAHAGAFQAFAEAKAAQALgBAJgFQAIgGABgIIAAgKIgcAAIgDAAQgJAAgFADg");
	this.shape_65.setTransform(258.9,52.7);

	this.shape_66 = new cjs.Shape();
	this.shape_66.graphics.f("#0099CC").s().p("AgFA/QgGgDgEgHQgEgHAAgLIAAg2IgQAAIAAgRIAQAAIAAgdIAVAAIAAAdIAgAAIAAARIggAAIAAAyQAAAIAEADQADAEAFgBIAHgBIAJgDIAFARQgFAEgHACQgHACgHAAQgHAAgHgDg");
	this.shape_66.setTransform(249.4,51.5);

	this.shape_67 = new cjs.Shape();
	this.shape_67.graphics.f("#0099CC").s().p("AgdAyQgIgFgFgHQgEgHgBgKQABgOAKgIQAKgIAUgBIAfAAIAAgDQAAgKgHgGQgGgFgMgBQgHABgIACQgIACgIAGIgJgQIAOgHIAOgFQAHgBAKAAQAUAAALAJQALAKAAASIABBFIgXAAIAAgNQgGAHgJAEQgJADgKAAQgMAAgIgEgAgUAJQgFADAAAIQAAAHAGAFQAFAEAKAAQALgBAJgFQAIgGABgIIAAgKIgcAAIgDAAQgJAAgFADg");
	this.shape_67.setTransform(239.1,52.7);

	this.shape_68 = new cjs.Shape();
	this.shape_68.graphics.f("#0099CC").s().p("AgfBEQgLgHgGgMQgHgNAAgQQAAgQAHgLQAGgMALgHQAMgHAPAAQAMAAAJAFQAKAFAGAKIAAg9IAXAAIAACUIgXAAIAAgTQgGAKgJAFQgKAFgMAAQgPAAgMgHgAgQgJQgHAFgEAHQgFAIAAAKQAAAKAFAIQAEAIAHAEQAHAEAJAAQAKAAAHgEQAHgEAEgIQAFgIAAgKQAAgKgFgIQgEgHgHgFQgHgEgKAAQgJAAgHAEg");
	this.shape_68.setTransform(226.2,50.6);

	this.shape_69 = new cjs.Shape();
	this.shape_69.graphics.f("#0099CC").s().p("AgKBLIAAhpIAVAAIAABpgAgJgzQgDgEAAgFQAAgHADgDQAEgEAFAAQAGAAADAEQAEADABAHQgBAFgEAEQgDAEgGAAQgFAAgEgEg");
	this.shape_69.setTransform(217.1,50.5);

	this.shape_70 = new cjs.Shape();
	this.shape_70.graphics.f("#0099CC").s().p("Ag2BJIAAiRIAWAAIAAATQAHgKAJgEQAJgFAMAAQAPAAAMAHQAKAGAHANQAGAMAAAQQAAAQgGALQgGAMgLAHQgMAHgPAAQgMAAgJgFQgJgFgHgJIAAA5gAgQgwQgHAEgEAHQgEAJgBAJQABAQAIAJQAJAJAOAAQAJAAAIgFQAHgDAEgHQAEgJABgKQgBgJgEgJQgEgHgHgEQgIgFgJAAQgJAAgHAFg");
	this.shape_70.setTransform(208,54.6);

	this.shape_71 = new cjs.Shape();
	this.shape_71.graphics.f("#0099CC").s().p("AgmArQgKgLgBgTIAAhCIAXAAIAAA7QAAAMAHAHQAHAHALAAQAIAAAGgFQAHgEAEgHQADgIAAgIIAAg1IAXAAIAABqIgXAAIAAgVQgGALgJAFQgKAFgMABQgTgBgJgKg");
	this.shape_71.setTransform(193.9,52.7);

	this.shape_72 = new cjs.Shape();
	this.shape_72.graphics.f("#0099CC").s().p("AgXAvQgMgHgGgMQgIgMAAgQQAAgPAIgMQAGgNAMgGQAMgHAPAAQAPAAALAFQALAEAHAIIgMAPQgGgGgIgDQgHgDgKAAQgIAAgIAFQgHADgEAIQgDAIAAAJQAAAKADAIQAEAIAHADQAIAFAIAAQAKAAAIgEQAIgDAGgGIAMANQgHAKgMAEQgLAGgPAAQgPAAgMgHg");
	this.shape_72.setTransform(181.9,52.7);

	this.shape_73 = new cjs.Shape();
	this.shape_73.graphics.f("#0099CC").s().p("AgEA/QgHgDgEgHQgEgHgBgLIAAg2IgOAAIAAgRIAOAAIAAgdIAXAAIAAAdIAfAAIAAARIgfAAIAAAyQAAAIACADQADAEAGgBIAIgBIAIgDIAFARQgGAEgGACQgHACgGAAQgJAAgFgDg");
	this.shape_73.setTransform(158.4,51.5);

	this.shape_74 = new cjs.Shape();
	this.shape_74.graphics.f("#0099CC").s().p("AgdAyQgIgFgFgHQgEgHgBgKQABgOAKgIQAKgIAUgBIAfAAIAAgDQAAgKgHgGQgGgFgMgBQgHABgIACQgIACgIAGIgJgQIAOgHIAOgFQAHgBAKAAQAUAAALAJQALAKAAASIABBFIgXAAIAAgNQgGAHgJAEQgJADgKAAQgMAAgIgEgAgUAJQgFADAAAIQAAAHAGAFQAFAEAKAAQALgBAJgFQAIgGABgIIAAgKIgcAAIgDAAQgJAAgFADg");
	this.shape_74.setTransform(148.2,52.7);

	this.shape_75 = new cjs.Shape();
	this.shape_75.graphics.f("#0099CC").s().p("AgXAvQgMgHgHgMQgGgMAAgQQAAgPAGgMQAHgNAMgGQAMgHAPAAQAPAAAKAFQALAEAIAIIgNAPQgFgGgHgDQgJgDgJAAQgIAAgHAFQgIADgDAIQgFAIAAAJQAAAKAFAIQADAIAIADQAHAFAIAAQAKAAAIgEQAIgDAFgGIAOANQgIAKgLAEQgMAGgPAAQgPAAgMgHg");
	this.shape_75.setTransform(137,52.7);

	this.shape_76 = new cjs.Shape();
	this.shape_76.graphics.f("#0099CC").s().p("AgZAvQgMgHgHgMQgHgMAAgQQAAgPAHgMQAHgNAMgGQAMgHAPAAQATAAALAIQAMAHAFAOQAEAOgBASIhPAAQACANAJAHQAJAHAMAAQAIAAAIgDQAIgDAGgGIAMANQgIAJgLAEQgLAFgOAAQgQAAgMgHgAAggHQgBgNgIgHQgIgIgNAAQgMAAgIAIQgIAHgCANIA8AAIAAAAg");
	this.shape_76.setTransform(125.5,52.7);

	this.shape_77 = new cjs.Shape();
	this.shape_77.graphics.f("#0099CC").s().p("AgdAyQgIgFgFgHQgEgHgBgKQABgOAKgIQAKgIAUgBIAfAAIAAgDQAAgKgHgGQgGgFgMgBQgHABgIACQgIACgIAGIgJgQIAOgHIAOgFQAHgBAKAAQAUAAALAJQALAKAAASIABBFIgXAAIAAgNQgGAHgJAEQgJADgKAAQgMAAgIgEgAgUAJQgFADAAAIQAAAHAGAFQAFAEAKAAQALgBAJgFQAIgGABgIIAAgKIgcAAIgDAAQgJAAgFADg");
	this.shape_77.setTransform(113.5,52.7);

	this.shape_78 = new cjs.Shape();
	this.shape_78.graphics.f("#0099CC").s().p("AgXAvQgMgHgHgMQgGgMAAgQQAAgPAGgMQAHgNAMgGQAMgHAPAAQAPAAAKAFQALAEAIAIIgNAPQgFgGgHgDQgJgDgJAAQgIAAgHAFQgIADgDAIQgFAIAAAJQAAAKAFAIQADAIAIADQAHAFAIAAQAKAAAIgEQAIgDAFgGIAOANQgIAKgLAEQgMAGgPAAQgPAAgMgHg");
	this.shape_78.setTransform(102.3,52.7);

	this.shape_79 = new cjs.Shape();
	this.shape_79.graphics.f("#0099CC").s().p("AgXAvQgMgHgGgMQgIgMAAgQQAAgPAIgMQAGgNAMgGQAMgHAPAAQAPAAALAFQALAEAHAIIgMAPQgGgGgIgDQgHgDgKAAQgIAAgIAFQgHADgEAIQgDAIAAAJQAAAKADAIQAEAIAHADQAIAFAIAAQAKAAAIgEQAIgDAGgGIAMANQgHAKgMAEQgLAGgPAAQgPAAgMgHg");
	this.shape_79.setTransform(91,52.7);

	this.shape_80 = new cjs.Shape();
	this.shape_80.graphics.f("#0099CC").s().p("AgcAvQgMgHgHgMQgIgMAAgQQAAgPAIgMQAHgNAMgGQANgHAPAAQAQAAANAHQAMAGAIANQAGAMABAPQgBAQgGAMQgIAMgMAHQgNAHgQAAQgPAAgNgHgAgQgdQgHAEgFAIQgDAHAAAKQgBAQAKAJQAIAKAOAAQAOAAAJgKQAKgJgBgQQAAgKgDgHQgFgIgHgEQgHgEgKgBQgIABgIAEg");
	this.shape_80.setTransform(79.1,52.7);

	this.shape_81 = new cjs.Shape();
	this.shape_81.graphics.f("#0099CC").s().p("AgEA/QgHgDgEgHQgEgHgBgLIAAg2IgOAAIAAgRIAOAAIAAgdIAXAAIAAAdIAfAAIAAARIgfAAIAAAyQAAAIACADQADAEAGgBIAHgBIAJgDIAGARQgHAEgGACQgHACgGAAQgIAAgGgDg");
	this.shape_81.setTransform(55,51.5);

	this.shape_82 = new cjs.Shape();
	this.shape_82.graphics.f("#0099CC").s().p("AAcA2IAAg7QgBgMgGgHQgHgHgMAAQgMAAgIAJQgHAHgCANIAAA4IgXAAIAAhqIAXAAIAAAVQAGgLAKgFQAKgGAMABQATAAAKAKQALALAAAUIAABBg");
	this.shape_82.setTransform(44.4,52.6);

	this.shape_83 = new cjs.Shape();
	this.shape_83.graphics.f("#0099CC").s().p("AgLBLIAAhpIAWAAIAABpgAgIgzQgFgEAAgFQAAgHAFgDQADgEAFAAQAGAAAEAEQADADAAAHQAAAFgDAEQgEAEgGAAQgFAAgDgEg");
	this.shape_83.setTransform(34.8,50.5);

	this.shape_84 = new cjs.Shape();
	this.shape_84.graphics.f("#0099CC").s().p("AgWAyQgLgDgIgIIAJgQQAEAEAGADIAMAFIAMABQAIAAAEgDQAFgCABgGQgBgHgGgDQgFgDgIgDIgQgFQgIgDgGgGQgFgGAAgLQAAgLAFgHQAFgHAKgDQAIgDAKAAQAKAAAKADQAJACAIAGIgJARQgGgFgJgCQgIgDgHAAQgGAAgFADQgEACAAAGQABAFAFAEQAGADAHACIARAGQAIADAGAGQAGAGAAALQAAALgGAHQgFAHgKAEQgJADgLAAQgLAAgMgEg");
	this.shape_84.setTransform(27.1,52.7);

	this.shape_85 = new cjs.Shape();
	this.shape_85.graphics.f("#0099CC").s().p("AgdA1IAAhpIAXAAIAAAVQAGgKAIgGQAJgGANABIAAAVQgLAAgIADQgIAEgDAHQgFAGgBAKIAAA2g");
	this.shape_85.setTransform(5.5,52.7);

	this.shape_86 = new cjs.Shape();
	this.shape_86.graphics.f("#0099CC").s().p("AgnArQgKgLAAgTIAAhCIAXAAIAAA7QAAAMAHAHQAGAHAMAAQAIAAAHgFQAGgEADgHQAEgIAAgIIAAg1IAXAAIAABqIgXAAIAAgVQgGALgJAFQgKAFgMABQgTgBgKgKg");
	this.shape_86.setTransform(-5.9,52.7);

	this.shape_87 = new cjs.Shape();
	this.shape_87.graphics.f("#0099CC").s().p("AgZAvQgMgHgHgMQgHgMAAgQQAAgPAHgMQAHgNAMgGQAMgHAPAAQATAAALAIQAMAHAFAOQAEAOgBASIhPAAQACANAJAHQAJAHAMAAQAIAAAIgDQAIgDAGgGIAMANQgIAJgLAEQgLAFgOAAQgQAAgMgHgAAggHQgBgNgIgHQgIgIgNAAQgMAAgIAIQgIAHgCANIA8AAIAAAAg");
	this.shape_87.setTransform(-18.1,52.7);

	this.shape_88 = new cjs.Shape();
	this.shape_88.graphics.f("#0099CC").s().p("AgEA/QgHgDgEgHQgEgHgBgLIAAg2IgPAAIAAgRIAPAAIAAgdIAXAAIAAAdIAfAAIAAARIgfAAIAAAyQAAAIACADQADAEAGgBIAIgBIAIgDIAFARQgFAEgHACQgHACgHAAQgIAAgFgDg");
	this.shape_88.setTransform(-28,51.5);

	this.shape_89 = new cjs.Shape();
	this.shape_89.graphics.f("#0099CC").s().p("Ag2BJIAAiRIAWAAIAAATQAHgKAJgEQAJgFALAAQAQAAALAHQALAGAHANQAGAMAAAQQAAAQgGALQgGAMgMAHQgKAHgQAAQgMAAgJgFQgJgFgHgJIAAA5gAgQgwQgHAEgEAHQgFAJAAAJQABAQAIAJQAKAJANAAQAJAAAIgFQAHgDAEgHQAEgJAAgKQAAgJgEgJQgEgHgHgEQgIgFgJAAQgIAAgIAFg");
	this.shape_89.setTransform(-38.4,54.6);

	this.shape_90 = new cjs.Shape();
	this.shape_90.graphics.f("#0099CC").s().p("AgZAvQgMgHgHgMQgHgMAAgQQAAgPAHgMQAHgNAMgGQAMgHAPAAQATAAALAIQAMAHAFAOQAEAOgBASIhPAAQACANAJAHQAJAHAMAAQAIAAAIgDQAIgDAGgGIAMANQgIAJgLAEQgLAFgOAAQgQAAgMgHgAAggHQgBgNgIgHQgIgIgNAAQgMAAgIAIQgIAHgCANIA8AAIAAAAg");
	this.shape_90.setTransform(-51.6,52.7);

	this.shape_91 = new cjs.Shape();
	this.shape_91.graphics.f("#0099CC").s().p("AgXAvQgMgHgGgMQgIgMABgQQgBgPAIgMQAGgNAMgGQAMgHAPAAQAOAAAMAFQAKAEAIAIIgNAPQgFgGgHgDQgJgDgJAAQgIAAgIAFQgGADgEAIQgEAIgBAJQABAKAEAIQAEAIAGADQAIAFAIAAQAKAAAIgEQAIgDAFgGIAOANQgIAKgLAEQgMAGgPAAQgPAAgMgHg");
	this.shape_91.setTransform(-63.1,52.7);

	this.shape_92 = new cjs.Shape();
	this.shape_92.graphics.f("#0099CC").s().p("AAaA1IgagnIgaAnIgZAAIAlg1Igjg0IAbAAIAWAkIAZgkIAZAAIgiA0IAkA1g");
	this.shape_92.setTransform(-74.3,52.7);

	this.shape_93 = new cjs.Shape();
	this.shape_93.graphics.f("#0099CC").s().p("AgyBGIAAiLIBjAAIAAAVIhMAAIAAAmIBEAAIAAAUIhEAAIAAAnIBOAAIAAAVg");
	this.shape_93.setTransform(-86,51);

	this.shape_94 = new cjs.Shape();
	this.shape_94.graphics.f("#0099CC").s().p("AgIAJQgDgDgBgGQABgFADgEQAEgDAEAAQAFAAAEADQAEAEAAAFQAAAGgEADQgEAEgFAAQgEAAgEgEg");
	this.shape_94.setTransform(-109,56.9);

	this.shape_95 = new cjs.Shape();
	this.shape_95.graphics.f("#0099CC").s().p("AgdA1IAAhpIAXAAIAAAVQAGgKAIgGQAJgGANABIAAAVQgLAAgIADQgIAEgDAHQgFAGgBAKIAAA2g");
	this.shape_95.setTransform(-114.3,52.7);

	this.shape_96 = new cjs.Shape();
	this.shape_96.graphics.f("#0099CC").s().p("AgmArQgLgLAAgTIAAhCIAXAAIAAA7QAAAMAHAHQAGAHAMAAQAIAAAHgFQAGgEAEgHQADgIAAgIIAAg1IAXAAIAABqIgXAAIAAgVQgGALgJAFQgKAFgMABQgTgBgJgKg");
	this.shape_96.setTransform(-125.7,52.7);

	this.shape_97 = new cjs.Shape();
	this.shape_97.graphics.f("#0099CC").s().p("AgEA/QgHgDgEgHQgEgHgBgLIAAg2IgPAAIAAgRIAPAAIAAgdIAXAAIAAAdIAfAAIAAARIgfAAIAAAyQAAAIADADQADAEAFgBIAIgBIAIgDIAFARQgFAEgHACQgHACgHAAQgHAAgGgDg");
	this.shape_97.setTransform(-136.1,51.5);

	this.shape_98 = new cjs.Shape();
	this.shape_98.graphics.f("#0099CC").s().p("AgdAyQgIgFgFgHQgEgHgBgKQABgOAKgIQAKgIAUgBIAfAAIAAgDQAAgKgHgGQgGgFgMgBQgHABgIACQgIACgIAGIgJgQIAOgHIAOgFQAHgBAKAAQAUAAALAJQALAKAAASIABBFIgXAAIAAgNQgGAHgJAEQgJADgKAAQgMAAgIgEgAgUAJQgFADAAAIQAAAHAGAFQAFAEAKAAQALgBAJgFQAIgGABgIIAAgKIgcAAIgDAAQgJAAgFADg");
	this.shape_98.setTransform(-146.3,52.7);

	this.shape_99 = new cjs.Shape();
	this.shape_99.graphics.f("#0099CC").s().p("AgKBLIAAhpIAVAAIAABpgAgJgzQgDgEAAgFQAAgHADgDQAEgEAFAAQAGAAADAEQAEADABAHQgBAFgEAEQgDAEgGAAQgFAAgEgEg");
	this.shape_99.setTransform(-154.7,50.5);

	this.shape_100 = new cjs.Shape();
	this.shape_100.graphics.f("#0099CC").s().p("AgdA1IAAhpIAXAAIAAAVQAGgKAIgGQAJgGANABIAAAVQgLAAgIADQgIAEgDAHQgFAGgBAKIAAA2g");
	this.shape_100.setTransform(-160.8,52.7);

	this.shape_101 = new cjs.Shape();
	this.shape_101.graphics.f("#0099CC").s().p("AgdAyQgIgFgFgHQgEgHgBgKQABgOAKgIQAKgIAUgBIAfAAIAAgDQAAgKgHgGQgGgFgMgBQgHABgIACQgIACgIAGIgJgQIAOgHIAOgFQAHgBAKAAQAUAAALAJQALAKAAASIABBFIgXAAIAAgNQgGAHgJAEQgJADgKAAQgMAAgIgEgAgUAJQgFADAAAIQAAAHAGAFQAFAEAKAAQALgBAJgFQAIgGABgIIAAgKIgcAAIgDAAQgJAAgFADg");
	this.shape_101.setTransform(-171.6,52.7);

	this.shape_102 = new cjs.Shape();
	this.shape_102.graphics.f("#0099CC").s().p("Ag2BJIAAiRIAWAAIAAATQAHgKAJgEQAJgFALAAQAQAAALAHQALAGAHANQAGAMABAQQgBAQgGALQgGAMgMAHQgLAHgPAAQgLAAgKgFQgJgFgHgJIAAA5gAgQgwQgHAEgEAHQgFAJAAAJQAAAQAJAJQAKAJANAAQAJAAAIgFQAHgDAEgHQAEgJAAgKQAAgJgEgJQgEgHgHgEQgIgFgJAAQgIAAgIAFg");
	this.shape_102.setTransform(-183.4,54.6);

	this.shape_103 = new cjs.Shape();
	this.shape_103.graphics.f("#0099CC").s().p("AgdAyQgIgFgFgHQgEgHgBgKQABgOAKgIQAKgIAUgBIAfAAIAAgDQAAgKgHgGQgGgFgMgBQgHABgIACQgIACgIAGIgJgQIAOgHIAOgFQAHgBAKAAQAUAAALAJQALAKAAASIABBFIgXAAIAAgNQgGAHgJAEQgJADgKAAQgMAAgIgEgAgUAJQgFADAAAIQAAAHAGAFQAFAEAKAAQALgBAJgFQAIgGABgIIAAgKIgcAAIgDAAQgJAAgFADg");
	this.shape_103.setTransform(-210.7,52.7);

	this.shape_104 = new cjs.Shape();
	this.shape_104.graphics.f("#0099CC").s().p("AgLBKIAAiTIAXAAIAACTg");
	this.shape_104.setTransform(-219.1,50.6);

	this.shape_105 = new cjs.Shape();
	this.shape_105.graphics.f("#0099CC").s().p("AgLBKIAAiTIAXAAIAACTg");
	this.shape_105.setTransform(-225,50.6);

	this.shape_106 = new cjs.Shape();
	this.shape_106.graphics.f("#0099CC").s().p("AgmArQgLgLAAgTIAAhCIAXAAIAAA7QAAAMAHAHQAGAHAMAAQAIAAAHgFQAGgEAEgHQADgIAAgIIAAg1IAXAAIAABqIgXAAIAAgVQgGALgJAFQgKAFgMABQgTgBgJgKg");
	this.shape_106.setTransform(-234.6,52.7);

	this.shape_107 = new cjs.Shape();
	this.shape_107.graphics.f("#0099CC").s().p("AAcA2IAAg7QgBgMgGgHQgHgHgMAAQgMAAgIAJQgHAHgCANIAAA4IgXAAIAAhqIAXAAIAAAVQAGgLAKgFQAKgGAMABQATAAALAKQAJALABAUIAABBg");
	this.shape_107.setTransform(-247.4,52.6);

	this.shape_108 = new cjs.Shape();
	this.shape_108.graphics.f("#0099CC").s().p("AgEA/QgHgDgEgHQgEgHAAgLIAAg2IgQAAIAAgRIAQAAIAAgdIAVAAIAAAdIAgAAIAAARIggAAIAAAyQABAIADADQADAEAFgBIAIgBIAIgDIAFARQgFAEgHACQgHACgHAAQgHAAgGgDg");
	this.shape_108.setTransform(-272.1,51.5);

	this.shape_109 = new cjs.Shape();
	this.shape_109.graphics.f("#0099CC").s().p("AgdAyQgIgFgFgHQgEgHgBgKQABgOAKgIQAKgIAUgBIAfAAIAAgDQAAgKgHgGQgGgFgMgBQgHABgIACQgIACgIAGIgJgQIAOgHIAOgFQAHgBAKAAQAUAAALAJQALAKAAASIABBFIgXAAIAAgNQgGAHgJAEQgJADgKAAQgMAAgIgEgAgUAJQgFADAAAIQAAAHAGAFQAFAEAKAAQALgBAJgFQAIgGABgIIAAgKIgcAAIgDAAQgJAAgFADg");
	this.shape_109.setTransform(-282.3,52.7);

	this.shape_110 = new cjs.Shape();
	this.shape_110.graphics.f("#0099CC").s().p("AgKBLIAAhpIAVAAIAABpgAgIgzQgEgEgBgFQABgHAEgDQADgEAFAAQAGAAADAEQAEADAAAHQAAAFgEAEQgDAEgGAAQgFAAgDgEg");
	this.shape_110.setTransform(-290.7,50.5);

	this.shape_111 = new cjs.Shape();
	this.shape_111.graphics.f("#0099CC").s().p("AgYBFQgMgDgJgHIAKgQQAHAFAIADQAIADAKAAQAOAAAJgIQAJgIAAgOIAAgNQgFAIgJAFQgJAFgLAAQgOgBgLgGQgLgGgGgMQgGgKAAgQQAAgPAGgLQAGgMAKgGQALgGAOAAQAMgBAIAFQAJAFAGAIIAAgRIAXAAIAABfQAAAQgHALQgGALgNAGQgNAGgPAAQgMAAgLgEgAgPgyQgIAEgDAIQgEAHgBAKQABAJAEAIQADAGAIAEQAGAFAJAAQAIAAAHgFQAHgEAFgGQADgIAAgJQAAgPgJgJQgHgJgOAAQgJAAgGAEg");
	this.shape_111.setTransform(-300.4,54.6);

	this.shape_112 = new cjs.Shape();
	this.shape_112.graphics.f("#0099CC").s().p("AgnArQgKgLAAgTIAAhCIAXAAIAAA7QAAAMAHAHQAGAHAMAAQAIAAAGgFQAHgEADgHQAEgIAAgIIAAg1IAXAAIAABqIgXAAIAAgVQgFALgKAFQgKAFgMABQgSgBgLgKg");
	this.shape_112.setTransform(-313.1,52.7);

	this.shape_113 = new cjs.Shape();
	this.shape_113.graphics.f("#0099CC").s().p("AgWBLIAAhVIgOAAIAAgRIAOAAIAAgKQAAgMAFgJQAFgIAJgEQAHgEAJAAQAHAAAGACQAGACAFAEIgJARQgDgCgEgBIgHgCQgGAAgEAEQgEADAAAIIAAAMIAbAAIAAARIgbAAIAABVg");
	this.shape_113.setTransform(-321.8,50.5);

	this.shape_114 = new cjs.Shape();
	this.shape_114.graphics.f("#0099CC").s().p("AgmArQgLgLAAgTIAAhCIAXAAIAAA7QAAAMAHAHQAGAHAMAAQAIAAAHgFQAGgEAEgHQADgIAAgIIAAg1IAXAAIAABqIgXAAIAAgVQgGALgJAFQgKAFgMABQgTgBgJgKg");
	this.shape_114.setTransform(319.3,19.8);

	this.shape_115 = new cjs.Shape();
	this.shape_115.graphics.f("#0099CC").s().p("AgZAvQgMgHgHgMQgHgMAAgQQAAgPAHgNQAHgMAMgHQAMgGAPAAQATAAALAHQAMAIAFAOQAEAOgBASIhPAAQACANAJAHQAJAHAMAAQAIAAAIgDQAIgDAGgGIAMANQgIAJgLAEQgLAFgOAAQgQAAgMgHgAAggHQgBgNgIgIQgIgHgNAAQgMAAgIAHQgIAIgCANIA8AAIAAAAg");
	this.shape_115.setTransform(307.1,19.8);

	this.shape_116 = new cjs.Shape();
	this.shape_116.graphics.f("#0099CC").s().p("AgZAvQgMgHgHgMQgHgMAAgQQAAgPAHgNQAHgMAMgHQAMgGAPAAQATAAALAHQAMAIAFAOQAEAOgBASIhPAAQACANAJAHQAJAHAMAAQAIAAAIgDQAIgDAGgGIAMANQgIAJgLAEQgLAFgOAAQgQAAgMgHgAAggHQgBgNgIgIQgIgHgNAAQgMAAgIAHQgIAIgCANIA8AAIAAAAg");
	this.shape_116.setTransform(285.1,19.8);

	this.shape_117 = new cjs.Shape();
	this.shape_117.graphics.f("#0099CC").s().p("AgdA2IAAhqIAXAAIAAAVQAFgKAJgGQAJgFANgBIAAAWQgLAAgIAEQgIADgDAHQgFAHgBAJIAAA3g");
	this.shape_117.setTransform(276,19.8);

	this.shape_118 = new cjs.Shape();
	this.shape_118.graphics.f("#0099CC").s().p("AgcAvQgMgHgIgMQgGgMgBgQQABgQAGgMQAIgMAMgHQANgGAPAAQAQAAANAGQAMAHAIAMQAGAMABAQQgBAQgGAMQgIAMgMAHQgNAHgQAAQgPAAgNgHgAgQgdQgHAEgFAIQgDAIAAAJQgBAPAKAKQAJAJANAAQAOAAAJgJQAKgKgBgPQAAgJgDgIQgFgIgHgEQgIgFgJABQgIgBgIAFg");
	this.shape_118.setTransform(265.1,19.8);

	this.shape_119 = new cjs.Shape();
	this.shape_119.graphics.f("#0099CC").s().p("AgKBKIAAiTIAVAAIAACTg");
	this.shape_119.setTransform(255.9,17.7);

	this.shape_120 = new cjs.Shape();
	this.shape_120.graphics.f("#0099CC").s().p("AgcAvQgMgHgIgMQgGgMgBgQQABgQAGgMQAIgMAMgHQANgGAPAAQAQAAANAGQAMAHAIAMQAHAMAAAQQAAAQgHAMQgIAMgMAHQgNAHgQAAQgPAAgNgHgAgQgdQgHAEgFAIQgEAIAAAJQAAAPAJAKQAKAJANAAQAPAAAIgJQAKgKgBgPQAAgJgDgIQgFgIgHgEQgIgFgJABQgJgBgHAFg");
	this.shape_120.setTransform(246.7,19.8);

	this.shape_121 = new cjs.Shape();
	this.shape_121.graphics.f("#0099CC").s().p("AgfBEQgLgHgGgMQgHgNAAgQQAAgQAHgLQAGgMALgHQAMgHAPAAQAMAAAJAFQAKAFAGAKIAAg9IAXAAIAACUIgXAAIAAgTQgGAKgJAFQgKAFgMAAQgPAAgMgHgAgQgJQgHAFgEAHQgFAIAAAKQAAAKAFAIQAEAIAHAEQAHAEAJAAQAKAAAHgEQAHgEAEgIQAFgIAAgKQAAgKgFgIQgEgHgHgFQgHgEgKAAQgJAAgHAEg");
	this.shape_121.setTransform(233.1,17.7);

	this.shape_122 = new cjs.Shape();
	this.shape_122.graphics.f("#0099CC").s().p("ABCA2IAAg7QgBgMgGgHQgHgHgMAAQgJAAgGAFQgHAEgDAHQgDAIAAAIIAAA1IgXAAIAAg7QAAgMgGgHQgHgHgLAAQgKAAgGAFQgHAEgDAHQgFAIAAAIIAAA1IgWAAIAAhqIAWAAIAAAVQAHgLAJgFQAKgGAOABQAOAAAJAGQAIAHAFAMQAEgNALgGQAKgHAPABQASAAAKAKQALALAAAUIAABBg");
	this.shape_122.setTransform(206.2,19.7);

	this.shape_123 = new cjs.Shape();
	this.shape_123.graphics.f("#0099CC").s().p("AgnArQgKgLAAgTIAAhCIAXAAIAAA7QAAAMAHAHQAGAHAMAAQAIAAAHgFQAGgEADgHQAEgIAAgIIAAg1IAXAAIAABqIgXAAIAAgVQgGALgJAFQgKAFgMABQgTgBgKgKg");
	this.shape_123.setTransform(188.9,19.8);

	this.shape_124 = new cjs.Shape();
	this.shape_124.graphics.f("#0099CC").s().p("AgLBKIAAiTIAXAAIAACTg");
	this.shape_124.setTransform(179.7,17.7);

	this.shape_125 = new cjs.Shape();
	this.shape_125.graphics.f("#0099CC").s().p("AgLBKIAAiTIAXAAIAACTg");
	this.shape_125.setTransform(173.8,17.7);

	this.shape_126 = new cjs.Shape();
	this.shape_126.graphics.f("#0099CC").s().p("AgKBLIAAhpIAVAAIAABpgAgJgzQgDgEAAgFQAAgHADgDQAEgEAFAAQAGAAADAEQAEADABAHQgBAFgEAEQgDAEgGAAQgFAAgEgEg");
	this.shape_126.setTransform(168,17.6);

	this.shape_127 = new cjs.Shape();
	this.shape_127.graphics.f("#0099CC").s().p("AgXAvQgMgHgHgMQgHgMAAgQQAAgPAHgNQAHgMAMgHQAMgGAPAAQAOAAALAEQAMAFAHAIIgMAPQgGgGgIgDQgIgDgJAAQgIAAgIAEQgGAFgFAHQgDAIAAAJQAAAKADAHQAFAIAGAFQAIAEAIAAQAKAAAIgDQAIgDAGgHIAMANQgHAJgMAGQgLAEgPABQgPAAgMgHg");
	this.shape_127.setTransform(159.5,19.8);

	this.shape_128 = new cjs.Shape();
	this.shape_128.graphics.f("#0099CC").s().p("AgZAvQgMgHgHgMQgHgMAAgQQAAgPAHgNQAHgMAMgHQAMgGAPAAQATAAALAHQAMAIAFAOQAEAOgBASIhPAAQACANAJAHQAJAHAMAAQAIAAAIgDQAIgDAGgGIAMANQgIAJgLAEQgLAFgOAAQgQAAgMgHgAAggHQgBgNgIgIQgIgHgNAAQgMAAgIAHQgIAIgCANIA8AAIAAAAg");
	this.shape_128.setTransform(137.7,19.8);

	this.shape_129 = new cjs.Shape();
	this.shape_129.graphics.f("#0099CC").s().p("AgWAyQgLgDgIgIIAJgQQAEAEAGADIAMAFIAMABQAIAAAEgDQAFgCABgGQgBgHgGgDQgFgDgIgDIgQgFQgIgDgGgGQgFgGAAgLQAAgLAFgHQAFgHAKgDQAIgDAKAAQAKAAAKADQAJACAIAGIgJARQgGgFgJgCQgIgDgHAAQgGAAgFADQgEACABAGQAAAFAFAEQAGADAHACIARAGQAIADAGAGQAGAGAAALQAAALgGAHQgFAHgKAEQgJADgLAAQgLAAgMgEg");
	this.shape_129.setTransform(127,19.8);

	this.shape_130 = new cjs.Shape();
	this.shape_130.graphics.f("#0099CC").s().p("AgVAyQgLgDgJgIIAIgQQAFAEAGADIAMAFIAMABQAHAAAGgDQAEgCAAgGQAAgHgFgDQgGgDgIgDIgQgFQgIgDgFgGQgGgGgBgLQABgLAFgHQAGgHAIgDQAJgDAKAAQAKAAAKADQAKACAHAGIgIARQgHgFgIgCQgJgDgHAAQgGAAgFADQgDACAAAGQgBAFAGAEQAGADAIACIAQAGQAIADAGAGQAFAGABALQgBALgFAHQgGAHgJAEQgJADgLAAQgLAAgLgEg");
	this.shape_130.setTransform(117.6,19.8);

	this.shape_131 = new cjs.Shape();
	this.shape_131.graphics.f("#0099CC").s().p("AgZAvQgMgHgHgMQgHgMAAgQQAAgPAHgNQAHgMAMgHQAMgGAPAAQATAAALAHQAMAIAFAOQAEAOgBASIhPAAQACANAJAHQAJAHAMAAQAIAAAIgDQAIgDAGgGIAMANQgIAJgLAEQgLAFgOAAQgQAAgMgHgAAggHQgBgNgIgIQgIgHgNAAQgMAAgIAHQgIAIgCANIA8AAIAAAAg");
	this.shape_131.setTransform(107.2,19.8);

	this.shape_132 = new cjs.Shape();
	this.shape_132.graphics.f("#0099CC").s().p("AgEA/QgHgDgEgHQgEgHgBgLIAAg2IgOAAIAAgRIAOAAIAAgdIAXAAIAAAdIAfAAIAAARIgfAAIAAAyQAAAIACADQADAEAGgBIAHgBIAJgDIAGARQgHAEgGACQgHACgGAAQgIAAgGgDg");
	this.shape_132.setTransform(87,18.6);

	this.shape_133 = new cjs.Shape();
	this.shape_133.graphics.f("#0099CC").s().p("AgKBLIAAhpIAVAAIAABpgAgIgzQgFgEAAgFQAAgHAFgDQADgEAFAAQAGAAAEAEQADADAAAHQAAAFgDAEQgEAEgGAAQgFAAgDgEg");
	this.shape_133.setTransform(80,17.6);

	this.shape_134 = new cjs.Shape();
	this.shape_134.graphics.f("#0099CC").s().p("AgKBKIAAiTIAVAAIAACTg");
	this.shape_134.setTransform(74.2,17.7);

	this.shape_135 = new cjs.Shape();
	this.shape_135.graphics.f("#0099CC").s().p("AgZAvQgMgHgHgMQgHgMAAgQQAAgPAHgNQAHgMAMgHQAMgGAPAAQATAAALAHQAMAIAFAOQAEAOgBASIhPAAQACANAJAHQAJAHAMAAQAIAAAIgDQAIgDAGgGIAMANQgIAJgLAEQgLAFgOAAQgQAAgMgHgAAggHQgBgNgIgIQgIgHgNAAQgMAAgIAHQgIAIgCANIA8AAIAAAAg");
	this.shape_135.setTransform(65.4,19.8);

	this.shape_136 = new cjs.Shape();
	this.shape_136.graphics.f("#0099CC").s().p("AgKA1IgqhpIAYAAIAdBTIAdhTIAXAAIgpBpg");
	this.shape_136.setTransform(54.4,19.8);

	this.shape_137 = new cjs.Shape();
	this.shape_137.graphics.f("#0099CC").s().p("AgZAvQgMgHgHgMQgHgMAAgQQAAgPAHgNQAHgMAMgHQAMgGAPAAQATAAALAHQAMAIAFAOQAEAOgBASIhPAAQACANAJAHQAJAHAMAAQAIAAAIgDQAIgDAGgGIAMANQgIAJgLAEQgLAFgOAAQgQAAgMgHgAAggHQgBgNgIgIQgIgHgNAAQgMAAgIAHQgIAIgCANIA8AAIAAAAg");
	this.shape_137.setTransform(32.9,19.8);

	this.shape_138 = new cjs.Shape();
	this.shape_138.graphics.f("#0099CC").s().p("AgFA/QgGgDgEgHQgEgHgBgLIAAg2IgOAAIAAgRIAOAAIAAgdIAXAAIAAAdIAfAAIAAARIgfAAIAAAyQAAAIACADQADAEAGgBIAHgBIAJgDIAGARQgHAEgGACQgHACgGAAQgIAAgHgDg");
	this.shape_138.setTransform(23.1,18.6);

	this.shape_139 = new cjs.Shape();
	this.shape_139.graphics.f("#0099CC").s().p("AgdAxQgIgDgFgIQgEgHgBgKQABgPAKgHQAKgJAUAAIAfAAIAAgDQAAgKgHgGQgGgGgMABQgHAAgIACQgIADgIAFIgJgQIAOgIIAOgDQAHgCAKAAQAUAAALAKQALAJAAASIABBFIgXAAIAAgNQgGAHgJADQgJAEgKAAQgMAAgIgFgAgUAJQgFAEAAAHQAAAIAGADQAFAEAKABQALAAAJgGQAIgFABgKIAAgJIgcAAIgDAAQgJAAgFADg");
	this.shape_139.setTransform(12.8,19.8);

	this.shape_140 = new cjs.Shape();
	this.shape_140.graphics.f("#0099CC").s().p("AgEA/QgHgDgEgHQgEgHgBgLIAAg2IgOAAIAAgRIAOAAIAAgdIAXAAIAAAdIAfAAIAAARIgfAAIAAAyQAAAIACADQADAEAGgBIAIgBIAIgDIAGARQgHAEgGACQgHACgGAAQgIAAgGgDg");
	this.shape_140.setTransform(3.3,18.6);

	this.shape_141 = new cjs.Shape();
	this.shape_141.graphics.f("#0099CC").s().p("Ag2BJIAAiQIAWAAIAAASQAHgKAJgEQAJgFAMAAQAPAAAMAGQAKAHAHAMQAGANAAAQQAAAQgGALQgGAMgLAHQgMAHgPAAQgMAAgJgFQgJgFgHgKIAAA6gAgQgxQgHAFgEAHQgEAJgBAJQABAQAIAIQAJAKAOAAQAJAAAIgEQAHgFAEgHQAEgHABgLQgBgJgEgJQgEgHgHgFQgIgEgJAAQgJAAgHAEg");
	this.shape_141.setTransform(-7.1,21.7);

	this.shape_142 = new cjs.Shape();
	this.shape_142.graphics.f("#0099CC").s().p("AgmArQgKgLgBgTIAAhCIAXAAIAAA7QAAAMAHAHQAHAHALAAQAIAAAGgFQAHgEAEgHQADgIAAgIIAAg1IAXAAIAABqIgXAAIAAgVQgGALgJAFQgKAFgMABQgTgBgJgKg");
	this.shape_142.setTransform(-21.2,19.8);

	this.shape_143 = new cjs.Shape();
	this.shape_143.graphics.f("#0099CC").s().p("AgKBKIAAiTIAVAAIAACTg");
	this.shape_143.setTransform(-30.4,17.7);

	this.shape_144 = new cjs.Shape();
	this.shape_144.graphics.f("#0099CC").s().p("AgcAvQgNgHgGgMQgIgMABgQQgBgQAIgMQAGgMANgHQAMgGAQAAQARAAAMAGQANAHAGAMQAIAMgBAQQABAQgIAMQgGAMgNAHQgMAHgRAAQgQAAgMgHgAgQgdQgHAEgEAIQgFAIAAAJQABAPAIAKQAJAJAOAAQAPAAAJgJQAIgKABgPQgBgJgEgIQgEgIgHgEQgHgFgKABQgIgBgIAFg");
	this.shape_144.setTransform(-39.6,19.8);

	this.shape_145 = new cjs.Shape();
	this.shape_145.graphics.f("#0099CC").s().p("AgLA1IgphpIAYAAIAdBTIAdhTIAXAAIgpBpg");
	this.shape_145.setTransform(-51,19.8);

	this.shape_146 = new cjs.Shape();
	this.shape_146.graphics.f("#0099CC").s().p("AAcA2IAAg7QgBgMgGgHQgHgHgMAAQgMAAgIAJQgHAHgCANIAAA4IgXAAIAAhqIAXAAIAAAVQAGgLAKgFQAKgGAMABQATAAAKAKQALALAAAUIAABBg");
	this.shape_146.setTransform(-73.1,19.7);

	this.shape_147 = new cjs.Shape();
	this.shape_147.graphics.f("#0099CC").s().p("AgLBLIAAhpIAWAAIAABpgAgJgzQgEgEAAgFQAAgHAEgDQAEgEAFAAQAGAAAEAEQADADAAAHQAAAFgDAEQgEAEgGAAQgFAAgEgEg");
	this.shape_147.setTransform(-82.8,17.6);

	this.shape_148 = new cjs.Shape();
	this.shape_148.graphics.f("#0099CC").s().p("AgEA/QgHgDgEgHQgEgHgBgLIAAg2IgPAAIAAgRIAPAAIAAgdIAXAAIAAAdIAfAAIAAARIgfAAIAAAyQAAAIACADQADAEAGgBIAIgBIAIgDIAFARQgFAEgHACQgHACgHAAQgIAAgFgDg");
	this.shape_148.setTransform(-100,18.6);

	this.shape_149 = new cjs.Shape();
	this.shape_149.graphics.f("#0099CC").s().p("AgLBLIAAhpIAWAAIAABpgAgIgzQgFgEAAgFQAAgHAFgDQADgEAFAAQAGAAAEAEQADADAAAHQAAAFgDAEQgEAEgGAAQgFAAgDgEg");
	this.shape_149.setTransform(-107,17.6);

	this.shape_150 = new cjs.Shape();
	this.shape_150.graphics.f("#0099CC").s().p("AgdA2IAAhqIAXAAIAAAVQAGgKAIgGQAJgFANgBIAAAWQgLAAgIAEQgHADgFAHQgEAHgBAJIAAA3g");
	this.shape_150.setTransform(-113,19.8);

	this.shape_151 = new cjs.Shape();
	this.shape_151.graphics.f("#0099CC").s().p("AgZAvQgMgHgHgMQgHgMAAgQQAAgPAHgNQAHgMAMgHQAMgGAPAAQATAAALAHQAMAIAFAOQAEAOgBASIhPAAQACANAJAHQAJAHAMAAQAIAAAIgDQAIgDAGgGIAMANQgIAJgLAEQgLAFgOAAQgQAAgMgHgAAggHQgBgNgIgIQgIgHgNAAQgMAAgIAHQgIAIgCANIA8AAIAAAAg");
	this.shape_151.setTransform(-123.6,19.8);

	this.shape_152 = new cjs.Shape();
	this.shape_152.graphics.f("#0099CC").s().p("AgfBEQgLgHgGgMQgHgNAAgQQAAgQAHgLQAGgMALgHQAMgHAPAAQAMAAAJAFQAKAFAGAKIAAg9IAXAAIAACUIgXAAIAAgTQgGAKgJAFQgKAFgMAAQgPAAgMgHgAgQgJQgHAFgEAHQgFAIAAAKQAAAKAFAIQAEAIAHAEQAHAEAJAAQAKAAAHgEQAHgEAEgIQAFgIAAgKQAAgKgFgIQgEgHgHgFQgHgEgKAAQgJAAgHAEg");
	this.shape_152.setTransform(-136.8,17.7);

	this.shape_153 = new cjs.Shape();
	this.shape_153.graphics.f("#0099CC").s().p("AAcA2IAAg7QgBgMgGgHQgHgHgMAAQgMAAgIAJQgHAHgCANIAAA4IgXAAIAAhqIAXAAIAAAVQAGgLAKgFQAKgGAMABQATAAAKAKQALALAAAUIAABBg");
	this.shape_153.setTransform(-149.5,19.7);

	this.shape_154 = new cjs.Shape();
	this.shape_154.graphics.f("#0099CC").s().p("AgZAvQgMgHgHgMQgHgMAAgQQAAgPAHgNQAHgMAMgHQAMgGAPAAQATAAALAHQAMAIAFAOQAEAOgBASIhPAAQACANAJAHQAJAHAMAAQAIAAAIgDQAIgDAGgGIAMANQgIAJgLAEQgLAFgOAAQgQAAgMgHgAAggHQgBgNgIgIQgIgHgNAAQgMAAgIAHQgIAIgCANIA8AAIAAAAg");
	this.shape_154.setTransform(-162.2,19.8);

	this.shape_155 = new cjs.Shape();
	this.shape_155.graphics.f("#0099CC").s().p("AAcBKIAAg8QAAgMgHgFQgHgHgMAAQgIAAgHAEQgHAEgEAHQgDAHAAAKIAAA0IgXAAIAAiTIAXAAIAAA/QAGgMAKgFQAJgFANAAQATAAALALQAKALAAASIAABCg");
	this.shape_155.setTransform(-174.5,17.7);

	this.shape_156 = new cjs.Shape();
	this.shape_156.graphics.f("#0099CC").s().p("AgZAvQgMgHgHgMQgHgMAAgQQAAgPAHgNQAHgMAMgHQAMgGAPAAQATAAALAHQAMAIAFAOQAEAOgBASIhPAAQACANAJAHQAJAHAMAAQAIAAAIgDQAIgDAGgGIAMANQgIAJgLAEQgLAFgOAAQgQAAgMgHgAAggHQgBgNgIgIQgIgHgNAAQgMAAgIAHQgIAIgCANIA8AAIAAAAg");
	this.shape_156.setTransform(-187.3,19.8);

	this.shape_157 = new cjs.Shape();
	this.shape_157.graphics.f("#0099CC").s().p("AgdA2IAAhqIAXAAIAAAVQAGgKAIgGQAJgFANgBIAAAWQgLAAgIAEQgIADgDAHQgFAHgBAJIAAA3g");
	this.shape_157.setTransform(-196.3,19.8);

	this.shape_158 = new cjs.Shape();
	this.shape_158.graphics.f("#0099CC").s().p("Ag3BJIAAiQIAYAAIAAASQAFgKAKgEQAJgFAMAAQAPAAAMAGQAKAHAHAMQAHANgBAQQABAQgHALQgGAMgLAHQgMAHgPAAQgMAAgJgFQgKgFgFgKIAAA6gAgQgxQgHAFgFAHQgDAJAAAJQAAAQAJAIQAIAKAOAAQAJAAAHgEQAIgFAEgHQAEgHABgLQgBgJgEgJQgEgHgIgFQgHgEgJAAQgJAAgHAEg");
	this.shape_158.setTransform(-207.3,21.7);

	this.shape_159 = new cjs.Shape();
	this.shape_159.graphics.f("#0099CC").s().p("AgZAvQgMgHgHgMQgHgMAAgQQAAgPAHgNQAHgMAMgHQAMgGAPAAQATAAALAHQAMAIAFAOQAEAOgBASIhPAAQACANAJAHQAJAHAMAAQAIAAAIgDQAIgDAGgGIAMANQgIAJgLAEQgLAFgOAAQgQAAgMgHgAAggHQgBgNgIgIQgIgHgNAAQgMAAgIAHQgIAIgCANIA8AAIAAAAg");
	this.shape_159.setTransform(-220.5,19.8);

	this.shape_160 = new cjs.Shape();
	this.shape_160.graphics.f("#0099CC").s().p("AgdA2IAAhqIAXAAIAAAVQAGgKAIgGQAJgFANgBIAAAWQgLAAgIAEQgIADgDAHQgFAHgBAJIAAA3g");
	this.shape_160.setTransform(-229.5,19.8);

	this.shape_161 = new cjs.Shape();
	this.shape_161.graphics.f("#0099CC").s().p("AAcA2IAAg7QgBgMgGgHQgHgHgMAAQgMAAgIAJQgHAHgCANIAAA4IgXAAIAAhqIAXAAIAAAVQAGgLAKgFQAKgGAMABQATAAALAKQAJALABAUIAABBg");
	this.shape_161.setTransform(-251,19.7);

	this.shape_162 = new cjs.Shape();
	this.shape_162.graphics.f("#0099CC").s().p("AgKBLIAAhpIAVAAIAABpgAgIgzQgFgEAAgFQAAgHAFgDQADgEAFAAQAGAAAEAEQADADAAAHQAAAFgDAEQgEAEgGAAQgFAAgDgEg");
	this.shape_162.setTransform(-260.7,17.6);

	this.shape_163 = new cjs.Shape();
	this.shape_163.graphics.f("#0099CC").s().p("AgdA2IAAhqIAXAAIAAAVQAGgKAIgGQAJgFANgBIAAAWQgLAAgIAEQgHADgFAHQgEAHgBAJIAAA3g");
	this.shape_163.setTransform(-277.1,19.8);

	this.shape_164 = new cjs.Shape();
	this.shape_164.graphics.f("#0099CC").s().p("AgcAvQgNgHgGgMQgIgMABgQQgBgQAIgMQAGgMANgHQAMgGAQAAQARAAAMAGQANAHAGAMQAIAMgBAQQABAQgIAMQgGAMgNAHQgMAHgRAAQgQAAgMgHgAgQgdQgHAEgEAIQgEAIgBAJQABAPAIAKQAJAJAOAAQAPAAAJgJQAIgKABgPQgBgJgEgIQgEgIgHgEQgHgFgKABQgIgBgIAFg");
	this.shape_164.setTransform(-288,19.8);

	this.shape_165 = new cjs.Shape();
	this.shape_165.graphics.f("#0099CC").s().p("AgLBKIAAiTIAXAAIAACTg");
	this.shape_165.setTransform(-297.2,17.7);

	this.shape_166 = new cjs.Shape();
	this.shape_166.graphics.f("#0099CC").s().p("AgcAvQgNgHgGgMQgIgMABgQQgBgQAIgMQAGgMANgHQAMgGAQAAQARAAAMAGQANAHAGAMQAIAMgBAQQABAQgIAMQgGAMgNAHQgMAHgRAAQgQAAgMgHgAgQgdQgHAEgEAIQgEAIgBAJQABAPAIAKQAJAJAOAAQAPAAAJgJQAIgKABgPQAAgJgFgIQgEgIgHgEQgIgFgJABQgJgBgHAFg");
	this.shape_166.setTransform(-306.4,19.8);

	this.shape_167 = new cjs.Shape();
	this.shape_167.graphics.f("#0099CC").s().p("AgfBEQgLgHgGgMQgHgNAAgQQAAgQAHgLQAGgMALgHQAMgHAPAAQAMAAAJAFQAKAFAGAKIAAg9IAXAAIAACUIgXAAIAAgTQgGAKgJAFQgKAFgMAAQgPAAgMgHgAgQgJQgHAFgEAHQgFAIAAAKQAAAKAFAIQAEAIAHAEQAHAEAJAAQAKAAAHgEQAHgEAEgIQAFgIAAgKQAAgKgFgIQgEgHgHgFQgHgEgKAAQgJAAgHAEg");
	this.shape_167.setTransform(-320,17.7);

	this.shape_168 = new cjs.Shape();
	this.shape_168.graphics.f("#0099CC").s().p("AgZAvQgMgHgHgMQgHgMAAgQQAAgPAHgMQAHgNAMgGQAMgHAPAAQATAAALAIQAMAHAFAOQAEAOgBATIhPAAQACAMAJAHQAJAHAMAAQAIAAAIgDQAIgDAGgGIAMANQgIAJgLAEQgLAEgOABQgQgBgMgGgAAggHQgBgNgIgHQgIgIgNAAQgMAAgIAIQgIAHgCANIA8AAIAAAAg");
	this.shape_168.setTransform(320.2,-13.1);

	this.shape_169 = new cjs.Shape();
	this.shape_169.graphics.f("#0099CC").s().p("AgdA1IAAhpIAXAAIAAAVQAFgKAJgGQAJgGANAAIAAAWQgLAAgIADQgIAEgEAHQgEAGgBAKIAAA2g");
	this.shape_169.setTransform(311.1,-13.1);

	this.shape_170 = new cjs.Shape();
	this.shape_170.graphics.f("#0099CC").s().p("AgnArQgKgLAAgTIAAhCIAXAAIAAA7QAAAMAHAHQAGAHAMAAQAIAAAGgFQAHgEADgHQAEgIAAgIIAAg1IAXAAIAABqIgXAAIAAgVQgFALgKAFQgKAFgMABQgTgBgKgKg");
	this.shape_170.setTransform(299.7,-13.1);

	this.shape_171 = new cjs.Shape();
	this.shape_171.graphics.f("#0099CC").s().p("AgdA1IAAhpIAXAAIAAAVQAGgKAIgGQAJgGANAAIAAAWQgLAAgIADQgHAEgFAHQgEAGgBAKIAAA2g");
	this.shape_171.setTransform(290.2,-13.1);

	this.shape_172 = new cjs.Shape();
	this.shape_172.graphics.f("#0099CC").s().p("AgLBLIAAhpIAWAAIAABpgAgJgzQgEgEAAgFQAAgHAEgDQAEgEAFAAQAGAAAEAEQADADAAAHQAAAFgDAEQgEAEgGAAQgFAAgEgEg");
	this.shape_172.setTransform(282.6,-15.3);

	this.shape_173 = new cjs.Shape();
	this.shape_173.graphics.f("#0099CC").s().p("AgZAvQgMgHgHgMQgHgMAAgQQAAgPAHgMQAHgNAMgGQAMgHAPAAQATAAALAIQAMAHAFAOQAEAOgBATIhPAAQACAMAJAHQAJAHAMAAQAIAAAIgDQAIgDAGgGIAMANQgIAJgLAEQgLAEgOABQgQgBgMgGgAAggHQgBgNgIgHQgIgIgNAAQgMAAgIAIQgIAHgCANIA8AAIAAAAg");
	this.shape_173.setTransform(267.2,-13.1);

	this.shape_174 = new cjs.Shape();
	this.shape_174.graphics.f("#0099CC").s().p("AgEA/QgHgDgEgHQgEgHgBgLIAAg2IgPAAIAAgRIAPAAIAAgdIAXAAIAAAdIAfAAIAAARIgfAAIAAAyQAAAIADADQACAEAGgBIAIgBIAIgDIAFARQgFAEgHACQgHACgHAAQgIAAgFgDg");
	this.shape_174.setTransform(257.3,-14.3);

	this.shape_175 = new cjs.Shape();
	this.shape_175.graphics.f("#0099CC").s().p("AgnArQgJgLgBgTIAAhCIAXAAIAAA7QAAAMAHAHQAHAHALAAQAIAAAGgFQAHgEADgHQAEgIAAgIIAAg1IAXAAIAABqIgXAAIAAgVQgGALgJAFQgKAFgMABQgSgBgLgKg");
	this.shape_175.setTransform(246.5,-13.1);

	this.shape_176 = new cjs.Shape();
	this.shape_176.graphics.f("#0099CC").s().p("AgdAxQgIgEgFgHQgEgIgBgJQABgOAKgIQAKgIAUgBIAfAAIAAgDQAAgKgHgGQgGgFgMgBQgHABgIACQgIACgIAGIgJgQIAOgHIAOgFQAHgBAKAAQAUAAALAJQALAKAAASIABBFIgXAAIAAgNQgGAHgJAEQgJADgKAAQgMAAgIgFgAgUAJQgFAEAAAHQAAAHAGAEQAFAFAKAAQALgBAJgFQAIgGABgIIAAgKIgcAAIgDAAQgJAAgFADg");
	this.shape_176.setTransform(234,-13.1);

	this.shape_177 = new cjs.Shape();
	this.shape_177.graphics.f("#0099CC").s().p("AgWAyQgLgDgIgIIAJgQQAEAEAGADIAMAFIAMABQAIAAAEgDQAFgCABgGQgBgHgFgDQgGgDgIgDIgQgFQgIgDgGgGQgFgGgBgLQABgLAFgHQAFgHAKgDQAJgDAJAAQAKAAAKADQAJACAIAGIgIARQgIgFgIgCQgIgDgHAAQgGAAgFADQgDACAAAGQAAAFAFAEQAGADAHACIARAGQAJADAFAGQAFAGABALQgBALgFAHQgFAHgKAEQgJADgLAAQgLAAgMgEg");
	this.shape_177.setTransform(216.9,-13.1);

	this.shape_178 = new cjs.Shape();
	this.shape_178.graphics.f("#0099CC").s().p("AgLBLIAAhpIAWAAIAABpgAgIgzQgFgEAAgFQAAgHAFgDQADgEAFAAQAGAAAEAEQADADAAAHQAAAFgDAEQgEAEgGAAQgFAAgDgEg");
	this.shape_178.setTransform(209.5,-15.3);

	this.shape_179 = new cjs.Shape();
	this.shape_179.graphics.f("#0099CC").s().p("AgnArQgKgLAAgTIAAhCIAXAAIAAA7QAAAMAHAHQAGAHAMAAQAIAAAGgFQAHgEADgHQAEgIAAgIIAAg1IAXAAIAABqIgXAAIAAgVQgFALgKAFQgKAFgMABQgSgBgLgKg");
	this.shape_179.setTransform(199.9,-13.1);

	this.shape_180 = new cjs.Shape();
	this.shape_180.graphics.f("#0099CC").s().p("AhABGIAAiLIA6AAQAUAAAQAJQAQAJAKAQQAJAPAAAUQAAAUgJAQQgKAQgQAJQgRAJgUAAgAgoAxIAiAAQANgBALgFQAKgHAHgKQAGgLAAgPQAAgOgGgKQgHgLgLgHQgLgFgNgBIghAAg");
	this.shape_180.setTransform(186.4,-14.8);

	this.shape_181 = new cjs.Shape();
	this.shape_181.graphics.f("#0099CC").s().p("AgIAJQgDgDgBgGQABgFADgEQAEgDAEAAQAFAAAEADQAEAEAAAFQAAAGgEADQgEAEgFAAQgEAAgEgEg");
	this.shape_181.setTransform(169.1,-8.9);

	this.shape_182 = new cjs.Shape();
	this.shape_182.graphics.f("#0099CC").s().p("AgFA/QgGgDgEgHQgEgHAAgLIAAg2IgQAAIAAgRIAQAAIAAgdIAVAAIAAAdIAgAAIAAARIggAAIAAAyQAAAIAEADQADAEAFgBIAHgBIAJgDIAGARQgGAEgHACQgHACgHAAQgHAAgHgDg");
	this.shape_182.setTransform(163,-14.3);

	this.shape_183 = new cjs.Shape();
	this.shape_183.graphics.f("#0099CC").s().p("AgdAxQgIgEgFgHQgEgIgBgJQABgOAKgIQAKgIAUgBIAfAAIAAgDQAAgKgHgGQgGgFgMgBQgHABgIACQgIACgIAGIgJgQIAOgHIAOgFQAHgBAKAAQAUAAALAJQALAKAAASIABBFIgXAAIAAgNQgGAHgJAEQgJADgKAAQgMAAgIgFgAgUAJQgFAEAAAHQAAAHAGAEQAFAFAKAAQALgBAJgFQAIgGABgIIAAgKIgcAAIgDAAQgJAAgFADg");
	this.shape_183.setTransform(152.7,-13.1);

	this.shape_184 = new cjs.Shape();
	this.shape_184.graphics.f("#0099CC").s().p("AgmArQgLgLAAgTIAAhCIAXAAIAAA7QAAAMAHAHQAGAHAMAAQAIAAAHgFQAGgEAEgHQADgIAAgIIAAg1IAXAAIAABqIgXAAIAAgVQgFALgKAFQgKAFgMABQgTgBgJgKg");
	this.shape_184.setTransform(140.5,-13.1);

	this.shape_185 = new cjs.Shape();
	this.shape_185.graphics.f("#0099CC").s().p("AAhBJIAAg5QgGAJgJAFQgKAFgMAAQgPAAgMgHQgLgHgGgMQgHgLAAgQQAAgQAHgMQAGgNALgGQAMgHAPAAQAMAAAJAFQAKAFAGAJIAAgSIAXAAIAACQgAgQgwQgHAEgEAIQgFAIAAAKQAAALAFAHQAEAHAHAEQAHAFAJAAQAKAAAHgFQAHgEAEgHQAFgHAAgLQAAgKgFgIQgEgIgHgEQgHgEgKgBQgJABgHAEg");
	this.shape_185.setTransform(126.7,-11.2);

	this.shape_186 = new cjs.Shape();
	this.shape_186.graphics.f("#0099CC").s().p("AgZAvQgMgHgHgMQgHgMAAgQQAAgPAHgMQAHgNAMgGQAMgHAPAAQATAAALAIQAMAHAFAOQAEAOgBATIhPAAQACAMAJAHQAJAHAMAAQAIAAAIgDQAIgDAGgGIAMANQgIAJgLAEQgLAEgOABQgQgBgMgGgAAggHQgBgNgIgHQgIgIgNAAQgMAAgIAIQgIAHgCANIA8AAIAAAAg");
	this.shape_186.setTransform(114.6,-13.1);

	this.shape_187 = new cjs.Shape();
	this.shape_187.graphics.f("#0099CC").s().p("AgWAyQgLgDgIgIIAJgQQAEAEAGADIAMAFIAMABQAIAAAEgDQAFgCABgGQgBgHgGgDQgFgDgIgDIgQgFQgIgDgGgGQgFgGgBgLQABgLAFgHQAFgHAKgDQAJgDAJAAQAKAAAKADQAJACAIAGIgJARQgHgFgIgCQgIgDgHAAQgGAAgFADQgDACAAAGQAAAFAFAEQAGADAHACIARAGQAJADAFAGQAFAGABALQgBALgFAHQgFAHgKAEQgJADgLAAQgLAAgMgEg");
	this.shape_187.setTransform(104,-13.1);

	this.shape_188 = new cjs.Shape();
	this.shape_188.graphics.f("#0099CC").s().p("AAcA2IAAg7QgBgMgGgHQgHgHgMAAQgMAAgIAJQgHAHgCANIAAA4IgXAAIAAhqIAXAAIAAAVQAGgLAKgFQAKgGAMABQATAAAKAKQALALAAAUIAABBg");
	this.shape_188.setTransform(92.9,-13.2);

	this.shape_189 = new cjs.Shape();
	this.shape_189.graphics.f("#0099CC").s().p("AgcAvQgMgHgIgMQgGgMAAgQQAAgPAGgMQAIgNAMgGQANgHAPAAQARAAAMAHQANAGAGANQAIAMAAAPQAAAQgIAMQgGAMgNAHQgMAGgRABQgPgBgNgGgAgQgdQgHAEgEAIQgFAIAAAJQAAAQAJAJQAKAKANAAQAPAAAIgKQAJgJAAgQQAAgJgDgIQgFgIgHgEQgHgEgKgBQgIABgIAEg");
	this.shape_189.setTransform(79.9,-13.1);

	this.shape_190 = new cjs.Shape();
	this.shape_190.graphics.f("#0099CC").s().p("AgXAvQgMgHgGgMQgIgMAAgQQAAgPAIgMQAGgNAMgGQAMgHAPAAQAPAAALAEQALAFAHAIIgNAPQgFgGgIgDQgIgDgJAAQgIAAgIAFQgGAEgFAHQgDAIAAAJQAAAKADAIQAFAHAGAEQAIAFAIAAQAKAAAIgEQAIgDAGgGIANANQgIAKgLAEQgLAGgQAAQgPgBgMgGg");
	this.shape_190.setTransform(68,-13.1);

	this.shape_191 = new cjs.Shape();
	this.shape_191.graphics.f("#0099CC").s().p("AgcAvQgNgHgGgMQgIgMAAgQQAAgPAIgMQAGgNANgGQAMgHAQAAQAQAAANAHQAMAGAIANQAGAMAAAPQAAAQgGAMQgIAMgMAHQgNAGgQABQgQgBgMgGgAgQgdQgHAEgFAIQgDAIAAAJQAAAQAJAJQAIAKAOAAQAOAAAKgKQAJgJAAgQQAAgJgFgIQgEgIgHgEQgIgEgJgBQgJABgHAEg");
	this.shape_191.setTransform(49.3,-13.1);

	this.shape_192 = new cjs.Shape();
	this.shape_192.graphics.f("#0099CC").s().p("AgfBEQgLgHgGgMQgHgNAAgQQAAgQAHgLQAGgMALgHQAMgHAPAAQAMAAAJAFQAKAFAGAKIAAg9IAXAAIAACUIgXAAIAAgTQgGAKgJAFQgKAFgMAAQgPAAgMgHgAgQgJQgHAFgEAHQgFAIAAAKQAAAKAFAIQAEAIAHAEQAHAEAJAAQAKAAAHgEQAHgEAEgIQAFgIAAgKQAAgKgFgIQgEgHgHgFQgHgEgKAAQgJAAgHAEg");
	this.shape_192.setTransform(35.7,-15.2);

	this.shape_193 = new cjs.Shape();
	this.shape_193.graphics.f("#0099CC").s().p("AgcAvQgMgHgIgMQgGgMAAgQQAAgPAGgMQAIgNAMgGQANgHAPAAQARAAAMAHQANAGAGANQAIAMAAAPQAAAQgIAMQgGAMgNAHQgMAGgRABQgPgBgNgGgAgQgdQgHAEgEAIQgFAIAAAJQAAAQAJAJQAKAKANAAQAPAAAIgKQAJgJAAgQQAAgJgDgIQgFgIgHgEQgHgEgKgBQgIABgIAEg");
	this.shape_193.setTransform(23.2,-13.1);

	this.shape_194 = new cjs.Shape();
	this.shape_194.graphics.f("#0099CC").s().p("ABCA2IAAg7QAAgMgHgHQgGgHgMAAQgKAAgGAFQgHAEgDAHQgEAIABAIIAAA1IgXAAIAAg7QAAgMgHgHQgGgHgMAAQgJAAgGAFQgHAEgEAHQgEAIAAAIIAAA1IgWAAIAAhqIAWAAIAAAVQAHgLAJgFQAKgGANABQAPAAAJAGQAIAHAEAMQAGgNAKgGQAKgHAPABQASAAAKAKQALALAAAUIAABBg");
	this.shape_194.setTransform(6.7,-13.2);

	this.shape_195 = new cjs.Shape();
	this.shape_195.graphics.f("#0099CC").s().p("ABCA2IAAg7QgBgMgGgHQgHgHgMAAQgIAAgHAFQgGAEgEAHQgDAIgBAIIAAA1IgWAAIAAg7QAAgMgGgHQgHgHgLAAQgKAAgGAFQgHAEgDAHQgFAIAAAIIAAA1IgWAAIAAhqIAWAAIAAAVQAHgLAJgFQAKgGAOABQAOAAAJAGQAIAHAFAMQAEgNALgGQAKgHAPABQASAAAKAKQAKALABAUIAABBg");
	this.shape_195.setTransform(-14.2,-13.2);

	this.shape_196 = new cjs.Shape();
	this.shape_196.graphics.f("#0099CC").s().p("AgcAvQgMgHgIgMQgGgMgBgQQABgPAGgMQAIgNAMgGQANgHAPAAQAQAAANAHQAMAGAIANQAGAMABAPQgBAQgGAMQgIAMgMAHQgNAGgQABQgPgBgNgGgAgQgdQgHAEgFAIQgDAIAAAJQgBAQAKAJQAJAKANAAQAOAAAJgKQAKgJgBgQQAAgJgDgIQgFgIgHgEQgIgEgJgBQgIABgIAEg");
	this.shape_196.setTransform(-31,-13.1);

	this.shape_197 = new cjs.Shape();
	this.shape_197.graphics.f("#0099CC").s().p("AgXAvQgMgHgGgMQgIgMABgQQgBgPAIgMQAGgNAMgGQAMgHAPAAQAOAAAMAEQAKAFAIAIIgNAPQgFgGgHgDQgJgDgJAAQgIAAgIAFQgHAEgDAHQgFAIAAAJQAAAKAFAIQADAHAHAEQAIAFAIAAQAKAAAIgEQAIgDAFgGIAOANQgIAKgLAEQgMAGgPAAQgPgBgMgGg");
	this.shape_197.setTransform(-42.9,-13.1);

	this.shape_198 = new cjs.Shape();
	this.shape_198.graphics.f("#0099CC").s().p("AgdAxQgIgEgFgHQgEgIgBgJQABgOAKgIQAKgIAUgBIAfAAIAAgDQAAgKgHgGQgGgFgMgBQgHABgIACQgIACgIAGIgJgQIAOgHIAOgFQAHgBAKAAQAUAAALAJQALAKAAASIABBFIgXAAIAAgNQgGAHgJAEQgJADgKAAQgMAAgIgFgAgUAJQgFAEAAAHQAAAHAGAEQAFAFAKAAQALgBAJgFQAIgGABgIIAAgKIgcAAIgDAAQgJAAgFADg");
	this.shape_198.setTransform(-61.4,-13.1);

	this.shape_199 = new cjs.Shape();
	this.shape_199.graphics.f("#0099CC").s().p("AgZAvQgMgHgHgMQgHgMAAgQQAAgPAHgMQAHgNAMgGQAMgHAPAAQATAAALAIQAMAHAFAOQAEAOgBATIhPAAQACAMAJAHQAJAHAMAAQAIAAAIgDQAIgDAGgGIAMANQgIAJgLAEQgLAEgOABQgQgBgMgGgAAggHQgBgNgIgHQgIgIgNAAQgMAAgIAIQgIAHgCANIA8AAIAAAAg");
	this.shape_199.setTransform(-72.8,-13.1);

	this.shape_200 = new cjs.Shape();
	this.shape_200.graphics.f("#0099CC").s().p("AAaA1IgagnIgaAnIgZAAIAlg1Igjg0IAbAAIAWAkIAZgkIAZAAIgiA0IAkA1g");
	this.shape_200.setTransform(-91,-13.1);

	this.shape_201 = new cjs.Shape();
	this.shape_201.graphics.f("#0099CC").s().p("AgZAvQgMgHgHgMQgHgMAAgQQAAgPAHgMQAHgNAMgGQAMgHAPAAQATAAALAIQAMAHAFAOQAEAOgBATIhPAAQACAMAJAHQAJAHAMAAQAIAAAIgDQAIgDAGgGIAMANQgIAJgLAEQgLAEgOABQgQgBgMgGgAAggHQgBgNgIgHQgIgIgNAAQgMAAgIAIQgIAHgCANIA8AAIAAAAg");
	this.shape_201.setTransform(-102.4,-13.1);

	this.shape_202 = new cjs.Shape();
	this.shape_202.graphics.f("#0099CC").s().p("Ag3BJIAAiRIAYAAIAAATQAFgKAKgEQAJgFAMAAQAPAAAMAHQALAGAGANQAHAMgBAQQABAQgHALQgGAMgLAHQgMAGgPABQgLgBgKgEQgKgFgFgJIAAA5gAgQgwQgHAEgFAIQgDAHAAALQAAAPAJAJQAIAJAOAAQAJAAAHgFQAIgEAEgGQAEgJABgJQgBgLgEgHQgEgIgIgEQgHgFgJAAQgJAAgHAFg");
	this.shape_202.setTransform(-121.2,-11.2);

	this.shape_203 = new cjs.Shape();
	this.shape_203.graphics.f("#0099CC").s().p("AgKBLIAAhpIAVAAIAABpgAgIgzQgEgEgBgFQABgHAEgDQADgEAFAAQAGAAADAEQAEADAAAHQAAAFgEAEQgDAEgGAAQgFAAgDgEg");
	this.shape_203.setTransform(-131.4,-15.3);

	this.shape_204 = new cjs.Shape();
	this.shape_204.graphics.f("#0099CC").s().p("AgnArQgJgLgBgTIAAhCIAXAAIAAA7QAAAMAHAHQAHAHALAAQAIAAAGgFQAHgEADgHQAEgIAAgIIAAg1IAXAAIAABqIgXAAIAAgVQgGALgJAFQgKAFgMABQgSgBgLgKg");
	this.shape_204.setTransform(-141,-13.1);

	this.shape_205 = new cjs.Shape();
	this.shape_205.graphics.f("#0099CC").s().p("AAhBJIAAg5QgGAJgJAFQgKAFgMAAQgPAAgMgHQgLgHgGgMQgHgLAAgQQAAgQAHgMQAGgNALgGQAMgHAPAAQAMAAAJAFQAKAFAGAJIAAgSIAXAAIAACQgAgQgwQgHAEgEAIQgFAIAAAKQAAALAFAHQAEAHAHAEQAHAFAJAAQAKAAAHgFQAHgEAEgHQAFgHAAgLQAAgKgFgIQgEgIgHgEQgHgEgKgBQgJABgHAEg");
	this.shape_205.setTransform(-154.7,-11.2);

	this.shape_206 = new cjs.Shape();
	this.shape_206.graphics.f("#0099CC").s().p("AgKBLIAAhpIAVAAIAABpgAgIgzQgEgEgBgFQABgHAEgDQADgEAFAAQAGAAADAEQAEADAAAHQAAAFgEAEQgDAEgGAAQgFAAgDgEg");
	this.shape_206.setTransform(-163.8,-15.3);

	this.shape_207 = new cjs.Shape();
	this.shape_207.graphics.f("#0099CC").s().p("AgKBKIAAiTIAVAAIAACTg");
	this.shape_207.setTransform(-169.6,-15.2);

	this.shape_208 = new cjs.Shape();
	this.shape_208.graphics.f("#0099CC").s().p("AgdAxQgIgEgFgHQgEgIgBgJQABgOAKgIQAKgIAUgBIAfAAIAAgDQAAgKgHgGQgGgFgMgBQgHABgIACQgIACgIAGIgJgQIAOgHIAOgFQAHgBAKAAQAUAAALAJQALAKAAASIABBFIgXAAIAAgNQgGAHgJAEQgJADgKAAQgMAAgIgFgAgUAJQgFAEAAAHQAAAHAGAEQAFAFAKAAQALgBAJgFQAIgGABgIIAAgKIgcAAIgDAAQgJAAgFADg");
	this.shape_208.setTransform(-178.6,-13.1);

	this.shape_209 = new cjs.Shape();
	this.shape_209.graphics.f("#0099CC").s().p("AgEA/QgHgDgEgHQgEgHgBgLIAAg2IgPAAIAAgRIAPAAIAAgdIAXAAIAAAdIAfAAIAAARIgfAAIAAAyQAAAIACADQADAEAGgBIAIgBIAIgDIAFARQgFAEgHACQgHACgHAAQgIAAgFgDg");
	this.shape_209.setTransform(-194.9,-14.3);

	this.shape_210 = new cjs.Shape();
	this.shape_210.graphics.f("#0099CC").s().p("AgnArQgJgLgBgTIAAhCIAXAAIAAA7QAAAMAHAHQAHAHALAAQAIAAAGgFQAHgEADgHQAEgIAAgIIAAg1IAXAAIAABqIgXAAIAAgVQgGALgJAFQgKAFgMABQgSgBgLgKg");
	this.shape_210.setTransform(-205.8,-13.1);

	this.shape_211 = new cjs.Shape();
	this.shape_211.graphics.f("#0099CC").s().p("AgLBLIAAhpIAWAAIAABpgAgIgzQgFgEAAgFQAAgHAFgDQADgEAFAAQAGAAAEAEQADADAAAHQAAAFgDAEQgEAEgGAAQgFAAgDgEg");
	this.shape_211.setTransform(-221.7,-15.3);

	this.shape_212 = new cjs.Shape();
	this.shape_212.graphics.f("#0099CC").s().p("AgWAyQgLgDgIgIIAJgQQAEAEAGADIAMAFIAMABQAIAAAEgDQAFgCABgGQgBgHgGgDQgFgDgIgDIgQgFQgIgDgGgGQgFgGAAgLQAAgLAFgHQAFgHAKgDQAIgDAKAAQAKAAAKADQAJACAIAGIgJARQgGgFgJgCQgIgDgHAAQgGAAgFADQgEACAAAGQABAFAFAEQAGADAHACIARAGQAIADAGAGQAGAGAAALQAAALgGAHQgFAHgKAEQgJADgLAAQgLAAgMgEg");
	this.shape_212.setTransform(-229.4,-13.1);

	this.shape_213 = new cjs.Shape();
	this.shape_213.graphics.f("#0099CC").s().p("AgKBLIAAhpIAVAAIAABpgAgIgzQgFgEAAgFQAAgHAFgDQADgEAFAAQAGAAAEAEQADADAAAHQAAAFgDAEQgEAEgGAAQgFAAgDgEg");
	this.shape_213.setTransform(-236.8,-15.3);

	this.shape_214 = new cjs.Shape();
	this.shape_214.graphics.f("#0099CC").s().p("AAcA2IAAg7QAAgMgHgHQgGgHgNAAQgMAAgIAJQgIAHgBANIAAA4IgXAAIAAhqIAXAAIAAAVQAGgLAKgFQAJgGANABQATAAAKAKQALALAAAUIAABBg");
	this.shape_214.setTransform(-246.1,-13.2);

	this.shape_215 = new cjs.Shape();
	this.shape_215.graphics.f("#0099CC").s().p("AgWAyQgLgDgIgIIAJgQQAEAEAGADIAMAFIAMABQAIAAAEgDQAFgCABgGQgBgHgGgDQgFgDgIgDIgQgFQgIgDgGgGQgFgGAAgLQAAgLAFgHQAFgHAKgDQAIgDAKAAQAKAAAKADQAJACAIAGIgJARQgGgFgJgCQgIgDgHAAQgGAAgFADQgEACAAAGQABAFAFAEQAGADAHACIARAGQAIADAGAGQAGAGAAALQAAALgGAHQgFAHgKAEQgJADgLAAQgLAAgMgEg");
	this.shape_215.setTransform(-264.5,-13.1);

	this.shape_216 = new cjs.Shape();
	this.shape_216.graphics.f("#0099CC").s().p("AgKBLIAAhpIAVAAIAABpgAgIgzQgEgEgBgFQABgHAEgDQADgEAFAAQAGAAAEAEQADADAAAHQAAAFgDAEQgEAEgGAAQgFAAgDgEg");
	this.shape_216.setTransform(-271.9,-15.3);

	this.shape_217 = new cjs.Shape();
	this.shape_217.graphics.f("#0099CC").s().p("AgdA1IAAhpIAXAAIAAAVQAGgKAIgGQAJgGANAAIAAAWQgLAAgIADQgHAEgFAHQgEAGgBAKIAAA2g");
	this.shape_217.setTransform(-278,-13.1);

	this.shape_218 = new cjs.Shape();
	this.shape_218.graphics.f("#0099CC").s().p("AgcAvQgNgHgGgMQgIgMABgQQgBgPAIgMQAGgNANgGQAMgHAQAAQARAAAMAHQANAGAGANQAIAMgBAPQABAQgIAMQgGAMgNAHQgMAGgRABQgQgBgMgGgAgQgdQgHAEgEAIQgFAIAAAJQABAQAIAJQAJAKAOAAQAPAAAJgKQAIgJABgQQgBgJgEgIQgEgIgHgEQgHgEgKgBQgIABgIAEg");
	this.shape_218.setTransform(-288.9,-13.1);

	this.shape_219 = new cjs.Shape();
	this.shape_219.graphics.f("#0099CC").s().p("AgQBGQgJgFgHgKIAAATIgWAAIAAiUIAWAAIAAA9QAHgKAJgEQAJgFAMAAQAPAAAMAGQAKAHAHAMQAGAMAAAQQAAAQgGAMQgGAMgLAHQgMAGgPABQgMgBgJgEgAgQgJQgHAFgEAGQgEAIgBAKQABAQAIAJQAKAKANAAQAJAAAIgFQAHgEAEgIQAEgIABgKQgBgKgEgIQgEgGgHgFQgIgEgJAAQgJAAgHAEg");
	this.shape_219.setTransform(-301.4,-15.2);

	this.shape_220 = new cjs.Shape();
	this.shape_220.graphics.f("#0099CC").s().p("AgdAxQgIgEgFgHQgEgIgBgJQABgOAKgIQAKgIAUgBIAfAAIAAgDQAAgKgHgGQgGgFgMgBQgHABgIACQgIACgIAGIgJgQIAOgHIAOgFQAHgBAKAAQAUAAALAJQALAKAAASIABBFIgXAAIAAgNQgGAHgJAEQgJADgKAAQgMAAgIgFgAgUAJQgFAEAAAHQAAAHAGAEQAFAFAKAAQALgBAJgFQAIgGABgIIAAgKIgcAAIgDAAQgJAAgFADg");
	this.shape_220.setTransform(-314.9,-13.1);

	this.shape_221 = new cjs.Shape();
	this.shape_221.graphics.f("#0099CC").s().p("AgLBKIAAiTIAWAAIAACTg");
	this.shape_221.setTransform(-323.3,-15.2);

	this.shape_222 = new cjs.Shape();
	this.shape_222.graphics.f("#0099CC").s().p("AgcAvQgMgHgIgMQgGgMgBgQQABgQAGgMQAIgLAMgIQANgGAPAAQAQAAANAGQAMAIAHALQAIAMAAAQQAAAQgIAMQgHAMgMAHQgNAHgQAAQgPAAgNgHgAgQgdQgHAEgFAIQgEAHAAAKQAAAPAJAKQAKAJANAAQAPAAAIgJQAKgKgBgPQAAgKgDgHQgFgIgHgEQgIgFgJABQgJgBgHAFg");
	this.shape_222.setTransform(320.1,-46);

	this.shape_223 = new cjs.Shape();
	this.shape_223.graphics.f("#0099CC").s().p("AgXAvQgMgHgGgMQgIgMABgQQgBgPAIgNQAGgLAMgIQAMgGAPAAQAOAAAMAFQAKAEAIAIIgNAPQgFgGgHgDQgJgDgJAAQgIAAgIAEQgGAEgEAIQgEAIgBAJQABAKAEAHQAEAIAGAFQAIAEAIAAQAKAAAIgDQAIgDAFgHIAOANQgIAJgLAGQgMAEgPABQgPAAgMgHg");
	this.shape_223.setTransform(308.2,-46);

	this.shape_224 = new cjs.Shape();
	this.shape_224.graphics.f("#0099CC").s().p("ABCA2IAAg7QgBgMgGgHQgHgHgMAAQgIAAgHAFQgGAEgEAHQgDAIgBAIIAAA1IgWAAIAAg7QAAgMgGgHQgHgHgLAAQgKAAgGAFQgHAEgDAHQgFAIAAAIIAAA1IgWAAIAAhqIAWAAIAAAVQAHgLAJgFQAKgGAOABQAOAAAJAGQAIAHAFAMQAEgNALgGQAKgHAPABQASAAAKAKQAKALABAUIAABBg");
	this.shape_224.setTransform(292.3,-46.1);

	this.shape_225 = new cjs.Shape();
	this.shape_225.graphics.f("#0099CC").s().p("AgdAyQgIgEgFgIQgEgHgBgKQABgPAKgHQAKgIAUgBIAfAAIAAgDQAAgKgHgGQgGgGgMAAQgHAAgIADQgIACgIAGIgJgQIAOgIIAOgDQAHgCAKAAQAUAAALAJQALALAAARIABBFIgXAAIAAgNQgGAHgJADQgJAEgKAAQgMAAgIgEgAgUAJQgFAEAAAHQAAAIAGAEQAFADAKABQALAAAJgGQAIgFABgKIAAgJIgcAAIgDAAQgJAAgFADg");
	this.shape_225.setTransform(275.6,-46);

	this.shape_226 = new cjs.Shape();
	this.shape_226.graphics.f("#0099CC").s().p("AgLBKIAAiTIAXAAIAACTg");
	this.shape_226.setTransform(267.1,-48.1);

	this.shape_227 = new cjs.Shape();
	this.shape_227.graphics.f("#0099CC").s().p("AgKBKIAAiTIAWAAIAACTg");
	this.shape_227.setTransform(261.3,-48.1);

	this.shape_228 = new cjs.Shape();
	this.shape_228.graphics.f("#0099CC").s().p("AgmArQgLgLAAgTIAAhCIAXAAIAAA7QAAAMAHAHQAGAHAMAAQAIAAAHgFQAGgEAEgHQADgIAAgIIAAg1IAXAAIAABqIgXAAIAAgVQgFALgKAFQgKAFgMABQgTgBgJgKg");
	this.shape_228.setTransform(251.6,-46);

	this.shape_229 = new cjs.Shape();
	this.shape_229.graphics.f("#0099CC").s().p("AAcA2IAAg7QgBgMgGgHQgHgHgMAAQgMAAgIAJQgHAHgCANIAAA4IgXAAIAAhqIAXAAIAAAVQAGgLAKgFQAKgGAMABQATAAALAKQAJALABAUIAABBg");
	this.shape_229.setTransform(222.8,-46.1);

	this.shape_230 = new cjs.Shape();
	this.shape_230.graphics.f("#0099CC").s().p("AgcAvQgNgHgGgMQgIgMABgQQgBgQAIgMQAGgLANgIQAMgGAQAAQARAAAMAGQANAIAGALQAIAMgBAQQABAQgIAMQgGAMgNAHQgMAHgRAAQgQAAgMgHgAgQgdQgHAEgEAIQgEAHgBAKQABAPAIAKQAJAJAOAAQAPAAAJgJQAIgKABgPQAAgKgFgHQgEgIgHgEQgIgFgJABQgJgBgHAFg");
	this.shape_230.setTransform(209.8,-46);

	this.shape_231 = new cjs.Shape();
	this.shape_231.graphics.f("#0099CC").s().p("AgKBLIAAhpIAVAAIAABpgAgIgzQgEgEgBgFQABgHAEgDQADgEAFAAQAGAAADAEQAEADAAAHQAAAFgEAEQgDAEgGAAQgFAAgDgEg");
	this.shape_231.setTransform(200.7,-48.2);

	this.shape_232 = new cjs.Shape();
	this.shape_232.graphics.f("#0099CC").s().p("AgFA/QgGgDgEgHQgEgHAAgLIAAg2IgPAAIAAgRIAPAAIAAgdIAVAAIAAAdIAgAAIAAARIggAAIAAAyQAAAIADADQADAEAGgBIAHgBIAJgDIAGARQgHAEgGACQgHACgGAAQgIAAgHgDg");
	this.shape_232.setTransform(193.8,-47.2);

	this.shape_233 = new cjs.Shape();
	this.shape_233.graphics.f("#0099CC").s().p("AgdAyQgIgEgFgIQgEgHgBgKQABgPAKgHQAKgIAUgBIAfAAIAAgDQAAgKgHgGQgGgGgMAAQgHAAgIADQgIACgIAGIgJgQIAOgIIAOgDQAHgCAKAAQAUAAALAJQALALAAARIABBFIgXAAIAAgNQgGAHgJADQgJAEgKAAQgMAAgIgEgAgUAJQgFAEAAAHQAAAIAGAEQAFADAKABQALAAAJgGQAIgFABgKIAAgJIgcAAIgDAAQgJAAgFADg");
	this.shape_233.setTransform(183.6,-46);

	this.shape_234 = new cjs.Shape();
	this.shape_234.graphics.f("#0099CC").s().p("AgFA/QgGgDgEgHQgEgHAAgLIAAg2IgPAAIAAgRIAPAAIAAgdIAVAAIAAAdIAgAAIAAARIggAAIAAAyQAAAIADADQADAEAGgBIAHgBIAJgDIAGARQgHAEgGACQgHACgGAAQgJAAgGgDg");
	this.shape_234.setTransform(174,-47.2);

	this.shape_235 = new cjs.Shape();
	this.shape_235.graphics.f("#0099CC").s().p("AgKBLIAAhpIAVAAIAABpgAgIgzQgEgEAAgFQAAgHAEgDQADgEAFAAQAGAAADAEQAEADABAHQgBAFgEAEQgDAEgGAAQgFAAgDgEg");
	this.shape_235.setTransform(167,-48.2);

	this.shape_236 = new cjs.Shape();
	this.shape_236.graphics.f("#0099CC").s().p("AgXAvQgMgHgGgMQgIgMAAgQQAAgPAIgNQAGgLAMgIQAMgGAPAAQAPAAALAFQALAEAHAIIgMAPQgGgGgIgDQgHgDgKAAQgIAAgIAEQgHAEgEAIQgDAIAAAJQAAAKADAHQAEAIAHAFQAIAEAIAAQAKAAAIgDQAIgDAGgHIAMANQgHAJgLAGQgMAEgPABQgPAAgMgHg");
	this.shape_236.setTransform(158.5,-46);

	this.shape_237 = new cjs.Shape();
	this.shape_237.graphics.f("#0099CC").s().p("AgdA2IAAhqIAXAAIAAAVQAFgLAJgFQAJgFANAAIAAAVQgLAAgIAEQgIADgEAHQgEAGgBAKIAAA3g");
	this.shape_237.setTransform(149.7,-46);

	this.shape_238 = new cjs.Shape();
	this.shape_238.graphics.f("#0099CC").s().p("AgZAvQgMgHgHgMQgHgMAAgQQAAgPAHgNQAHgLAMgIQAMgGAPAAQATAAALAHQAMAIAFAOQAEAOgBASIhPAAQACANAJAHQAJAHAMAAQAIAAAIgDQAIgDAGgGIAMANQgIAJgLAEQgLAFgOAAQgQAAgMgHgAAggHQgBgNgIgIQgIgHgNAAQgMAAgIAHQgIAIgCANIA8AAIAAAAg");
	this.shape_238.setTransform(139.1,-46);

	this.shape_239 = new cjs.Shape();
	this.shape_239.graphics.f("#0099CC").s().p("AAaA1IgagnIgaAnIgZAAIAlg1Igjg0IAbAAIAWAkIAZgkIAZAAIgiA0IAkA1g");
	this.shape_239.setTransform(127.7,-46);

	this.shape_240 = new cjs.Shape();
	this.shape_240.graphics.f("#0099CC").s().p("AgZAvQgMgHgHgMQgHgMAAgQQAAgPAHgNQAHgLAMgIQAMgGAPAAQATAAALAHQAMAIAFAOQAEAOgBASIhPAAQACANAJAHQAJAHAMAAQAIAAAIgDQAIgDAGgGIAMANQgIAJgLAEQgLAFgOAAQgQAAgMgHgAAggHQgBgNgIgIQgIgHgNAAQgMAAgIAHQgIAIgCANIA8AAIAAAAg");
	this.shape_240.setTransform(116.3,-46);

	this.shape_241 = new cjs.Shape();
	this.shape_241.graphics.f("#0099CC").s().p("AgfBEQgLgHgGgMQgHgNAAgQQAAgQAHgLQAGgMALgHQAMgHAPAAQAMAAAJAFQAKAFAGAKIAAg9IAXAAIAACUIgXAAIAAgTQgGAKgJAFQgKAFgMAAQgPAAgMgHgAgQgJQgHAFgEAHQgFAIAAAKQAAAKAFAIQAEAIAHAEQAHAEAJAAQAKAAAHgEQAHgEAEgIQAFgIAAgKQAAgKgFgIQgEgHgHgFQgHgEgKAAQgJAAgHAEg");
	this.shape_241.setTransform(87.1,-48.1);

	this.shape_242 = new cjs.Shape();
	this.shape_242.graphics.f("#0099CC").s().p("AgnArQgJgLgBgTIAAhCIAXAAIAAA7QAAAMAHAHQAHAHALAAQAIAAAGgFQAHgEADgHQAEgIAAgIIAAg1IAXAAIAABqIgXAAIAAgVQgGALgJAFQgKAFgMABQgSgBgLgKg");
	this.shape_242.setTransform(74.1,-46);

	this.shape_243 = new cjs.Shape();
	this.shape_243.graphics.f("#0099CC").s().p("AgdA2IAAhqIAXAAIAAAVQAFgLAJgFQAJgFANAAIAAAVQgLAAgIAEQgHADgEAHQgFAGgBAKIAAA3g");
	this.shape_243.setTransform(64.6,-46);

	this.shape_244 = new cjs.Shape();
	this.shape_244.graphics.f("#0099CC").s().p("AgFA/QgGgDgEgHQgEgHAAgLIAAg2IgQAAIAAgRIAQAAIAAgdIAVAAIAAAdIAgAAIAAARIggAAIAAAyQAAAIAEADQADAEAFgBIAHgBIAJgDIAFARQgFAEgHACQgHACgHAAQgHAAgHgDg");
	this.shape_244.setTransform(55.9,-47.2);

	this.shape_245 = new cjs.Shape();
	this.shape_245.graphics.f("#0099CC").s().p("AgWAyQgLgDgIgIIAJgQQAEAEAGADIAMAFIAMABQAIAAAEgDQAFgCABgGQgBgHgGgDQgFgDgIgDIgQgFQgIgDgGgGQgFgGAAgLQAAgLAFgHQAFgHAKgDQAIgDAKAAQAKAAAKADQAJACAIAGIgJARQgGgFgJgCQgIgDgHAAQgGAAgFADQgEACABAGQAAAFAFAEQAGADAHACIARAGQAIADAGAGQAGAGAAALQAAALgGAHQgFAHgKAEQgJADgLAAQgLAAgMgEg");
	this.shape_245.setTransform(46.9,-46);

	this.shape_246 = new cjs.Shape();
	this.shape_246.graphics.f("#0099CC").s().p("AgcAvQgNgHgGgMQgIgMABgQQgBgQAIgMQAGgLANgIQAMgGAQAAQARAAAMAGQANAIAGALQAIAMgBAQQABAQgIAMQgGAMgNAHQgMAHgRAAQgQAAgMgHgAgQgdQgHAEgEAIQgEAHgBAKQABAPAIAKQAJAJAOAAQAPAAAJgJQAIgKABgPQAAgKgFgHQgEgIgHgEQgIgFgJABQgJgBgHAFg");
	this.shape_246.setTransform(36.1,-46);

	this.shape_247 = new cjs.Shape();
	this.shape_247.graphics.f("#0099CC").s().p("AAcA2IAAg7QAAgMgHgHQgHgHgMAAQgMAAgIAJQgIAHgBANIAAA4IgXAAIAAhqIAXAAIAAAVQAGgLAKgFQAKgGAMABQATAAAKAKQAKALABAUIAABBg");
	this.shape_247.setTransform(23.4,-46.1);

	this.shape_248 = new cjs.Shape();
	this.shape_248.graphics.f("#0099CC").s().p("AgVAyQgLgDgJgIIAJgQQAEAEAGADIAMAFIAMABQAIAAAFgDQAEgCAAgGQAAgHgFgDQgGgDgIgDIgQgFQgIgDgFgGQgGgGgBgLQABgLAFgHQAGgHAIgDQAJgDAKAAQAKAAAKADQAKACAHAGIgIARQgIgFgIgCQgIgDgHAAQgGAAgFADQgDACAAAGQgBAFAGAEQAGADAIACIAQAGQAIADAGAGQAFAGABALQgBALgFAHQgGAHgJAEQgJADgLAAQgLAAgLgEg");
	this.shape_248.setTransform(-4.2,-46);

	this.shape_249 = new cjs.Shape();
	this.shape_249.graphics.f("#0099CC").s().p("AgLBLIAAhpIAWAAIAABpgAgJgzQgEgEAAgFQAAgHAEgDQAEgEAFAAQAGAAAEAEQADADAAAHQAAAFgDAEQgEAEgGAAQgFAAgEgEg");
	this.shape_249.setTransform(-11.7,-48.2);

	this.shape_250 = new cjs.Shape();
	this.shape_250.graphics.f("#0099CC").s().p("AgnArQgKgLAAgTIAAhCIAXAAIAAA7QAAAMAHAHQAGAHAMAAQAIAAAHgFQAGgEADgHQAEgIAAgIIAAg1IAXAAIAABqIgXAAIAAgVQgGALgJAFQgKAFgMABQgTgBgKgKg");
	this.shape_250.setTransform(-21.2,-46);

	this.shape_251 = new cjs.Shape();
	this.shape_251.graphics.f("#0099CC").s().p("AAhBJIAAg5QgGAJgJAFQgKAFgMAAQgPAAgMgHQgLgHgGgMQgHgLAAgQQAAgQAHgMQAGgNALgGQAMgHAPAAQAMAAAJAFQAKAFAGAJIAAgSIAXAAIAACQgAgQgwQgHAEgEAIQgFAIAAAKQAAALAFAHQAEAHAHAEQAHAFAJAAQAKAAAHgFQAHgEAEgHQAFgHAAgLQAAgKgFgIQgEgIgHgEQgHgEgKgBQgJABgHAEg");
	this.shape_251.setTransform(-35,-44.1);

	this.shape_252 = new cjs.Shape();
	this.shape_252.graphics.f("#0099CC").s().p("AgMAUIAHgRIgEgEIgBgGQAAgFAEgEQADgDAFAAQAFAAADADQADADABAGIgBAGIgDAEIgLARg");
	this.shape_252.setTransform(-59.5,-41.1);

	this.shape_253 = new cjs.Shape();
	this.shape_253.graphics.f("#0099CC").s().p("ABCA2IAAg7QgBgMgGgHQgHgHgMAAQgIAAgHAFQgGAEgEAHQgDAIgBAIIAAA1IgWAAIAAg7QAAgMgGgHQgHgHgLAAQgKAAgGAFQgHAEgDAHQgFAIAAAIIAAA1IgWAAIAAhqIAWAAIAAAVQAHgLAJgFQAKgGAOABQAOAAAJAGQAIAHAFAMQAEgNALgGQAKgHAPABQASAAAKAKQAKALABAUIAABBg");
	this.shape_253.setTransform(-71.8,-46.1);

	this.shape_254 = new cjs.Shape();
	this.shape_254.graphics.f("#0099CC").s().p("AgdAyQgIgEgFgIQgEgHgBgKQABgPAKgHQAKgIAUgBIAfAAIAAgDQAAgKgHgGQgGgGgMAAQgHAAgIADQgIACgIAGIgJgQIAOgIIAOgDQAHgCAKAAQAUAAALAJQALALAAARIABBFIgXAAIAAgNQgGAHgJADQgJAEgKAAQgMAAgIgEgAgUAJQgFAEAAAHQAAAIAGAEQAFADAKABQALAAAJgGQAIgFABgKIAAgJIgcAAIgDAAQgJAAgFADg");
	this.shape_254.setTransform(-88.5,-46);

	this.shape_255 = new cjs.Shape();
	this.shape_255.graphics.f("#0099CC").s().p("AgKBLIAAhpIAVAAIAABpgAgIgzQgFgEAAgFQAAgHAFgDQADgEAFAAQAGAAAEAEQADADAAAHQAAAFgDAEQgEAEgGAAQgFAAgDgEg");
	this.shape_255.setTransform(-96.9,-48.2);

	this.shape_256 = new cjs.Shape();
	this.shape_256.graphics.f("#0099CC").s().p("AAcA2IAAg7QAAgMgHgHQgGgHgNAAQgMAAgIAJQgIAHgBANIAAA4IgXAAIAAhqIAXAAIAAAVQAGgLAKgFQAJgGANABQATAAAKAKQALALAAAUIAABBg");
	this.shape_256.setTransform(-106.2,-46.1);

	this.shape_257 = new cjs.Shape();
	this.shape_257.graphics.f("#0099CC").s().p("AgZAvQgMgHgHgMQgHgMAAgQQAAgPAHgNQAHgLAMgIQAMgGAPAAQATAAALAHQAMAIAFAOQAEAOgBASIhPAAQACANAJAHQAJAHAMAAQAIAAAIgDQAIgDAGgGIAMANQgIAJgLAEQgLAFgOAAQgQAAgMgHgAAggHQgBgNgIgIQgIgHgNAAQgMAAgIAHQgIAIgCANIA8AAIAAAAg");
	this.shape_257.setTransform(-118.8,-46);

	this.shape_258 = new cjs.Shape();
	this.shape_258.graphics.f("#0099CC").s().p("AgLA1IgphpIAYAAIAdBTIAdhTIAXAAIgpBpg");
	this.shape_258.setTransform(-129.8,-46);

	this.shape_259 = new cjs.Shape();
	this.shape_259.graphics.f("#0099CC").s().p("ABCA2IAAg7QAAgMgHgHQgGgHgMAAQgJAAgHAFQgGAEgEAHQgEAIAAAIIAAA1IgVAAIAAg7QgBgMgHgHQgGgHgMAAQgJAAgHAFQgGAEgEAHQgDAIAAAIIAAA1IgXAAIAAhqIAXAAIAAAVQAFgLAKgFQAKgGANABQAPAAAJAGQAJAHADAMQAGgNAKgGQAKgHAPABQASAAALAKQAKALAAAUIAABBg");
	this.shape_259.setTransform(-161.4,-46.1);

	this.shape_260 = new cjs.Shape();
	this.shape_260.graphics.f("#0099CC").s().p("AgLBLIAAhpIAWAAIAABpgAgIgzQgFgEAAgFQAAgHAFgDQADgEAFAAQAGAAAEAEQADADAAAHQAAAFgDAEQgEAEgGAAQgFAAgDgEg");
	this.shape_260.setTransform(-174.8,-48.2);

	this.shape_261 = new cjs.Shape();
	this.shape_261.graphics.f("#0099CC").s().p("AAcA2IAAg7QAAgMgHgHQgGgHgNAAQgMAAgIAJQgIAHgBANIAAA4IgXAAIAAhqIAXAAIAAAVQAGgLAKgFQAJgGANABQATAAALAKQAKALAAAUIAABBg");
	this.shape_261.setTransform(-184.1,-46.1);

	this.shape_262 = new cjs.Shape();
	this.shape_262.graphics.f("#0099CC").s().p("AgKBLIAAhpIAVAAIAABpgAgJgzQgDgEAAgFQAAgHADgDQAEgEAFAAQAGAAADAEQAEADABAHQgBAFgEAEQgDAEgGAAQgFAAgEgEg");
	this.shape_262.setTransform(-193.8,-48.2);

	this.shape_263 = new cjs.Shape();
	this.shape_263.graphics.f("#0099CC").s().p("ABCA2IAAg7QgBgMgGgHQgHgHgMAAQgJAAgGAFQgHAEgDAHQgDAIAAAIIAAA1IgXAAIAAg7QAAgMgGgHQgHgHgLAAQgKAAgGAFQgHAEgDAHQgFAIAAAIIAAA1IgWAAIAAhqIAWAAIAAAVQAHgLAJgFQAKgGAOABQAOAAAJAGQAIAHAFAMQAEgNALgGQAKgHAPABQASAAAKAKQALALAAAUIAABBg");
	this.shape_263.setTransform(-206.9,-46.1);

	this.shape_264 = new cjs.Shape();
	this.shape_264.graphics.f("#0099CC").s().p("AgfBEQgLgHgGgMQgHgNAAgQQAAgQAHgLQAGgMALgHQAMgHAPAAQAMAAAJAFQAKAFAGAKIAAg9IAXAAIAACUIgXAAIAAgTQgGAKgJAFQgKAFgMAAQgPAAgMgHgAgQgJQgHAFgEAHQgFAIAAAKQAAAKAFAIQAEAIAHAEQAHAEAJAAQAKAAAHgEQAHgEAEgIQAFgIAAgKQAAgKgFgIQgEgHgHgFQgHgEgKAAQgJAAgHAEg");
	this.shape_264.setTransform(-240.9,-48.1);

	this.shape_265 = new cjs.Shape();
	this.shape_265.graphics.f("#0099CC").s().p("AgdAyQgIgEgFgIQgEgHgBgKQABgPAKgHQAKgIAUgBIAfAAIAAgDQAAgKgHgGQgGgGgMAAQgHAAgIADQgIACgIAGIgJgQIAOgIIAOgDQAHgCAKAAQAUAAALAJQALALAAARIABBFIgXAAIAAgNQgGAHgJADQgJAEgKAAQgMAAgIgEgAgUAJQgFAEAAAHQAAAIAGAEQAFADAKABQALAAAJgGQAIgFABgKIAAgJIgcAAIgDAAQgJAAgFADg");
	this.shape_265.setTransform(-253.2,-46);

	this.shape_266 = new cjs.Shape();
	this.shape_266.graphics.f("#0099CC").s().p("ABCA2IAAg7QAAgMgHgHQgGgHgMAAQgKAAgGAFQgGAEgEAHQgDAIAAAIIAAA1IgXAAIAAg7QAAgMgHgHQgGgHgMAAQgJAAgHAFQgGAEgEAHQgDAIAAAIIAAA1IgXAAIAAhqIAXAAIAAAVQAFgLAKgFQAKgGANABQAPAAAJAGQAJAHADAMQAGgNAKgGQAKgHAPABQASAAAKAKQALALAAAUIAABBg");
	this.shape_266.setTransform(-285,-46.1);

	this.shape_267 = new cjs.Shape();
	this.shape_267.graphics.f("#0099CC").s().p("AgKBLIAAhpIAVAAIAABpgAgIgzQgFgEAAgFQAAgHAFgDQADgEAFAAQAGAAAEAEQADADAAAHQAAAFgDAEQgEAEgGAAQgFAAgDgEg");
	this.shape_267.setTransform(-298.5,-48.2);

	this.shape_268 = new cjs.Shape();
	this.shape_268.graphics.f("#0099CC").s().p("AAcA2IAAg7QAAgMgHgHQgGgHgNAAQgMAAgIAJQgIAHgBANIAAA4IgXAAIAAhqIAXAAIAAAVQAGgLAKgFQAJgGANABQATAAAKAKQALALAAAUIAABBg");
	this.shape_268.setTransform(-307.8,-46.1);

	this.shape_269 = new cjs.Shape();
	this.shape_269.graphics.f("#0099CC").s().p("AgZAvQgMgHgHgMQgHgMAAgQQAAgPAHgNQAHgLAMgIQAMgGAPAAQATAAALAHQAMAIAFAOQAEAOgBASIhPAAQACANAJAHQAJAHAMAAQAIAAAIgDQAIgDAGgGIAMANQgIAJgLAEQgLAFgOAAQgQAAgMgHgAAggHQgBgNgIgIQgIgHgNAAQgMAAgIAHQgIAIgCANIA8AAIAAAAg");
	this.shape_269.setTransform(-320.4,-46);

	this.shape_270 = new cjs.Shape();
	this.shape_270.graphics.f("#0099CC").s().p("AgFA/QgGgDgEgHQgEgHgBgLIAAg2IgOAAIAAgRIAOAAIAAgdIAWAAIAAAdIAgAAIAAARIggAAIAAAyQAAAIADADQAEAEAFgBIAHgBIAJgDIAGARQgHAEgGACQgHACgGAAQgIAAgHgDg");
	this.shape_270.setTransform(322,-80.1);

	this.shape_271 = new cjs.Shape();
	this.shape_271.graphics.f("#0099CC").s().p("AggBAQgNgIgHgNQgIgNAAgSIAAhRIAYAAIAABRQAAASAKAJQAKAKARAAQAQAAALgJQAJgLABgRIAAhRIAXAAIAABRQAAASgHANQgIANgOAIQgNAGgTAAQgSAAgOgGg");
	this.shape_271.setTransform(310.2,-80.5);

	this.shape_272 = new cjs.Shape();
	this.shape_272.graphics.f("#0099CC").s().p("AgIAJQgDgDgBgGQABgFADgEQAEgDAEAAQAFAAAEADQAEAEAAAFQAAAGgEADQgEAEgFAAQgEAAgEgEg");
	this.shape_272.setTransform(293.7,-74.7);

	this.shape_273 = new cjs.Shape();
	this.shape_273.graphics.f("#0099CC").s().p("AgdAxQgIgEgFgHQgEgIgBgJQABgOAKgIQAKgJAUAAIAfAAIAAgDQAAgLgHgFQgGgFgMAAQgHgBgIADQgIACgIAGIgJgQIAOgIIAOgEQAHgBAKAAQAUAAALAKQALAKAAARIABBFIgXAAIAAgNQgGAHgJADQgJAEgKAAQgMAAgIgFgAgUAJQgFAEAAAHQAAAHAGAEQAFAFAKAAQALgBAJgFQAIgGABgIIAAgKIgcAAIgDAAQgJAAgFADg");
	this.shape_273.setTransform(285.5,-78.9);

	this.shape_274 = new cjs.Shape();
	this.shape_274.graphics.f("#0099CC").s().p("AgmArQgLgLAAgTIAAhCIAXAAIAAA7QAAAMAHAHQAGAHAMAAQAIAAAHgFQAGgEAEgHQADgIAAgIIAAg1IAXAAIAABqIgXAAIAAgVQgFALgKAFQgKAFgMABQgTgBgJgKg");
	this.shape_274.setTransform(273.2,-78.9);

	this.shape_275 = new cjs.Shape();
	this.shape_275.graphics.f("#0099CC").s().p("AAhBJIAAg5QgGAJgJAFQgKAFgMAAQgPAAgMgHQgLgHgGgMQgHgLAAgQQAAgQAHgMQAGgNALgGQAMgHAPAAQAMAAAJAFQAKAFAGAJIAAgSIAXAAIAACQgAgQgwQgHAEgEAIQgFAIAAAKQAAALAFAHQAEAHAHAEQAHAFAJAAQAKAAAHgFQAHgEAEgHQAFgHAAgLQAAgKgFgIQgEgIgHgEQgHgEgKgBQgJABgHAEg");
	this.shape_275.setTransform(259.5,-77);

	this.shape_276 = new cjs.Shape();
	this.shape_276.graphics.f("#0099CC").s().p("AgKBLIAAhpIAVAAIAABpgAgJgzQgDgEAAgFQAAgHADgDQAEgEAFAAQAGAAADAEQAEADABAHQgBAFgEAEQgDAEgGAAQgFAAgEgEg");
	this.shape_276.setTransform(250.4,-81.1);

	this.shape_277 = new cjs.Shape();
	this.shape_277.graphics.f("#0099CC").s().p("AgLBKIAAiTIAXAAIAACTg");
	this.shape_277.setTransform(244.6,-81);

	this.shape_278 = new cjs.Shape();
	this.shape_278.graphics.f("#0099CC").s().p("AgdAxQgIgEgFgHQgEgIgBgJQABgOAKgIQAKgJAUAAIAfAAIAAgDQAAgLgHgFQgGgFgMAAQgHgBgIADQgIACgIAGIgJgQIAOgIIAOgEQAHgBAKAAQAUAAALAKQALAKAAARIABBFIgXAAIAAgNQgGAHgJADQgJAEgKAAQgMAAgIgFgAgUAJQgFAEAAAHQAAAHAGAEQAFAFAKAAQALgBAJgFQAIgGABgIIAAgKIgcAAIgDAAQgJAAgFADg");
	this.shape_278.setTransform(235.6,-78.9);

	this.shape_279 = new cjs.Shape();
	this.shape_279.graphics.f("#0099CC").s().p("AgdAxQgIgEgFgHQgEgIgBgJQABgOAKgIQAKgJAUAAIAfAAIAAgDQAAgLgHgFQgGgFgMAAQgHgBgIADQgIACgIAGIgJgQIAOgIIAOgEQAHgBAKAAQAUAAALAKQALAKAAARIABBFIgXAAIAAgNQgGAHgJADQgJAEgKAAQgMAAgIgFgAgUAJQgFAEAAAHQAAAHAGAEQAFAFAKAAQALgBAJgFQAIgGABgIIAAgKIgcAAIgDAAQgJAAgFADg");
	this.shape_279.setTransform(217.3,-78.9);

	this.shape_280 = new cjs.Shape();
	this.shape_280.graphics.f("#0099CC").s().p("AAcA2IAAg7QAAgMgHgHQgGgHgNAAQgMAAgIAJQgIAHgBANIAAA4IgXAAIAAhqIAXAAIAAAVQAGgLAKgFQAJgGANABQATAAAKAKQALALAAAUIAABBg");
	this.shape_280.setTransform(205.3,-79);

	this.shape_281 = new cjs.Shape();
	this.shape_281.graphics.f("#0099CC").s().p("AgYBFQgLgDgLgHIAKgQQAIAFAIADQAIADAKAAQAOAAAJgIQAJgIAAgOIAAgNQgFAIgJAFQgJAFgLAAQgPgBgKgGQgLgGgGgMQgGgKAAgQQAAgPAGgLQAGgMAKgGQALgGAOAAQAMgBAIAFQAKAFAFAIIAAgRIAXAAIAABfQAAAQgHALQgGALgNAGQgNAGgPAAQgNAAgKgEgAgPgyQgHAEgFAIQgDAHAAAKQAAAJADAIQAFAGAHAEQAHAFAIAAQAJAAAGgFQAIgEADgGQAEgIAAgJQAAgPgIgJQgJgJgNAAQgIAAgHAEg");
	this.shape_281.setTransform(191.7,-77);

	this.shape_282 = new cjs.Shape();
	this.shape_282.graphics.f("#0099CC").s().p("AgdAxQgIgEgFgHQgEgIgBgJQABgOAKgIQAKgJAUAAIAfAAIAAgDQAAgLgHgFQgGgFgMAAQgHgBgIADQgIACgIAGIgJgQIAOgIIAOgEQAHgBAKAAQAUAAALAKQALAKAAARIABBFIgXAAIAAgNQgGAHgJADQgJAEgKAAQgMAAgIgFgAgUAJQgFAEAAAHQAAAHAGAEQAFAFAKAAQALgBAJgFQAIgGABgIIAAgKIgcAAIgDAAQgJAAgFADg");
	this.shape_282.setTransform(179.6,-78.9);

	this.shape_283 = new cjs.Shape();
	this.shape_283.graphics.f("#0099CC").s().p("ABCA2IAAg7QgBgMgGgHQgHgHgMAAQgJAAgGAFQgHAEgDAHQgEAIABAIIAAA1IgXAAIAAg7QAAgMgHgHQgGgHgMAAQgJAAgGAFQgHAEgDAHQgFAIAAAIIAAA1IgWAAIAAhqIAWAAIAAAVQAHgLAJgFQAKgGANABQAOAAAKAGQAIAHAFAMQAEgNALgGQAKgHAPABQASAAAKAKQALALAAAUIAABBg");
	this.shape_283.setTransform(163.8,-79);

	this.shape_284 = new cjs.Shape();
	this.shape_284.graphics.f("#0099CC").s().p("AgZAvQgMgHgHgMQgHgMAAgQQAAgPAHgMQAHgNAMgGQAMgHAPAAQATAAALAIQAMAHAFAOQAEAOgBATIhPAAQACAMAJAHQAJAHAMAAQAIAAAIgDQAIgDAGgGIAMANQgIAIgLAFQgLAEgOABQgQgBgMgGgAAggHQgBgNgIgHQgIgIgNAAQgMAAgIAIQgIAHgCANIA8AAIAAAAg");
	this.shape_284.setTransform(140.8,-78.9);

	this.shape_285 = new cjs.Shape();
	this.shape_285.graphics.f("#0099CC").s().p("AgdA1IAAhpIAXAAIAAAVQAGgLAIgFQAJgGANAAIAAAWQgLAAgIADQgIAEgDAHQgFAGgBAKIAAA2g");
	this.shape_285.setTransform(131.7,-78.9);

	this.shape_286 = new cjs.Shape();
	this.shape_286.graphics.f("#0099CC").s().p("AgcAvQgMgHgHgMQgIgMAAgQQAAgPAIgMQAHgNAMgGQAMgHAQAAQAQAAANAHQAMAGAIANQAGAMAAAPQAAAQgGAMQgIAMgMAHQgNAGgQABQgQgBgMgGgAgQgdQgHAEgEAIQgEAIAAAJQAAAPAJAKQAIAKAOAAQAOAAAKgKQAIgKABgPQAAgJgFgIQgEgIgHgEQgIgEgJgBQgJABgHAEg");
	this.shape_286.setTransform(120.8,-78.9);

	this.shape_287 = new cjs.Shape();
	this.shape_287.graphics.f("#0099CC").s().p("AgLBKIAAiTIAXAAIAACTg");
	this.shape_287.setTransform(111.6,-81);

	this.shape_288 = new cjs.Shape();
	this.shape_288.graphics.f("#0099CC").s().p("AgcAvQgNgHgGgMQgIgMAAgQQAAgPAIgMQAGgNANgGQAMgHAQAAQAQAAANAHQAMAGAIANQAGAMAAAPQAAAQgGAMQgIAMgMAHQgNAGgQABQgQgBgMgGgAgQgdQgHAEgFAIQgDAIAAAJQAAAPAJAKQAIAKAOAAQAOAAAKgKQAJgKAAgPQAAgJgFgIQgEgIgHgEQgIgEgJgBQgJABgHAEg");
	this.shape_288.setTransform(102.4,-78.9);

	this.shape_289 = new cjs.Shape();
	this.shape_289.graphics.f("#0099CC").s().p("AgfBEQgLgHgGgMQgHgNAAgQQAAgQAHgLQAGgMALgHQAMgHAPAAQAMAAAJAFQAKAFAGAKIAAg9IAXAAIAACUIgXAAIAAgTQgGAKgJAFQgKAFgMAAQgPAAgMgHgAgQgJQgHAFgEAHQgFAIAAAKQAAAKAFAIQAEAIAHAEQAHAEAJAAQAKAAAHgEQAHgEAEgIQAFgIAAgKQAAgKgFgIQgEgHgHgFQgHgEgKAAQgJAAgHAEg");
	this.shape_289.setTransform(88.8,-81);

	this.shape_290 = new cjs.Shape();
	this.shape_290.graphics.f("#0099CC").s().p("AgEA/QgHgDgEgHQgEgHgBgLIAAg2IgPAAIAAgRIAPAAIAAgdIAXAAIAAAdIAfAAIAAARIgfAAIAAAyQAAAIACADQADAEAGgBIAIgBIAIgDIAFARQgFAEgHACQgHACgHAAQgIAAgFgDg");
	this.shape_290.setTransform(71.9,-80.1);

	this.shape_291 = new cjs.Shape();
	this.shape_291.graphics.f("#0099CC").s().p("AgZAvQgMgHgHgMQgHgMAAgQQAAgPAHgMQAHgNAMgGQAMgHAPAAQATAAALAIQAMAHAFAOQAEAOgBATIhPAAQACAMAJAHQAJAHAMAAQAIAAAIgDQAIgDAGgGIAMANQgIAIgLAFQgLAEgOABQgQgBgMgGgAAggHQgBgNgIgHQgIgIgNAAQgMAAgIAIQgIAHgCANIA8AAIAAAAg");
	this.shape_291.setTransform(61.9,-78.9);

	this.shape_292 = new cjs.Shape();
	this.shape_292.graphics.f("#0099CC").s().p("AgZAvQgMgHgHgMQgHgMAAgQQAAgPAHgMQAHgNAMgGQAMgHAPAAQATAAALAIQAMAHAFAOQAEAOgBATIhPAAQACAMAJAHQAJAHAMAAQAIAAAIgDQAIgDAGgGIAMANQgIAIgLAFQgLAEgOABQgQgBgMgGgAAggHQgBgNgIgHQgIgIgNAAQgMAAgIAIQgIAHgCANIA8AAIAAAAg");
	this.shape_292.setTransform(43.6,-78.9);

	this.shape_293 = new cjs.Shape();
	this.shape_293.graphics.f("#0099CC").s().p("AgdA1IAAhpIAXAAIAAAVQAGgLAIgFQAJgGANAAIAAAWQgLAAgIADQgHAEgFAHQgEAGgBAKIAAA2g");
	this.shape_293.setTransform(34.6,-78.9);

	this.shape_294 = new cjs.Shape();
	this.shape_294.graphics.f("#0099CC").s().p("AgcAvQgMgHgIgMQgGgMAAgQQAAgPAGgMQAIgNAMgGQANgHAPAAQARAAAMAHQANAGAGANQAIAMAAAPQAAAQgIAMQgGAMgNAHQgMAGgRABQgPgBgNgGgAgQgdQgHAEgEAIQgFAIAAAJQAAAPAJAKQAKAKANAAQAPAAAIgKQAJgKAAgPQAAgJgDgIQgFgIgHgEQgHgEgKgBQgIABgIAEg");
	this.shape_294.setTransform(23.6,-78.9);

	this.shape_295 = new cjs.Shape();
	this.shape_295.graphics.f("#0099CC").s().p("AgQBGQgJgFgHgKIAAATIgWAAIAAiUIAWAAIAAA9QAHgKAJgEQAJgFALAAQAQAAALAGQALAHAHAMQAGAMAAAQQAAAQgGAMQgGAMgMAHQgKAGgQABQgMgBgJgEgAgQgJQgHAFgEAGQgFAIAAAKQABAQAIAJQAKAKANAAQAJAAAIgFQAHgEAEgIQAEgIAAgKQAAgKgEgIQgEgGgHgFQgIgEgJAAQgIAAgIAEg");
	this.shape_295.setTransform(11.1,-81);

	this.shape_296 = new cjs.Shape();
	this.shape_296.graphics.f("#0099CC").s().p("AgdAxQgIgEgFgHQgEgIgBgJQABgOAKgIQAKgJAUAAIAfAAIAAgDQAAgLgHgFQgGgFgMAAQgHgBgIADQgIACgIAGIgJgQIAOgIIAOgEQAHgBAKAAQAUAAALAKQALAKAAARIABBFIgXAAIAAgNQgGAHgJADQgJAEgKAAQgMAAgIgFgAgUAJQgFAEAAAHQAAAHAGAEQAFAFAKAAQALgBAJgFQAIgGABgIIAAgKIgcAAIgDAAQgJAAgFADg");
	this.shape_296.setTransform(-2.3,-78.9);

	this.shape_297 = new cjs.Shape();
	this.shape_297.graphics.f("#0099CC").s().p("AgLBKIAAiTIAXAAIAACTg");
	this.shape_297.setTransform(-10.8,-81);

	this.shape_298 = new cjs.Shape();
	this.shape_298.graphics.f("#0099CC").s().p("AgFA/QgGgDgEgHQgEgHAAgLIAAg2IgQAAIAAgRIAQAAIAAgdIAVAAIAAAdIAgAAIAAARIggAAIAAAyQAAAIAEADQADAEAFgBIAHgBIAJgDIAGARQgHAEgGACQgHACgHAAQgIAAgGgDg");
	this.shape_298.setTransform(-24.3,-80.1);

	this.shape_299 = new cjs.Shape();
	this.shape_299.graphics.f("#0099CC").s().p("AgnArQgKgLAAgTIAAhCIAXAAIAAA7QAAAMAHAHQAGAHAMAAQAIAAAHgFQAGgEADgHQAEgIAAgIIAAg1IAXAAIAABqIgXAAIAAgVQgGALgJAFQgKAFgMABQgTgBgKgKg");
	this.shape_299.setTransform(-35.2,-78.9);

	this.shape_300 = new cjs.Shape();
	this.shape_300.graphics.f("#0099CC").s().p("AgFA/QgGgDgEgHQgEgHAAgLIAAg2IgQAAIAAgRIAQAAIAAgdIAVAAIAAAdIAgAAIAAARIggAAIAAAyQAAAIAEADQADAEAFgBIAHgBIAJgDIAFARQgFAEgHACQgHACgHAAQgHAAgHgDg");
	this.shape_300.setTransform(-52.1,-80.1);

	this.shape_301 = new cjs.Shape();
	this.shape_301.graphics.f("#0099CC").s().p("AAcA2IAAg7QAAgMgHgHQgGgHgNAAQgMAAgIAJQgIAHgBANIAAA4IgXAAIAAhqIAXAAIAAAVQAGgLAKgFQAJgGANABQATAAALAKQAKALAAAUIAABBg");
	this.shape_301.setTransform(-62.7,-79);

	this.shape_302 = new cjs.Shape();
	this.shape_302.graphics.f("#0099CC").s().p("AgmArQgLgLAAgTIAAhCIAXAAIAAA7QAAAMAHAHQAGAHAMAAQAIAAAHgFQAGgEAEgHQADgIAAgIIAAg1IAXAAIAABqIgXAAIAAgVQgGALgJAFQgKAFgMABQgTgBgJgKg");
	this.shape_302.setTransform(-76.2,-78.9);

	this.shape_303 = new cjs.Shape();
	this.shape_303.graphics.f("#0099CC").s().p("AgfBEQgLgHgGgMQgHgNAAgQQAAgQAHgLQAGgMALgHQAMgHAPAAQAMAAAJAFQAKAFAGAKIAAg9IAXAAIAACUIgXAAIAAgTQgGAKgJAFQgKAFgMAAQgPAAgMgHgAgQgJQgHAFgEAHQgFAIAAAKQAAAKAFAIQAEAIAHAEQAHAEAJAAQAKAAAHgEQAHgEAEgIQAFgIAAgKQAAgKgFgIQgEgHgHgFQgHgEgKAAQgJAAgHAEg");
	this.shape_303.setTransform(-90,-81);

	this.shape_304 = new cjs.Shape();
	this.shape_304.graphics.f("#0099CC").s().p("AgLBLIAAhpIAWAAIAABpgAgJgzQgDgEAAgFQAAgHADgDQAEgEAFAAQAGAAADAEQAEADABAHQgBAFgEAEQgDAEgGAAQgFAAgEgEg");
	this.shape_304.setTransform(-99.1,-81.1);

	this.shape_305 = new cjs.Shape();
	this.shape_305.graphics.f("#0099CC").s().p("AgfBEQgLgHgGgMQgHgNAAgQQAAgQAHgLQAGgMALgHQAMgHAPAAQAMAAAJAFQAKAFAGAKIAAg9IAXAAIAACUIgXAAIAAgTQgGAKgJAFQgKAFgMAAQgPAAgMgHgAgQgJQgHAFgEAHQgFAIAAAKQAAAKAFAIQAEAIAHAEQAHAEAJAAQAKAAAHgEQAHgEAEgIQAFgIAAgKQAAgKgFgIQgEgHgHgFQgHgEgKAAQgJAAgHAEg");
	this.shape_305.setTransform(-109.3,-81);

	this.shape_306 = new cjs.Shape();
	this.shape_306.graphics.f("#0099CC").s().p("AgLBLIAAhpIAWAAIAABpgAgJgzQgDgEAAgFQAAgHADgDQAEgEAFAAQAGAAADAEQAEADABAHQgBAFgEAEQgDAEgGAAQgFAAgEgEg");
	this.shape_306.setTransform(-118.4,-81.1);

	this.shape_307 = new cjs.Shape();
	this.shape_307.graphics.f("#0099CC").s().p("AgXAvQgMgHgHgMQgGgMgBgQQABgPAGgMQAHgNAMgGQAMgHAPAAQAOAAALAEQALAFAIAIIgMAPQgGgGgIgDQgHgDgKAAQgJAAgGAFQgHAEgFAHQgEAIAAAJQAAAKAEAIQAFAHAHAEQAGAFAJAAQAKAAAIgEQAIgDAFgGIANANQgHAKgMAEQgKAGgQAAQgPgBgMgGg");
	this.shape_307.setTransform(-126.9,-78.9);

	this.shape_308 = new cjs.Shape();
	this.shape_308.graphics.f("#0099CC").s().p("AAcA2IAAg7QAAgMgHgHQgGgHgNAAQgMAAgIAJQgIAHgBANIAAA4IgXAAIAAhqIAXAAIAAAVQAGgLAKgFQAJgGANABQATAAAKAKQALALAAAUIAABBg");
	this.shape_308.setTransform(-139,-79);

	this.shape_309 = new cjs.Shape();
	this.shape_309.graphics.f("#0099CC").s().p("AgLBLIAAhpIAWAAIAABpgAgJgzQgDgEAAgFQAAgHADgDQAEgEAFAAQAGAAADAEQAEADABAHQgBAFgEAEQgDAEgGAAQgFAAgEgEg");
	this.shape_309.setTransform(-148.7,-81.1);

	this.shape_310 = new cjs.Shape();
	this.shape_310.graphics.f("#0099CC").s().p("AgdA1IAAhpIAXAAIAAAVQAFgLAJgFQAJgGANAAIAAAWQgLAAgIADQgHAEgEAHQgFAGgBAKIAAA2g");
	this.shape_310.setTransform(-161.3,-78.9);

	this.shape_311 = new cjs.Shape();
	this.shape_311.graphics.f("#0099CC").s().p("AgcAvQgNgHgGgMQgIgMABgQQgBgPAIgMQAGgNANgGQAMgHAQAAQARAAAMAHQANAGAGANQAIAMgBAPQABAQgIAMQgGAMgNAHQgMAGgRABQgQgBgMgGgAgQgdQgHAEgEAIQgEAIgBAJQABAPAIAKQAJAKAOAAQAPAAAJgKQAIgKABgPQAAgJgFgIQgEgIgHgEQgIgEgJgBQgJABgHAEg");
	this.shape_311.setTransform(-172.3,-78.9);

	this.shape_312 = new cjs.Shape();
	this.shape_312.graphics.f("#0099CC").s().p("Ag3BJIAAiQIAYAAIAAASQAFgJAKgFQAJgFAMAAQAPAAAMAHQAKAGAHANQAHAMgBAQQABAQgHALQgGAMgLAHQgMAGgPABQgMgBgJgEQgKgFgFgJIAAA5gAgQgxQgHAFgFAIQgDAHAAALQAAAPAJAJQAIAJAOAAQAJAAAHgFQAIgEAEgGQAEgIABgKQgBgLgEgHQgEgIgIgFQgHgEgJAAQgJAAgHAEg");
	this.shape_312.setTransform(-184.8,-77);

	this.shape_313 = new cjs.Shape();
	this.shape_313.graphics.f("#0099CC").s().p("ABCA2IAAg7QgBgMgGgHQgHgHgMAAQgJAAgGAFQgHAEgDAHQgDAIAAAIIAAA1IgXAAIAAg7QAAgMgGgHQgHgHgLAAQgKAAgGAFQgHAEgDAHQgFAIAAAIIAAA1IgWAAIAAhqIAWAAIAAAVQAHgLAJgFQAKgGAOABQAOAAAJAGQAIAHAFAMQAEgNALgGQAKgHAPABQASAAAKAKQALALAAAUIAABBg");
	this.shape_313.setTransform(-202.4,-79);

	this.shape_314 = new cjs.Shape();
	this.shape_314.graphics.f("#0099CC").s().p("AgZAvQgMgHgHgMQgHgMAAgQQAAgPAHgMQAHgNAMgGQAMgHAPAAQATAAALAIQAMAHAFAOQAEAOgBATIhPAAQACAMAJAHQAJAHAMAAQAIAAAIgDQAIgDAGgGIAMANQgIAIgLAFQgLAEgOABQgQgBgMgGgAAggHQgBgNgIgHQgIgIgNAAQgMAAgIAIQgIAHgCANIA8AAIAAAAg");
	this.shape_314.setTransform(-218.8,-78.9);

	this.shape_315 = new cjs.Shape();
	this.shape_315.graphics.f("#0099CC").s().p("AgEA/QgHgDgEgHQgEgHgBgLIAAg2IgPAAIAAgRIAPAAIAAgdIAXAAIAAAdIAfAAIAAARIgfAAIAAAyQAAAIACADQADAEAGgBIAIgBIAIgDIAFARQgFAEgHACQgHACgHAAQgIAAgFgDg");
	this.shape_315.setTransform(-228.7,-80.1);

	this.shape_316 = new cjs.Shape();
	this.shape_316.graphics.f("#0099CC").s().p("AgfBEQgLgHgGgMQgHgNAAgQQAAgQAHgLQAGgMALgHQAMgHAPAAQAMAAAJAFQAKAFAGAKIAAg9IAXAAIAACUIgXAAIAAgTQgGAKgJAFQgKAFgMAAQgPAAgMgHgAgQgJQgHAFgEAHQgFAIAAAKQAAAKAFAIQAEAIAHAEQAHAEAJAAQAKAAAHgEQAHgEAEgIQAFgIAAgKQAAgKgFgIQgEgHgHgFQgHgEgKAAQgJAAgHAEg");
	this.shape_316.setTransform(-246.8,-81);

	this.shape_317 = new cjs.Shape();
	this.shape_317.graphics.f("#0099CC").s().p("AgcAvQgMgHgIgMQgGgMAAgQQAAgPAGgMQAIgNAMgGQAMgHAQAAQARAAAMAHQAMAGAHANQAIAMgBAPQABAQgIAMQgHAMgMAHQgMAGgRABQgQgBgMgGgAgQgdQgHAEgEAIQgFAIAAAJQABAPAIAKQAKAKANAAQAPAAAIgKQAJgKAAgPQAAgJgEgIQgEgIgHgEQgHgEgKgBQgIABgIAEg");
	this.shape_317.setTransform(-259.3,-78.9);

	this.shape_318 = new cjs.Shape();
	this.shape_318.graphics.f("#0099CC").s().p("ABCA2IAAg7QgBgMgGgHQgHgHgMAAQgJAAgGAFQgHAEgDAHQgEAIABAIIAAA1IgXAAIAAg7QAAgMgHgHQgGgHgMAAQgJAAgGAFQgHAEgDAHQgFAIAAAIIAAA1IgWAAIAAhqIAWAAIAAAVQAHgLAJgFQAKgGANABQAPAAAJAGQAIAHAFAMQAEgNALgGQAKgHAPABQASAAAKAKQALALAAAUIAABBg");
	this.shape_318.setTransform(-275.8,-79);

	this.shape_319 = new cjs.Shape();
	this.shape_319.graphics.f("#0099CC").s().p("AgVAyQgLgDgJgIIAJgQQAEAEAGADIAMAFIAMABQAIAAAEgDQAFgCABgGQgBgHgFgDQgGgDgIgDIgQgFQgIgDgGgGQgFgGgBgLQABgLAFgHQAGgHAJgDQAIgDAKAAQAKAAAKADQAKACAHAGIgIARQgIgFgIgCQgIgDgHAAQgGAAgFADQgDACAAAGQgBAFAGAEQAGADAHACIARAGQAIADAGAGQAFAGABALQgBALgFAHQgGAHgJAEQgJADgLAAQgLAAgLgEg");
	this.shape_319.setTransform(-291.2,-78.9);

	this.shape_320 = new cjs.Shape();
	this.shape_320.graphics.f("#0099CC").s().p("AgnArQgJgLgBgTIAAhCIAXAAIAAA7QAAAMAHAHQAHAHALAAQAIAAAGgFQAHgEADgHQAEgIAAgIIAAg1IAXAAIAABqIgXAAIAAgVQgGALgJAFQgKAFgMABQgSgBgLgKg");
	this.shape_320.setTransform(-302.5,-78.9);

	this.shape_321 = new cjs.Shape();
	this.shape_321.graphics.f("#0099CC").s().p("AgLBLIAAhpIAWAAIAABpgAgIgzQgFgEAAgFQAAgHAFgDQADgEAFAAQAGAAAEAEQADADAAAHQAAAFgDAEQgEAEgGAAQgFAAgDgEg");
	this.shape_321.setTransform(-311.7,-81.1);

	this.shape_322 = new cjs.Shape();
	this.shape_322.graphics.f("#0099CC").s().p("AgZAvQgMgHgHgMQgHgMAAgQQAAgPAHgMQAHgNAMgGQAMgHAPAAQATAAALAIQAMAHAFAOQAEAOgBATIhPAAQACAMAJAHQAJAHAMAAQAIAAAIgDQAIgDAGgGIAMANQgIAIgLAFQgLAEgOABQgQgBgMgGgAAggHQgBgNgIgHQgIgIgNAAQgMAAgIAIQgIAHgCANIA8AAIAAAAg");
	this.shape_322.setTransform(-320.4,-78.9);

	this.shape_323 = new cjs.Shape();
	this.shape_323.graphics.f("#0099CC").s().p("AgcAvQgMgHgIgMQgGgMAAgQQAAgPAGgNQAIgLAMgIQANgGAPAAQARAAAMAGQAMAIAHALQAIANAAAPQAAAQgIAMQgHAMgMAHQgMAGgRABQgPgBgNgGgAgQgdQgHAEgEAIQgFAHAAAKQABAPAIAKQAKAJANAAQAPAAAIgJQAJgKAAgPQAAgKgEgHQgEgIgHgEQgHgFgKAAQgIAAgIAFg");
	this.shape_323.setTransform(319.8,-111.8);

	this.shape_324 = new cjs.Shape();
	this.shape_324.graphics.f("#0099CC").s().p("AgfBEQgLgHgGgMQgHgNAAgQQAAgQAHgLQAGgMALgHQAMgHAPAAQAMAAAJAFQAKAFAGAKIAAg9IAXAAIAACUIgXAAIAAgTQgGAKgJAFQgKAFgMAAQgPAAgMgHgAgQgJQgHAFgEAHQgFAIAAAKQAAAKAFAIQAEAIAHAEQAHAEAJAAQAKAAAHgEQAHgEAEgIQAFgIAAgKQAAgKgFgIQgEgHgHgFQgHgEgKAAQgJAAgHAEg");
	this.shape_324.setTransform(306.2,-113.9);

	this.shape_325 = new cjs.Shape();
	this.shape_325.graphics.f("#0099CC").s().p("AgfBEQgLgHgGgMQgHgNAAgQQAAgQAHgLQAGgMALgHQAMgHAPAAQAMAAAJAFQAKAFAGAKIAAg9IAXAAIAACUIgXAAIAAgTQgGAKgJAFQgKAFgMAAQgPAAgMgHgAgQgJQgHAFgEAHQgFAIAAAKQAAAKAFAIQAEAIAHAEQAHAEAJAAQAKAAAHgEQAHgEAEgIQAFgIAAgKQAAgKgFgIQgEgHgHgFQgHgEgKAAQgJAAgHAEg");
	this.shape_325.setTransform(284.1,-113.9);

	this.shape_326 = new cjs.Shape();
	this.shape_326.graphics.f("#0099CC").s().p("AgZAvQgMgHgHgMQgHgMAAgQQAAgPAHgNQAHgLAMgIQAMgGAPAAQATAAALAHQAMAIAFAOQAEAOgBASIhPAAQACANAJAHQAJAHAMAAQAIAAAIgDQAIgDAGgGIAMANQgIAIgLAFQgLAFgOAAQgQgBgMgGgAAggHQgBgNgIgIQgIgHgNAAQgMAAgIAHQgIAIgCANIA8AAIAAAAg");
	this.shape_326.setTransform(272,-111.8);

	this.shape_327 = new cjs.Shape();
	this.shape_327.graphics.f("#0099CC").s().p("AgWAyQgKgDgJgIIAIgQQAFAEAGADIANAFIALABQAHAAAFgDQAFgCAAgGQAAgHgGgDQgFgDgIgDIgQgFQgIgDgGgGQgFgGAAgLQAAgLAFgHQAFgHAJgDQAKgDAJAAQAKAAAKADQAKACAHAGIgJARQgHgFgHgCQgJgDgHAAQgGAAgEADQgFACAAAGQABAFAFAEQAGADAHACIARAGQAIADAGAGQAGAGAAALQAAALgGAHQgGAHgJAEQgJADgLAAQgLAAgMgEg");
	this.shape_327.setTransform(261.3,-111.8);

	this.shape_328 = new cjs.Shape();
	this.shape_328.graphics.f("#0099CC").s().p("AgNAUIAIgRIgEgEIgBgGQAAgFADgEQAEgDAEAAQAFAAAEADQAEADgBAGIgBAGIgCAEIgKARg");
	this.shape_328.setTransform(246,-106.9);

	this.shape_329 = new cjs.Shape();
	this.shape_329.graphics.f("#0099CC").s().p("AgFA/QgGgDgEgHQgEgHgBgLIAAg2IgOAAIAAgRIAOAAIAAgdIAXAAIAAAdIAfAAIAAARIgfAAIAAAyQAAAIACADQADAEAGgBIAHgBIAJgDIAGARQgHAEgGACQgHACgGAAQgIAAgHgDg");
	this.shape_329.setTransform(240,-113);

	this.shape_330 = new cjs.Shape();
	this.shape_330.graphics.f("#0099CC").s().p("AgKBLIAAhpIAVAAIAABpgAgIgzQgFgEAAgFQAAgHAFgDQADgEAFAAQAGAAAEAEQADADAAAHQAAAFgDAEQgEAEgGAAQgFAAgDgEg");
	this.shape_330.setTransform(233,-114);

	this.shape_331 = new cjs.Shape();
	this.shape_331.graphics.f("#0099CC").s().p("AgKBKIAAiTIAVAAIAACTg");
	this.shape_331.setTransform(227.2,-113.9);

	this.shape_332 = new cjs.Shape();
	this.shape_332.graphics.f("#0099CC").s().p("AgZAvQgMgHgHgMQgHgMAAgQQAAgPAHgNQAHgLAMgIQAMgGAPAAQATAAALAHQAMAIAFAOQAEAOgBASIhPAAQACANAJAHQAJAHAMAAQAIAAAIgDQAIgDAGgGIAMANQgIAIgLAFQgLAFgOAAQgQgBgMgGgAAggHQgBgNgIgIQgIgHgNAAQgMAAgIAHQgIAIgCANIA8AAIAAAAg");
	this.shape_332.setTransform(218.4,-111.8);

	this.shape_333 = new cjs.Shape();
	this.shape_333.graphics.f("#0099CC").s().p("AgYBFQgMgDgJgHIAKgQQAHAFAIADQAIADAKAAQAOAAAJgIQAJgIAAgOIAAgNQgFAIgJAFQgJAFgLAAQgOgBgLgGQgLgGgGgMQgGgKAAgQQAAgPAGgLQAGgMAKgGQALgGAOAAQALgBAJAFQAJAFAGAIIAAgRIAXAAIAABfQAAAQgHALQgGALgNAGQgNAGgPAAQgMAAgLgEgAgPgyQgIAEgDAIQgEAHgBAKQABAJAEAIQADAGAIAEQAGAFAJAAQAIAAAHgFQAHgEAFgGQADgIAAgJQAAgPgJgJQgHgJgOAAQgJAAgGAEg");
	this.shape_333.setTransform(197.3,-109.9);

	this.shape_334 = new cjs.Shape();
	this.shape_334.graphics.f("#0099CC").s().p("AAcA2IAAg7QAAgMgHgHQgGgHgNAAQgMAAgIAJQgIAHgBANIAAA4IgXAAIAAhqIAXAAIAAAVQAGgLAKgFQAJgGANABQATAAALAKQAKALAAAUIAABBg");
	this.shape_334.setTransform(184.9,-111.9);

	this.shape_335 = new cjs.Shape();
	this.shape_335.graphics.f("#0099CC").s().p("AgKBLIAAhpIAVAAIAABpgAgJgzQgDgEAAgFQAAgHADgDQAEgEAFAAQAGAAADAEQAEADABAHQgBAFgEAEQgDAEgGAAQgFAAgEgEg");
	this.shape_335.setTransform(175.2,-114);

	this.shape_336 = new cjs.Shape();
	this.shape_336.graphics.f("#0099CC").s().p("AgXAvQgMgHgHgMQgHgMAAgQQAAgPAHgNQAHgLAMgIQAMgGAPAAQAOAAALAFQAMAEAHAIIgMAPQgGgGgIgDQgIgDgJAAQgIAAgIAEQgGAEgFAIQgDAIAAAJQAAAKADAHQAFAIAGAFQAIAEAIAAQAKAAAIgDQAIgEAGgGIAMANQgHAJgMAGQgLAFgPAAQgPgBgMgGg");
	this.shape_336.setTransform(166.7,-111.8);

	this.shape_337 = new cjs.Shape();
	this.shape_337.graphics.f("#0099CC").s().p("AgWAyQgLgDgIgIIAJgQQAEAEAGADIAMAFIAMABQAIAAAEgDQAFgCABgGQgBgHgGgDQgFgDgIgDIgQgFQgIgDgGgGQgFgGAAgLQAAgLAFgHQAFgHAKgDQAIgDAKAAQAKAAAKADQAJACAIAGIgJARQgGgFgJgCQgIgDgHAAQgGAAgFADQgEACABAGQAAAFAFAEQAGADAHACIARAGQAIADAGAGQAGAGAAALQAAALgGAHQgFAHgKAEQgJADgLAAQgLAAgMgEg");
	this.shape_337.setTransform(156.3,-111.8);

	this.shape_338 = new cjs.Shape();
	this.shape_338.graphics.f("#0099CC").s().p("AgKBLIAAhpIAVAAIAABpgAgIgzQgFgEAAgFQAAgHAFgDQADgEAFAAQAGAAAEAEQADADAAAHQAAAFgDAEQgEAEgGAAQgFAAgDgEg");
	this.shape_338.setTransform(148.8,-114);

	this.shape_339 = new cjs.Shape();
	this.shape_339.graphics.f("#0099CC").s().p("Ag2BJIAAiRIAWAAIAAATQAHgJAJgFQAJgFALAAQAQAAALAGQALAIAHALQAGANABAQQgBAQgGALQgGAMgMAHQgLAGgPABQgLAAgKgFQgJgFgHgKIAAA6gAgQgwQgHAEgEAHQgFAIAAAKQAAAQAJAIQAKAKANAAQAJAAAIgEQAHgFAEgHQAEgHAAgLQAAgKgEgIQgEgHgHgEQgIgFgJAAQgIAAgIAFg");
	this.shape_339.setTransform(139.7,-109.9);

	this.shape_340 = new cjs.Shape();
	this.shape_340.graphics.f("#0099CC").s().p("AgLBLIAAhpIAWAAIAABpgAgJgzQgDgEAAgFQAAgHADgDQAEgEAFAAQAGAAADAEQAEADABAHQgBAFgEAEQgDAEgGAAQgFAAgEgEg");
	this.shape_340.setTransform(129.5,-114);

	this.shape_341 = new cjs.Shape();
	this.shape_341.graphics.f("#0099CC").s().p("AgfBEQgLgHgGgMQgHgNAAgQQAAgQAHgLQAGgMALgHQAMgHAPAAQAMAAAJAFQAKAFAGAKIAAg9IAXAAIAACUIgXAAIAAgTQgGAKgJAFQgKAFgMAAQgPAAgMgHgAgQgJQgHAFgEAHQgFAIAAAKQAAAKAFAIQAEAIAHAEQAHAEAJAAQAKAAAHgEQAHgEAEgIQAFgIAAgKQAAgKgFgIQgEgHgHgFQgHgEgKAAQgJAAgHAEg");
	this.shape_341.setTransform(119.3,-113.9);

	this.shape_342 = new cjs.Shape();
	this.shape_342.graphics.f("#0099CC").s().p("AgdAyQgIgFgFgHQgEgIgBgJQABgPAKgHQAKgIAUgBIAfAAIAAgDQAAgLgHgFQgGgGgMAAQgHAAgIADQgIADgIAFIgJgQIAOgHIAOgFQAHgBAKAAQAUAAALAJQALALAAARIABBFIgXAAIAAgNQgGAHgJAEQgJADgKAAQgMAAgIgEgAgUAJQgFADAAAIQAAAHAGAFQAFAEAKAAQALAAAJgGQAIgFABgKIAAgJIgcAAIgDAAQgJAAgFADg");
	this.shape_342.setTransform(106.9,-111.8);

	this.shape_343 = new cjs.Shape();
	this.shape_343.graphics.f("#0099CC").s().p("AgdA2IAAhqIAXAAIAAAVQAFgLAJgFQAJgGANABIAAAVQgLAAgIAEQgIADgEAHQgEAHgBAJIAAA3g");
	this.shape_343.setTransform(89.7,-111.8);

	this.shape_344 = new cjs.Shape();
	this.shape_344.graphics.f("#0099CC").s().p("AgnArQgKgLAAgTIAAhCIAXAAIAAA7QAAAMAHAHQAGAHAMAAQAIAAAHgFQAGgEADgHQAEgIAAgIIAAg1IAXAAIAABqIgXAAIAAgVQgFALgKAFQgKAFgMABQgTgBgKgKg");
	this.shape_344.setTransform(78.3,-111.8);

	this.shape_345 = new cjs.Shape();
	this.shape_345.graphics.f("#0099CC").s().p("AgEA/QgHgDgEgHQgEgHgBgLIAAg2IgOAAIAAgRIAOAAIAAgdIAXAAIAAAdIAfAAIAAARIgfAAIAAAyQAAAIACADQADAEAGgBIAIgBIAIgDIAFARQgGAEgGACQgHACgGAAQgJAAgFgDg");
	this.shape_345.setTransform(68,-113);

	this.shape_346 = new cjs.Shape();
	this.shape_346.graphics.f("#0099CC").s().p("AgZAvQgMgHgHgMQgHgMAAgQQAAgPAHgNQAHgLAMgIQAMgGAPAAQATAAALAHQAMAIAFAOQAEAOgBASIhPAAQACANAJAHQAJAHAMAAQAIAAAIgDQAIgDAGgGIAMANQgIAIgLAFQgLAFgOAAQgQgBgMgGgAAggHQgBgNgIgIQgIgHgNAAQgMAAgIAHQgIAIgCANIA8AAIAAAAg");
	this.shape_346.setTransform(58,-111.8);

	this.shape_347 = new cjs.Shape();
	this.shape_347.graphics.f("#0099CC").s().p("AgFA/QgGgDgEgHQgEgHAAgLIAAg2IgQAAIAAgRIAQAAIAAgdIAVAAIAAAdIAgAAIAAARIggAAIAAAyQAAAIAEADQADAEAFgBIAHgBIAJgDIAGARQgHAEgGACQgHACgHAAQgIAAgGgDg");
	this.shape_347.setTransform(48.1,-113);

	this.shape_348 = new cjs.Shape();
	this.shape_348.graphics.f("#0099CC").s().p("AgXAvQgMgHgHgMQgGgMAAgQQAAgPAGgNQAHgLAMgIQAMgGAPAAQAPAAAKAFQALAEAIAIIgNAPQgFgGgHgDQgIgDgKAAQgJAAgGAEQgIAEgDAIQgFAIAAAJQAAAKAFAHQADAIAIAFQAGAEAJAAQAKAAAIgDQAIgEAFgGIAOANQgIAJgMAGQgKAFgQAAQgPgBgMgGg");
	this.shape_348.setTransform(38.3,-111.8);

	this.shape_349 = new cjs.Shape();
	this.shape_349.graphics.f("#0099CC").s().p("AgZAvQgMgHgHgMQgHgMAAgQQAAgPAHgNQAHgLAMgIQAMgGAPAAQATAAALAHQAMAIAFAOQAEAOgBASIhPAAQACANAJAHQAJAHAMAAQAIAAAIgDQAIgDAGgGIAMANQgIAIgLAFQgLAFgOAAQgQgBgMgGgAAggHQgBgNgIgIQgIgHgNAAQgMAAgIAHQgIAIgCANIA8AAIAAAAg");
	this.shape_349.setTransform(26.8,-111.8);

	this.shape_350 = new cjs.Shape();
	this.shape_350.graphics.f("#0099CC").s().p("AgWAyQgKgDgJgIIAIgQQAFAEAGADIANAFIALABQAHAAAGgDQAEgCAAgGQAAgHgGgDQgFgDgIgDIgQgFQgIgDgFgGQgGgGAAgLQAAgLAFgHQAFgHAJgDQAKgDAJAAQAKAAAKADQAJACAIAGIgJARQgHgFgHgCQgJgDgHAAQgGAAgEADQgFACAAAGQAAAFAGAEQAGADAIACIAQAGQAJADAFAGQAGAGAAALQAAALgGAHQgGAHgJAEQgJADgLAAQgLAAgMgEg");
	this.shape_350.setTransform(16.2,-111.8);

	this.shape_351 = new cjs.Shape();
	this.shape_351.graphics.f("#0099CC").s().p("AAcA2IAAg7QgBgMgGgHQgGgHgNAAQgMAAgIAJQgHAHgCANIAAA4IgXAAIAAhqIAXAAIAAAVQAGgLAKgFQAKgGAMABQATAAALAKQAJALABAUIAABBg");
	this.shape_351.setTransform(5.1,-111.9);

	this.shape_352 = new cjs.Shape();
	this.shape_352.graphics.f("#0099CC").s().p("AgcAvQgMgHgHgMQgIgMAAgQQAAgPAIgNQAHgLAMgIQAMgGAQAAQAQAAANAGQAMAIAIALQAGANAAAPQAAAQgGAMQgIAMgMAHQgNAGgQABQgQgBgMgGgAgQgdQgHAEgFAIQgDAHAAAKQAAAPAJAKQAIAJAOAAQAOAAAKgJQAIgKABgPQAAgKgFgHQgEgIgHgEQgIgFgJAAQgJAAgHAFg");
	this.shape_352.setTransform(-7.9,-111.8);

	this.shape_353 = new cjs.Shape();
	this.shape_353.graphics.f("#0099CC").s().p("AgXAvQgMgHgHgMQgGgMgBgQQABgPAGgNQAHgLAMgIQAMgGAPAAQAOAAALAFQALAEAIAIIgMAPQgGgGgIgDQgHgDgKAAQgJAAgGAEQgHAEgFAIQgEAIAAAJQAAAKAEAHQAFAIAHAFQAGAEAJAAQAKAAAIgDQAIgEAFgGIANANQgHAJgMAGQgKAFgQAAQgPgBgMgGg");
	this.shape_353.setTransform(-19.8,-111.8);

	this.shape_354 = new cjs.Shape();
	this.shape_354.graphics.f("#0099CC").s().p("AgMAUIAHgRIgEgEIgBgGQAAgFADgEQAEgDAEAAQAGAAADADQADADABAGIgBAGIgDAEIgLARg");
	this.shape_354.setTransform(-36.2,-106.9);

	this.shape_355 = new cjs.Shape();
	this.shape_355.graphics.f("#0099CC").s().p("AgFA/QgGgDgEgHQgEgHAAgLIAAg2IgQAAIAAgRIAQAAIAAgdIAVAAIAAAdIAgAAIAAARIggAAIAAAyQAAAIAEADQADAEAFgBIAHgBIAJgDIAFARQgFAEgHACQgHACgHAAQgHAAgHgDg");
	this.shape_355.setTransform(-42.2,-113);

	this.shape_356 = new cjs.Shape();
	this.shape_356.graphics.f("#0099CC").s().p("AgZAvQgMgHgHgMQgHgMAAgQQAAgPAHgNQAHgLAMgIQAMgGAPAAQATAAALAHQAMAIAFAOQAEAOgBASIhPAAQACANAJAHQAJAHAMAAQAIAAAIgDQAIgDAGgGIAMANQgIAIgLAFQgLAFgOAAQgQgBgMgGgAAggHQgBgNgIgIQgIgHgNAAQgMAAgIAHQgIAIgCANIA8AAIAAAAg");
	this.shape_356.setTransform(-52.2,-111.8);

	this.shape_357 = new cjs.Shape();
	this.shape_357.graphics.f("#0099CC").s().p("ABCA2IAAg7QAAgMgHgHQgHgHgLAAQgJAAgHAFQgHAEgDAHQgEAIAAAIIAAA1IgVAAIAAg7QgBgMgHgHQgGgHgMAAQgJAAgHAFQgGAEgEAHQgDAIAAAIIAAA1IgXAAIAAhqIAXAAIAAAVQAFgLAKgFQAKgGANABQAOAAAKAGQAJAHADAMQAGgNAKgGQAKgHAPABQASAAALAKQAKALAAAUIAABBg");
	this.shape_357.setTransform(-68.3,-111.9);

	this.shape_358 = new cjs.Shape();
	this.shape_358.graphics.f("#0099CC").s().p("AgdAyQgIgFgFgHQgEgIgBgJQABgPAKgHQAKgIAUgBIAfAAIAAgDQAAgLgHgFQgGgGgMAAQgHAAgIADQgIADgIAFIgJgQIAOgHIAOgFQAHgBAKAAQAUAAALAJQALALAAARIABBFIgXAAIAAgNQgGAHgJAEQgJADgKAAQgMAAgIgEgAgUAJQgFADAAAIQAAAHAGAFQAFAEAKAAQALAAAJgGQAIgFABgKIAAgJIgcAAIgDAAQgJAAgFADg");
	this.shape_358.setTransform(-85,-111.8);

	this.shape_359 = new cjs.Shape();
	this.shape_359.graphics.f("#0099CC").s().p("AgEA/QgHgDgEgHQgEgHgBgLIAAg2IgOAAIAAgRIAOAAIAAgdIAXAAIAAAdIAfAAIAAARIgfAAIAAAyQAAAIACADQADAEAGgBIAIgBIAIgDIAFARQgGAEgGACQgHACgGAAQgJAAgFgDg");
	this.shape_359.setTransform(-103,-113);

	this.shape_360 = new cjs.Shape();
	this.shape_360.graphics.f("#0099CC").s().p("AgLBLIAAhpIAWAAIAABpgAgIgzQgFgEAAgFQAAgHAFgDQADgEAFAAQAGAAAEAEQADADAAAHQAAAFgDAEQgEAEgGAAQgFAAgDgEg");
	this.shape_360.setTransform(-110,-114);

	this.shape_361 = new cjs.Shape();
	this.shape_361.graphics.f("#0099CC").s().p("AgWAyQgLgDgIgIIAIgQQAFAEAGADIANAFIALABQAIAAAEgDQAFgCABgGQgBgHgGgDQgFgDgIgDIgQgFQgIgDgGgGQgFgGAAgLQAAgLAFgHQAFgHAKgDQAJgDAJAAQAKAAAKADQAJACAIAGIgJARQgGgFgIgCQgJgDgHAAQgGAAgEADQgFACAAAGQABAFAFAEQAGADAHACIARAGQAIADAGAGQAGAGAAALQAAALgGAHQgGAHgJAEQgJADgLAAQgLAAgMgEg");
	this.shape_361.setTransform(-117.7,-111.8);

	this.shape_362 = new cjs.Shape();
	this.shape_362.graphics.f("#0099CC").s().p("AgdA2IAAhqIAXAAIAAAVQAFgLAJgFQAJgGANABIAAAVQgLAAgIAEQgIADgEAHQgEAHgBAJIAAA3g");
	this.shape_362.setTransform(-133.9,-111.8);

	this.shape_363 = new cjs.Shape();
	this.shape_363.graphics.f("#0099CC").s().p("AgcAvQgMgHgIgMQgGgMgBgQQABgPAGgNQAIgLAMgIQANgGAPAAQAQAAANAGQAMAIAIALQAGANABAPQgBAQgGAMQgIAMgMAHQgNAGgQABQgPgBgNgGgAgQgdQgHAEgFAIQgDAHAAAKQgBAPAKAKQAJAJANAAQAOAAAJgJQAKgKgBgPQAAgKgDgHQgFgIgHgEQgIgFgJAAQgIAAgIAFg");
	this.shape_363.setTransform(-144.9,-111.8);

	this.shape_364 = new cjs.Shape();
	this.shape_364.graphics.f("#0099CC").s().p("AgKBKIAAiTIAVAAIAACTg");
	this.shape_364.setTransform(-154,-113.9);

	this.shape_365 = new cjs.Shape();
	this.shape_365.graphics.f("#0099CC").s().p("AgcAvQgMgHgIgMQgGgMgBgQQABgPAGgNQAIgLAMgIQANgGAPAAQAQAAANAGQAMAIAHALQAIANAAAPQAAAQgIAMQgHAMgMAHQgNAGgQABQgPgBgNgGgAgQgdQgHAEgFAIQgEAHAAAKQAAAPAJAKQAKAJANAAQAPAAAIgJQAKgKgBgPQAAgKgDgHQgFgIgHgEQgIgFgJAAQgJAAgHAFg");
	this.shape_365.setTransform(-163.2,-111.8);

	this.shape_366 = new cjs.Shape();
	this.shape_366.graphics.f("#0099CC").s().p("AgfBEQgLgHgGgMQgHgNAAgQQAAgQAHgLQAGgMALgHQAMgHAPAAQAMAAAJAFQAKAFAGAKIAAg9IAXAAIAACUIgXAAIAAgTQgGAKgJAFQgKAFgMAAQgPAAgMgHgAgQgJQgHAFgEAHQgFAIAAAKQAAAKAFAIQAEAIAHAEQAHAEAJAAQAKAAAHgEQAHgEAEgIQAFgIAAgKQAAgKgFgIQgEgHgHgFQgHgEgKAAQgJAAgHAEg");
	this.shape_366.setTransform(-176.9,-113.9);

	this.shape_367 = new cjs.Shape();
	this.shape_367.graphics.f("#0099CC").s().p("ABCA2IAAg7QgBgMgGgHQgHgHgMAAQgIAAgHAFQgGAEgEAHQgDAIgBAIIAAA1IgWAAIAAg7QAAgMgGgHQgHgHgLAAQgKAAgGAFQgHAEgDAHQgFAIAAAIIAAA1IgWAAIAAhqIAWAAIAAAVQAHgLAJgFQAKgGAOABQAOAAAJAGQAIAHAFAMQAEgNALgGQAKgHAPABQASAAAKAKQAKALABAUIAABBg");
	this.shape_367.setTransform(-201.8,-111.9);

	this.shape_368 = new cjs.Shape();
	this.shape_368.graphics.f("#0099CC").s().p("AgnArQgKgLAAgTIAAhCIAXAAIAAA7QAAAMAHAHQAGAHAMAAQAIAAAGgFQAHgEADgHQAEgIAAgIIAAg1IAXAAIAABqIgXAAIAAgVQgFALgKAFQgKAFgMABQgTgBgKgKg");
	this.shape_368.setTransform(-219.1,-111.8);

	this.shape_369 = new cjs.Shape();
	this.shape_369.graphics.f("#0099CC").s().p("AgWAyQgLgDgIgIIAJgQQAEAEAGADIAMAFIAMABQAIAAAEgDQAFgCABgGQgBgHgGgDQgFgDgIgDIgQgFQgIgDgGgGQgFgGAAgLQAAgLAFgHQAFgHAKgDQAIgDAKAAQAKAAAKADQAJACAIAGIgJARQgGgFgJgCQgIgDgHAAQgGAAgFADQgEACAAAGQABAFAFAEQAGADAHACIARAGQAIADAGAGQAGAGAAALQAAALgGAHQgFAHgKAEQgJADgLAAQgLAAgMgEg");
	this.shape_369.setTransform(-230.3,-111.8);

	this.shape_370 = new cjs.Shape();
	this.shape_370.graphics.f("#0099CC").s().p("Ag2BJIAAiRIAWAAIAAATQAHgJAJgFQAJgFAMAAQAPAAAMAGQAKAIAHALQAGANAAAQQAAAQgGALQgGAMgLAHQgMAGgPABQgMAAgJgFQgJgFgHgKIAAA6gAgQgwQgHAEgEAHQgEAIgBAKQABAQAIAIQAJAKAOAAQAJAAAIgEQAHgFAEgHQAEgHABgLQgBgKgEgIQgEgHgHgEQgIgFgJAAQgJAAgHAFg");
	this.shape_370.setTransform(-241.1,-109.9);

	this.shape_371 = new cjs.Shape();
	this.shape_371.graphics.f("#0099CC").s().p("AgLBLIAAhpIAWAAIAABpgAgIgzQgFgEAAgFQAAgHAFgDQADgEAFAAQAGAAAEAEQADADAAAHQAAAFgDAEQgEAEgGAAQgFAAgDgEg");
	this.shape_371.setTransform(-251.3,-114);

	this.shape_372 = new cjs.Shape();
	this.shape_372.graphics.f("#0099CC").s().p("ABCA2IAAg7QAAgMgHgHQgGgHgMAAQgKAAgGAFQgGAEgEAHQgDAIAAAIIAAA1IgXAAIAAg7QAAgMgHgHQgGgHgMAAQgJAAgHAFQgGAEgEAHQgDAIAAAIIAAA1IgXAAIAAhqIAXAAIAAAVQAFgLAKgFQAKgGANABQAPAAAJAGQAJAHADAMQAGgNAKgGQAKgHAPABQASAAAKAKQALALAAAUIAABBg");
	this.shape_372.setTransform(-272.9,-111.9);

	this.shape_373 = new cjs.Shape();
	this.shape_373.graphics.f("#0099CC").s().p("AgZAvQgMgHgHgMQgHgMAAgQQAAgPAHgNQAHgLAMgIQAMgGAPAAQATAAALAHQAMAIAFAOQAEAOgBASIhPAAQACANAJAHQAJAHAMAAQAIAAAIgDQAIgDAGgGIAMANQgIAIgLAFQgLAFgOAAQgQgBgMgGgAAggHQgBgNgIgIQgIgHgNAAQgMAAgIAHQgIAIgCANIA8AAIAAAAg");
	this.shape_373.setTransform(-289.3,-111.8);

	this.shape_374 = new cjs.Shape();
	this.shape_374.graphics.f("#0099CC").s().p("AgdA2IAAhqIAXAAIAAAVQAGgLAIgFQAJgGANABIAAAVQgLAAgIAEQgIADgDAHQgFAHgBAJIAAA3g");
	this.shape_374.setTransform(-298.4,-111.8);

	this.shape_375 = new cjs.Shape();
	this.shape_375.graphics.f("#0099CC").s().p("AgcAvQgNgHgGgMQgIgMAAgQQAAgPAIgNQAGgLANgIQANgGAPAAQAQAAANAGQAMAIAIALQAGANAAAPQAAAQgGAMQgIAMgMAHQgNAGgQABQgPgBgNgGgAgQgdQgHAEgFAIQgDAHAAAKQAAAPAJAKQAIAJAOAAQAOAAAKgJQAJgKAAgPQAAgKgFgHQgEgIgHgEQgIgFgJAAQgJAAgHAFg");
	this.shape_375.setTransform(-309.3,-111.8);

	this.shape_376 = new cjs.Shape();
	this.shape_376.graphics.f("#0099CC").s().p("AgpBGIAAiLIAXAAIAAB2IA8AAIAAAVg");
	this.shape_376.setTransform(-320.2,-113.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_376},{t:this.shape_375},{t:this.shape_374},{t:this.shape_373},{t:this.shape_372},{t:this.shape_371},{t:this.shape_370},{t:this.shape_369},{t:this.shape_368},{t:this.shape_367},{t:this.shape_366},{t:this.shape_365},{t:this.shape_364},{t:this.shape_363},{t:this.shape_362},{t:this.shape_361},{t:this.shape_360},{t:this.shape_359},{t:this.shape_358},{t:this.shape_357},{t:this.shape_356},{t:this.shape_355},{t:this.shape_354},{t:this.shape_353},{t:this.shape_352},{t:this.shape_351},{t:this.shape_350},{t:this.shape_349},{t:this.shape_348},{t:this.shape_347},{t:this.shape_346},{t:this.shape_345},{t:this.shape_344},{t:this.shape_343},{t:this.shape_342},{t:this.shape_341},{t:this.shape_340},{t:this.shape_339},{t:this.shape_338},{t:this.shape_337},{t:this.shape_336},{t:this.shape_335},{t:this.shape_334},{t:this.shape_333},{t:this.shape_332},{t:this.shape_331},{t:this.shape_330},{t:this.shape_329},{t:this.shape_328},{t:this.shape_327},{t:this.shape_326},{t:this.shape_325},{t:this.shape_324},{t:this.shape_323},{t:this.shape_322},{t:this.shape_321},{t:this.shape_320},{t:this.shape_319},{t:this.shape_318},{t:this.shape_317},{t:this.shape_316},{t:this.shape_315},{t:this.shape_314},{t:this.shape_313},{t:this.shape_312},{t:this.shape_311},{t:this.shape_310},{t:this.shape_309},{t:this.shape_308},{t:this.shape_307},{t:this.shape_306},{t:this.shape_305},{t:this.shape_304},{t:this.shape_303},{t:this.shape_302},{t:this.shape_301},{t:this.shape_300},{t:this.shape_299},{t:this.shape_298},{t:this.shape_297},{t:this.shape_296},{t:this.shape_295},{t:this.shape_294},{t:this.shape_293},{t:this.shape_292},{t:this.shape_291},{t:this.shape_290},{t:this.shape_289},{t:this.shape_288},{t:this.shape_287},{t:this.shape_286},{t:this.shape_285},{t:this.shape_284},{t:this.shape_283},{t:this.shape_282},{t:this.shape_281},{t:this.shape_280},{t:this.shape_279},{t:this.shape_278},{t:this.shape_277},{t:this.shape_276},{t:this.shape_275},{t:this.shape_274},{t:this.shape_273},{t:this.shape_272},{t:this.shape_271},{t:this.shape_270},{t:this.shape_269},{t:this.shape_268},{t:this.shape_267},{t:this.shape_266},{t:this.shape_265},{t:this.shape_264},{t:this.shape_263},{t:this.shape_262},{t:this.shape_261},{t:this.shape_260},{t:this.shape_259},{t:this.shape_258},{t:this.shape_257},{t:this.shape_256},{t:this.shape_255},{t:this.shape_254},{t:this.shape_253},{t:this.shape_252},{t:this.shape_251},{t:this.shape_250},{t:this.shape_249},{t:this.shape_248},{t:this.shape_247},{t:this.shape_246},{t:this.shape_245},{t:this.shape_244},{t:this.shape_243},{t:this.shape_242},{t:this.shape_241},{t:this.shape_240},{t:this.shape_239},{t:this.shape_238},{t:this.shape_237},{t:this.shape_236},{t:this.shape_235},{t:this.shape_234},{t:this.shape_233},{t:this.shape_232},{t:this.shape_231},{t:this.shape_230},{t:this.shape_229},{t:this.shape_228},{t:this.shape_227},{t:this.shape_226},{t:this.shape_225},{t:this.shape_224},{t:this.shape_223},{t:this.shape_222},{t:this.shape_221},{t:this.shape_220},{t:this.shape_219},{t:this.shape_218},{t:this.shape_217},{t:this.shape_216},{t:this.shape_215},{t:this.shape_214},{t:this.shape_213},{t:this.shape_212},{t:this.shape_211},{t:this.shape_210},{t:this.shape_209},{t:this.shape_208},{t:this.shape_207},{t:this.shape_206},{t:this.shape_205},{t:this.shape_204},{t:this.shape_203},{t:this.shape_202},{t:this.shape_201},{t:this.shape_200},{t:this.shape_199},{t:this.shape_198},{t:this.shape_197},{t:this.shape_196},{t:this.shape_195},{t:this.shape_194},{t:this.shape_193},{t:this.shape_192},{t:this.shape_191},{t:this.shape_190},{t:this.shape_189},{t:this.shape_188},{t:this.shape_187},{t:this.shape_186},{t:this.shape_185},{t:this.shape_184},{t:this.shape_183},{t:this.shape_182},{t:this.shape_181},{t:this.shape_180},{t:this.shape_179},{t:this.shape_178},{t:this.shape_177},{t:this.shape_176},{t:this.shape_175},{t:this.shape_174},{t:this.shape_173},{t:this.shape_172},{t:this.shape_171},{t:this.shape_170},{t:this.shape_169},{t:this.shape_168},{t:this.shape_167},{t:this.shape_166},{t:this.shape_165},{t:this.shape_164},{t:this.shape_163},{t:this.shape_162},{t:this.shape_161},{t:this.shape_160},{t:this.shape_159},{t:this.shape_158},{t:this.shape_157},{t:this.shape_156},{t:this.shape_155},{t:this.shape_154},{t:this.shape_153},{t:this.shape_152},{t:this.shape_151},{t:this.shape_150},{t:this.shape_149},{t:this.shape_148},{t:this.shape_147},{t:this.shape_146},{t:this.shape_145},{t:this.shape_144},{t:this.shape_143},{t:this.shape_142},{t:this.shape_141},{t:this.shape_140},{t:this.shape_139},{t:this.shape_138},{t:this.shape_137},{t:this.shape_136},{t:this.shape_135},{t:this.shape_134},{t:this.shape_133},{t:this.shape_132},{t:this.shape_131},{t:this.shape_130},{t:this.shape_129},{t:this.shape_128},{t:this.shape_127},{t:this.shape_126},{t:this.shape_125},{t:this.shape_124},{t:this.shape_123},{t:this.shape_122},{t:this.shape_121},{t:this.shape_120},{t:this.shape_119},{t:this.shape_118},{t:this.shape_117},{t:this.shape_116},{t:this.shape_115},{t:this.shape_114},{t:this.shape_113},{t:this.shape_112},{t:this.shape_111},{t:this.shape_110},{t:this.shape_109},{t:this.shape_108},{t:this.shape_107},{t:this.shape_106},{t:this.shape_105},{t:this.shape_104},{t:this.shape_103},{t:this.shape_102},{t:this.shape_101},{t:this.shape_100},{t:this.shape_99},{t:this.shape_98},{t:this.shape_97},{t:this.shape_96},{t:this.shape_95},{t:this.shape_94},{t:this.shape_93},{t:this.shape_92},{t:this.shape_91},{t:this.shape_90},{t:this.shape_89},{t:this.shape_88},{t:this.shape_87},{t:this.shape_86},{t:this.shape_85},{t:this.shape_84},{t:this.shape_83},{t:this.shape_82},{t:this.shape_81},{t:this.shape_80},{t:this.shape_79},{t:this.shape_78},{t:this.shape_77},{t:this.shape_76},{t:this.shape_75},{t:this.shape_74},{t:this.shape_73},{t:this.shape_72},{t:this.shape_71},{t:this.shape_70},{t:this.shape_69},{t:this.shape_68},{t:this.shape_67},{t:this.shape_66},{t:this.shape_65},{t:this.shape_64},{t:this.shape_63},{t:this.shape_62},{t:this.shape_61},{t:this.shape_60},{t:this.shape_59},{t:this.shape_58},{t:this.shape_57},{t:this.shape_56},{t:this.shape_55},{t:this.shape_54},{t:this.shape_53},{t:this.shape_52},{t:this.shape_51},{t:this.shape_50},{t:this.shape_49},{t:this.shape_48},{t:this.shape_47},{t:this.shape_46},{t:this.shape_45},{t:this.shape_44},{t:this.shape_43},{t:this.shape_42},{t:this.shape_41},{t:this.shape_40},{t:this.shape_39},{t:this.shape_38},{t:this.shape_37},{t:this.shape_36},{t:this.shape_35},{t:this.shape_34},{t:this.shape_33},{t:this.shape_32},{t:this.shape_31},{t:this.shape_30},{t:this.shape_29},{t:this.shape_28},{t:this.shape_27},{t:this.shape_26},{t:this.shape_25},{t:this.shape_24},{t:this.shape_23},{t:this.shape_22},{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-328.3,-132.6,656.6,265.2);


(lib.Tween14 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#0099CC").s().p("AgIAJQgDgDgBgGQABgFADgEQAEgDAEAAQAFAAAEADQAEAEAAAFQAAAGgEADQgEAEgFAAQgEAAgEgEg");
	this.shape.setTransform(-238.7,122.7);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#0099CC").s().p("ABCA2IAAg7QgBgMgGgHQgGgHgNAAQgIAAgHAFQgHAEgDAHQgDAIgBAIIAAA1IgVAAIAAg7QgBgMgGgHQgHgHgLAAQgKAAgHAFQgGAEgEAHQgDAIAAAIIAAA1IgXAAIAAhqIAXAAIAAAVQAFgLAKgFQAKgGAOABQANAAAKAGQAJAHADAMQAFgNALgGQAKgHAPABQASAAALAKQAJALABAUIAABBg");
	this.shape_1.setTransform(-251.1,118.4);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#0099CC").s().p("AgnArQgJgLgBgTIAAhCIAXAAIAAA7QAAAMAHAHQAGAHAMAAQAIAAAGgFQAHgEADgHQAEgIAAgIIAAg1IAXAAIAABqIgXAAIAAgVQgGALgJAFQgKAFgMABQgSgBgLgKg");
	this.shape_2.setTransform(-268.4,118.5);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#0099CC").s().p("AgdA2IAAhqIAXAAIAAAVQAGgLAIgFQAJgGANABIAAAVQgLAAgIADQgHAEgFAHQgEAHgBAJIAAA3g");
	this.shape_3.setTransform(-278,118.5);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#0099CC").s().p("AgcAvQgNgHgGgMQgIgMABgQQgBgPAIgMQAGgNANgGQAMgHAQAAQARAAAMAHQANAGAGANQAIAMgBAPQABAQgIAMQgGAMgNAHQgMAGgRABQgQgBgMgGgAgQgdQgHAEgEAIQgFAHAAAKQABAQAIAJQAJAKAOgBQAPABAJgKQAIgJABgQQgBgKgEgHQgEgIgHgEQgHgFgKAAQgIAAgIAFg");
	this.shape_4.setTransform(-288.9,118.5);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#0099CC").s().p("AgQBGQgJgFgHgKIAAATIgWAAIAAiUIAWAAIAAA9QAHgKAJgEQAJgFAMAAQAPAAAMAGQAKAHAHAMQAGAMAAAQQAAAQgGAMQgGAMgLAHQgMAGgPABQgMgBgJgEgAgQgJQgHAFgEAGQgEAIgBAKQABAQAIAJQAKAKANAAQAJAAAIgFQAHgEAEgIQAEgIABgKQgBgKgEgIQgEgGgHgFQgIgEgJAAQgJAAgHAEg");
	this.shape_5.setTransform(-301.4,116.4);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#0099CC").s().p("AgdAyQgIgFgFgHQgEgIgBgJQABgOAKgIQAKgJAUAAIAfAAIAAgDQAAgKgHgGQgGgFgMgBQgHABgIACQgIACgIAGIgJgQIAOgHIAOgFQAHgBAKAAQAUAAALAJQALAKAAASIABBFIgXAAIAAgNQgGAHgJAEQgJADgKAAQgMAAgIgEgAgUAJQgFADAAAIQAAAHAGAFQAFAEAKAAQALgBAJgFQAIgFABgJIAAgKIgcAAIgDAAQgJAAgFADg");
	this.shape_6.setTransform(-314.9,118.5);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#0099CC").s().p("AgLBKIAAiTIAWAAIAACTg");
	this.shape_7.setTransform(-323.3,116.4);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#0099CC").s().p("AgEA/QgHgDgEgHQgEgHAAgLIAAg2IgQAAIAAgRIAQAAIAAgdIAVAAIAAAdIAgAAIAAARIggAAIAAAyQABAIADADQADAEAFgBIAIgBIAIgDIAFARQgFAEgHACQgHACgHAAQgHAAgGgDg");
	this.shape_8.setTransform(321.9,84.4);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#0099CC").s().p("AgWAyQgLgDgIgIIAJgQQAEAEAGADIANAFIALABQAIAAAEgDQAFgCABgGQgBgHgGgDQgFgDgIgDIgQgFQgIgDgGgGQgFgGAAgLQAAgLAFgHQAFgHAKgDQAJgDAJAAQAKAAAKADQAJACAIAGIgJARQgGgFgIgCQgJgDgHAAQgGAAgEADQgFACAAAGQABAFAFAEQAGADAHACIARAGQAIADAGAGQAGAGAAALQAAALgGAHQgGAHgJAEQgJADgLAAQgLAAgMgEg");
	this.shape_9.setTransform(313,85.6);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#0099CC").s().p("AgZAvQgMgHgHgMQgHgMAAgQQAAgPAHgNQAHgLAMgIQAMgGAPAAQATAAALAHQAMAIAFAOQAEAOgBATIhPAAQACAMAJAHQAJAHAMAAQAIAAAIgDQAIgDAGgGIAMANQgIAIgLAFQgLAEgOABQgQAAgMgHgAAggHQgBgNgIgIQgIgHgNAAQgMAAgIAHQgIAIgCANIA8AAIAAAAg");
	this.shape_10.setTransform(302.5,85.6);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#0099CC").s().p("AgfBEQgLgHgGgMQgHgNAAgQQAAgQAHgLQAGgMALgHQAMgHAPAAQAMAAAJAFQAKAFAGAKIAAg9IAXAAIAACUIgXAAIAAgTQgGAKgJAFQgKAFgMAAQgPAAgMgHgAgQgJQgHAFgEAHQgFAIAAAKQAAAKAFAIQAEAIAHAEQAHAEAJAAQAKAAAHgEQAHgEAEgIQAFgIAAgKQAAgKgFgIQgEgHgHgFQgHgEgKAAQgJAAgHAEg");
	this.shape_11.setTransform(279,83.5);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#0099CC").s().p("AgLBLIAAhpIAWAAIAABpgAgJgzQgDgEAAgFQAAgHADgDQAEgEAFAAQAGAAADAEQAEADABAHQgBAFgEAEQgDAEgGAAQgFAAgEgEg");
	this.shape_12.setTransform(269.9,83.4);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#0099CC").s().p("ABCA2IAAg7QgBgMgGgHQgGgHgNAAQgIAAgHAFQgGAEgEAHQgDAIgBAIIAAA1IgVAAIAAg7QgBgMgGgHQgHgHgLAAQgKAAgHAFQgGAEgDAHQgEAIAAAIIAAA1IgXAAIAAhqIAXAAIAAAVQAFgLAKgFQAKgGAOABQANAAAKAGQAJAHADAMQAFgNALgGQAKgHAPABQASAAALAKQAJALABAUIAABBg");
	this.shape_13.setTransform(246.6,85.5);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#0099CC").s().p("AgLBLIAAhpIAWAAIAABpgAgJgzQgEgEABgFQgBgHAEgDQAEgEAFAAQAGAAAEAEQADADAAAHQAAAFgDAEQgEAEgGAAQgFAAgEgEg");
	this.shape_14.setTransform(233.1,83.4);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#0099CC").s().p("AAcA2IAAg7QgBgMgGgHQgGgHgNAAQgMAAgIAJQgHAHgCANIAAA4IgXAAIAAhqIAXAAIAAAVQAGgLAKgFQAKgGAMABQATAAALAKQAJALABAUIAABBg");
	this.shape_15.setTransform(223.8,85.5);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#0099CC").s().p("AgdAxQgIgDgFgIQgEgHgBgKQABgOAKgIQAKgJAUAAIAfAAIAAgDQAAgLgHgFQgGgGgMABQgHAAgIACQgIADgIAFIgJgQIAOgIIAOgDQAHgCAKAAQAUAAALAKQALAJAAASIABBFIgXAAIAAgNQgGAHgJADQgJAEgKAAQgMAAgIgFgAgUAJQgFADAAAIQAAAIAGADQAFAEAKABQALAAAJgGQAIgFABgKIAAgJIgcAAIgDAAQgJAAgFADg");
	this.shape_16.setTransform(210.9,85.6);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#0099CC").s().p("AgFA/QgGgDgEgHQgEgHAAgLIAAg2IgPAAIAAgRIAPAAIAAgdIAVAAIAAAdIAgAAIAAARIggAAIAAAyQAAAIADADQADAEAGgBIAHgBIAJgDIAGARQgHAEgGACQgHACgGAAQgJAAgGgDg");
	this.shape_17.setTransform(191.1,84.4);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#0099CC").s().p("AgKBLIAAhpIAVAAIAABpgAgJgzQgDgEAAgFQAAgHADgDQAEgEAFAAQAGAAADAEQAEADABAHQgBAFgEAEQgDAEgGAAQgFAAgEgEg");
	this.shape_18.setTransform(184.1,83.4);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#0099CC").s().p("AgKBKIAAiTIAVAAIAACTg");
	this.shape_19.setTransform(178.4,83.5);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#0099CC").s().p("AgKBKIAAiTIAVAAIAACTg");
	this.shape_20.setTransform(172.5,83.5);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#0099CC").s().p("AgcAvQgNgHgGgMQgIgMABgQQgBgQAIgMQAGgLANgIQAMgGAQAAQARAAAMAGQANAIAGALQAIAMgBAQQABAQgIAMQgGAMgNAHQgMAHgRAAQgQAAgMgHgAgQgdQgHAEgEAIQgFAIAAAJQABAPAIAKQAJAKAOgBQAPABAJgKQAIgKABgPQgBgJgEgIQgEgIgHgEQgHgFgKABQgIgBgIAFg");
	this.shape_21.setTransform(163.3,85.6);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("#0099CC").s().p("ABCA2IAAg7QgBgMgGgHQgHgHgMAAQgJAAgGAFQgHAEgDAHQgDAIAAAIIAAA1IgXAAIAAg7QAAgMgGgHQgHgHgLAAQgKAAgGAFQgHAEgDAHQgFAIAAAIIAAA1IgWAAIAAhqIAWAAIAAAVQAHgLAJgFQAKgGAOABQAOAAAJAGQAIAHAFAMQAEgNALgGQAKgHAPABQASAAAKAKQALALAAAUIAABBg");
	this.shape_22.setTransform(146.8,85.5);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f("#0099CC").s().p("AgEA/QgHgDgEgHQgEgHgBgLIAAg2IgOAAIAAgRIAOAAIAAgdIAXAAIAAAdIAfAAIAAARIgfAAIAAAyQAAAIACADQADAEAGgBIAIgBIAIgDIAFARQgGAEgGACQgHACgGAAQgJAAgFgDg");
	this.shape_23.setTransform(122,84.4);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f("#0099CC").s().p("AAcA2IAAg7QgBgMgGgHQgHgHgMAAQgMAAgIAJQgHAHgCANIAAA4IgXAAIAAhqIAXAAIAAAVQAGgLAKgFQAKgGAMABQATAAAKAKQALALAAAUIAABBg");
	this.shape_24.setTransform(111.4,85.5);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f("#0099CC").s().p("AgnArQgJgLgBgTIAAhCIAXAAIAAA7QAAAMAHAHQAGAHAMAAQAIAAAGgFQAHgEADgHQAEgIAAgIIAAg1IAXAAIAABqIgXAAIAAgVQgGALgJAFQgKAFgMABQgSgBgLgKg");
	this.shape_25.setTransform(97.9,85.6);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f("#0099CC").s().p("AgdA2IAAhqIAXAAIAAAVQAGgKAIgGQAJgFANgBIAAAWQgLAAgIAEQgHADgFAHQgEAHgBAJIAAA3g");
	this.shape_26.setTransform(88.3,85.6);

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.f("#0099CC").s().p("AgZAvQgMgHgHgMQgHgMAAgQQAAgPAHgNQAHgLAMgIQAMgGAPAAQATAAALAHQAMAIAFAOQAEAOgBATIhPAAQACAMAJAHQAJAHAMAAQAIAAAIgDQAIgDAGgGIAMANQgIAIgLAFQgLAEgOABQgQAAgMgHgAAggHQgBgNgIgIQgIgHgNAAQgMAAgIAHQgIAIgCANIA8AAIAAAAg");
	this.shape_27.setTransform(77.8,85.6);

	this.shape_28 = new cjs.Shape();
	this.shape_28.graphics.f("#0099CC").s().p("AgVAyQgLgDgJgIIAIgQQAFAEAGADIANAFIALABQAHAAAGgDQAEgCAAgGQAAgHgFgDQgGgDgIgDIgQgFQgIgDgFgGQgGgGAAgLQAAgLAFgHQAGgHAIgDQAKgDAJAAQAKAAAKADQAJACAIAGIgIARQgIgFgHgCQgJgDgHAAQgGAAgEADQgEACgBAGQAAAFAGAEQAGADAIACIAQAGQAJADAFAGQAFAGABALQgBALgFAHQgFAHgKAEQgJADgLAAQgLAAgLgEg");
	this.shape_28.setTransform(67.1,85.6);

	this.shape_29 = new cjs.Shape();
	this.shape_29.graphics.f("#0099CC").s().p("AgZAvQgMgHgHgMQgHgMAAgQQAAgPAHgNQAHgLAMgIQAMgGAPAAQATAAALAHQAMAIAFAOQAEAOgBATIhPAAQACAMAJAHQAJAHAMAAQAIAAAIgDQAIgDAGgGIAMANQgIAIgLAFQgLAEgOABQgQAAgMgHgAAggHQgBgNgIgIQgIgHgNAAQgMAAgIAHQgIAIgCANIA8AAIAAAAg");
	this.shape_29.setTransform(56.7,85.6);

	this.shape_30 = new cjs.Shape();
	this.shape_30.graphics.f("#0099CC").s().p("AgfBEQgLgHgGgMQgHgNAAgQQAAgQAHgLQAGgMALgHQAMgHAPAAQAMAAAJAFQAKAFAGAKIAAg9IAXAAIAACUIgXAAIAAgTQgGAKgJAFQgKAFgMAAQgPAAgMgHgAgQgJQgHAFgEAHQgFAIAAAKQAAAKAFAIQAEAIAHAEQAHAEAJAAQAKAAAHgEQAHgEAEgIQAFgIAAgKQAAgKgFgIQgEgHgHgFQgHgEgKAAQgJAAgHAEg");
	this.shape_30.setTransform(43.4,83.5);

	this.shape_31 = new cjs.Shape();
	this.shape_31.graphics.f("#0099CC").s().p("AgdAxQgIgDgFgIQgEgHgBgKQABgOAKgIQAKgJAUAAIAfAAIAAgDQAAgLgHgFQgGgGgMABQgHAAgIACQgIADgIAFIgJgQIAOgIIAOgDQAHgCAKAAQAUAAALAKQALAJAAASIABBFIgXAAIAAgNQgGAHgJADQgJAEgKAAQgMAAgIgFgAgUAJQgFADAAAIQAAAIAGADQAFAEAKABQALAAAJgGQAIgFABgKIAAgJIgcAAIgDAAQgJAAgFADg");
	this.shape_31.setTransform(20.8,85.6);

	this.shape_32 = new cjs.Shape();
	this.shape_32.graphics.f("#0099CC").s().p("AgLBLIAAhpIAWAAIAABpgAgJgzQgDgEAAgFQAAgHADgDQAEgEAFAAQAGAAADAEQAEADABAHQgBAFgEAEQgDAEgGAAQgFAAgEgEg");
	this.shape_32.setTransform(12.4,83.4);

	this.shape_33 = new cjs.Shape();
	this.shape_33.graphics.f("#0099CC").s().p("AgXAvQgMgHgHgMQgGgMgBgQQABgPAGgNQAHgLAMgIQAMgGAPAAQAOAAALAEQALAFAIAIIgMAPQgGgGgIgDQgHgDgKAAQgJAAgGAEQgHAFgFAHQgDAIAAAJQAAAKADAIQAFAIAHAEQAGAEAJAAQAKAAAIgDQAIgDAGgHIAMANQgHAKgMAEQgLAFgPABQgPAAgMgHg");
	this.shape_33.setTransform(3.9,85.6);

	this.shape_34 = new cjs.Shape();
	this.shape_34.graphics.f("#0099CC").s().p("AgLBLIAAhpIAWAAIAABpgAgJgzQgDgEAAgFQAAgHADgDQAEgEAFAAQAGAAADAEQAEADABAHQgBAFgEAEQgDAEgGAAQgFAAgEgEg");
	this.shape_34.setTransform(-4.6,83.4);

	this.shape_35 = new cjs.Shape();
	this.shape_35.graphics.f("#0099CC").s().p("AgWBLIAAhVIgOAAIAAgRIAOAAIAAgKQAAgMAFgJQAFgIAJgEQAHgEAJAAQAHAAAGACQAGACAFAEIgJARQgDgCgEgBIgHgCQgGAAgEAEQgEADAAAIIAAAMIAbAAIAAARIgbAAIAABVg");
	this.shape_35.setTransform(-9.8,83.4);

	this.shape_36 = new cjs.Shape();
	this.shape_36.graphics.f("#0099CC").s().p("AgWBLIAAhVIgOAAIAAgRIAOAAIAAgKQAAgMAFgJQAFgIAJgEQAHgEAJAAQAHAAAGACQAGACAFAEIgJARQgDgCgEgBIgHgCQgGAAgEAEQgEADAAAIIAAAMIAbAAIAAARIgbAAIAABVg");
	this.shape_36.setTransform(-16.7,83.4);

	this.shape_37 = new cjs.Shape();
	this.shape_37.graphics.f("#0099CC").s().p("AgcAvQgNgHgGgMQgIgMABgQQgBgQAIgMQAGgLANgIQAMgGAQAAQARAAAMAGQANAIAGALQAIAMgBAQQABAQgIAMQgGAMgNAHQgMAHgRAAQgQAAgMgHgAgQgdQgHAEgEAIQgEAIgBAJQABAPAIAKQAJAKAOgBQAPABAJgKQAIgKABgPQAAgJgFgIQgEgIgHgEQgIgFgJABQgJgBgHAFg");
	this.shape_37.setTransform(-27.4,85.6);

	this.shape_38 = new cjs.Shape();
	this.shape_38.graphics.f("#0099CC").s().p("AgKBLIAAhpIAVAAIAABpgAgJgzQgDgEAAgFQAAgHADgDQAEgEAFAAQAGAAADAEQAEADABAHQgBAFgEAEQgDAEgGAAQgFAAgEgEg");
	this.shape_38.setTransform(-46.7,83.4);

	this.shape_39 = new cjs.Shape();
	this.shape_39.graphics.f("#0099CC").s().p("AgmArQgKgLgBgTIAAhCIAXAAIAAA7QAAAMAHAHQAHAHALAAQAIAAAGgFQAHgEAEgHQADgIAAgIIAAg1IAXAAIAABqIgXAAIAAgVQgGALgJAFQgKAFgMABQgTgBgJgKg");
	this.shape_39.setTransform(-56.3,85.6);

	this.shape_40 = new cjs.Shape();
	this.shape_40.graphics.f("#0099CC").s().p("AAhBJIAAg5QgGAJgJAFQgKAFgMAAQgPAAgMgHQgLgHgGgMQgHgLAAgQQAAgQAHgMQAGgNALgGQAMgHAPAAQAMAAAJAFQAKAFAGAJIAAgSIAXAAIAACQgAgQgwQgHAEgEAIQgFAIAAAKQAAALAFAHQAEAHAHAEQAHAFAJAAQAKAAAHgFQAHgEAEgHQAFgHAAgLQAAgKgFgIQgEgIgHgEQgHgEgKgBQgJABgHAEg");
	this.shape_40.setTransform(-70,87.5);

	this.shape_41 = new cjs.Shape();
	this.shape_41.graphics.f("#0099CC").s().p("AgdAxQgIgDgFgIQgEgHgBgKQABgOAKgIQAKgJAUAAIAfAAIAAgDQAAgLgHgFQgGgGgMABQgHAAgIACQgIADgIAFIgJgQIAOgIIAOgDQAHgCAKAAQAUAAALAKQALAJAAASIABBFIgXAAIAAgNQgGAHgJADQgJAEgKAAQgMAAgIgFgAgUAJQgFADAAAIQAAAIAGADQAFAEAKABQALAAAJgGQAIgFABgKIAAgJIgcAAIgDAAQgJAAgFADg");
	this.shape_41.setTransform(-92.6,85.6);

	this.shape_42 = new cjs.Shape();
	this.shape_42.graphics.f("#0099CC").s().p("Ag2BJIAAiQIAWAAIAAASQAHgJAJgFQAJgFALAAQAQAAALAGQALAIAHALQAGANAAAQQAAAQgGALQgGAMgMAHQgKAHgQAAQgMgBgJgEQgJgFgHgKIAAA6gAgQgxQgHAFgEAIQgFAHAAALQABAPAIAIQAJAKAOAAQAJAAAIgEQAHgEAEgHQAEgJABgJQgBgLgEgHQgEgIgHgFQgIgEgJAAQgIAAgIAEg");
	this.shape_42.setTransform(-104.4,87.5);

	this.shape_43 = new cjs.Shape();
	this.shape_43.graphics.f("#0099CC").s().p("AgKBKIAAiTIAVAAIAACTg");
	this.shape_43.setTransform(-114.7,83.5);

	this.shape_44 = new cjs.Shape();
	this.shape_44.graphics.f("#0099CC").s().p("AgnArQgJgLgBgTIAAhCIAXAAIAAA7QAAAMAHAHQAHAHALAAQAIAAAGgFQAHgEADgHQAEgIAAgIIAAg1IAXAAIAABqIgXAAIAAgVQgGALgJAFQgKAFgMABQgSgBgLgKg");
	this.shape_44.setTransform(-124.3,85.6);

	this.shape_45 = new cjs.Shape();
	this.shape_45.graphics.f("#0099CC").s().p("AgXAvQgMgHgGgMQgIgMAAgQQAAgPAIgNQAGgLAMgIQAMgGAPAAQAPAAALAEQALAFAHAIIgNAPQgFgGgIgDQgIgDgJAAQgIAAgIAEQgGAFgFAHQgDAIAAAJQAAAKADAIQAFAIAGAEQAIAEAIAAQAKAAAIgDQAIgDAGgHIAMANQgHAKgLAEQgLAFgQABQgPAAgMgHg");
	this.shape_45.setTransform(-136.3,85.6);

	this.shape_46 = new cjs.Shape();
	this.shape_46.graphics.f("#0099CC").s().p("AAcA2IAAg7QgBgMgGgHQgGgHgNAAQgMAAgIAJQgHAHgCANIAAA4IgXAAIAAhqIAXAAIAAAVQAGgLAKgFQAKgGAMABQATAAALAKQAJALABAUIAABBg");
	this.shape_46.setTransform(-158.7,85.5);

	this.shape_47 = new cjs.Shape();
	this.shape_47.graphics.f("#0099CC").s().p("AgKBLIAAhpIAVAAIAABpgAgIgzQgEgEgBgFQABgHAEgDQADgEAFAAQAGAAADAEQAEADAAAHQAAAFgEAEQgDAEgGAAQgFAAgDgEg");
	this.shape_47.setTransform(-168.3,83.4);

	this.shape_48 = new cjs.Shape();
	this.shape_48.graphics.f("#0099CC").s().p("AgFA/QgGgDgEgHQgEgHAAgLIAAg2IgQAAIAAgRIAQAAIAAgdIAVAAIAAAdIAgAAIAAARIggAAIAAAyQAAAIAEADQADAEAFgBIAHgBIAJgDIAGARQgHAEgGACQgHACgHAAQgIAAgGgDg");
	this.shape_48.setTransform(-185.4,84.4);

	this.shape_49 = new cjs.Shape();
	this.shape_49.graphics.f("#0099CC").s().p("AAcA2IAAg7QgBgMgGgHQgGgHgNAAQgMAAgIAJQgHAHgCANIAAA4IgXAAIAAhqIAXAAIAAAVQAGgLAKgFQAKgGAMABQATAAALAKQAJALABAUIAABBg");
	this.shape_49.setTransform(-196,85.5);

	this.shape_50 = new cjs.Shape();
	this.shape_50.graphics.f("#0099CC").s().p("AgmArQgLgLAAgTIAAhCIAXAAIAAA7QAAAMAHAHQAHAHALAAQAIAAAHgFQAGgEAEgHQADgIAAgIIAAg1IAXAAIAABqIgXAAIAAgVQgGALgJAFQgKAFgMABQgSgBgKgKg");
	this.shape_50.setTransform(-209.5,85.6);

	this.shape_51 = new cjs.Shape();
	this.shape_51.graphics.f("#0099CC").s().p("AgVAyQgLgDgJgIIAJgQQAEAEAGADIAMAFIAMABQAIAAAFgDQAEgCAAgGQAAgHgFgDQgGgDgIgDIgQgFQgIgDgFgGQgGgGgBgLQABgLAFgHQAGgHAIgDQAJgDAKAAQAKAAAKADQAKACAHAGIgIARQgIgFgIgCQgIgDgHAAQgGAAgFADQgDACAAAGQgBAFAGAEQAGADAIACIAQAGQAIADAGAGQAFAGABALQgBALgFAHQgGAHgJAEQgJADgLAAQgLAAgLgEg");
	this.shape_51.setTransform(-220.7,85.6);

	this.shape_52 = new cjs.Shape();
	this.shape_52.graphics.f("#0099CC").s().p("AgMAUIAHgRIgEgEIgBgGQAAgFADgEQAEgDAEAAQAGAAADADQADADABAGIgBAGIgDAEIgLARg");
	this.shape_52.setTransform(-237.8,90.5);

	this.shape_53 = new cjs.Shape();
	this.shape_53.graphics.f("#0099CC").s().p("AgFA/QgGgDgEgHQgEgHAAgLIAAg2IgQAAIAAgRIAQAAIAAgdIAVAAIAAAdIAgAAIAAARIggAAIAAAyQAAAIAEADQADAEAFgBIAHgBIAJgDIAFARQgFAEgHACQgHACgHAAQgHAAgHgDg");
	this.shape_53.setTransform(-243.8,84.4);

	this.shape_54 = new cjs.Shape();
	this.shape_54.graphics.f("#0099CC").s().p("AAcA2IAAg7QAAgMgHgHQgGgHgNAAQgMAAgIAJQgIAHgBANIAAA4IgXAAIAAhqIAXAAIAAAVQAGgLAKgFQAJgGANABQATAAALAKQAKALAAAUIAABBg");
	this.shape_54.setTransform(-254.4,85.5);

	this.shape_55 = new cjs.Shape();
	this.shape_55.graphics.f("#0099CC").s().p("AgZAvQgMgHgHgMQgHgMAAgQQAAgPAHgNQAHgLAMgIQAMgGAPAAQATAAALAHQAMAIAFAOQAEAOgBATIhPAAQACAMAJAHQAJAHAMAAQAIAAAIgDQAIgDAGgGIAMANQgIAIgLAFQgLAEgOABQgQAAgMgHgAAggHQgBgNgIgIQgIgHgNAAQgMAAgIAHQgIAIgCANIA8AAIAAAAg");
	this.shape_55.setTransform(-267.1,85.6);

	this.shape_56 = new cjs.Shape();
	this.shape_56.graphics.f("#0099CC").s().p("AgfBEQgLgHgGgMQgHgNAAgQQAAgQAHgLQAGgMALgHQAMgHAPAAQAMAAAJAFQAKAFAGAKIAAg9IAXAAIAACUIgXAAIAAgTQgGAKgJAFQgKAFgMAAQgPAAgMgHgAgQgJQgHAFgEAHQgFAIAAAKQAAAKAFAIQAEAIAHAEQAHAEAJAAQAKAAAHgEQAHgEAEgIQAFgIAAgKQAAgKgFgIQgEgHgHgFQgHgEgKAAQgJAAgHAEg");
	this.shape_56.setTransform(-280.3,83.5);

	this.shape_57 = new cjs.Shape();
	this.shape_57.graphics.f("#0099CC").s().p("AgLBLIAAhpIAWAAIAABpgAgJgzQgDgEAAgFQAAgHADgDQAEgEAFAAQAGAAADAEQAEADABAHQgBAFgEAEQgDAEgGAAQgFAAgEgEg");
	this.shape_57.setTransform(-289.4,83.4);

	this.shape_58 = new cjs.Shape();
	this.shape_58.graphics.f("#0099CC").s().p("AgcAvQgNgHgGgMQgIgMAAgQQAAgQAIgMQAGgLANgIQAMgGAQAAQAQAAANAGQAMAIAIALQAGAMAAAQQAAAQgGAMQgIAMgMAHQgNAHgQAAQgQAAgMgHgAgQgdQgHAEgFAIQgDAIAAAJQAAAPAJAKQAIAKAOgBQAOABAKgKQAJgKAAgPQAAgJgFgIQgEgIgHgEQgHgFgKABQgJgBgHAFg");
	this.shape_58.setTransform(-298.5,85.6);

	this.shape_59 = new cjs.Shape();
	this.shape_59.graphics.f("#0099CC").s().p("AgdA2IAAhqIAXAAIAAAVQAFgKAJgGQAJgFANgBIAAAWQgLAAgIAEQgHADgFAHQgEAHgBAJIAAA3g");
	this.shape_59.setTransform(-308,85.6);

	this.shape_60 = new cjs.Shape();
	this.shape_60.graphics.f("#0099CC").s().p("Ag3BJIAAiQIAXAAIAAASQAHgJAJgFQAJgFALAAQAQAAALAGQALAIAHALQAGANABAQQgBAQgGALQgGAMgMAHQgLAHgPAAQgLgBgKgEQgJgFgHgKIAAA6gAgQgxQgHAFgFAIQgEAHAAALQAAAPAJAIQAKAKANAAQAKAAAGgEQAIgEAEgHQAEgJAAgJQAAgLgEgHQgEgIgIgFQgGgEgKAAQgJAAgHAEg");
	this.shape_60.setTransform(-318.9,87.5);

	this.shape_61 = new cjs.Shape();
	this.shape_61.graphics.f("#0099CC").s().p("AAcA2IAAg7QgBgMgGgHQgHgHgMAAQgMAAgIAJQgHAHgCANIAAA4IgXAAIAAhqIAXAAIAAAVQAGgLAKgFQAKgGAMABQATAAALAKQAJALABAUIAABBg");
	this.shape_61.setTransform(319.6,52.6);

	this.shape_62 = new cjs.Shape();
	this.shape_62.graphics.f("#0099CC").s().p("AgcAvQgNgHgGgMQgIgMABgQQgBgPAIgMQAGgNANgGQAMgHAQAAQARAAAMAHQANAGAGANQAIAMgBAPQABAQgIAMQgGAMgNAHQgMAHgRAAQgQAAgMgHgAgQgdQgHAEgEAIQgEAHgBAKQABAQAIAJQAJAKAOAAQAPAAAJgKQAIgJABgQQAAgKgFgHQgEgIgHgEQgIgEgJgBQgJABgHAEg");
	this.shape_62.setTransform(306.5,52.7);

	this.shape_63 = new cjs.Shape();
	this.shape_63.graphics.f("#0099CC").s().p("AAcA2IAAg7QgBgMgGgHQgHgHgMAAQgMAAgIAJQgIAHgBANIAAA4IgXAAIAAhqIAXAAIAAAVQAGgLAKgFQAKgGAMABQATAAAKAKQAKALABAUIAABBg");
	this.shape_63.setTransform(293.8,52.6);

	this.shape_64 = new cjs.Shape();
	this.shape_64.graphics.f("#0099CC").s().p("AgFA/QgGgDgEgHQgEgHAAgLIAAg2IgQAAIAAgRIAQAAIAAgdIAVAAIAAAdIAgAAIAAARIggAAIAAAyQAAAIAEADQADAEAFgBIAHgBIAJgDIAFARQgFAEgHACQgHACgHAAQgHAAgHgDg");
	this.shape_64.setTransform(269.2,51.5);

	this.shape_65 = new cjs.Shape();
	this.shape_65.graphics.f("#0099CC").s().p("AgdAyQgIgFgFgHQgEgHgBgKQABgOAKgIQAKgIAUgBIAfAAIAAgDQAAgKgHgGQgGgFgMgBQgHABgIACQgIACgIAGIgJgQIAOgHIAOgFQAHgBAKAAQAUAAALAJQALAKAAASIABBFIgXAAIAAgNQgGAHgJAEQgJADgKAAQgMAAgIgEgAgUAJQgFADAAAIQAAAHAGAFQAFAEAKAAQALgBAJgFQAIgGABgIIAAgKIgcAAIgDAAQgJAAgFADg");
	this.shape_65.setTransform(258.9,52.7);

	this.shape_66 = new cjs.Shape();
	this.shape_66.graphics.f("#0099CC").s().p("AgFA/QgGgDgEgHQgEgHAAgLIAAg2IgQAAIAAgRIAQAAIAAgdIAVAAIAAAdIAgAAIAAARIggAAIAAAyQAAAIAEADQADAEAFgBIAHgBIAJgDIAFARQgFAEgHACQgHACgHAAQgHAAgHgDg");
	this.shape_66.setTransform(249.4,51.5);

	this.shape_67 = new cjs.Shape();
	this.shape_67.graphics.f("#0099CC").s().p("AgdAyQgIgFgFgHQgEgHgBgKQABgOAKgIQAKgIAUgBIAfAAIAAgDQAAgKgHgGQgGgFgMgBQgHABgIACQgIACgIAGIgJgQIAOgHIAOgFQAHgBAKAAQAUAAALAJQALAKAAASIABBFIgXAAIAAgNQgGAHgJAEQgJADgKAAQgMAAgIgEgAgUAJQgFADAAAIQAAAHAGAFQAFAEAKAAQALgBAJgFQAIgGABgIIAAgKIgcAAIgDAAQgJAAgFADg");
	this.shape_67.setTransform(239.1,52.7);

	this.shape_68 = new cjs.Shape();
	this.shape_68.graphics.f("#0099CC").s().p("AgfBEQgLgHgGgMQgHgNAAgQQAAgQAHgLQAGgMALgHQAMgHAPAAQAMAAAJAFQAKAFAGAKIAAg9IAXAAIAACUIgXAAIAAgTQgGAKgJAFQgKAFgMAAQgPAAgMgHgAgQgJQgHAFgEAHQgFAIAAAKQAAAKAFAIQAEAIAHAEQAHAEAJAAQAKAAAHgEQAHgEAEgIQAFgIAAgKQAAgKgFgIQgEgHgHgFQgHgEgKAAQgJAAgHAEg");
	this.shape_68.setTransform(226.2,50.6);

	this.shape_69 = new cjs.Shape();
	this.shape_69.graphics.f("#0099CC").s().p("AgKBLIAAhpIAVAAIAABpgAgJgzQgDgEAAgFQAAgHADgDQAEgEAFAAQAGAAADAEQAEADABAHQgBAFgEAEQgDAEgGAAQgFAAgEgEg");
	this.shape_69.setTransform(217.1,50.5);

	this.shape_70 = new cjs.Shape();
	this.shape_70.graphics.f("#0099CC").s().p("Ag2BJIAAiRIAWAAIAAATQAHgKAJgEQAJgFAMAAQAPAAAMAHQAKAGAHANQAGAMAAAQQAAAQgGALQgGAMgLAHQgMAHgPAAQgMAAgJgFQgJgFgHgJIAAA5gAgQgwQgHAEgEAHQgEAJgBAJQABAQAIAJQAJAJAOAAQAJAAAIgFQAHgDAEgHQAEgJABgKQgBgJgEgJQgEgHgHgEQgIgFgJAAQgJAAgHAFg");
	this.shape_70.setTransform(208,54.6);

	this.shape_71 = new cjs.Shape();
	this.shape_71.graphics.f("#0099CC").s().p("AgmArQgKgLgBgTIAAhCIAXAAIAAA7QAAAMAHAHQAHAHALAAQAIAAAGgFQAHgEAEgHQADgIAAgIIAAg1IAXAAIAABqIgXAAIAAgVQgGALgJAFQgKAFgMABQgTgBgJgKg");
	this.shape_71.setTransform(193.9,52.7);

	this.shape_72 = new cjs.Shape();
	this.shape_72.graphics.f("#0099CC").s().p("AgXAvQgMgHgGgMQgIgMAAgQQAAgPAIgMQAGgNAMgGQAMgHAPAAQAPAAALAFQALAEAHAIIgMAPQgGgGgIgDQgHgDgKAAQgIAAgIAFQgHADgEAIQgDAIAAAJQAAAKADAIQAEAIAHADQAIAFAIAAQAKAAAIgEQAIgDAGgGIAMANQgHAKgMAEQgLAGgPAAQgPAAgMgHg");
	this.shape_72.setTransform(181.9,52.7);

	this.shape_73 = new cjs.Shape();
	this.shape_73.graphics.f("#0099CC").s().p("AgEA/QgHgDgEgHQgEgHgBgLIAAg2IgOAAIAAgRIAOAAIAAgdIAXAAIAAAdIAfAAIAAARIgfAAIAAAyQAAAIACADQADAEAGgBIAIgBIAIgDIAFARQgGAEgGACQgHACgGAAQgJAAgFgDg");
	this.shape_73.setTransform(158.4,51.5);

	this.shape_74 = new cjs.Shape();
	this.shape_74.graphics.f("#0099CC").s().p("AgdAyQgIgFgFgHQgEgHgBgKQABgOAKgIQAKgIAUgBIAfAAIAAgDQAAgKgHgGQgGgFgMgBQgHABgIACQgIACgIAGIgJgQIAOgHIAOgFQAHgBAKAAQAUAAALAJQALAKAAASIABBFIgXAAIAAgNQgGAHgJAEQgJADgKAAQgMAAgIgEgAgUAJQgFADAAAIQAAAHAGAFQAFAEAKAAQALgBAJgFQAIgGABgIIAAgKIgcAAIgDAAQgJAAgFADg");
	this.shape_74.setTransform(148.2,52.7);

	this.shape_75 = new cjs.Shape();
	this.shape_75.graphics.f("#0099CC").s().p("AgXAvQgMgHgHgMQgGgMAAgQQAAgPAGgMQAHgNAMgGQAMgHAPAAQAPAAAKAFQALAEAIAIIgNAPQgFgGgHgDQgJgDgJAAQgIAAgHAFQgIADgDAIQgFAIAAAJQAAAKAFAIQADAIAIADQAHAFAIAAQAKAAAIgEQAIgDAFgGIAOANQgIAKgLAEQgMAGgPAAQgPAAgMgHg");
	this.shape_75.setTransform(137,52.7);

	this.shape_76 = new cjs.Shape();
	this.shape_76.graphics.f("#0099CC").s().p("AgZAvQgMgHgHgMQgHgMAAgQQAAgPAHgMQAHgNAMgGQAMgHAPAAQATAAALAIQAMAHAFAOQAEAOgBASIhPAAQACANAJAHQAJAHAMAAQAIAAAIgDQAIgDAGgGIAMANQgIAJgLAEQgLAFgOAAQgQAAgMgHgAAggHQgBgNgIgHQgIgIgNAAQgMAAgIAIQgIAHgCANIA8AAIAAAAg");
	this.shape_76.setTransform(125.5,52.7);

	this.shape_77 = new cjs.Shape();
	this.shape_77.graphics.f("#0099CC").s().p("AgdAyQgIgFgFgHQgEgHgBgKQABgOAKgIQAKgIAUgBIAfAAIAAgDQAAgKgHgGQgGgFgMgBQgHABgIACQgIACgIAGIgJgQIAOgHIAOgFQAHgBAKAAQAUAAALAJQALAKAAASIABBFIgXAAIAAgNQgGAHgJAEQgJADgKAAQgMAAgIgEgAgUAJQgFADAAAIQAAAHAGAFQAFAEAKAAQALgBAJgFQAIgGABgIIAAgKIgcAAIgDAAQgJAAgFADg");
	this.shape_77.setTransform(113.5,52.7);

	this.shape_78 = new cjs.Shape();
	this.shape_78.graphics.f("#0099CC").s().p("AgXAvQgMgHgHgMQgGgMAAgQQAAgPAGgMQAHgNAMgGQAMgHAPAAQAPAAAKAFQALAEAIAIIgNAPQgFgGgHgDQgJgDgJAAQgIAAgHAFQgIADgDAIQgFAIAAAJQAAAKAFAIQADAIAIADQAHAFAIAAQAKAAAIgEQAIgDAFgGIAOANQgIAKgLAEQgMAGgPAAQgPAAgMgHg");
	this.shape_78.setTransform(102.3,52.7);

	this.shape_79 = new cjs.Shape();
	this.shape_79.graphics.f("#0099CC").s().p("AgXAvQgMgHgGgMQgIgMAAgQQAAgPAIgMQAGgNAMgGQAMgHAPAAQAPAAALAFQALAEAHAIIgMAPQgGgGgIgDQgHgDgKAAQgIAAgIAFQgHADgEAIQgDAIAAAJQAAAKADAIQAEAIAHADQAIAFAIAAQAKAAAIgEQAIgDAGgGIAMANQgHAKgMAEQgLAGgPAAQgPAAgMgHg");
	this.shape_79.setTransform(91,52.7);

	this.shape_80 = new cjs.Shape();
	this.shape_80.graphics.f("#0099CC").s().p("AgcAvQgMgHgHgMQgIgMAAgQQAAgPAIgMQAHgNAMgGQANgHAPAAQAQAAANAHQAMAGAIANQAGAMABAPQgBAQgGAMQgIAMgMAHQgNAHgQAAQgPAAgNgHgAgQgdQgHAEgFAIQgDAHAAAKQgBAQAKAJQAIAKAOAAQAOAAAJgKQAKgJgBgQQAAgKgDgHQgFgIgHgEQgHgEgKgBQgIABgIAEg");
	this.shape_80.setTransform(79.1,52.7);

	this.shape_81 = new cjs.Shape();
	this.shape_81.graphics.f("#0099CC").s().p("AgEA/QgHgDgEgHQgEgHgBgLIAAg2IgOAAIAAgRIAOAAIAAgdIAXAAIAAAdIAfAAIAAARIgfAAIAAAyQAAAIACADQADAEAGgBIAHgBIAJgDIAGARQgHAEgGACQgHACgGAAQgIAAgGgDg");
	this.shape_81.setTransform(55,51.5);

	this.shape_82 = new cjs.Shape();
	this.shape_82.graphics.f("#0099CC").s().p("AAcA2IAAg7QgBgMgGgHQgHgHgMAAQgMAAgIAJQgHAHgCANIAAA4IgXAAIAAhqIAXAAIAAAVQAGgLAKgFQAKgGAMABQATAAAKAKQALALAAAUIAABBg");
	this.shape_82.setTransform(44.4,52.6);

	this.shape_83 = new cjs.Shape();
	this.shape_83.graphics.f("#0099CC").s().p("AgLBLIAAhpIAWAAIAABpgAgIgzQgFgEAAgFQAAgHAFgDQADgEAFAAQAGAAAEAEQADADAAAHQAAAFgDAEQgEAEgGAAQgFAAgDgEg");
	this.shape_83.setTransform(34.8,50.5);

	this.shape_84 = new cjs.Shape();
	this.shape_84.graphics.f("#0099CC").s().p("AgWAyQgLgDgIgIIAJgQQAEAEAGADIAMAFIAMABQAIAAAEgDQAFgCABgGQgBgHgGgDQgFgDgIgDIgQgFQgIgDgGgGQgFgGAAgLQAAgLAFgHQAFgHAKgDQAIgDAKAAQAKAAAKADQAJACAIAGIgJARQgGgFgJgCQgIgDgHAAQgGAAgFADQgEACAAAGQABAFAFAEQAGADAHACIARAGQAIADAGAGQAGAGAAALQAAALgGAHQgFAHgKAEQgJADgLAAQgLAAgMgEg");
	this.shape_84.setTransform(27.1,52.7);

	this.shape_85 = new cjs.Shape();
	this.shape_85.graphics.f("#0099CC").s().p("AgdA1IAAhpIAXAAIAAAVQAGgKAIgGQAJgGANABIAAAVQgLAAgIADQgIAEgDAHQgFAGgBAKIAAA2g");
	this.shape_85.setTransform(5.5,52.7);

	this.shape_86 = new cjs.Shape();
	this.shape_86.graphics.f("#0099CC").s().p("AgnArQgKgLAAgTIAAhCIAXAAIAAA7QAAAMAHAHQAGAHAMAAQAIAAAHgFQAGgEADgHQAEgIAAgIIAAg1IAXAAIAABqIgXAAIAAgVQgGALgJAFQgKAFgMABQgTgBgKgKg");
	this.shape_86.setTransform(-5.9,52.7);

	this.shape_87 = new cjs.Shape();
	this.shape_87.graphics.f("#0099CC").s().p("AgZAvQgMgHgHgMQgHgMAAgQQAAgPAHgMQAHgNAMgGQAMgHAPAAQATAAALAIQAMAHAFAOQAEAOgBASIhPAAQACANAJAHQAJAHAMAAQAIAAAIgDQAIgDAGgGIAMANQgIAJgLAEQgLAFgOAAQgQAAgMgHgAAggHQgBgNgIgHQgIgIgNAAQgMAAgIAIQgIAHgCANIA8AAIAAAAg");
	this.shape_87.setTransform(-18.1,52.7);

	this.shape_88 = new cjs.Shape();
	this.shape_88.graphics.f("#0099CC").s().p("AgEA/QgHgDgEgHQgEgHgBgLIAAg2IgPAAIAAgRIAPAAIAAgdIAXAAIAAAdIAfAAIAAARIgfAAIAAAyQAAAIACADQADAEAGgBIAIgBIAIgDIAFARQgFAEgHACQgHACgHAAQgIAAgFgDg");
	this.shape_88.setTransform(-28,51.5);

	this.shape_89 = new cjs.Shape();
	this.shape_89.graphics.f("#0099CC").s().p("Ag2BJIAAiRIAWAAIAAATQAHgKAJgEQAJgFALAAQAQAAALAHQALAGAHANQAGAMAAAQQAAAQgGALQgGAMgMAHQgKAHgQAAQgMAAgJgFQgJgFgHgJIAAA5gAgQgwQgHAEgEAHQgFAJAAAJQABAQAIAJQAKAJANAAQAJAAAIgFQAHgDAEgHQAEgJAAgKQAAgJgEgJQgEgHgHgEQgIgFgJAAQgIAAgIAFg");
	this.shape_89.setTransform(-38.4,54.6);

	this.shape_90 = new cjs.Shape();
	this.shape_90.graphics.f("#0099CC").s().p("AgZAvQgMgHgHgMQgHgMAAgQQAAgPAHgMQAHgNAMgGQAMgHAPAAQATAAALAIQAMAHAFAOQAEAOgBASIhPAAQACANAJAHQAJAHAMAAQAIAAAIgDQAIgDAGgGIAMANQgIAJgLAEQgLAFgOAAQgQAAgMgHgAAggHQgBgNgIgHQgIgIgNAAQgMAAgIAIQgIAHgCANIA8AAIAAAAg");
	this.shape_90.setTransform(-51.6,52.7);

	this.shape_91 = new cjs.Shape();
	this.shape_91.graphics.f("#0099CC").s().p("AgXAvQgMgHgGgMQgIgMABgQQgBgPAIgMQAGgNAMgGQAMgHAPAAQAOAAAMAFQAKAEAIAIIgNAPQgFgGgHgDQgJgDgJAAQgIAAgIAFQgGADgEAIQgEAIgBAJQABAKAEAIQAEAIAGADQAIAFAIAAQAKAAAIgEQAIgDAFgGIAOANQgIAKgLAEQgMAGgPAAQgPAAgMgHg");
	this.shape_91.setTransform(-63.1,52.7);

	this.shape_92 = new cjs.Shape();
	this.shape_92.graphics.f("#0099CC").s().p("AAaA1IgagnIgaAnIgZAAIAlg1Igjg0IAbAAIAWAkIAZgkIAZAAIgiA0IAkA1g");
	this.shape_92.setTransform(-74.3,52.7);

	this.shape_93 = new cjs.Shape();
	this.shape_93.graphics.f("#0099CC").s().p("AgyBGIAAiLIBjAAIAAAVIhMAAIAAAmIBEAAIAAAUIhEAAIAAAnIBOAAIAAAVg");
	this.shape_93.setTransform(-86,51);

	this.shape_94 = new cjs.Shape();
	this.shape_94.graphics.f("#0099CC").s().p("AgIAJQgDgDgBgGQABgFADgEQAEgDAEAAQAFAAAEADQAEAEAAAFQAAAGgEADQgEAEgFAAQgEAAgEgEg");
	this.shape_94.setTransform(-109,56.9);

	this.shape_95 = new cjs.Shape();
	this.shape_95.graphics.f("#0099CC").s().p("AgdA1IAAhpIAXAAIAAAVQAGgKAIgGQAJgGANABIAAAVQgLAAgIADQgIAEgDAHQgFAGgBAKIAAA2g");
	this.shape_95.setTransform(-114.3,52.7);

	this.shape_96 = new cjs.Shape();
	this.shape_96.graphics.f("#0099CC").s().p("AgmArQgLgLAAgTIAAhCIAXAAIAAA7QAAAMAHAHQAGAHAMAAQAIAAAHgFQAGgEAEgHQADgIAAgIIAAg1IAXAAIAABqIgXAAIAAgVQgGALgJAFQgKAFgMABQgTgBgJgKg");
	this.shape_96.setTransform(-125.7,52.7);

	this.shape_97 = new cjs.Shape();
	this.shape_97.graphics.f("#0099CC").s().p("AgEA/QgHgDgEgHQgEgHgBgLIAAg2IgPAAIAAgRIAPAAIAAgdIAXAAIAAAdIAfAAIAAARIgfAAIAAAyQAAAIADADQADAEAFgBIAIgBIAIgDIAFARQgFAEgHACQgHACgHAAQgHAAgGgDg");
	this.shape_97.setTransform(-136.1,51.5);

	this.shape_98 = new cjs.Shape();
	this.shape_98.graphics.f("#0099CC").s().p("AgdAyQgIgFgFgHQgEgHgBgKQABgOAKgIQAKgIAUgBIAfAAIAAgDQAAgKgHgGQgGgFgMgBQgHABgIACQgIACgIAGIgJgQIAOgHIAOgFQAHgBAKAAQAUAAALAJQALAKAAASIABBFIgXAAIAAgNQgGAHgJAEQgJADgKAAQgMAAgIgEgAgUAJQgFADAAAIQAAAHAGAFQAFAEAKAAQALgBAJgFQAIgGABgIIAAgKIgcAAIgDAAQgJAAgFADg");
	this.shape_98.setTransform(-146.3,52.7);

	this.shape_99 = new cjs.Shape();
	this.shape_99.graphics.f("#0099CC").s().p("AgKBLIAAhpIAVAAIAABpgAgJgzQgDgEAAgFQAAgHADgDQAEgEAFAAQAGAAADAEQAEADABAHQgBAFgEAEQgDAEgGAAQgFAAgEgEg");
	this.shape_99.setTransform(-154.7,50.5);

	this.shape_100 = new cjs.Shape();
	this.shape_100.graphics.f("#0099CC").s().p("AgdA1IAAhpIAXAAIAAAVQAGgKAIgGQAJgGANABIAAAVQgLAAgIADQgIAEgDAHQgFAGgBAKIAAA2g");
	this.shape_100.setTransform(-160.8,52.7);

	this.shape_101 = new cjs.Shape();
	this.shape_101.graphics.f("#0099CC").s().p("AgdAyQgIgFgFgHQgEgHgBgKQABgOAKgIQAKgIAUgBIAfAAIAAgDQAAgKgHgGQgGgFgMgBQgHABgIACQgIACgIAGIgJgQIAOgHIAOgFQAHgBAKAAQAUAAALAJQALAKAAASIABBFIgXAAIAAgNQgGAHgJAEQgJADgKAAQgMAAgIgEgAgUAJQgFADAAAIQAAAHAGAFQAFAEAKAAQALgBAJgFQAIgGABgIIAAgKIgcAAIgDAAQgJAAgFADg");
	this.shape_101.setTransform(-171.6,52.7);

	this.shape_102 = new cjs.Shape();
	this.shape_102.graphics.f("#0099CC").s().p("Ag2BJIAAiRIAWAAIAAATQAHgKAJgEQAJgFALAAQAQAAALAHQALAGAHANQAGAMABAQQgBAQgGALQgGAMgMAHQgLAHgPAAQgLAAgKgFQgJgFgHgJIAAA5gAgQgwQgHAEgEAHQgFAJAAAJQAAAQAJAJQAKAJANAAQAJAAAIgFQAHgDAEgHQAEgJAAgKQAAgJgEgJQgEgHgHgEQgIgFgJAAQgIAAgIAFg");
	this.shape_102.setTransform(-183.4,54.6);

	this.shape_103 = new cjs.Shape();
	this.shape_103.graphics.f("#0099CC").s().p("AgdAyQgIgFgFgHQgEgHgBgKQABgOAKgIQAKgIAUgBIAfAAIAAgDQAAgKgHgGQgGgFgMgBQgHABgIACQgIACgIAGIgJgQIAOgHIAOgFQAHgBAKAAQAUAAALAJQALAKAAASIABBFIgXAAIAAgNQgGAHgJAEQgJADgKAAQgMAAgIgEgAgUAJQgFADAAAIQAAAHAGAFQAFAEAKAAQALgBAJgFQAIgGABgIIAAgKIgcAAIgDAAQgJAAgFADg");
	this.shape_103.setTransform(-210.7,52.7);

	this.shape_104 = new cjs.Shape();
	this.shape_104.graphics.f("#0099CC").s().p("AgLBKIAAiTIAXAAIAACTg");
	this.shape_104.setTransform(-219.1,50.6);

	this.shape_105 = new cjs.Shape();
	this.shape_105.graphics.f("#0099CC").s().p("AgLBKIAAiTIAXAAIAACTg");
	this.shape_105.setTransform(-225,50.6);

	this.shape_106 = new cjs.Shape();
	this.shape_106.graphics.f("#0099CC").s().p("AgmArQgLgLAAgTIAAhCIAXAAIAAA7QAAAMAHAHQAGAHAMAAQAIAAAHgFQAGgEAEgHQADgIAAgIIAAg1IAXAAIAABqIgXAAIAAgVQgGALgJAFQgKAFgMABQgTgBgJgKg");
	this.shape_106.setTransform(-234.6,52.7);

	this.shape_107 = new cjs.Shape();
	this.shape_107.graphics.f("#0099CC").s().p("AAcA2IAAg7QgBgMgGgHQgHgHgMAAQgMAAgIAJQgHAHgCANIAAA4IgXAAIAAhqIAXAAIAAAVQAGgLAKgFQAKgGAMABQATAAALAKQAJALABAUIAABBg");
	this.shape_107.setTransform(-247.4,52.6);

	this.shape_108 = new cjs.Shape();
	this.shape_108.graphics.f("#0099CC").s().p("AgEA/QgHgDgEgHQgEgHAAgLIAAg2IgQAAIAAgRIAQAAIAAgdIAVAAIAAAdIAgAAIAAARIggAAIAAAyQABAIADADQADAEAFgBIAIgBIAIgDIAFARQgFAEgHACQgHACgHAAQgHAAgGgDg");
	this.shape_108.setTransform(-272.1,51.5);

	this.shape_109 = new cjs.Shape();
	this.shape_109.graphics.f("#0099CC").s().p("AgdAyQgIgFgFgHQgEgHgBgKQABgOAKgIQAKgIAUgBIAfAAIAAgDQAAgKgHgGQgGgFgMgBQgHABgIACQgIACgIAGIgJgQIAOgHIAOgFQAHgBAKAAQAUAAALAJQALAKAAASIABBFIgXAAIAAgNQgGAHgJAEQgJADgKAAQgMAAgIgEgAgUAJQgFADAAAIQAAAHAGAFQAFAEAKAAQALgBAJgFQAIgGABgIIAAgKIgcAAIgDAAQgJAAgFADg");
	this.shape_109.setTransform(-282.3,52.7);

	this.shape_110 = new cjs.Shape();
	this.shape_110.graphics.f("#0099CC").s().p("AgKBLIAAhpIAVAAIAABpgAgIgzQgEgEgBgFQABgHAEgDQADgEAFAAQAGAAADAEQAEADAAAHQAAAFgEAEQgDAEgGAAQgFAAgDgEg");
	this.shape_110.setTransform(-290.7,50.5);

	this.shape_111 = new cjs.Shape();
	this.shape_111.graphics.f("#0099CC").s().p("AgYBFQgMgDgJgHIAKgQQAHAFAIADQAIADAKAAQAOAAAJgIQAJgIAAgOIAAgNQgFAIgJAFQgJAFgLAAQgOgBgLgGQgLgGgGgMQgGgKAAgQQAAgPAGgLQAGgMAKgGQALgGAOAAQAMgBAIAFQAJAFAGAIIAAgRIAXAAIAABfQAAAQgHALQgGALgNAGQgNAGgPAAQgMAAgLgEgAgPgyQgIAEgDAIQgEAHgBAKQABAJAEAIQADAGAIAEQAGAFAJAAQAIAAAHgFQAHgEAFgGQADgIAAgJQAAgPgJgJQgHgJgOAAQgJAAgGAEg");
	this.shape_111.setTransform(-300.4,54.6);

	this.shape_112 = new cjs.Shape();
	this.shape_112.graphics.f("#0099CC").s().p("AgnArQgKgLAAgTIAAhCIAXAAIAAA7QAAAMAHAHQAGAHAMAAQAIAAAGgFQAHgEADgHQAEgIAAgIIAAg1IAXAAIAABqIgXAAIAAgVQgFALgKAFQgKAFgMABQgSgBgLgKg");
	this.shape_112.setTransform(-313.1,52.7);

	this.shape_113 = new cjs.Shape();
	this.shape_113.graphics.f("#0099CC").s().p("AgWBLIAAhVIgOAAIAAgRIAOAAIAAgKQAAgMAFgJQAFgIAJgEQAHgEAJAAQAHAAAGACQAGACAFAEIgJARQgDgCgEgBIgHgCQgGAAgEAEQgEADAAAIIAAAMIAbAAIAAARIgbAAIAABVg");
	this.shape_113.setTransform(-321.8,50.5);

	this.shape_114 = new cjs.Shape();
	this.shape_114.graphics.f("#0099CC").s().p("AgmArQgLgLAAgTIAAhCIAXAAIAAA7QAAAMAHAHQAGAHAMAAQAIAAAHgFQAGgEAEgHQADgIAAgIIAAg1IAXAAIAABqIgXAAIAAgVQgGALgJAFQgKAFgMABQgTgBgJgKg");
	this.shape_114.setTransform(319.3,19.8);

	this.shape_115 = new cjs.Shape();
	this.shape_115.graphics.f("#0099CC").s().p("AgZAvQgMgHgHgMQgHgMAAgQQAAgPAHgNQAHgMAMgHQAMgGAPAAQATAAALAHQAMAIAFAOQAEAOgBASIhPAAQACANAJAHQAJAHAMAAQAIAAAIgDQAIgDAGgGIAMANQgIAJgLAEQgLAFgOAAQgQAAgMgHgAAggHQgBgNgIgIQgIgHgNAAQgMAAgIAHQgIAIgCANIA8AAIAAAAg");
	this.shape_115.setTransform(307.1,19.8);

	this.shape_116 = new cjs.Shape();
	this.shape_116.graphics.f("#0099CC").s().p("AgZAvQgMgHgHgMQgHgMAAgQQAAgPAHgNQAHgMAMgHQAMgGAPAAQATAAALAHQAMAIAFAOQAEAOgBASIhPAAQACANAJAHQAJAHAMAAQAIAAAIgDQAIgDAGgGIAMANQgIAJgLAEQgLAFgOAAQgQAAgMgHgAAggHQgBgNgIgIQgIgHgNAAQgMAAgIAHQgIAIgCANIA8AAIAAAAg");
	this.shape_116.setTransform(285.1,19.8);

	this.shape_117 = new cjs.Shape();
	this.shape_117.graphics.f("#0099CC").s().p("AgdA2IAAhqIAXAAIAAAVQAFgKAJgGQAJgFANgBIAAAWQgLAAgIAEQgIADgDAHQgFAHgBAJIAAA3g");
	this.shape_117.setTransform(276,19.8);

	this.shape_118 = new cjs.Shape();
	this.shape_118.graphics.f("#0099CC").s().p("AgcAvQgMgHgIgMQgGgMgBgQQABgQAGgMQAIgMAMgHQANgGAPAAQAQAAANAGQAMAHAIAMQAGAMABAQQgBAQgGAMQgIAMgMAHQgNAHgQAAQgPAAgNgHgAgQgdQgHAEgFAIQgDAIAAAJQgBAPAKAKQAJAJANAAQAOAAAJgJQAKgKgBgPQAAgJgDgIQgFgIgHgEQgIgFgJABQgIgBgIAFg");
	this.shape_118.setTransform(265.1,19.8);

	this.shape_119 = new cjs.Shape();
	this.shape_119.graphics.f("#0099CC").s().p("AgKBKIAAiTIAVAAIAACTg");
	this.shape_119.setTransform(255.9,17.7);

	this.shape_120 = new cjs.Shape();
	this.shape_120.graphics.f("#0099CC").s().p("AgcAvQgMgHgIgMQgGgMgBgQQABgQAGgMQAIgMAMgHQANgGAPAAQAQAAANAGQAMAHAIAMQAHAMAAAQQAAAQgHAMQgIAMgMAHQgNAHgQAAQgPAAgNgHgAgQgdQgHAEgFAIQgEAIAAAJQAAAPAJAKQAKAJANAAQAPAAAIgJQAKgKgBgPQAAgJgDgIQgFgIgHgEQgIgFgJABQgJgBgHAFg");
	this.shape_120.setTransform(246.7,19.8);

	this.shape_121 = new cjs.Shape();
	this.shape_121.graphics.f("#0099CC").s().p("AgfBEQgLgHgGgMQgHgNAAgQQAAgQAHgLQAGgMALgHQAMgHAPAAQAMAAAJAFQAKAFAGAKIAAg9IAXAAIAACUIgXAAIAAgTQgGAKgJAFQgKAFgMAAQgPAAgMgHgAgQgJQgHAFgEAHQgFAIAAAKQAAAKAFAIQAEAIAHAEQAHAEAJAAQAKAAAHgEQAHgEAEgIQAFgIAAgKQAAgKgFgIQgEgHgHgFQgHgEgKAAQgJAAgHAEg");
	this.shape_121.setTransform(233.1,17.7);

	this.shape_122 = new cjs.Shape();
	this.shape_122.graphics.f("#0099CC").s().p("ABCA2IAAg7QgBgMgGgHQgHgHgMAAQgJAAgGAFQgHAEgDAHQgDAIAAAIIAAA1IgXAAIAAg7QAAgMgGgHQgHgHgLAAQgKAAgGAFQgHAEgDAHQgFAIAAAIIAAA1IgWAAIAAhqIAWAAIAAAVQAHgLAJgFQAKgGAOABQAOAAAJAGQAIAHAFAMQAEgNALgGQAKgHAPABQASAAAKAKQALALAAAUIAABBg");
	this.shape_122.setTransform(206.2,19.7);

	this.shape_123 = new cjs.Shape();
	this.shape_123.graphics.f("#0099CC").s().p("AgnArQgKgLAAgTIAAhCIAXAAIAAA7QAAAMAHAHQAGAHAMAAQAIAAAHgFQAGgEADgHQAEgIAAgIIAAg1IAXAAIAABqIgXAAIAAgVQgGALgJAFQgKAFgMABQgTgBgKgKg");
	this.shape_123.setTransform(188.9,19.8);

	this.shape_124 = new cjs.Shape();
	this.shape_124.graphics.f("#0099CC").s().p("AgLBKIAAiTIAXAAIAACTg");
	this.shape_124.setTransform(179.7,17.7);

	this.shape_125 = new cjs.Shape();
	this.shape_125.graphics.f("#0099CC").s().p("AgLBKIAAiTIAXAAIAACTg");
	this.shape_125.setTransform(173.8,17.7);

	this.shape_126 = new cjs.Shape();
	this.shape_126.graphics.f("#0099CC").s().p("AgKBLIAAhpIAVAAIAABpgAgJgzQgDgEAAgFQAAgHADgDQAEgEAFAAQAGAAADAEQAEADABAHQgBAFgEAEQgDAEgGAAQgFAAgEgEg");
	this.shape_126.setTransform(168,17.6);

	this.shape_127 = new cjs.Shape();
	this.shape_127.graphics.f("#0099CC").s().p("AgXAvQgMgHgHgMQgHgMAAgQQAAgPAHgNQAHgMAMgHQAMgGAPAAQAOAAALAEQAMAFAHAIIgMAPQgGgGgIgDQgIgDgJAAQgIAAgIAEQgGAFgFAHQgDAIAAAJQAAAKADAHQAFAIAGAFQAIAEAIAAQAKAAAIgDQAIgDAGgHIAMANQgHAJgMAGQgLAEgPABQgPAAgMgHg");
	this.shape_127.setTransform(159.5,19.8);

	this.shape_128 = new cjs.Shape();
	this.shape_128.graphics.f("#0099CC").s().p("AgZAvQgMgHgHgMQgHgMAAgQQAAgPAHgNQAHgMAMgHQAMgGAPAAQATAAALAHQAMAIAFAOQAEAOgBASIhPAAQACANAJAHQAJAHAMAAQAIAAAIgDQAIgDAGgGIAMANQgIAJgLAEQgLAFgOAAQgQAAgMgHgAAggHQgBgNgIgIQgIgHgNAAQgMAAgIAHQgIAIgCANIA8AAIAAAAg");
	this.shape_128.setTransform(137.7,19.8);

	this.shape_129 = new cjs.Shape();
	this.shape_129.graphics.f("#0099CC").s().p("AgWAyQgLgDgIgIIAJgQQAEAEAGADIAMAFIAMABQAIAAAEgDQAFgCABgGQgBgHgGgDQgFgDgIgDIgQgFQgIgDgGgGQgFgGAAgLQAAgLAFgHQAFgHAKgDQAIgDAKAAQAKAAAKADQAJACAIAGIgJARQgGgFgJgCQgIgDgHAAQgGAAgFADQgEACABAGQAAAFAFAEQAGADAHACIARAGQAIADAGAGQAGAGAAALQAAALgGAHQgFAHgKAEQgJADgLAAQgLAAgMgEg");
	this.shape_129.setTransform(127,19.8);

	this.shape_130 = new cjs.Shape();
	this.shape_130.graphics.f("#0099CC").s().p("AgVAyQgLgDgJgIIAIgQQAFAEAGADIAMAFIAMABQAHAAAGgDQAEgCAAgGQAAgHgFgDQgGgDgIgDIgQgFQgIgDgFgGQgGgGgBgLQABgLAFgHQAGgHAIgDQAJgDAKAAQAKAAAKADQAKACAHAGIgIARQgHgFgIgCQgJgDgHAAQgGAAgFADQgDACAAAGQgBAFAGAEQAGADAIACIAQAGQAIADAGAGQAFAGABALQgBALgFAHQgGAHgJAEQgJADgLAAQgLAAgLgEg");
	this.shape_130.setTransform(117.6,19.8);

	this.shape_131 = new cjs.Shape();
	this.shape_131.graphics.f("#0099CC").s().p("AgZAvQgMgHgHgMQgHgMAAgQQAAgPAHgNQAHgMAMgHQAMgGAPAAQATAAALAHQAMAIAFAOQAEAOgBASIhPAAQACANAJAHQAJAHAMAAQAIAAAIgDQAIgDAGgGIAMANQgIAJgLAEQgLAFgOAAQgQAAgMgHgAAggHQgBgNgIgIQgIgHgNAAQgMAAgIAHQgIAIgCANIA8AAIAAAAg");
	this.shape_131.setTransform(107.2,19.8);

	this.shape_132 = new cjs.Shape();
	this.shape_132.graphics.f("#0099CC").s().p("AgEA/QgHgDgEgHQgEgHgBgLIAAg2IgOAAIAAgRIAOAAIAAgdIAXAAIAAAdIAfAAIAAARIgfAAIAAAyQAAAIACADQADAEAGgBIAHgBIAJgDIAGARQgHAEgGACQgHACgGAAQgIAAgGgDg");
	this.shape_132.setTransform(87,18.6);

	this.shape_133 = new cjs.Shape();
	this.shape_133.graphics.f("#0099CC").s().p("AgKBLIAAhpIAVAAIAABpgAgIgzQgFgEAAgFQAAgHAFgDQADgEAFAAQAGAAAEAEQADADAAAHQAAAFgDAEQgEAEgGAAQgFAAgDgEg");
	this.shape_133.setTransform(80,17.6);

	this.shape_134 = new cjs.Shape();
	this.shape_134.graphics.f("#0099CC").s().p("AgKBKIAAiTIAVAAIAACTg");
	this.shape_134.setTransform(74.2,17.7);

	this.shape_135 = new cjs.Shape();
	this.shape_135.graphics.f("#0099CC").s().p("AgZAvQgMgHgHgMQgHgMAAgQQAAgPAHgNQAHgMAMgHQAMgGAPAAQATAAALAHQAMAIAFAOQAEAOgBASIhPAAQACANAJAHQAJAHAMAAQAIAAAIgDQAIgDAGgGIAMANQgIAJgLAEQgLAFgOAAQgQAAgMgHgAAggHQgBgNgIgIQgIgHgNAAQgMAAgIAHQgIAIgCANIA8AAIAAAAg");
	this.shape_135.setTransform(65.4,19.8);

	this.shape_136 = new cjs.Shape();
	this.shape_136.graphics.f("#0099CC").s().p("AgKA1IgqhpIAYAAIAdBTIAdhTIAXAAIgpBpg");
	this.shape_136.setTransform(54.4,19.8);

	this.shape_137 = new cjs.Shape();
	this.shape_137.graphics.f("#0099CC").s().p("AgZAvQgMgHgHgMQgHgMAAgQQAAgPAHgNQAHgMAMgHQAMgGAPAAQATAAALAHQAMAIAFAOQAEAOgBASIhPAAQACANAJAHQAJAHAMAAQAIAAAIgDQAIgDAGgGIAMANQgIAJgLAEQgLAFgOAAQgQAAgMgHgAAggHQgBgNgIgIQgIgHgNAAQgMAAgIAHQgIAIgCANIA8AAIAAAAg");
	this.shape_137.setTransform(32.9,19.8);

	this.shape_138 = new cjs.Shape();
	this.shape_138.graphics.f("#0099CC").s().p("AgFA/QgGgDgEgHQgEgHgBgLIAAg2IgOAAIAAgRIAOAAIAAgdIAXAAIAAAdIAfAAIAAARIgfAAIAAAyQAAAIACADQADAEAGgBIAHgBIAJgDIAGARQgHAEgGACQgHACgGAAQgIAAgHgDg");
	this.shape_138.setTransform(23.1,18.6);

	this.shape_139 = new cjs.Shape();
	this.shape_139.graphics.f("#0099CC").s().p("AgdAxQgIgDgFgIQgEgHgBgKQABgPAKgHQAKgJAUAAIAfAAIAAgDQAAgKgHgGQgGgGgMABQgHAAgIACQgIADgIAFIgJgQIAOgIIAOgDQAHgCAKAAQAUAAALAKQALAJAAASIABBFIgXAAIAAgNQgGAHgJADQgJAEgKAAQgMAAgIgFgAgUAJQgFAEAAAHQAAAIAGADQAFAEAKABQALAAAJgGQAIgFABgKIAAgJIgcAAIgDAAQgJAAgFADg");
	this.shape_139.setTransform(12.8,19.8);

	this.shape_140 = new cjs.Shape();
	this.shape_140.graphics.f("#0099CC").s().p("AgEA/QgHgDgEgHQgEgHgBgLIAAg2IgOAAIAAgRIAOAAIAAgdIAXAAIAAAdIAfAAIAAARIgfAAIAAAyQAAAIACADQADAEAGgBIAIgBIAIgDIAGARQgHAEgGACQgHACgGAAQgIAAgGgDg");
	this.shape_140.setTransform(3.3,18.6);

	this.shape_141 = new cjs.Shape();
	this.shape_141.graphics.f("#0099CC").s().p("Ag2BJIAAiQIAWAAIAAASQAHgKAJgEQAJgFAMAAQAPAAAMAGQAKAHAHAMQAGANAAAQQAAAQgGALQgGAMgLAHQgMAHgPAAQgMAAgJgFQgJgFgHgKIAAA6gAgQgxQgHAFgEAHQgEAJgBAJQABAQAIAIQAJAKAOAAQAJAAAIgEQAHgFAEgHQAEgHABgLQgBgJgEgJQgEgHgHgFQgIgEgJAAQgJAAgHAEg");
	this.shape_141.setTransform(-7.1,21.7);

	this.shape_142 = new cjs.Shape();
	this.shape_142.graphics.f("#0099CC").s().p("AgmArQgKgLgBgTIAAhCIAXAAIAAA7QAAAMAHAHQAHAHALAAQAIAAAGgFQAHgEAEgHQADgIAAgIIAAg1IAXAAIAABqIgXAAIAAgVQgGALgJAFQgKAFgMABQgTgBgJgKg");
	this.shape_142.setTransform(-21.2,19.8);

	this.shape_143 = new cjs.Shape();
	this.shape_143.graphics.f("#0099CC").s().p("AgKBKIAAiTIAVAAIAACTg");
	this.shape_143.setTransform(-30.4,17.7);

	this.shape_144 = new cjs.Shape();
	this.shape_144.graphics.f("#0099CC").s().p("AgcAvQgNgHgGgMQgIgMABgQQgBgQAIgMQAGgMANgHQAMgGAQAAQARAAAMAGQANAHAGAMQAIAMgBAQQABAQgIAMQgGAMgNAHQgMAHgRAAQgQAAgMgHgAgQgdQgHAEgEAIQgFAIAAAJQABAPAIAKQAJAJAOAAQAPAAAJgJQAIgKABgPQgBgJgEgIQgEgIgHgEQgHgFgKABQgIgBgIAFg");
	this.shape_144.setTransform(-39.6,19.8);

	this.shape_145 = new cjs.Shape();
	this.shape_145.graphics.f("#0099CC").s().p("AgLA1IgphpIAYAAIAdBTIAdhTIAXAAIgpBpg");
	this.shape_145.setTransform(-51,19.8);

	this.shape_146 = new cjs.Shape();
	this.shape_146.graphics.f("#0099CC").s().p("AAcA2IAAg7QgBgMgGgHQgHgHgMAAQgMAAgIAJQgHAHgCANIAAA4IgXAAIAAhqIAXAAIAAAVQAGgLAKgFQAKgGAMABQATAAAKAKQALALAAAUIAABBg");
	this.shape_146.setTransform(-73.1,19.7);

	this.shape_147 = new cjs.Shape();
	this.shape_147.graphics.f("#0099CC").s().p("AgLBLIAAhpIAWAAIAABpgAgJgzQgEgEAAgFQAAgHAEgDQAEgEAFAAQAGAAAEAEQADADAAAHQAAAFgDAEQgEAEgGAAQgFAAgEgEg");
	this.shape_147.setTransform(-82.8,17.6);

	this.shape_148 = new cjs.Shape();
	this.shape_148.graphics.f("#0099CC").s().p("AgEA/QgHgDgEgHQgEgHgBgLIAAg2IgPAAIAAgRIAPAAIAAgdIAXAAIAAAdIAfAAIAAARIgfAAIAAAyQAAAIACADQADAEAGgBIAIgBIAIgDIAFARQgFAEgHACQgHACgHAAQgIAAgFgDg");
	this.shape_148.setTransform(-100,18.6);

	this.shape_149 = new cjs.Shape();
	this.shape_149.graphics.f("#0099CC").s().p("AgLBLIAAhpIAWAAIAABpgAgIgzQgFgEAAgFQAAgHAFgDQADgEAFAAQAGAAAEAEQADADAAAHQAAAFgDAEQgEAEgGAAQgFAAgDgEg");
	this.shape_149.setTransform(-107,17.6);

	this.shape_150 = new cjs.Shape();
	this.shape_150.graphics.f("#0099CC").s().p("AgdA2IAAhqIAXAAIAAAVQAGgKAIgGQAJgFANgBIAAAWQgLAAgIAEQgHADgFAHQgEAHgBAJIAAA3g");
	this.shape_150.setTransform(-113,19.8);

	this.shape_151 = new cjs.Shape();
	this.shape_151.graphics.f("#0099CC").s().p("AgZAvQgMgHgHgMQgHgMAAgQQAAgPAHgNQAHgMAMgHQAMgGAPAAQATAAALAHQAMAIAFAOQAEAOgBASIhPAAQACANAJAHQAJAHAMAAQAIAAAIgDQAIgDAGgGIAMANQgIAJgLAEQgLAFgOAAQgQAAgMgHgAAggHQgBgNgIgIQgIgHgNAAQgMAAgIAHQgIAIgCANIA8AAIAAAAg");
	this.shape_151.setTransform(-123.6,19.8);

	this.shape_152 = new cjs.Shape();
	this.shape_152.graphics.f("#0099CC").s().p("AgfBEQgLgHgGgMQgHgNAAgQQAAgQAHgLQAGgMALgHQAMgHAPAAQAMAAAJAFQAKAFAGAKIAAg9IAXAAIAACUIgXAAIAAgTQgGAKgJAFQgKAFgMAAQgPAAgMgHgAgQgJQgHAFgEAHQgFAIAAAKQAAAKAFAIQAEAIAHAEQAHAEAJAAQAKAAAHgEQAHgEAEgIQAFgIAAgKQAAgKgFgIQgEgHgHgFQgHgEgKAAQgJAAgHAEg");
	this.shape_152.setTransform(-136.8,17.7);

	this.shape_153 = new cjs.Shape();
	this.shape_153.graphics.f("#0099CC").s().p("AAcA2IAAg7QgBgMgGgHQgHgHgMAAQgMAAgIAJQgHAHgCANIAAA4IgXAAIAAhqIAXAAIAAAVQAGgLAKgFQAKgGAMABQATAAAKAKQALALAAAUIAABBg");
	this.shape_153.setTransform(-149.5,19.7);

	this.shape_154 = new cjs.Shape();
	this.shape_154.graphics.f("#0099CC").s().p("AgZAvQgMgHgHgMQgHgMAAgQQAAgPAHgNQAHgMAMgHQAMgGAPAAQATAAALAHQAMAIAFAOQAEAOgBASIhPAAQACANAJAHQAJAHAMAAQAIAAAIgDQAIgDAGgGIAMANQgIAJgLAEQgLAFgOAAQgQAAgMgHgAAggHQgBgNgIgIQgIgHgNAAQgMAAgIAHQgIAIgCANIA8AAIAAAAg");
	this.shape_154.setTransform(-162.2,19.8);

	this.shape_155 = new cjs.Shape();
	this.shape_155.graphics.f("#0099CC").s().p("AAcBKIAAg8QAAgMgHgFQgHgHgMAAQgIAAgHAEQgHAEgEAHQgDAHAAAKIAAA0IgXAAIAAiTIAXAAIAAA/QAGgMAKgFQAJgFANAAQATAAALALQAKALAAASIAABCg");
	this.shape_155.setTransform(-174.5,17.7);

	this.shape_156 = new cjs.Shape();
	this.shape_156.graphics.f("#0099CC").s().p("AgZAvQgMgHgHgMQgHgMAAgQQAAgPAHgNQAHgMAMgHQAMgGAPAAQATAAALAHQAMAIAFAOQAEAOgBASIhPAAQACANAJAHQAJAHAMAAQAIAAAIgDQAIgDAGgGIAMANQgIAJgLAEQgLAFgOAAQgQAAgMgHgAAggHQgBgNgIgIQgIgHgNAAQgMAAgIAHQgIAIgCANIA8AAIAAAAg");
	this.shape_156.setTransform(-187.3,19.8);

	this.shape_157 = new cjs.Shape();
	this.shape_157.graphics.f("#0099CC").s().p("AgdA2IAAhqIAXAAIAAAVQAGgKAIgGQAJgFANgBIAAAWQgLAAgIAEQgIADgDAHQgFAHgBAJIAAA3g");
	this.shape_157.setTransform(-196.3,19.8);

	this.shape_158 = new cjs.Shape();
	this.shape_158.graphics.f("#0099CC").s().p("Ag3BJIAAiQIAYAAIAAASQAFgKAKgEQAJgFAMAAQAPAAAMAGQAKAHAHAMQAHANgBAQQABAQgHALQgGAMgLAHQgMAHgPAAQgMAAgJgFQgKgFgFgKIAAA6gAgQgxQgHAFgFAHQgDAJAAAJQAAAQAJAIQAIAKAOAAQAJAAAHgEQAIgFAEgHQAEgHABgLQgBgJgEgJQgEgHgIgFQgHgEgJAAQgJAAgHAEg");
	this.shape_158.setTransform(-207.3,21.7);

	this.shape_159 = new cjs.Shape();
	this.shape_159.graphics.f("#0099CC").s().p("AgZAvQgMgHgHgMQgHgMAAgQQAAgPAHgNQAHgMAMgHQAMgGAPAAQATAAALAHQAMAIAFAOQAEAOgBASIhPAAQACANAJAHQAJAHAMAAQAIAAAIgDQAIgDAGgGIAMANQgIAJgLAEQgLAFgOAAQgQAAgMgHgAAggHQgBgNgIgIQgIgHgNAAQgMAAgIAHQgIAIgCANIA8AAIAAAAg");
	this.shape_159.setTransform(-220.5,19.8);

	this.shape_160 = new cjs.Shape();
	this.shape_160.graphics.f("#0099CC").s().p("AgdA2IAAhqIAXAAIAAAVQAGgKAIgGQAJgFANgBIAAAWQgLAAgIAEQgIADgDAHQgFAHgBAJIAAA3g");
	this.shape_160.setTransform(-229.5,19.8);

	this.shape_161 = new cjs.Shape();
	this.shape_161.graphics.f("#0099CC").s().p("AAcA2IAAg7QgBgMgGgHQgHgHgMAAQgMAAgIAJQgHAHgCANIAAA4IgXAAIAAhqIAXAAIAAAVQAGgLAKgFQAKgGAMABQATAAALAKQAJALABAUIAABBg");
	this.shape_161.setTransform(-251,19.7);

	this.shape_162 = new cjs.Shape();
	this.shape_162.graphics.f("#0099CC").s().p("AgKBLIAAhpIAVAAIAABpgAgIgzQgFgEAAgFQAAgHAFgDQADgEAFAAQAGAAAEAEQADADAAAHQAAAFgDAEQgEAEgGAAQgFAAgDgEg");
	this.shape_162.setTransform(-260.7,17.6);

	this.shape_163 = new cjs.Shape();
	this.shape_163.graphics.f("#0099CC").s().p("AgdA2IAAhqIAXAAIAAAVQAGgKAIgGQAJgFANgBIAAAWQgLAAgIAEQgHADgFAHQgEAHgBAJIAAA3g");
	this.shape_163.setTransform(-277.1,19.8);

	this.shape_164 = new cjs.Shape();
	this.shape_164.graphics.f("#0099CC").s().p("AgcAvQgNgHgGgMQgIgMABgQQgBgQAIgMQAGgMANgHQAMgGAQAAQARAAAMAGQANAHAGAMQAIAMgBAQQABAQgIAMQgGAMgNAHQgMAHgRAAQgQAAgMgHgAgQgdQgHAEgEAIQgEAIgBAJQABAPAIAKQAJAJAOAAQAPAAAJgJQAIgKABgPQgBgJgEgIQgEgIgHgEQgHgFgKABQgIgBgIAFg");
	this.shape_164.setTransform(-288,19.8);

	this.shape_165 = new cjs.Shape();
	this.shape_165.graphics.f("#0099CC").s().p("AgLBKIAAiTIAXAAIAACTg");
	this.shape_165.setTransform(-297.2,17.7);

	this.shape_166 = new cjs.Shape();
	this.shape_166.graphics.f("#0099CC").s().p("AgcAvQgNgHgGgMQgIgMABgQQgBgQAIgMQAGgMANgHQAMgGAQAAQARAAAMAGQANAHAGAMQAIAMgBAQQABAQgIAMQgGAMgNAHQgMAHgRAAQgQAAgMgHgAgQgdQgHAEgEAIQgEAIgBAJQABAPAIAKQAJAJAOAAQAPAAAJgJQAIgKABgPQAAgJgFgIQgEgIgHgEQgIgFgJABQgJgBgHAFg");
	this.shape_166.setTransform(-306.4,19.8);

	this.shape_167 = new cjs.Shape();
	this.shape_167.graphics.f("#0099CC").s().p("AgfBEQgLgHgGgMQgHgNAAgQQAAgQAHgLQAGgMALgHQAMgHAPAAQAMAAAJAFQAKAFAGAKIAAg9IAXAAIAACUIgXAAIAAgTQgGAKgJAFQgKAFgMAAQgPAAgMgHgAgQgJQgHAFgEAHQgFAIAAAKQAAAKAFAIQAEAIAHAEQAHAEAJAAQAKAAAHgEQAHgEAEgIQAFgIAAgKQAAgKgFgIQgEgHgHgFQgHgEgKAAQgJAAgHAEg");
	this.shape_167.setTransform(-320,17.7);

	this.shape_168 = new cjs.Shape();
	this.shape_168.graphics.f("#0099CC").s().p("AgZAvQgMgHgHgMQgHgMAAgQQAAgPAHgMQAHgNAMgGQAMgHAPAAQATAAALAIQAMAHAFAOQAEAOgBATIhPAAQACAMAJAHQAJAHAMAAQAIAAAIgDQAIgDAGgGIAMANQgIAJgLAEQgLAEgOABQgQgBgMgGgAAggHQgBgNgIgHQgIgIgNAAQgMAAgIAIQgIAHgCANIA8AAIAAAAg");
	this.shape_168.setTransform(320.2,-13.1);

	this.shape_169 = new cjs.Shape();
	this.shape_169.graphics.f("#0099CC").s().p("AgdA1IAAhpIAXAAIAAAVQAFgKAJgGQAJgGANAAIAAAWQgLAAgIADQgIAEgEAHQgEAGgBAKIAAA2g");
	this.shape_169.setTransform(311.1,-13.1);

	this.shape_170 = new cjs.Shape();
	this.shape_170.graphics.f("#0099CC").s().p("AgnArQgKgLAAgTIAAhCIAXAAIAAA7QAAAMAHAHQAGAHAMAAQAIAAAGgFQAHgEADgHQAEgIAAgIIAAg1IAXAAIAABqIgXAAIAAgVQgFALgKAFQgKAFgMABQgTgBgKgKg");
	this.shape_170.setTransform(299.7,-13.1);

	this.shape_171 = new cjs.Shape();
	this.shape_171.graphics.f("#0099CC").s().p("AgdA1IAAhpIAXAAIAAAVQAGgKAIgGQAJgGANAAIAAAWQgLAAgIADQgHAEgFAHQgEAGgBAKIAAA2g");
	this.shape_171.setTransform(290.2,-13.1);

	this.shape_172 = new cjs.Shape();
	this.shape_172.graphics.f("#0099CC").s().p("AgLBLIAAhpIAWAAIAABpgAgJgzQgEgEAAgFQAAgHAEgDQAEgEAFAAQAGAAAEAEQADADAAAHQAAAFgDAEQgEAEgGAAQgFAAgEgEg");
	this.shape_172.setTransform(282.6,-15.3);

	this.shape_173 = new cjs.Shape();
	this.shape_173.graphics.f("#0099CC").s().p("AgZAvQgMgHgHgMQgHgMAAgQQAAgPAHgMQAHgNAMgGQAMgHAPAAQATAAALAIQAMAHAFAOQAEAOgBATIhPAAQACAMAJAHQAJAHAMAAQAIAAAIgDQAIgDAGgGIAMANQgIAJgLAEQgLAEgOABQgQgBgMgGgAAggHQgBgNgIgHQgIgIgNAAQgMAAgIAIQgIAHgCANIA8AAIAAAAg");
	this.shape_173.setTransform(267.2,-13.1);

	this.shape_174 = new cjs.Shape();
	this.shape_174.graphics.f("#0099CC").s().p("AgEA/QgHgDgEgHQgEgHgBgLIAAg2IgPAAIAAgRIAPAAIAAgdIAXAAIAAAdIAfAAIAAARIgfAAIAAAyQAAAIADADQACAEAGgBIAIgBIAIgDIAFARQgFAEgHACQgHACgHAAQgIAAgFgDg");
	this.shape_174.setTransform(257.3,-14.3);

	this.shape_175 = new cjs.Shape();
	this.shape_175.graphics.f("#0099CC").s().p("AgnArQgJgLgBgTIAAhCIAXAAIAAA7QAAAMAHAHQAHAHALAAQAIAAAGgFQAHgEADgHQAEgIAAgIIAAg1IAXAAIAABqIgXAAIAAgVQgGALgJAFQgKAFgMABQgSgBgLgKg");
	this.shape_175.setTransform(246.5,-13.1);

	this.shape_176 = new cjs.Shape();
	this.shape_176.graphics.f("#0099CC").s().p("AgdAxQgIgEgFgHQgEgIgBgJQABgOAKgIQAKgIAUgBIAfAAIAAgDQAAgKgHgGQgGgFgMgBQgHABgIACQgIACgIAGIgJgQIAOgHIAOgFQAHgBAKAAQAUAAALAJQALAKAAASIABBFIgXAAIAAgNQgGAHgJAEQgJADgKAAQgMAAgIgFgAgUAJQgFAEAAAHQAAAHAGAEQAFAFAKAAQALgBAJgFQAIgGABgIIAAgKIgcAAIgDAAQgJAAgFADg");
	this.shape_176.setTransform(234,-13.1);

	this.shape_177 = new cjs.Shape();
	this.shape_177.graphics.f("#0099CC").s().p("AgWAyQgLgDgIgIIAJgQQAEAEAGADIAMAFIAMABQAIAAAEgDQAFgCABgGQgBgHgFgDQgGgDgIgDIgQgFQgIgDgGgGQgFgGgBgLQABgLAFgHQAFgHAKgDQAJgDAJAAQAKAAAKADQAJACAIAGIgIARQgIgFgIgCQgIgDgHAAQgGAAgFADQgDACAAAGQAAAFAFAEQAGADAHACIARAGQAJADAFAGQAFAGABALQgBALgFAHQgFAHgKAEQgJADgLAAQgLAAgMgEg");
	this.shape_177.setTransform(216.9,-13.1);

	this.shape_178 = new cjs.Shape();
	this.shape_178.graphics.f("#0099CC").s().p("AgLBLIAAhpIAWAAIAABpgAgIgzQgFgEAAgFQAAgHAFgDQADgEAFAAQAGAAAEAEQADADAAAHQAAAFgDAEQgEAEgGAAQgFAAgDgEg");
	this.shape_178.setTransform(209.5,-15.3);

	this.shape_179 = new cjs.Shape();
	this.shape_179.graphics.f("#0099CC").s().p("AgnArQgKgLAAgTIAAhCIAXAAIAAA7QAAAMAHAHQAGAHAMAAQAIAAAGgFQAHgEADgHQAEgIAAgIIAAg1IAXAAIAABqIgXAAIAAgVQgFALgKAFQgKAFgMABQgSgBgLgKg");
	this.shape_179.setTransform(199.9,-13.1);

	this.shape_180 = new cjs.Shape();
	this.shape_180.graphics.f("#0099CC").s().p("AhABGIAAiLIA6AAQAUAAAQAJQAQAJAKAQQAJAPAAAUQAAAUgJAQQgKAQgQAJQgRAJgUAAgAgoAxIAiAAQANgBALgFQAKgHAHgKQAGgLAAgPQAAgOgGgKQgHgLgLgHQgLgFgNgBIghAAg");
	this.shape_180.setTransform(186.4,-14.8);

	this.shape_181 = new cjs.Shape();
	this.shape_181.graphics.f("#0099CC").s().p("AgIAJQgDgDgBgGQABgFADgEQAEgDAEAAQAFAAAEADQAEAEAAAFQAAAGgEADQgEAEgFAAQgEAAgEgEg");
	this.shape_181.setTransform(169.1,-8.9);

	this.shape_182 = new cjs.Shape();
	this.shape_182.graphics.f("#0099CC").s().p("AgFA/QgGgDgEgHQgEgHAAgLIAAg2IgQAAIAAgRIAQAAIAAgdIAVAAIAAAdIAgAAIAAARIggAAIAAAyQAAAIAEADQADAEAFgBIAHgBIAJgDIAGARQgGAEgHACQgHACgHAAQgHAAgHgDg");
	this.shape_182.setTransform(163,-14.3);

	this.shape_183 = new cjs.Shape();
	this.shape_183.graphics.f("#0099CC").s().p("AgdAxQgIgEgFgHQgEgIgBgJQABgOAKgIQAKgIAUgBIAfAAIAAgDQAAgKgHgGQgGgFgMgBQgHABgIACQgIACgIAGIgJgQIAOgHIAOgFQAHgBAKAAQAUAAALAJQALAKAAASIABBFIgXAAIAAgNQgGAHgJAEQgJADgKAAQgMAAgIgFgAgUAJQgFAEAAAHQAAAHAGAEQAFAFAKAAQALgBAJgFQAIgGABgIIAAgKIgcAAIgDAAQgJAAgFADg");
	this.shape_183.setTransform(152.7,-13.1);

	this.shape_184 = new cjs.Shape();
	this.shape_184.graphics.f("#0099CC").s().p("AgmArQgLgLAAgTIAAhCIAXAAIAAA7QAAAMAHAHQAGAHAMAAQAIAAAHgFQAGgEAEgHQADgIAAgIIAAg1IAXAAIAABqIgXAAIAAgVQgFALgKAFQgKAFgMABQgTgBgJgKg");
	this.shape_184.setTransform(140.5,-13.1);

	this.shape_185 = new cjs.Shape();
	this.shape_185.graphics.f("#0099CC").s().p("AAhBJIAAg5QgGAJgJAFQgKAFgMAAQgPAAgMgHQgLgHgGgMQgHgLAAgQQAAgQAHgMQAGgNALgGQAMgHAPAAQAMAAAJAFQAKAFAGAJIAAgSIAXAAIAACQgAgQgwQgHAEgEAIQgFAIAAAKQAAALAFAHQAEAHAHAEQAHAFAJAAQAKAAAHgFQAHgEAEgHQAFgHAAgLQAAgKgFgIQgEgIgHgEQgHgEgKgBQgJABgHAEg");
	this.shape_185.setTransform(126.7,-11.2);

	this.shape_186 = new cjs.Shape();
	this.shape_186.graphics.f("#0099CC").s().p("AgZAvQgMgHgHgMQgHgMAAgQQAAgPAHgMQAHgNAMgGQAMgHAPAAQATAAALAIQAMAHAFAOQAEAOgBATIhPAAQACAMAJAHQAJAHAMAAQAIAAAIgDQAIgDAGgGIAMANQgIAJgLAEQgLAEgOABQgQgBgMgGgAAggHQgBgNgIgHQgIgIgNAAQgMAAgIAIQgIAHgCANIA8AAIAAAAg");
	this.shape_186.setTransform(114.6,-13.1);

	this.shape_187 = new cjs.Shape();
	this.shape_187.graphics.f("#0099CC").s().p("AgWAyQgLgDgIgIIAJgQQAEAEAGADIAMAFIAMABQAIAAAEgDQAFgCABgGQgBgHgGgDQgFgDgIgDIgQgFQgIgDgGgGQgFgGgBgLQABgLAFgHQAFgHAKgDQAJgDAJAAQAKAAAKADQAJACAIAGIgJARQgHgFgIgCQgIgDgHAAQgGAAgFADQgDACAAAGQAAAFAFAEQAGADAHACIARAGQAJADAFAGQAFAGABALQgBALgFAHQgFAHgKAEQgJADgLAAQgLAAgMgEg");
	this.shape_187.setTransform(104,-13.1);

	this.shape_188 = new cjs.Shape();
	this.shape_188.graphics.f("#0099CC").s().p("AAcA2IAAg7QgBgMgGgHQgHgHgMAAQgMAAgIAJQgHAHgCANIAAA4IgXAAIAAhqIAXAAIAAAVQAGgLAKgFQAKgGAMABQATAAAKAKQALALAAAUIAABBg");
	this.shape_188.setTransform(92.9,-13.2);

	this.shape_189 = new cjs.Shape();
	this.shape_189.graphics.f("#0099CC").s().p("AgcAvQgMgHgIgMQgGgMAAgQQAAgPAGgMQAIgNAMgGQANgHAPAAQARAAAMAHQANAGAGANQAIAMAAAPQAAAQgIAMQgGAMgNAHQgMAGgRABQgPgBgNgGgAgQgdQgHAEgEAIQgFAIAAAJQAAAQAJAJQAKAKANAAQAPAAAIgKQAJgJAAgQQAAgJgDgIQgFgIgHgEQgHgEgKgBQgIABgIAEg");
	this.shape_189.setTransform(79.9,-13.1);

	this.shape_190 = new cjs.Shape();
	this.shape_190.graphics.f("#0099CC").s().p("AgXAvQgMgHgGgMQgIgMAAgQQAAgPAIgMQAGgNAMgGQAMgHAPAAQAPAAALAEQALAFAHAIIgNAPQgFgGgIgDQgIgDgJAAQgIAAgIAFQgGAEgFAHQgDAIAAAJQAAAKADAIQAFAHAGAEQAIAFAIAAQAKAAAIgEQAIgDAGgGIANANQgIAKgLAEQgLAGgQAAQgPgBgMgGg");
	this.shape_190.setTransform(68,-13.1);

	this.shape_191 = new cjs.Shape();
	this.shape_191.graphics.f("#0099CC").s().p("AgcAvQgNgHgGgMQgIgMAAgQQAAgPAIgMQAGgNANgGQAMgHAQAAQAQAAANAHQAMAGAIANQAGAMAAAPQAAAQgGAMQgIAMgMAHQgNAGgQABQgQgBgMgGgAgQgdQgHAEgFAIQgDAIAAAJQAAAQAJAJQAIAKAOAAQAOAAAKgKQAJgJAAgQQAAgJgFgIQgEgIgHgEQgIgEgJgBQgJABgHAEg");
	this.shape_191.setTransform(49.3,-13.1);

	this.shape_192 = new cjs.Shape();
	this.shape_192.graphics.f("#0099CC").s().p("AgfBEQgLgHgGgMQgHgNAAgQQAAgQAHgLQAGgMALgHQAMgHAPAAQAMAAAJAFQAKAFAGAKIAAg9IAXAAIAACUIgXAAIAAgTQgGAKgJAFQgKAFgMAAQgPAAgMgHgAgQgJQgHAFgEAHQgFAIAAAKQAAAKAFAIQAEAIAHAEQAHAEAJAAQAKAAAHgEQAHgEAEgIQAFgIAAgKQAAgKgFgIQgEgHgHgFQgHgEgKAAQgJAAgHAEg");
	this.shape_192.setTransform(35.7,-15.2);

	this.shape_193 = new cjs.Shape();
	this.shape_193.graphics.f("#0099CC").s().p("AgcAvQgMgHgIgMQgGgMAAgQQAAgPAGgMQAIgNAMgGQANgHAPAAQARAAAMAHQANAGAGANQAIAMAAAPQAAAQgIAMQgGAMgNAHQgMAGgRABQgPgBgNgGgAgQgdQgHAEgEAIQgFAIAAAJQAAAQAJAJQAKAKANAAQAPAAAIgKQAJgJAAgQQAAgJgDgIQgFgIgHgEQgHgEgKgBQgIABgIAEg");
	this.shape_193.setTransform(23.2,-13.1);

	this.shape_194 = new cjs.Shape();
	this.shape_194.graphics.f("#0099CC").s().p("ABCA2IAAg7QAAgMgHgHQgGgHgMAAQgKAAgGAFQgHAEgDAHQgEAIABAIIAAA1IgXAAIAAg7QAAgMgHgHQgGgHgMAAQgJAAgGAFQgHAEgEAHQgEAIAAAIIAAA1IgWAAIAAhqIAWAAIAAAVQAHgLAJgFQAKgGANABQAPAAAJAGQAIAHAEAMQAGgNAKgGQAKgHAPABQASAAAKAKQALALAAAUIAABBg");
	this.shape_194.setTransform(6.7,-13.2);

	this.shape_195 = new cjs.Shape();
	this.shape_195.graphics.f("#0099CC").s().p("ABCA2IAAg7QgBgMgGgHQgHgHgMAAQgIAAgHAFQgGAEgEAHQgDAIgBAIIAAA1IgWAAIAAg7QAAgMgGgHQgHgHgLAAQgKAAgGAFQgHAEgDAHQgFAIAAAIIAAA1IgWAAIAAhqIAWAAIAAAVQAHgLAJgFQAKgGAOABQAOAAAJAGQAIAHAFAMQAEgNALgGQAKgHAPABQASAAAKAKQAKALABAUIAABBg");
	this.shape_195.setTransform(-14.2,-13.2);

	this.shape_196 = new cjs.Shape();
	this.shape_196.graphics.f("#0099CC").s().p("AgcAvQgMgHgIgMQgGgMgBgQQABgPAGgMQAIgNAMgGQANgHAPAAQAQAAANAHQAMAGAIANQAGAMABAPQgBAQgGAMQgIAMgMAHQgNAGgQABQgPgBgNgGgAgQgdQgHAEgFAIQgDAIAAAJQgBAQAKAJQAJAKANAAQAOAAAJgKQAKgJgBgQQAAgJgDgIQgFgIgHgEQgIgEgJgBQgIABgIAEg");
	this.shape_196.setTransform(-31,-13.1);

	this.shape_197 = new cjs.Shape();
	this.shape_197.graphics.f("#0099CC").s().p("AgXAvQgMgHgGgMQgIgMABgQQgBgPAIgMQAGgNAMgGQAMgHAPAAQAOAAAMAEQAKAFAIAIIgNAPQgFgGgHgDQgJgDgJAAQgIAAgIAFQgHAEgDAHQgFAIAAAJQAAAKAFAIQADAHAHAEQAIAFAIAAQAKAAAIgEQAIgDAFgGIAOANQgIAKgLAEQgMAGgPAAQgPgBgMgGg");
	this.shape_197.setTransform(-42.9,-13.1);

	this.shape_198 = new cjs.Shape();
	this.shape_198.graphics.f("#0099CC").s().p("AgdAxQgIgEgFgHQgEgIgBgJQABgOAKgIQAKgIAUgBIAfAAIAAgDQAAgKgHgGQgGgFgMgBQgHABgIACQgIACgIAGIgJgQIAOgHIAOgFQAHgBAKAAQAUAAALAJQALAKAAASIABBFIgXAAIAAgNQgGAHgJAEQgJADgKAAQgMAAgIgFgAgUAJQgFAEAAAHQAAAHAGAEQAFAFAKAAQALgBAJgFQAIgGABgIIAAgKIgcAAIgDAAQgJAAgFADg");
	this.shape_198.setTransform(-61.4,-13.1);

	this.shape_199 = new cjs.Shape();
	this.shape_199.graphics.f("#0099CC").s().p("AgZAvQgMgHgHgMQgHgMAAgQQAAgPAHgMQAHgNAMgGQAMgHAPAAQATAAALAIQAMAHAFAOQAEAOgBATIhPAAQACAMAJAHQAJAHAMAAQAIAAAIgDQAIgDAGgGIAMANQgIAJgLAEQgLAEgOABQgQgBgMgGgAAggHQgBgNgIgHQgIgIgNAAQgMAAgIAIQgIAHgCANIA8AAIAAAAg");
	this.shape_199.setTransform(-72.8,-13.1);

	this.shape_200 = new cjs.Shape();
	this.shape_200.graphics.f("#0099CC").s().p("AAaA1IgagnIgaAnIgZAAIAlg1Igjg0IAbAAIAWAkIAZgkIAZAAIgiA0IAkA1g");
	this.shape_200.setTransform(-91,-13.1);

	this.shape_201 = new cjs.Shape();
	this.shape_201.graphics.f("#0099CC").s().p("AgZAvQgMgHgHgMQgHgMAAgQQAAgPAHgMQAHgNAMgGQAMgHAPAAQATAAALAIQAMAHAFAOQAEAOgBATIhPAAQACAMAJAHQAJAHAMAAQAIAAAIgDQAIgDAGgGIAMANQgIAJgLAEQgLAEgOABQgQgBgMgGgAAggHQgBgNgIgHQgIgIgNAAQgMAAgIAIQgIAHgCANIA8AAIAAAAg");
	this.shape_201.setTransform(-102.4,-13.1);

	this.shape_202 = new cjs.Shape();
	this.shape_202.graphics.f("#0099CC").s().p("Ag3BJIAAiRIAYAAIAAATQAFgKAKgEQAJgFAMAAQAPAAAMAHQALAGAGANQAHAMgBAQQABAQgHALQgGAMgLAHQgMAGgPABQgLgBgKgEQgKgFgFgJIAAA5gAgQgwQgHAEgFAIQgDAHAAALQAAAPAJAJQAIAJAOAAQAJAAAHgFQAIgEAEgGQAEgJABgJQgBgLgEgHQgEgIgIgEQgHgFgJAAQgJAAgHAFg");
	this.shape_202.setTransform(-121.2,-11.2);

	this.shape_203 = new cjs.Shape();
	this.shape_203.graphics.f("#0099CC").s().p("AgKBLIAAhpIAVAAIAABpgAgIgzQgEgEgBgFQABgHAEgDQADgEAFAAQAGAAADAEQAEADAAAHQAAAFgEAEQgDAEgGAAQgFAAgDgEg");
	this.shape_203.setTransform(-131.4,-15.3);

	this.shape_204 = new cjs.Shape();
	this.shape_204.graphics.f("#0099CC").s().p("AgnArQgJgLgBgTIAAhCIAXAAIAAA7QAAAMAHAHQAHAHALAAQAIAAAGgFQAHgEADgHQAEgIAAgIIAAg1IAXAAIAABqIgXAAIAAgVQgGALgJAFQgKAFgMABQgSgBgLgKg");
	this.shape_204.setTransform(-141,-13.1);

	this.shape_205 = new cjs.Shape();
	this.shape_205.graphics.f("#0099CC").s().p("AAhBJIAAg5QgGAJgJAFQgKAFgMAAQgPAAgMgHQgLgHgGgMQgHgLAAgQQAAgQAHgMQAGgNALgGQAMgHAPAAQAMAAAJAFQAKAFAGAJIAAgSIAXAAIAACQgAgQgwQgHAEgEAIQgFAIAAAKQAAALAFAHQAEAHAHAEQAHAFAJAAQAKAAAHgFQAHgEAEgHQAFgHAAgLQAAgKgFgIQgEgIgHgEQgHgEgKgBQgJABgHAEg");
	this.shape_205.setTransform(-154.7,-11.2);

	this.shape_206 = new cjs.Shape();
	this.shape_206.graphics.f("#0099CC").s().p("AgKBLIAAhpIAVAAIAABpgAgIgzQgEgEgBgFQABgHAEgDQADgEAFAAQAGAAADAEQAEADAAAHQAAAFgEAEQgDAEgGAAQgFAAgDgEg");
	this.shape_206.setTransform(-163.8,-15.3);

	this.shape_207 = new cjs.Shape();
	this.shape_207.graphics.f("#0099CC").s().p("AgKBKIAAiTIAVAAIAACTg");
	this.shape_207.setTransform(-169.6,-15.2);

	this.shape_208 = new cjs.Shape();
	this.shape_208.graphics.f("#0099CC").s().p("AgdAxQgIgEgFgHQgEgIgBgJQABgOAKgIQAKgIAUgBIAfAAIAAgDQAAgKgHgGQgGgFgMgBQgHABgIACQgIACgIAGIgJgQIAOgHIAOgFQAHgBAKAAQAUAAALAJQALAKAAASIABBFIgXAAIAAgNQgGAHgJAEQgJADgKAAQgMAAgIgFgAgUAJQgFAEAAAHQAAAHAGAEQAFAFAKAAQALgBAJgFQAIgGABgIIAAgKIgcAAIgDAAQgJAAgFADg");
	this.shape_208.setTransform(-178.6,-13.1);

	this.shape_209 = new cjs.Shape();
	this.shape_209.graphics.f("#0099CC").s().p("AgEA/QgHgDgEgHQgEgHgBgLIAAg2IgPAAIAAgRIAPAAIAAgdIAXAAIAAAdIAfAAIAAARIgfAAIAAAyQAAAIACADQADAEAGgBIAIgBIAIgDIAFARQgFAEgHACQgHACgHAAQgIAAgFgDg");
	this.shape_209.setTransform(-194.9,-14.3);

	this.shape_210 = new cjs.Shape();
	this.shape_210.graphics.f("#0099CC").s().p("AgnArQgJgLgBgTIAAhCIAXAAIAAA7QAAAMAHAHQAHAHALAAQAIAAAGgFQAHgEADgHQAEgIAAgIIAAg1IAXAAIAABqIgXAAIAAgVQgGALgJAFQgKAFgMABQgSgBgLgKg");
	this.shape_210.setTransform(-205.8,-13.1);

	this.shape_211 = new cjs.Shape();
	this.shape_211.graphics.f("#0099CC").s().p("AgLBLIAAhpIAWAAIAABpgAgIgzQgFgEAAgFQAAgHAFgDQADgEAFAAQAGAAAEAEQADADAAAHQAAAFgDAEQgEAEgGAAQgFAAgDgEg");
	this.shape_211.setTransform(-221.7,-15.3);

	this.shape_212 = new cjs.Shape();
	this.shape_212.graphics.f("#0099CC").s().p("AgWAyQgLgDgIgIIAJgQQAEAEAGADIAMAFIAMABQAIAAAEgDQAFgCABgGQgBgHgGgDQgFgDgIgDIgQgFQgIgDgGgGQgFgGAAgLQAAgLAFgHQAFgHAKgDQAIgDAKAAQAKAAAKADQAJACAIAGIgJARQgGgFgJgCQgIgDgHAAQgGAAgFADQgEACAAAGQABAFAFAEQAGADAHACIARAGQAIADAGAGQAGAGAAALQAAALgGAHQgFAHgKAEQgJADgLAAQgLAAgMgEg");
	this.shape_212.setTransform(-229.4,-13.1);

	this.shape_213 = new cjs.Shape();
	this.shape_213.graphics.f("#0099CC").s().p("AgKBLIAAhpIAVAAIAABpgAgIgzQgFgEAAgFQAAgHAFgDQADgEAFAAQAGAAAEAEQADADAAAHQAAAFgDAEQgEAEgGAAQgFAAgDgEg");
	this.shape_213.setTransform(-236.8,-15.3);

	this.shape_214 = new cjs.Shape();
	this.shape_214.graphics.f("#0099CC").s().p("AAcA2IAAg7QAAgMgHgHQgGgHgNAAQgMAAgIAJQgIAHgBANIAAA4IgXAAIAAhqIAXAAIAAAVQAGgLAKgFQAJgGANABQATAAAKAKQALALAAAUIAABBg");
	this.shape_214.setTransform(-246.1,-13.2);

	this.shape_215 = new cjs.Shape();
	this.shape_215.graphics.f("#0099CC").s().p("AgWAyQgLgDgIgIIAJgQQAEAEAGADIAMAFIAMABQAIAAAEgDQAFgCABgGQgBgHgGgDQgFgDgIgDIgQgFQgIgDgGgGQgFgGAAgLQAAgLAFgHQAFgHAKgDQAIgDAKAAQAKAAAKADQAJACAIAGIgJARQgGgFgJgCQgIgDgHAAQgGAAgFADQgEACAAAGQABAFAFAEQAGADAHACIARAGQAIADAGAGQAGAGAAALQAAALgGAHQgFAHgKAEQgJADgLAAQgLAAgMgEg");
	this.shape_215.setTransform(-264.5,-13.1);

	this.shape_216 = new cjs.Shape();
	this.shape_216.graphics.f("#0099CC").s().p("AgKBLIAAhpIAVAAIAABpgAgIgzQgEgEgBgFQABgHAEgDQADgEAFAAQAGAAAEAEQADADAAAHQAAAFgDAEQgEAEgGAAQgFAAgDgEg");
	this.shape_216.setTransform(-271.9,-15.3);

	this.shape_217 = new cjs.Shape();
	this.shape_217.graphics.f("#0099CC").s().p("AgdA1IAAhpIAXAAIAAAVQAGgKAIgGQAJgGANAAIAAAWQgLAAgIADQgHAEgFAHQgEAGgBAKIAAA2g");
	this.shape_217.setTransform(-278,-13.1);

	this.shape_218 = new cjs.Shape();
	this.shape_218.graphics.f("#0099CC").s().p("AgcAvQgNgHgGgMQgIgMABgQQgBgPAIgMQAGgNANgGQAMgHAQAAQARAAAMAHQANAGAGANQAIAMgBAPQABAQgIAMQgGAMgNAHQgMAGgRABQgQgBgMgGgAgQgdQgHAEgEAIQgFAIAAAJQABAQAIAJQAJAKAOAAQAPAAAJgKQAIgJABgQQgBgJgEgIQgEgIgHgEQgHgEgKgBQgIABgIAEg");
	this.shape_218.setTransform(-288.9,-13.1);

	this.shape_219 = new cjs.Shape();
	this.shape_219.graphics.f("#0099CC").s().p("AgQBGQgJgFgHgKIAAATIgWAAIAAiUIAWAAIAAA9QAHgKAJgEQAJgFAMAAQAPAAAMAGQAKAHAHAMQAGAMAAAQQAAAQgGAMQgGAMgLAHQgMAGgPABQgMgBgJgEgAgQgJQgHAFgEAGQgEAIgBAKQABAQAIAJQAKAKANAAQAJAAAIgFQAHgEAEgIQAEgIABgKQgBgKgEgIQgEgGgHgFQgIgEgJAAQgJAAgHAEg");
	this.shape_219.setTransform(-301.4,-15.2);

	this.shape_220 = new cjs.Shape();
	this.shape_220.graphics.f("#0099CC").s().p("AgdAxQgIgEgFgHQgEgIgBgJQABgOAKgIQAKgIAUgBIAfAAIAAgDQAAgKgHgGQgGgFgMgBQgHABgIACQgIACgIAGIgJgQIAOgHIAOgFQAHgBAKAAQAUAAALAJQALAKAAASIABBFIgXAAIAAgNQgGAHgJAEQgJADgKAAQgMAAgIgFgAgUAJQgFAEAAAHQAAAHAGAEQAFAFAKAAQALgBAJgFQAIgGABgIIAAgKIgcAAIgDAAQgJAAgFADg");
	this.shape_220.setTransform(-314.9,-13.1);

	this.shape_221 = new cjs.Shape();
	this.shape_221.graphics.f("#0099CC").s().p("AgLBKIAAiTIAWAAIAACTg");
	this.shape_221.setTransform(-323.3,-15.2);

	this.shape_222 = new cjs.Shape();
	this.shape_222.graphics.f("#0099CC").s().p("AgcAvQgMgHgIgMQgGgMgBgQQABgQAGgMQAIgLAMgIQANgGAPAAQAQAAANAGQAMAIAHALQAIAMAAAQQAAAQgIAMQgHAMgMAHQgNAHgQAAQgPAAgNgHgAgQgdQgHAEgFAIQgEAHAAAKQAAAPAJAKQAKAJANAAQAPAAAIgJQAKgKgBgPQAAgKgDgHQgFgIgHgEQgIgFgJABQgJgBgHAFg");
	this.shape_222.setTransform(320.1,-46);

	this.shape_223 = new cjs.Shape();
	this.shape_223.graphics.f("#0099CC").s().p("AgXAvQgMgHgGgMQgIgMABgQQgBgPAIgNQAGgLAMgIQAMgGAPAAQAOAAAMAFQAKAEAIAIIgNAPQgFgGgHgDQgJgDgJAAQgIAAgIAEQgGAEgEAIQgEAIgBAJQABAKAEAHQAEAIAGAFQAIAEAIAAQAKAAAIgDQAIgDAFgHIAOANQgIAJgLAGQgMAEgPABQgPAAgMgHg");
	this.shape_223.setTransform(308.2,-46);

	this.shape_224 = new cjs.Shape();
	this.shape_224.graphics.f("#0099CC").s().p("ABCA2IAAg7QgBgMgGgHQgHgHgMAAQgIAAgHAFQgGAEgEAHQgDAIgBAIIAAA1IgWAAIAAg7QAAgMgGgHQgHgHgLAAQgKAAgGAFQgHAEgDAHQgFAIAAAIIAAA1IgWAAIAAhqIAWAAIAAAVQAHgLAJgFQAKgGAOABQAOAAAJAGQAIAHAFAMQAEgNALgGQAKgHAPABQASAAAKAKQAKALABAUIAABBg");
	this.shape_224.setTransform(292.3,-46.1);

	this.shape_225 = new cjs.Shape();
	this.shape_225.graphics.f("#0099CC").s().p("AgdAyQgIgEgFgIQgEgHgBgKQABgPAKgHQAKgIAUgBIAfAAIAAgDQAAgKgHgGQgGgGgMAAQgHAAgIADQgIACgIAGIgJgQIAOgIIAOgDQAHgCAKAAQAUAAALAJQALALAAARIABBFIgXAAIAAgNQgGAHgJADQgJAEgKAAQgMAAgIgEgAgUAJQgFAEAAAHQAAAIAGAEQAFADAKABQALAAAJgGQAIgFABgKIAAgJIgcAAIgDAAQgJAAgFADg");
	this.shape_225.setTransform(275.6,-46);

	this.shape_226 = new cjs.Shape();
	this.shape_226.graphics.f("#0099CC").s().p("AgLBKIAAiTIAXAAIAACTg");
	this.shape_226.setTransform(267.1,-48.1);

	this.shape_227 = new cjs.Shape();
	this.shape_227.graphics.f("#0099CC").s().p("AgKBKIAAiTIAWAAIAACTg");
	this.shape_227.setTransform(261.3,-48.1);

	this.shape_228 = new cjs.Shape();
	this.shape_228.graphics.f("#0099CC").s().p("AgmArQgLgLAAgTIAAhCIAXAAIAAA7QAAAMAHAHQAGAHAMAAQAIAAAHgFQAGgEAEgHQADgIAAgIIAAg1IAXAAIAABqIgXAAIAAgVQgFALgKAFQgKAFgMABQgTgBgJgKg");
	this.shape_228.setTransform(251.6,-46);

	this.shape_229 = new cjs.Shape();
	this.shape_229.graphics.f("#0099CC").s().p("AAcA2IAAg7QgBgMgGgHQgHgHgMAAQgMAAgIAJQgHAHgCANIAAA4IgXAAIAAhqIAXAAIAAAVQAGgLAKgFQAKgGAMABQATAAALAKQAJALABAUIAABBg");
	this.shape_229.setTransform(222.8,-46.1);

	this.shape_230 = new cjs.Shape();
	this.shape_230.graphics.f("#0099CC").s().p("AgcAvQgNgHgGgMQgIgMABgQQgBgQAIgMQAGgLANgIQAMgGAQAAQARAAAMAGQANAIAGALQAIAMgBAQQABAQgIAMQgGAMgNAHQgMAHgRAAQgQAAgMgHgAgQgdQgHAEgEAIQgEAHgBAKQABAPAIAKQAJAJAOAAQAPAAAJgJQAIgKABgPQAAgKgFgHQgEgIgHgEQgIgFgJABQgJgBgHAFg");
	this.shape_230.setTransform(209.8,-46);

	this.shape_231 = new cjs.Shape();
	this.shape_231.graphics.f("#0099CC").s().p("AgKBLIAAhpIAVAAIAABpgAgIgzQgEgEgBgFQABgHAEgDQADgEAFAAQAGAAADAEQAEADAAAHQAAAFgEAEQgDAEgGAAQgFAAgDgEg");
	this.shape_231.setTransform(200.7,-48.2);

	this.shape_232 = new cjs.Shape();
	this.shape_232.graphics.f("#0099CC").s().p("AgFA/QgGgDgEgHQgEgHAAgLIAAg2IgPAAIAAgRIAPAAIAAgdIAVAAIAAAdIAgAAIAAARIggAAIAAAyQAAAIADADQADAEAGgBIAHgBIAJgDIAGARQgHAEgGACQgHACgGAAQgIAAgHgDg");
	this.shape_232.setTransform(193.8,-47.2);

	this.shape_233 = new cjs.Shape();
	this.shape_233.graphics.f("#0099CC").s().p("AgdAyQgIgEgFgIQgEgHgBgKQABgPAKgHQAKgIAUgBIAfAAIAAgDQAAgKgHgGQgGgGgMAAQgHAAgIADQgIACgIAGIgJgQIAOgIIAOgDQAHgCAKAAQAUAAALAJQALALAAARIABBFIgXAAIAAgNQgGAHgJADQgJAEgKAAQgMAAgIgEgAgUAJQgFAEAAAHQAAAIAGAEQAFADAKABQALAAAJgGQAIgFABgKIAAgJIgcAAIgDAAQgJAAgFADg");
	this.shape_233.setTransform(183.6,-46);

	this.shape_234 = new cjs.Shape();
	this.shape_234.graphics.f("#0099CC").s().p("AgFA/QgGgDgEgHQgEgHAAgLIAAg2IgPAAIAAgRIAPAAIAAgdIAVAAIAAAdIAgAAIAAARIggAAIAAAyQAAAIADADQADAEAGgBIAHgBIAJgDIAGARQgHAEgGACQgHACgGAAQgJAAgGgDg");
	this.shape_234.setTransform(174,-47.2);

	this.shape_235 = new cjs.Shape();
	this.shape_235.graphics.f("#0099CC").s().p("AgKBLIAAhpIAVAAIAABpgAgIgzQgEgEAAgFQAAgHAEgDQADgEAFAAQAGAAADAEQAEADABAHQgBAFgEAEQgDAEgGAAQgFAAgDgEg");
	this.shape_235.setTransform(167,-48.2);

	this.shape_236 = new cjs.Shape();
	this.shape_236.graphics.f("#0099CC").s().p("AgXAvQgMgHgGgMQgIgMAAgQQAAgPAIgNQAGgLAMgIQAMgGAPAAQAPAAALAFQALAEAHAIIgMAPQgGgGgIgDQgHgDgKAAQgIAAgIAEQgHAEgEAIQgDAIAAAJQAAAKADAHQAEAIAHAFQAIAEAIAAQAKAAAIgDQAIgDAGgHIAMANQgHAJgLAGQgMAEgPABQgPAAgMgHg");
	this.shape_236.setTransform(158.5,-46);

	this.shape_237 = new cjs.Shape();
	this.shape_237.graphics.f("#0099CC").s().p("AgdA2IAAhqIAXAAIAAAVQAFgLAJgFQAJgFANAAIAAAVQgLAAgIAEQgIADgEAHQgEAGgBAKIAAA3g");
	this.shape_237.setTransform(149.7,-46);

	this.shape_238 = new cjs.Shape();
	this.shape_238.graphics.f("#0099CC").s().p("AgZAvQgMgHgHgMQgHgMAAgQQAAgPAHgNQAHgLAMgIQAMgGAPAAQATAAALAHQAMAIAFAOQAEAOgBASIhPAAQACANAJAHQAJAHAMAAQAIAAAIgDQAIgDAGgGIAMANQgIAJgLAEQgLAFgOAAQgQAAgMgHgAAggHQgBgNgIgIQgIgHgNAAQgMAAgIAHQgIAIgCANIA8AAIAAAAg");
	this.shape_238.setTransform(139.1,-46);

	this.shape_239 = new cjs.Shape();
	this.shape_239.graphics.f("#0099CC").s().p("AAaA1IgagnIgaAnIgZAAIAlg1Igjg0IAbAAIAWAkIAZgkIAZAAIgiA0IAkA1g");
	this.shape_239.setTransform(127.7,-46);

	this.shape_240 = new cjs.Shape();
	this.shape_240.graphics.f("#0099CC").s().p("AgZAvQgMgHgHgMQgHgMAAgQQAAgPAHgNQAHgLAMgIQAMgGAPAAQATAAALAHQAMAIAFAOQAEAOgBASIhPAAQACANAJAHQAJAHAMAAQAIAAAIgDQAIgDAGgGIAMANQgIAJgLAEQgLAFgOAAQgQAAgMgHgAAggHQgBgNgIgIQgIgHgNAAQgMAAgIAHQgIAIgCANIA8AAIAAAAg");
	this.shape_240.setTransform(116.3,-46);

	this.shape_241 = new cjs.Shape();
	this.shape_241.graphics.f("#0099CC").s().p("AgfBEQgLgHgGgMQgHgNAAgQQAAgQAHgLQAGgMALgHQAMgHAPAAQAMAAAJAFQAKAFAGAKIAAg9IAXAAIAACUIgXAAIAAgTQgGAKgJAFQgKAFgMAAQgPAAgMgHgAgQgJQgHAFgEAHQgFAIAAAKQAAAKAFAIQAEAIAHAEQAHAEAJAAQAKAAAHgEQAHgEAEgIQAFgIAAgKQAAgKgFgIQgEgHgHgFQgHgEgKAAQgJAAgHAEg");
	this.shape_241.setTransform(87.1,-48.1);

	this.shape_242 = new cjs.Shape();
	this.shape_242.graphics.f("#0099CC").s().p("AgnArQgJgLgBgTIAAhCIAXAAIAAA7QAAAMAHAHQAHAHALAAQAIAAAGgFQAHgEADgHQAEgIAAgIIAAg1IAXAAIAABqIgXAAIAAgVQgGALgJAFQgKAFgMABQgSgBgLgKg");
	this.shape_242.setTransform(74.1,-46);

	this.shape_243 = new cjs.Shape();
	this.shape_243.graphics.f("#0099CC").s().p("AgdA2IAAhqIAXAAIAAAVQAFgLAJgFQAJgFANAAIAAAVQgLAAgIAEQgHADgEAHQgFAGgBAKIAAA3g");
	this.shape_243.setTransform(64.6,-46);

	this.shape_244 = new cjs.Shape();
	this.shape_244.graphics.f("#0099CC").s().p("AgFA/QgGgDgEgHQgEgHAAgLIAAg2IgQAAIAAgRIAQAAIAAgdIAVAAIAAAdIAgAAIAAARIggAAIAAAyQAAAIAEADQADAEAFgBIAHgBIAJgDIAFARQgFAEgHACQgHACgHAAQgHAAgHgDg");
	this.shape_244.setTransform(55.9,-47.2);

	this.shape_245 = new cjs.Shape();
	this.shape_245.graphics.f("#0099CC").s().p("AgWAyQgLgDgIgIIAJgQQAEAEAGADIAMAFIAMABQAIAAAEgDQAFgCABgGQgBgHgGgDQgFgDgIgDIgQgFQgIgDgGgGQgFgGAAgLQAAgLAFgHQAFgHAKgDQAIgDAKAAQAKAAAKADQAJACAIAGIgJARQgGgFgJgCQgIgDgHAAQgGAAgFADQgEACABAGQAAAFAFAEQAGADAHACIARAGQAIADAGAGQAGAGAAALQAAALgGAHQgFAHgKAEQgJADgLAAQgLAAgMgEg");
	this.shape_245.setTransform(46.9,-46);

	this.shape_246 = new cjs.Shape();
	this.shape_246.graphics.f("#0099CC").s().p("AgcAvQgNgHgGgMQgIgMABgQQgBgQAIgMQAGgLANgIQAMgGAQAAQARAAAMAGQANAIAGALQAIAMgBAQQABAQgIAMQgGAMgNAHQgMAHgRAAQgQAAgMgHgAgQgdQgHAEgEAIQgEAHgBAKQABAPAIAKQAJAJAOAAQAPAAAJgJQAIgKABgPQAAgKgFgHQgEgIgHgEQgIgFgJABQgJgBgHAFg");
	this.shape_246.setTransform(36.1,-46);

	this.shape_247 = new cjs.Shape();
	this.shape_247.graphics.f("#0099CC").s().p("AAcA2IAAg7QAAgMgHgHQgHgHgMAAQgMAAgIAJQgIAHgBANIAAA4IgXAAIAAhqIAXAAIAAAVQAGgLAKgFQAKgGAMABQATAAAKAKQAKALABAUIAABBg");
	this.shape_247.setTransform(23.4,-46.1);

	this.shape_248 = new cjs.Shape();
	this.shape_248.graphics.f("#0099CC").s().p("AgVAyQgLgDgJgIIAJgQQAEAEAGADIAMAFIAMABQAIAAAFgDQAEgCAAgGQAAgHgFgDQgGgDgIgDIgQgFQgIgDgFgGQgGgGgBgLQABgLAFgHQAGgHAIgDQAJgDAKAAQAKAAAKADQAKACAHAGIgIARQgIgFgIgCQgIgDgHAAQgGAAgFADQgDACAAAGQgBAFAGAEQAGADAIACIAQAGQAIADAGAGQAFAGABALQgBALgFAHQgGAHgJAEQgJADgLAAQgLAAgLgEg");
	this.shape_248.setTransform(-4.2,-46);

	this.shape_249 = new cjs.Shape();
	this.shape_249.graphics.f("#0099CC").s().p("AgLBLIAAhpIAWAAIAABpgAgJgzQgEgEAAgFQAAgHAEgDQAEgEAFAAQAGAAAEAEQADADAAAHQAAAFgDAEQgEAEgGAAQgFAAgEgEg");
	this.shape_249.setTransform(-11.7,-48.2);

	this.shape_250 = new cjs.Shape();
	this.shape_250.graphics.f("#0099CC").s().p("AgnArQgKgLAAgTIAAhCIAXAAIAAA7QAAAMAHAHQAGAHAMAAQAIAAAHgFQAGgEADgHQAEgIAAgIIAAg1IAXAAIAABqIgXAAIAAgVQgGALgJAFQgKAFgMABQgTgBgKgKg");
	this.shape_250.setTransform(-21.2,-46);

	this.shape_251 = new cjs.Shape();
	this.shape_251.graphics.f("#0099CC").s().p("AAhBJIAAg5QgGAJgJAFQgKAFgMAAQgPAAgMgHQgLgHgGgMQgHgLAAgQQAAgQAHgMQAGgNALgGQAMgHAPAAQAMAAAJAFQAKAFAGAJIAAgSIAXAAIAACQgAgQgwQgHAEgEAIQgFAIAAAKQAAALAFAHQAEAHAHAEQAHAFAJAAQAKAAAHgFQAHgEAEgHQAFgHAAgLQAAgKgFgIQgEgIgHgEQgHgEgKgBQgJABgHAEg");
	this.shape_251.setTransform(-35,-44.1);

	this.shape_252 = new cjs.Shape();
	this.shape_252.graphics.f("#0099CC").s().p("AgMAUIAHgRIgEgEIgBgGQAAgFAEgEQADgDAFAAQAFAAADADQADADABAGIgBAGIgDAEIgLARg");
	this.shape_252.setTransform(-59.5,-41.1);

	this.shape_253 = new cjs.Shape();
	this.shape_253.graphics.f("#0099CC").s().p("ABCA2IAAg7QgBgMgGgHQgHgHgMAAQgIAAgHAFQgGAEgEAHQgDAIgBAIIAAA1IgWAAIAAg7QAAgMgGgHQgHgHgLAAQgKAAgGAFQgHAEgDAHQgFAIAAAIIAAA1IgWAAIAAhqIAWAAIAAAVQAHgLAJgFQAKgGAOABQAOAAAJAGQAIAHAFAMQAEgNALgGQAKgHAPABQASAAAKAKQAKALABAUIAABBg");
	this.shape_253.setTransform(-71.8,-46.1);

	this.shape_254 = new cjs.Shape();
	this.shape_254.graphics.f("#0099CC").s().p("AgdAyQgIgEgFgIQgEgHgBgKQABgPAKgHQAKgIAUgBIAfAAIAAgDQAAgKgHgGQgGgGgMAAQgHAAgIADQgIACgIAGIgJgQIAOgIIAOgDQAHgCAKAAQAUAAALAJQALALAAARIABBFIgXAAIAAgNQgGAHgJADQgJAEgKAAQgMAAgIgEgAgUAJQgFAEAAAHQAAAIAGAEQAFADAKABQALAAAJgGQAIgFABgKIAAgJIgcAAIgDAAQgJAAgFADg");
	this.shape_254.setTransform(-88.5,-46);

	this.shape_255 = new cjs.Shape();
	this.shape_255.graphics.f("#0099CC").s().p("AgKBLIAAhpIAVAAIAABpgAgIgzQgFgEAAgFQAAgHAFgDQADgEAFAAQAGAAAEAEQADADAAAHQAAAFgDAEQgEAEgGAAQgFAAgDgEg");
	this.shape_255.setTransform(-96.9,-48.2);

	this.shape_256 = new cjs.Shape();
	this.shape_256.graphics.f("#0099CC").s().p("AAcA2IAAg7QAAgMgHgHQgGgHgNAAQgMAAgIAJQgIAHgBANIAAA4IgXAAIAAhqIAXAAIAAAVQAGgLAKgFQAJgGANABQATAAAKAKQALALAAAUIAABBg");
	this.shape_256.setTransform(-106.2,-46.1);

	this.shape_257 = new cjs.Shape();
	this.shape_257.graphics.f("#0099CC").s().p("AgZAvQgMgHgHgMQgHgMAAgQQAAgPAHgNQAHgLAMgIQAMgGAPAAQATAAALAHQAMAIAFAOQAEAOgBASIhPAAQACANAJAHQAJAHAMAAQAIAAAIgDQAIgDAGgGIAMANQgIAJgLAEQgLAFgOAAQgQAAgMgHgAAggHQgBgNgIgIQgIgHgNAAQgMAAgIAHQgIAIgCANIA8AAIAAAAg");
	this.shape_257.setTransform(-118.8,-46);

	this.shape_258 = new cjs.Shape();
	this.shape_258.graphics.f("#0099CC").s().p("AgLA1IgphpIAYAAIAdBTIAdhTIAXAAIgpBpg");
	this.shape_258.setTransform(-129.8,-46);

	this.shape_259 = new cjs.Shape();
	this.shape_259.graphics.f("#0099CC").s().p("ABCA2IAAg7QAAgMgHgHQgGgHgMAAQgJAAgHAFQgGAEgEAHQgEAIAAAIIAAA1IgVAAIAAg7QgBgMgHgHQgGgHgMAAQgJAAgHAFQgGAEgEAHQgDAIAAAIIAAA1IgXAAIAAhqIAXAAIAAAVQAFgLAKgFQAKgGANABQAPAAAJAGQAJAHADAMQAGgNAKgGQAKgHAPABQASAAALAKQAKALAAAUIAABBg");
	this.shape_259.setTransform(-161.4,-46.1);

	this.shape_260 = new cjs.Shape();
	this.shape_260.graphics.f("#0099CC").s().p("AgLBLIAAhpIAWAAIAABpgAgIgzQgFgEAAgFQAAgHAFgDQADgEAFAAQAGAAAEAEQADADAAAHQAAAFgDAEQgEAEgGAAQgFAAgDgEg");
	this.shape_260.setTransform(-174.8,-48.2);

	this.shape_261 = new cjs.Shape();
	this.shape_261.graphics.f("#0099CC").s().p("AAcA2IAAg7QAAgMgHgHQgGgHgNAAQgMAAgIAJQgIAHgBANIAAA4IgXAAIAAhqIAXAAIAAAVQAGgLAKgFQAJgGANABQATAAALAKQAKALAAAUIAABBg");
	this.shape_261.setTransform(-184.1,-46.1);

	this.shape_262 = new cjs.Shape();
	this.shape_262.graphics.f("#0099CC").s().p("AgKBLIAAhpIAVAAIAABpgAgJgzQgDgEAAgFQAAgHADgDQAEgEAFAAQAGAAADAEQAEADABAHQgBAFgEAEQgDAEgGAAQgFAAgEgEg");
	this.shape_262.setTransform(-193.8,-48.2);

	this.shape_263 = new cjs.Shape();
	this.shape_263.graphics.f("#0099CC").s().p("ABCA2IAAg7QgBgMgGgHQgHgHgMAAQgJAAgGAFQgHAEgDAHQgDAIAAAIIAAA1IgXAAIAAg7QAAgMgGgHQgHgHgLAAQgKAAgGAFQgHAEgDAHQgFAIAAAIIAAA1IgWAAIAAhqIAWAAIAAAVQAHgLAJgFQAKgGAOABQAOAAAJAGQAIAHAFAMQAEgNALgGQAKgHAPABQASAAAKAKQALALAAAUIAABBg");
	this.shape_263.setTransform(-206.9,-46.1);

	this.shape_264 = new cjs.Shape();
	this.shape_264.graphics.f("#0099CC").s().p("AgfBEQgLgHgGgMQgHgNAAgQQAAgQAHgLQAGgMALgHQAMgHAPAAQAMAAAJAFQAKAFAGAKIAAg9IAXAAIAACUIgXAAIAAgTQgGAKgJAFQgKAFgMAAQgPAAgMgHgAgQgJQgHAFgEAHQgFAIAAAKQAAAKAFAIQAEAIAHAEQAHAEAJAAQAKAAAHgEQAHgEAEgIQAFgIAAgKQAAgKgFgIQgEgHgHgFQgHgEgKAAQgJAAgHAEg");
	this.shape_264.setTransform(-240.9,-48.1);

	this.shape_265 = new cjs.Shape();
	this.shape_265.graphics.f("#0099CC").s().p("AgdAyQgIgEgFgIQgEgHgBgKQABgPAKgHQAKgIAUgBIAfAAIAAgDQAAgKgHgGQgGgGgMAAQgHAAgIADQgIACgIAGIgJgQIAOgIIAOgDQAHgCAKAAQAUAAALAJQALALAAARIABBFIgXAAIAAgNQgGAHgJADQgJAEgKAAQgMAAgIgEgAgUAJQgFAEAAAHQAAAIAGAEQAFADAKABQALAAAJgGQAIgFABgKIAAgJIgcAAIgDAAQgJAAgFADg");
	this.shape_265.setTransform(-253.2,-46);

	this.shape_266 = new cjs.Shape();
	this.shape_266.graphics.f("#0099CC").s().p("ABCA2IAAg7QAAgMgHgHQgGgHgMAAQgKAAgGAFQgGAEgEAHQgDAIAAAIIAAA1IgXAAIAAg7QAAgMgHgHQgGgHgMAAQgJAAgHAFQgGAEgEAHQgDAIAAAIIAAA1IgXAAIAAhqIAXAAIAAAVQAFgLAKgFQAKgGANABQAPAAAJAGQAJAHADAMQAGgNAKgGQAKgHAPABQASAAAKAKQALALAAAUIAABBg");
	this.shape_266.setTransform(-285,-46.1);

	this.shape_267 = new cjs.Shape();
	this.shape_267.graphics.f("#0099CC").s().p("AgKBLIAAhpIAVAAIAABpgAgIgzQgFgEAAgFQAAgHAFgDQADgEAFAAQAGAAAEAEQADADAAAHQAAAFgDAEQgEAEgGAAQgFAAgDgEg");
	this.shape_267.setTransform(-298.5,-48.2);

	this.shape_268 = new cjs.Shape();
	this.shape_268.graphics.f("#0099CC").s().p("AAcA2IAAg7QAAgMgHgHQgGgHgNAAQgMAAgIAJQgIAHgBANIAAA4IgXAAIAAhqIAXAAIAAAVQAGgLAKgFQAJgGANABQATAAAKAKQALALAAAUIAABBg");
	this.shape_268.setTransform(-307.8,-46.1);

	this.shape_269 = new cjs.Shape();
	this.shape_269.graphics.f("#0099CC").s().p("AgZAvQgMgHgHgMQgHgMAAgQQAAgPAHgNQAHgLAMgIQAMgGAPAAQATAAALAHQAMAIAFAOQAEAOgBASIhPAAQACANAJAHQAJAHAMAAQAIAAAIgDQAIgDAGgGIAMANQgIAJgLAEQgLAFgOAAQgQAAgMgHgAAggHQgBgNgIgIQgIgHgNAAQgMAAgIAHQgIAIgCANIA8AAIAAAAg");
	this.shape_269.setTransform(-320.4,-46);

	this.shape_270 = new cjs.Shape();
	this.shape_270.graphics.f("#0099CC").s().p("AgFA/QgGgDgEgHQgEgHgBgLIAAg2IgOAAIAAgRIAOAAIAAgdIAWAAIAAAdIAgAAIAAARIggAAIAAAyQAAAIADADQAEAEAFgBIAHgBIAJgDIAGARQgHAEgGACQgHACgGAAQgIAAgHgDg");
	this.shape_270.setTransform(322,-80.1);

	this.shape_271 = new cjs.Shape();
	this.shape_271.graphics.f("#0099CC").s().p("AggBAQgNgIgHgNQgIgNAAgSIAAhRIAYAAIAABRQAAASAKAJQAKAKARAAQAQAAALgJQAJgLABgRIAAhRIAXAAIAABRQAAASgHANQgIANgOAIQgNAGgTAAQgSAAgOgGg");
	this.shape_271.setTransform(310.2,-80.5);

	this.shape_272 = new cjs.Shape();
	this.shape_272.graphics.f("#0099CC").s().p("AgIAJQgDgDgBgGQABgFADgEQAEgDAEAAQAFAAAEADQAEAEAAAFQAAAGgEADQgEAEgFAAQgEAAgEgEg");
	this.shape_272.setTransform(293.7,-74.7);

	this.shape_273 = new cjs.Shape();
	this.shape_273.graphics.f("#0099CC").s().p("AgdAxQgIgEgFgHQgEgIgBgJQABgOAKgIQAKgJAUAAIAfAAIAAgDQAAgLgHgFQgGgFgMAAQgHgBgIADQgIACgIAGIgJgQIAOgIIAOgEQAHgBAKAAQAUAAALAKQALAKAAARIABBFIgXAAIAAgNQgGAHgJADQgJAEgKAAQgMAAgIgFgAgUAJQgFAEAAAHQAAAHAGAEQAFAFAKAAQALgBAJgFQAIgGABgIIAAgKIgcAAIgDAAQgJAAgFADg");
	this.shape_273.setTransform(285.5,-78.9);

	this.shape_274 = new cjs.Shape();
	this.shape_274.graphics.f("#0099CC").s().p("AgmArQgLgLAAgTIAAhCIAXAAIAAA7QAAAMAHAHQAGAHAMAAQAIAAAHgFQAGgEAEgHQADgIAAgIIAAg1IAXAAIAABqIgXAAIAAgVQgFALgKAFQgKAFgMABQgTgBgJgKg");
	this.shape_274.setTransform(273.2,-78.9);

	this.shape_275 = new cjs.Shape();
	this.shape_275.graphics.f("#0099CC").s().p("AAhBJIAAg5QgGAJgJAFQgKAFgMAAQgPAAgMgHQgLgHgGgMQgHgLAAgQQAAgQAHgMQAGgNALgGQAMgHAPAAQAMAAAJAFQAKAFAGAJIAAgSIAXAAIAACQgAgQgwQgHAEgEAIQgFAIAAAKQAAALAFAHQAEAHAHAEQAHAFAJAAQAKAAAHgFQAHgEAEgHQAFgHAAgLQAAgKgFgIQgEgIgHgEQgHgEgKgBQgJABgHAEg");
	this.shape_275.setTransform(259.5,-77);

	this.shape_276 = new cjs.Shape();
	this.shape_276.graphics.f("#0099CC").s().p("AgKBLIAAhpIAVAAIAABpgAgJgzQgDgEAAgFQAAgHADgDQAEgEAFAAQAGAAADAEQAEADABAHQgBAFgEAEQgDAEgGAAQgFAAgEgEg");
	this.shape_276.setTransform(250.4,-81.1);

	this.shape_277 = new cjs.Shape();
	this.shape_277.graphics.f("#0099CC").s().p("AgLBKIAAiTIAXAAIAACTg");
	this.shape_277.setTransform(244.6,-81);

	this.shape_278 = new cjs.Shape();
	this.shape_278.graphics.f("#0099CC").s().p("AgdAxQgIgEgFgHQgEgIgBgJQABgOAKgIQAKgJAUAAIAfAAIAAgDQAAgLgHgFQgGgFgMAAQgHgBgIADQgIACgIAGIgJgQIAOgIIAOgEQAHgBAKAAQAUAAALAKQALAKAAARIABBFIgXAAIAAgNQgGAHgJADQgJAEgKAAQgMAAgIgFgAgUAJQgFAEAAAHQAAAHAGAEQAFAFAKAAQALgBAJgFQAIgGABgIIAAgKIgcAAIgDAAQgJAAgFADg");
	this.shape_278.setTransform(235.6,-78.9);

	this.shape_279 = new cjs.Shape();
	this.shape_279.graphics.f("#0099CC").s().p("AgdAxQgIgEgFgHQgEgIgBgJQABgOAKgIQAKgJAUAAIAfAAIAAgDQAAgLgHgFQgGgFgMAAQgHgBgIADQgIACgIAGIgJgQIAOgIIAOgEQAHgBAKAAQAUAAALAKQALAKAAARIABBFIgXAAIAAgNQgGAHgJADQgJAEgKAAQgMAAgIgFgAgUAJQgFAEAAAHQAAAHAGAEQAFAFAKAAQALgBAJgFQAIgGABgIIAAgKIgcAAIgDAAQgJAAgFADg");
	this.shape_279.setTransform(217.3,-78.9);

	this.shape_280 = new cjs.Shape();
	this.shape_280.graphics.f("#0099CC").s().p("AAcA2IAAg7QAAgMgHgHQgGgHgNAAQgMAAgIAJQgIAHgBANIAAA4IgXAAIAAhqIAXAAIAAAVQAGgLAKgFQAJgGANABQATAAAKAKQALALAAAUIAABBg");
	this.shape_280.setTransform(205.3,-79);

	this.shape_281 = new cjs.Shape();
	this.shape_281.graphics.f("#0099CC").s().p("AgYBFQgLgDgLgHIAKgQQAIAFAIADQAIADAKAAQAOAAAJgIQAJgIAAgOIAAgNQgFAIgJAFQgJAFgLAAQgPgBgKgGQgLgGgGgMQgGgKAAgQQAAgPAGgLQAGgMAKgGQALgGAOAAQAMgBAIAFQAKAFAFAIIAAgRIAXAAIAABfQAAAQgHALQgGALgNAGQgNAGgPAAQgNAAgKgEgAgPgyQgHAEgFAIQgDAHAAAKQAAAJADAIQAFAGAHAEQAHAFAIAAQAJAAAGgFQAIgEADgGQAEgIAAgJQAAgPgIgJQgJgJgNAAQgIAAgHAEg");
	this.shape_281.setTransform(191.7,-77);

	this.shape_282 = new cjs.Shape();
	this.shape_282.graphics.f("#0099CC").s().p("AgdAxQgIgEgFgHQgEgIgBgJQABgOAKgIQAKgJAUAAIAfAAIAAgDQAAgLgHgFQgGgFgMAAQgHgBgIADQgIACgIAGIgJgQIAOgIIAOgEQAHgBAKAAQAUAAALAKQALAKAAARIABBFIgXAAIAAgNQgGAHgJADQgJAEgKAAQgMAAgIgFgAgUAJQgFAEAAAHQAAAHAGAEQAFAFAKAAQALgBAJgFQAIgGABgIIAAgKIgcAAIgDAAQgJAAgFADg");
	this.shape_282.setTransform(179.6,-78.9);

	this.shape_283 = new cjs.Shape();
	this.shape_283.graphics.f("#0099CC").s().p("ABCA2IAAg7QgBgMgGgHQgHgHgMAAQgJAAgGAFQgHAEgDAHQgEAIABAIIAAA1IgXAAIAAg7QAAgMgHgHQgGgHgMAAQgJAAgGAFQgHAEgDAHQgFAIAAAIIAAA1IgWAAIAAhqIAWAAIAAAVQAHgLAJgFQAKgGANABQAOAAAKAGQAIAHAFAMQAEgNALgGQAKgHAPABQASAAAKAKQALALAAAUIAABBg");
	this.shape_283.setTransform(163.8,-79);

	this.shape_284 = new cjs.Shape();
	this.shape_284.graphics.f("#0099CC").s().p("AgZAvQgMgHgHgMQgHgMAAgQQAAgPAHgMQAHgNAMgGQAMgHAPAAQATAAALAIQAMAHAFAOQAEAOgBATIhPAAQACAMAJAHQAJAHAMAAQAIAAAIgDQAIgDAGgGIAMANQgIAIgLAFQgLAEgOABQgQgBgMgGgAAggHQgBgNgIgHQgIgIgNAAQgMAAgIAIQgIAHgCANIA8AAIAAAAg");
	this.shape_284.setTransform(140.8,-78.9);

	this.shape_285 = new cjs.Shape();
	this.shape_285.graphics.f("#0099CC").s().p("AgdA1IAAhpIAXAAIAAAVQAGgLAIgFQAJgGANAAIAAAWQgLAAgIADQgIAEgDAHQgFAGgBAKIAAA2g");
	this.shape_285.setTransform(131.7,-78.9);

	this.shape_286 = new cjs.Shape();
	this.shape_286.graphics.f("#0099CC").s().p("AgcAvQgMgHgHgMQgIgMAAgQQAAgPAIgMQAHgNAMgGQAMgHAQAAQAQAAANAHQAMAGAIANQAGAMAAAPQAAAQgGAMQgIAMgMAHQgNAGgQABQgQgBgMgGgAgQgdQgHAEgEAIQgEAIAAAJQAAAPAJAKQAIAKAOAAQAOAAAKgKQAIgKABgPQAAgJgFgIQgEgIgHgEQgIgEgJgBQgJABgHAEg");
	this.shape_286.setTransform(120.8,-78.9);

	this.shape_287 = new cjs.Shape();
	this.shape_287.graphics.f("#0099CC").s().p("AgLBKIAAiTIAXAAIAACTg");
	this.shape_287.setTransform(111.6,-81);

	this.shape_288 = new cjs.Shape();
	this.shape_288.graphics.f("#0099CC").s().p("AgcAvQgNgHgGgMQgIgMAAgQQAAgPAIgMQAGgNANgGQAMgHAQAAQAQAAANAHQAMAGAIANQAGAMAAAPQAAAQgGAMQgIAMgMAHQgNAGgQABQgQgBgMgGgAgQgdQgHAEgFAIQgDAIAAAJQAAAPAJAKQAIAKAOAAQAOAAAKgKQAJgKAAgPQAAgJgFgIQgEgIgHgEQgIgEgJgBQgJABgHAEg");
	this.shape_288.setTransform(102.4,-78.9);

	this.shape_289 = new cjs.Shape();
	this.shape_289.graphics.f("#0099CC").s().p("AgfBEQgLgHgGgMQgHgNAAgQQAAgQAHgLQAGgMALgHQAMgHAPAAQAMAAAJAFQAKAFAGAKIAAg9IAXAAIAACUIgXAAIAAgTQgGAKgJAFQgKAFgMAAQgPAAgMgHgAgQgJQgHAFgEAHQgFAIAAAKQAAAKAFAIQAEAIAHAEQAHAEAJAAQAKAAAHgEQAHgEAEgIQAFgIAAgKQAAgKgFgIQgEgHgHgFQgHgEgKAAQgJAAgHAEg");
	this.shape_289.setTransform(88.8,-81);

	this.shape_290 = new cjs.Shape();
	this.shape_290.graphics.f("#0099CC").s().p("AgEA/QgHgDgEgHQgEgHgBgLIAAg2IgPAAIAAgRIAPAAIAAgdIAXAAIAAAdIAfAAIAAARIgfAAIAAAyQAAAIACADQADAEAGgBIAIgBIAIgDIAFARQgFAEgHACQgHACgHAAQgIAAgFgDg");
	this.shape_290.setTransform(71.9,-80.1);

	this.shape_291 = new cjs.Shape();
	this.shape_291.graphics.f("#0099CC").s().p("AgZAvQgMgHgHgMQgHgMAAgQQAAgPAHgMQAHgNAMgGQAMgHAPAAQATAAALAIQAMAHAFAOQAEAOgBATIhPAAQACAMAJAHQAJAHAMAAQAIAAAIgDQAIgDAGgGIAMANQgIAIgLAFQgLAEgOABQgQgBgMgGgAAggHQgBgNgIgHQgIgIgNAAQgMAAgIAIQgIAHgCANIA8AAIAAAAg");
	this.shape_291.setTransform(61.9,-78.9);

	this.shape_292 = new cjs.Shape();
	this.shape_292.graphics.f("#0099CC").s().p("AgZAvQgMgHgHgMQgHgMAAgQQAAgPAHgMQAHgNAMgGQAMgHAPAAQATAAALAIQAMAHAFAOQAEAOgBATIhPAAQACAMAJAHQAJAHAMAAQAIAAAIgDQAIgDAGgGIAMANQgIAIgLAFQgLAEgOABQgQgBgMgGgAAggHQgBgNgIgHQgIgIgNAAQgMAAgIAIQgIAHgCANIA8AAIAAAAg");
	this.shape_292.setTransform(43.6,-78.9);

	this.shape_293 = new cjs.Shape();
	this.shape_293.graphics.f("#0099CC").s().p("AgdA1IAAhpIAXAAIAAAVQAGgLAIgFQAJgGANAAIAAAWQgLAAgIADQgHAEgFAHQgEAGgBAKIAAA2g");
	this.shape_293.setTransform(34.6,-78.9);

	this.shape_294 = new cjs.Shape();
	this.shape_294.graphics.f("#0099CC").s().p("AgcAvQgMgHgIgMQgGgMAAgQQAAgPAGgMQAIgNAMgGQANgHAPAAQARAAAMAHQANAGAGANQAIAMAAAPQAAAQgIAMQgGAMgNAHQgMAGgRABQgPgBgNgGgAgQgdQgHAEgEAIQgFAIAAAJQAAAPAJAKQAKAKANAAQAPAAAIgKQAJgKAAgPQAAgJgDgIQgFgIgHgEQgHgEgKgBQgIABgIAEg");
	this.shape_294.setTransform(23.6,-78.9);

	this.shape_295 = new cjs.Shape();
	this.shape_295.graphics.f("#0099CC").s().p("AgQBGQgJgFgHgKIAAATIgWAAIAAiUIAWAAIAAA9QAHgKAJgEQAJgFALAAQAQAAALAGQALAHAHAMQAGAMAAAQQAAAQgGAMQgGAMgMAHQgKAGgQABQgMgBgJgEgAgQgJQgHAFgEAGQgFAIAAAKQABAQAIAJQAKAKANAAQAJAAAIgFQAHgEAEgIQAEgIAAgKQAAgKgEgIQgEgGgHgFQgIgEgJAAQgIAAgIAEg");
	this.shape_295.setTransform(11.1,-81);

	this.shape_296 = new cjs.Shape();
	this.shape_296.graphics.f("#0099CC").s().p("AgdAxQgIgEgFgHQgEgIgBgJQABgOAKgIQAKgJAUAAIAfAAIAAgDQAAgLgHgFQgGgFgMAAQgHgBgIADQgIACgIAGIgJgQIAOgIIAOgEQAHgBAKAAQAUAAALAKQALAKAAARIABBFIgXAAIAAgNQgGAHgJADQgJAEgKAAQgMAAgIgFgAgUAJQgFAEAAAHQAAAHAGAEQAFAFAKAAQALgBAJgFQAIgGABgIIAAgKIgcAAIgDAAQgJAAgFADg");
	this.shape_296.setTransform(-2.3,-78.9);

	this.shape_297 = new cjs.Shape();
	this.shape_297.graphics.f("#0099CC").s().p("AgLBKIAAiTIAXAAIAACTg");
	this.shape_297.setTransform(-10.8,-81);

	this.shape_298 = new cjs.Shape();
	this.shape_298.graphics.f("#0099CC").s().p("AgFA/QgGgDgEgHQgEgHAAgLIAAg2IgQAAIAAgRIAQAAIAAgdIAVAAIAAAdIAgAAIAAARIggAAIAAAyQAAAIAEADQADAEAFgBIAHgBIAJgDIAGARQgHAEgGACQgHACgHAAQgIAAgGgDg");
	this.shape_298.setTransform(-24.3,-80.1);

	this.shape_299 = new cjs.Shape();
	this.shape_299.graphics.f("#0099CC").s().p("AgnArQgKgLAAgTIAAhCIAXAAIAAA7QAAAMAHAHQAGAHAMAAQAIAAAHgFQAGgEADgHQAEgIAAgIIAAg1IAXAAIAABqIgXAAIAAgVQgGALgJAFQgKAFgMABQgTgBgKgKg");
	this.shape_299.setTransform(-35.2,-78.9);

	this.shape_300 = new cjs.Shape();
	this.shape_300.graphics.f("#0099CC").s().p("AgFA/QgGgDgEgHQgEgHAAgLIAAg2IgQAAIAAgRIAQAAIAAgdIAVAAIAAAdIAgAAIAAARIggAAIAAAyQAAAIAEADQADAEAFgBIAHgBIAJgDIAFARQgFAEgHACQgHACgHAAQgHAAgHgDg");
	this.shape_300.setTransform(-52.1,-80.1);

	this.shape_301 = new cjs.Shape();
	this.shape_301.graphics.f("#0099CC").s().p("AAcA2IAAg7QAAgMgHgHQgGgHgNAAQgMAAgIAJQgIAHgBANIAAA4IgXAAIAAhqIAXAAIAAAVQAGgLAKgFQAJgGANABQATAAALAKQAKALAAAUIAABBg");
	this.shape_301.setTransform(-62.7,-79);

	this.shape_302 = new cjs.Shape();
	this.shape_302.graphics.f("#0099CC").s().p("AgmArQgLgLAAgTIAAhCIAXAAIAAA7QAAAMAHAHQAGAHAMAAQAIAAAHgFQAGgEAEgHQADgIAAgIIAAg1IAXAAIAABqIgXAAIAAgVQgGALgJAFQgKAFgMABQgTgBgJgKg");
	this.shape_302.setTransform(-76.2,-78.9);

	this.shape_303 = new cjs.Shape();
	this.shape_303.graphics.f("#0099CC").s().p("AgfBEQgLgHgGgMQgHgNAAgQQAAgQAHgLQAGgMALgHQAMgHAPAAQAMAAAJAFQAKAFAGAKIAAg9IAXAAIAACUIgXAAIAAgTQgGAKgJAFQgKAFgMAAQgPAAgMgHgAgQgJQgHAFgEAHQgFAIAAAKQAAAKAFAIQAEAIAHAEQAHAEAJAAQAKAAAHgEQAHgEAEgIQAFgIAAgKQAAgKgFgIQgEgHgHgFQgHgEgKAAQgJAAgHAEg");
	this.shape_303.setTransform(-90,-81);

	this.shape_304 = new cjs.Shape();
	this.shape_304.graphics.f("#0099CC").s().p("AgLBLIAAhpIAWAAIAABpgAgJgzQgDgEAAgFQAAgHADgDQAEgEAFAAQAGAAADAEQAEADABAHQgBAFgEAEQgDAEgGAAQgFAAgEgEg");
	this.shape_304.setTransform(-99.1,-81.1);

	this.shape_305 = new cjs.Shape();
	this.shape_305.graphics.f("#0099CC").s().p("AgfBEQgLgHgGgMQgHgNAAgQQAAgQAHgLQAGgMALgHQAMgHAPAAQAMAAAJAFQAKAFAGAKIAAg9IAXAAIAACUIgXAAIAAgTQgGAKgJAFQgKAFgMAAQgPAAgMgHgAgQgJQgHAFgEAHQgFAIAAAKQAAAKAFAIQAEAIAHAEQAHAEAJAAQAKAAAHgEQAHgEAEgIQAFgIAAgKQAAgKgFgIQgEgHgHgFQgHgEgKAAQgJAAgHAEg");
	this.shape_305.setTransform(-109.3,-81);

	this.shape_306 = new cjs.Shape();
	this.shape_306.graphics.f("#0099CC").s().p("AgLBLIAAhpIAWAAIAABpgAgJgzQgDgEAAgFQAAgHADgDQAEgEAFAAQAGAAADAEQAEADABAHQgBAFgEAEQgDAEgGAAQgFAAgEgEg");
	this.shape_306.setTransform(-118.4,-81.1);

	this.shape_307 = new cjs.Shape();
	this.shape_307.graphics.f("#0099CC").s().p("AgXAvQgMgHgHgMQgGgMgBgQQABgPAGgMQAHgNAMgGQAMgHAPAAQAOAAALAEQALAFAIAIIgMAPQgGgGgIgDQgHgDgKAAQgJAAgGAFQgHAEgFAHQgEAIAAAJQAAAKAEAIQAFAHAHAEQAGAFAJAAQAKAAAIgEQAIgDAFgGIANANQgHAKgMAEQgKAGgQAAQgPgBgMgGg");
	this.shape_307.setTransform(-126.9,-78.9);

	this.shape_308 = new cjs.Shape();
	this.shape_308.graphics.f("#0099CC").s().p("AAcA2IAAg7QAAgMgHgHQgGgHgNAAQgMAAgIAJQgIAHgBANIAAA4IgXAAIAAhqIAXAAIAAAVQAGgLAKgFQAJgGANABQATAAAKAKQALALAAAUIAABBg");
	this.shape_308.setTransform(-139,-79);

	this.shape_309 = new cjs.Shape();
	this.shape_309.graphics.f("#0099CC").s().p("AgLBLIAAhpIAWAAIAABpgAgJgzQgDgEAAgFQAAgHADgDQAEgEAFAAQAGAAADAEQAEADABAHQgBAFgEAEQgDAEgGAAQgFAAgEgEg");
	this.shape_309.setTransform(-148.7,-81.1);

	this.shape_310 = new cjs.Shape();
	this.shape_310.graphics.f("#0099CC").s().p("AgdA1IAAhpIAXAAIAAAVQAFgLAJgFQAJgGANAAIAAAWQgLAAgIADQgHAEgEAHQgFAGgBAKIAAA2g");
	this.shape_310.setTransform(-161.3,-78.9);

	this.shape_311 = new cjs.Shape();
	this.shape_311.graphics.f("#0099CC").s().p("AgcAvQgNgHgGgMQgIgMABgQQgBgPAIgMQAGgNANgGQAMgHAQAAQARAAAMAHQANAGAGANQAIAMgBAPQABAQgIAMQgGAMgNAHQgMAGgRABQgQgBgMgGgAgQgdQgHAEgEAIQgEAIgBAJQABAPAIAKQAJAKAOAAQAPAAAJgKQAIgKABgPQAAgJgFgIQgEgIgHgEQgIgEgJgBQgJABgHAEg");
	this.shape_311.setTransform(-172.3,-78.9);

	this.shape_312 = new cjs.Shape();
	this.shape_312.graphics.f("#0099CC").s().p("Ag3BJIAAiQIAYAAIAAASQAFgJAKgFQAJgFAMAAQAPAAAMAHQAKAGAHANQAHAMgBAQQABAQgHALQgGAMgLAHQgMAGgPABQgMgBgJgEQgKgFgFgJIAAA5gAgQgxQgHAFgFAIQgDAHAAALQAAAPAJAJQAIAJAOAAQAJAAAHgFQAIgEAEgGQAEgIABgKQgBgLgEgHQgEgIgIgFQgHgEgJAAQgJAAgHAEg");
	this.shape_312.setTransform(-184.8,-77);

	this.shape_313 = new cjs.Shape();
	this.shape_313.graphics.f("#0099CC").s().p("ABCA2IAAg7QgBgMgGgHQgHgHgMAAQgJAAgGAFQgHAEgDAHQgDAIAAAIIAAA1IgXAAIAAg7QAAgMgGgHQgHgHgLAAQgKAAgGAFQgHAEgDAHQgFAIAAAIIAAA1IgWAAIAAhqIAWAAIAAAVQAHgLAJgFQAKgGAOABQAOAAAJAGQAIAHAFAMQAEgNALgGQAKgHAPABQASAAAKAKQALALAAAUIAABBg");
	this.shape_313.setTransform(-202.4,-79);

	this.shape_314 = new cjs.Shape();
	this.shape_314.graphics.f("#0099CC").s().p("AgZAvQgMgHgHgMQgHgMAAgQQAAgPAHgMQAHgNAMgGQAMgHAPAAQATAAALAIQAMAHAFAOQAEAOgBATIhPAAQACAMAJAHQAJAHAMAAQAIAAAIgDQAIgDAGgGIAMANQgIAIgLAFQgLAEgOABQgQgBgMgGgAAggHQgBgNgIgHQgIgIgNAAQgMAAgIAIQgIAHgCANIA8AAIAAAAg");
	this.shape_314.setTransform(-218.8,-78.9);

	this.shape_315 = new cjs.Shape();
	this.shape_315.graphics.f("#0099CC").s().p("AgEA/QgHgDgEgHQgEgHgBgLIAAg2IgPAAIAAgRIAPAAIAAgdIAXAAIAAAdIAfAAIAAARIgfAAIAAAyQAAAIACADQADAEAGgBIAIgBIAIgDIAFARQgFAEgHACQgHACgHAAQgIAAgFgDg");
	this.shape_315.setTransform(-228.7,-80.1);

	this.shape_316 = new cjs.Shape();
	this.shape_316.graphics.f("#0099CC").s().p("AgfBEQgLgHgGgMQgHgNAAgQQAAgQAHgLQAGgMALgHQAMgHAPAAQAMAAAJAFQAKAFAGAKIAAg9IAXAAIAACUIgXAAIAAgTQgGAKgJAFQgKAFgMAAQgPAAgMgHgAgQgJQgHAFgEAHQgFAIAAAKQAAAKAFAIQAEAIAHAEQAHAEAJAAQAKAAAHgEQAHgEAEgIQAFgIAAgKQAAgKgFgIQgEgHgHgFQgHgEgKAAQgJAAgHAEg");
	this.shape_316.setTransform(-246.8,-81);

	this.shape_317 = new cjs.Shape();
	this.shape_317.graphics.f("#0099CC").s().p("AgcAvQgMgHgIgMQgGgMAAgQQAAgPAGgMQAIgNAMgGQAMgHAQAAQARAAAMAHQAMAGAHANQAIAMgBAPQABAQgIAMQgHAMgMAHQgMAGgRABQgQgBgMgGgAgQgdQgHAEgEAIQgFAIAAAJQABAPAIAKQAKAKANAAQAPAAAIgKQAJgKAAgPQAAgJgEgIQgEgIgHgEQgHgEgKgBQgIABgIAEg");
	this.shape_317.setTransform(-259.3,-78.9);

	this.shape_318 = new cjs.Shape();
	this.shape_318.graphics.f("#0099CC").s().p("ABCA2IAAg7QgBgMgGgHQgHgHgMAAQgJAAgGAFQgHAEgDAHQgEAIABAIIAAA1IgXAAIAAg7QAAgMgHgHQgGgHgMAAQgJAAgGAFQgHAEgDAHQgFAIAAAIIAAA1IgWAAIAAhqIAWAAIAAAVQAHgLAJgFQAKgGANABQAPAAAJAGQAIAHAFAMQAEgNALgGQAKgHAPABQASAAAKAKQALALAAAUIAABBg");
	this.shape_318.setTransform(-275.8,-79);

	this.shape_319 = new cjs.Shape();
	this.shape_319.graphics.f("#0099CC").s().p("AgVAyQgLgDgJgIIAJgQQAEAEAGADIAMAFIAMABQAIAAAEgDQAFgCABgGQgBgHgFgDQgGgDgIgDIgQgFQgIgDgGgGQgFgGgBgLQABgLAFgHQAGgHAJgDQAIgDAKAAQAKAAAKADQAKACAHAGIgIARQgIgFgIgCQgIgDgHAAQgGAAgFADQgDACAAAGQgBAFAGAEQAGADAHACIARAGQAIADAGAGQAFAGABALQgBALgFAHQgGAHgJAEQgJADgLAAQgLAAgLgEg");
	this.shape_319.setTransform(-291.2,-78.9);

	this.shape_320 = new cjs.Shape();
	this.shape_320.graphics.f("#0099CC").s().p("AgnArQgJgLgBgTIAAhCIAXAAIAAA7QAAAMAHAHQAHAHALAAQAIAAAGgFQAHgEADgHQAEgIAAgIIAAg1IAXAAIAABqIgXAAIAAgVQgGALgJAFQgKAFgMABQgSgBgLgKg");
	this.shape_320.setTransform(-302.5,-78.9);

	this.shape_321 = new cjs.Shape();
	this.shape_321.graphics.f("#0099CC").s().p("AgLBLIAAhpIAWAAIAABpgAgIgzQgFgEAAgFQAAgHAFgDQADgEAFAAQAGAAAEAEQADADAAAHQAAAFgDAEQgEAEgGAAQgFAAgDgEg");
	this.shape_321.setTransform(-311.7,-81.1);

	this.shape_322 = new cjs.Shape();
	this.shape_322.graphics.f("#0099CC").s().p("AgZAvQgMgHgHgMQgHgMAAgQQAAgPAHgMQAHgNAMgGQAMgHAPAAQATAAALAIQAMAHAFAOQAEAOgBATIhPAAQACAMAJAHQAJAHAMAAQAIAAAIgDQAIgDAGgGIAMANQgIAIgLAFQgLAEgOABQgQgBgMgGgAAggHQgBgNgIgHQgIgIgNAAQgMAAgIAIQgIAHgCANIA8AAIAAAAg");
	this.shape_322.setTransform(-320.4,-78.9);

	this.shape_323 = new cjs.Shape();
	this.shape_323.graphics.f("#0099CC").s().p("AgcAvQgMgHgIgMQgGgMAAgQQAAgPAGgNQAIgLAMgIQANgGAPAAQARAAAMAGQAMAIAHALQAIANAAAPQAAAQgIAMQgHAMgMAHQgMAGgRABQgPgBgNgGgAgQgdQgHAEgEAIQgFAHAAAKQABAPAIAKQAKAJANAAQAPAAAIgJQAJgKAAgPQAAgKgEgHQgEgIgHgEQgHgFgKAAQgIAAgIAFg");
	this.shape_323.setTransform(319.8,-111.8);

	this.shape_324 = new cjs.Shape();
	this.shape_324.graphics.f("#0099CC").s().p("AgfBEQgLgHgGgMQgHgNAAgQQAAgQAHgLQAGgMALgHQAMgHAPAAQAMAAAJAFQAKAFAGAKIAAg9IAXAAIAACUIgXAAIAAgTQgGAKgJAFQgKAFgMAAQgPAAgMgHgAgQgJQgHAFgEAHQgFAIAAAKQAAAKAFAIQAEAIAHAEQAHAEAJAAQAKAAAHgEQAHgEAEgIQAFgIAAgKQAAgKgFgIQgEgHgHgFQgHgEgKAAQgJAAgHAEg");
	this.shape_324.setTransform(306.2,-113.9);

	this.shape_325 = new cjs.Shape();
	this.shape_325.graphics.f("#0099CC").s().p("AgfBEQgLgHgGgMQgHgNAAgQQAAgQAHgLQAGgMALgHQAMgHAPAAQAMAAAJAFQAKAFAGAKIAAg9IAXAAIAACUIgXAAIAAgTQgGAKgJAFQgKAFgMAAQgPAAgMgHgAgQgJQgHAFgEAHQgFAIAAAKQAAAKAFAIQAEAIAHAEQAHAEAJAAQAKAAAHgEQAHgEAEgIQAFgIAAgKQAAgKgFgIQgEgHgHgFQgHgEgKAAQgJAAgHAEg");
	this.shape_325.setTransform(284.1,-113.9);

	this.shape_326 = new cjs.Shape();
	this.shape_326.graphics.f("#0099CC").s().p("AgZAvQgMgHgHgMQgHgMAAgQQAAgPAHgNQAHgLAMgIQAMgGAPAAQATAAALAHQAMAIAFAOQAEAOgBASIhPAAQACANAJAHQAJAHAMAAQAIAAAIgDQAIgDAGgGIAMANQgIAIgLAFQgLAFgOAAQgQgBgMgGgAAggHQgBgNgIgIQgIgHgNAAQgMAAgIAHQgIAIgCANIA8AAIAAAAg");
	this.shape_326.setTransform(272,-111.8);

	this.shape_327 = new cjs.Shape();
	this.shape_327.graphics.f("#0099CC").s().p("AgWAyQgKgDgJgIIAIgQQAFAEAGADIANAFIALABQAHAAAFgDQAFgCAAgGQAAgHgGgDQgFgDgIgDIgQgFQgIgDgGgGQgFgGAAgLQAAgLAFgHQAFgHAJgDQAKgDAJAAQAKAAAKADQAKACAHAGIgJARQgHgFgHgCQgJgDgHAAQgGAAgEADQgFACAAAGQABAFAFAEQAGADAHACIARAGQAIADAGAGQAGAGAAALQAAALgGAHQgGAHgJAEQgJADgLAAQgLAAgMgEg");
	this.shape_327.setTransform(261.3,-111.8);

	this.shape_328 = new cjs.Shape();
	this.shape_328.graphics.f("#0099CC").s().p("AgNAUIAIgRIgEgEIgBgGQAAgFADgEQAEgDAEAAQAFAAAEADQAEADgBAGIgBAGIgCAEIgKARg");
	this.shape_328.setTransform(246,-106.9);

	this.shape_329 = new cjs.Shape();
	this.shape_329.graphics.f("#0099CC").s().p("AgFA/QgGgDgEgHQgEgHgBgLIAAg2IgOAAIAAgRIAOAAIAAgdIAXAAIAAAdIAfAAIAAARIgfAAIAAAyQAAAIACADQADAEAGgBIAHgBIAJgDIAGARQgHAEgGACQgHACgGAAQgIAAgHgDg");
	this.shape_329.setTransform(240,-113);

	this.shape_330 = new cjs.Shape();
	this.shape_330.graphics.f("#0099CC").s().p("AgKBLIAAhpIAVAAIAABpgAgIgzQgFgEAAgFQAAgHAFgDQADgEAFAAQAGAAAEAEQADADAAAHQAAAFgDAEQgEAEgGAAQgFAAgDgEg");
	this.shape_330.setTransform(233,-114);

	this.shape_331 = new cjs.Shape();
	this.shape_331.graphics.f("#0099CC").s().p("AgKBKIAAiTIAVAAIAACTg");
	this.shape_331.setTransform(227.2,-113.9);

	this.shape_332 = new cjs.Shape();
	this.shape_332.graphics.f("#0099CC").s().p("AgZAvQgMgHgHgMQgHgMAAgQQAAgPAHgNQAHgLAMgIQAMgGAPAAQATAAALAHQAMAIAFAOQAEAOgBASIhPAAQACANAJAHQAJAHAMAAQAIAAAIgDQAIgDAGgGIAMANQgIAIgLAFQgLAFgOAAQgQgBgMgGgAAggHQgBgNgIgIQgIgHgNAAQgMAAgIAHQgIAIgCANIA8AAIAAAAg");
	this.shape_332.setTransform(218.4,-111.8);

	this.shape_333 = new cjs.Shape();
	this.shape_333.graphics.f("#0099CC").s().p("AgYBFQgMgDgJgHIAKgQQAHAFAIADQAIADAKAAQAOAAAJgIQAJgIAAgOIAAgNQgFAIgJAFQgJAFgLAAQgOgBgLgGQgLgGgGgMQgGgKAAgQQAAgPAGgLQAGgMAKgGQALgGAOAAQALgBAJAFQAJAFAGAIIAAgRIAXAAIAABfQAAAQgHALQgGALgNAGQgNAGgPAAQgMAAgLgEgAgPgyQgIAEgDAIQgEAHgBAKQABAJAEAIQADAGAIAEQAGAFAJAAQAIAAAHgFQAHgEAFgGQADgIAAgJQAAgPgJgJQgHgJgOAAQgJAAgGAEg");
	this.shape_333.setTransform(197.3,-109.9);

	this.shape_334 = new cjs.Shape();
	this.shape_334.graphics.f("#0099CC").s().p("AAcA2IAAg7QAAgMgHgHQgGgHgNAAQgMAAgIAJQgIAHgBANIAAA4IgXAAIAAhqIAXAAIAAAVQAGgLAKgFQAJgGANABQATAAALAKQAKALAAAUIAABBg");
	this.shape_334.setTransform(184.9,-111.9);

	this.shape_335 = new cjs.Shape();
	this.shape_335.graphics.f("#0099CC").s().p("AgKBLIAAhpIAVAAIAABpgAgJgzQgDgEAAgFQAAgHADgDQAEgEAFAAQAGAAADAEQAEADABAHQgBAFgEAEQgDAEgGAAQgFAAgEgEg");
	this.shape_335.setTransform(175.2,-114);

	this.shape_336 = new cjs.Shape();
	this.shape_336.graphics.f("#0099CC").s().p("AgXAvQgMgHgHgMQgHgMAAgQQAAgPAHgNQAHgLAMgIQAMgGAPAAQAOAAALAFQAMAEAHAIIgMAPQgGgGgIgDQgIgDgJAAQgIAAgIAEQgGAEgFAIQgDAIAAAJQAAAKADAHQAFAIAGAFQAIAEAIAAQAKAAAIgDQAIgEAGgGIAMANQgHAJgMAGQgLAFgPAAQgPgBgMgGg");
	this.shape_336.setTransform(166.7,-111.8);

	this.shape_337 = new cjs.Shape();
	this.shape_337.graphics.f("#0099CC").s().p("AgWAyQgLgDgIgIIAJgQQAEAEAGADIAMAFIAMABQAIAAAEgDQAFgCABgGQgBgHgGgDQgFgDgIgDIgQgFQgIgDgGgGQgFgGAAgLQAAgLAFgHQAFgHAKgDQAIgDAKAAQAKAAAKADQAJACAIAGIgJARQgGgFgJgCQgIgDgHAAQgGAAgFADQgEACABAGQAAAFAFAEQAGADAHACIARAGQAIADAGAGQAGAGAAALQAAALgGAHQgFAHgKAEQgJADgLAAQgLAAgMgEg");
	this.shape_337.setTransform(156.3,-111.8);

	this.shape_338 = new cjs.Shape();
	this.shape_338.graphics.f("#0099CC").s().p("AgKBLIAAhpIAVAAIAABpgAgIgzQgFgEAAgFQAAgHAFgDQADgEAFAAQAGAAAEAEQADADAAAHQAAAFgDAEQgEAEgGAAQgFAAgDgEg");
	this.shape_338.setTransform(148.8,-114);

	this.shape_339 = new cjs.Shape();
	this.shape_339.graphics.f("#0099CC").s().p("Ag2BJIAAiRIAWAAIAAATQAHgJAJgFQAJgFALAAQAQAAALAGQALAIAHALQAGANABAQQgBAQgGALQgGAMgMAHQgLAGgPABQgLAAgKgFQgJgFgHgKIAAA6gAgQgwQgHAEgEAHQgFAIAAAKQAAAQAJAIQAKAKANAAQAJAAAIgEQAHgFAEgHQAEgHAAgLQAAgKgEgIQgEgHgHgEQgIgFgJAAQgIAAgIAFg");
	this.shape_339.setTransform(139.7,-109.9);

	this.shape_340 = new cjs.Shape();
	this.shape_340.graphics.f("#0099CC").s().p("AgLBLIAAhpIAWAAIAABpgAgJgzQgDgEAAgFQAAgHADgDQAEgEAFAAQAGAAADAEQAEADABAHQgBAFgEAEQgDAEgGAAQgFAAgEgEg");
	this.shape_340.setTransform(129.5,-114);

	this.shape_341 = new cjs.Shape();
	this.shape_341.graphics.f("#0099CC").s().p("AgfBEQgLgHgGgMQgHgNAAgQQAAgQAHgLQAGgMALgHQAMgHAPAAQAMAAAJAFQAKAFAGAKIAAg9IAXAAIAACUIgXAAIAAgTQgGAKgJAFQgKAFgMAAQgPAAgMgHgAgQgJQgHAFgEAHQgFAIAAAKQAAAKAFAIQAEAIAHAEQAHAEAJAAQAKAAAHgEQAHgEAEgIQAFgIAAgKQAAgKgFgIQgEgHgHgFQgHgEgKAAQgJAAgHAEg");
	this.shape_341.setTransform(119.3,-113.9);

	this.shape_342 = new cjs.Shape();
	this.shape_342.graphics.f("#0099CC").s().p("AgdAyQgIgFgFgHQgEgIgBgJQABgPAKgHQAKgIAUgBIAfAAIAAgDQAAgLgHgFQgGgGgMAAQgHAAgIADQgIADgIAFIgJgQIAOgHIAOgFQAHgBAKAAQAUAAALAJQALALAAARIABBFIgXAAIAAgNQgGAHgJAEQgJADgKAAQgMAAgIgEgAgUAJQgFADAAAIQAAAHAGAFQAFAEAKAAQALAAAJgGQAIgFABgKIAAgJIgcAAIgDAAQgJAAgFADg");
	this.shape_342.setTransform(106.9,-111.8);

	this.shape_343 = new cjs.Shape();
	this.shape_343.graphics.f("#0099CC").s().p("AgdA2IAAhqIAXAAIAAAVQAFgLAJgFQAJgGANABIAAAVQgLAAgIAEQgIADgEAHQgEAHgBAJIAAA3g");
	this.shape_343.setTransform(89.7,-111.8);

	this.shape_344 = new cjs.Shape();
	this.shape_344.graphics.f("#0099CC").s().p("AgnArQgKgLAAgTIAAhCIAXAAIAAA7QAAAMAHAHQAGAHAMAAQAIAAAHgFQAGgEADgHQAEgIAAgIIAAg1IAXAAIAABqIgXAAIAAgVQgFALgKAFQgKAFgMABQgTgBgKgKg");
	this.shape_344.setTransform(78.3,-111.8);

	this.shape_345 = new cjs.Shape();
	this.shape_345.graphics.f("#0099CC").s().p("AgEA/QgHgDgEgHQgEgHgBgLIAAg2IgOAAIAAgRIAOAAIAAgdIAXAAIAAAdIAfAAIAAARIgfAAIAAAyQAAAIACADQADAEAGgBIAIgBIAIgDIAFARQgGAEgGACQgHACgGAAQgJAAgFgDg");
	this.shape_345.setTransform(68,-113);

	this.shape_346 = new cjs.Shape();
	this.shape_346.graphics.f("#0099CC").s().p("AgZAvQgMgHgHgMQgHgMAAgQQAAgPAHgNQAHgLAMgIQAMgGAPAAQATAAALAHQAMAIAFAOQAEAOgBASIhPAAQACANAJAHQAJAHAMAAQAIAAAIgDQAIgDAGgGIAMANQgIAIgLAFQgLAFgOAAQgQgBgMgGgAAggHQgBgNgIgIQgIgHgNAAQgMAAgIAHQgIAIgCANIA8AAIAAAAg");
	this.shape_346.setTransform(58,-111.8);

	this.shape_347 = new cjs.Shape();
	this.shape_347.graphics.f("#0099CC").s().p("AgFA/QgGgDgEgHQgEgHAAgLIAAg2IgQAAIAAgRIAQAAIAAgdIAVAAIAAAdIAgAAIAAARIggAAIAAAyQAAAIAEADQADAEAFgBIAHgBIAJgDIAGARQgHAEgGACQgHACgHAAQgIAAgGgDg");
	this.shape_347.setTransform(48.1,-113);

	this.shape_348 = new cjs.Shape();
	this.shape_348.graphics.f("#0099CC").s().p("AgXAvQgMgHgHgMQgGgMAAgQQAAgPAGgNQAHgLAMgIQAMgGAPAAQAPAAAKAFQALAEAIAIIgNAPQgFgGgHgDQgIgDgKAAQgJAAgGAEQgIAEgDAIQgFAIAAAJQAAAKAFAHQADAIAIAFQAGAEAJAAQAKAAAIgDQAIgEAFgGIAOANQgIAJgMAGQgKAFgQAAQgPgBgMgGg");
	this.shape_348.setTransform(38.3,-111.8);

	this.shape_349 = new cjs.Shape();
	this.shape_349.graphics.f("#0099CC").s().p("AgZAvQgMgHgHgMQgHgMAAgQQAAgPAHgNQAHgLAMgIQAMgGAPAAQATAAALAHQAMAIAFAOQAEAOgBASIhPAAQACANAJAHQAJAHAMAAQAIAAAIgDQAIgDAGgGIAMANQgIAIgLAFQgLAFgOAAQgQgBgMgGgAAggHQgBgNgIgIQgIgHgNAAQgMAAgIAHQgIAIgCANIA8AAIAAAAg");
	this.shape_349.setTransform(26.8,-111.8);

	this.shape_350 = new cjs.Shape();
	this.shape_350.graphics.f("#0099CC").s().p("AgWAyQgKgDgJgIIAIgQQAFAEAGADIANAFIALABQAHAAAGgDQAEgCAAgGQAAgHgGgDQgFgDgIgDIgQgFQgIgDgFgGQgGgGAAgLQAAgLAFgHQAFgHAJgDQAKgDAJAAQAKAAAKADQAJACAIAGIgJARQgHgFgHgCQgJgDgHAAQgGAAgEADQgFACAAAGQAAAFAGAEQAGADAIACIAQAGQAJADAFAGQAGAGAAALQAAALgGAHQgGAHgJAEQgJADgLAAQgLAAgMgEg");
	this.shape_350.setTransform(16.2,-111.8);

	this.shape_351 = new cjs.Shape();
	this.shape_351.graphics.f("#0099CC").s().p("AAcA2IAAg7QgBgMgGgHQgGgHgNAAQgMAAgIAJQgHAHgCANIAAA4IgXAAIAAhqIAXAAIAAAVQAGgLAKgFQAKgGAMABQATAAALAKQAJALABAUIAABBg");
	this.shape_351.setTransform(5.1,-111.9);

	this.shape_352 = new cjs.Shape();
	this.shape_352.graphics.f("#0099CC").s().p("AgcAvQgMgHgHgMQgIgMAAgQQAAgPAIgNQAHgLAMgIQAMgGAQAAQAQAAANAGQAMAIAIALQAGANAAAPQAAAQgGAMQgIAMgMAHQgNAGgQABQgQgBgMgGgAgQgdQgHAEgFAIQgDAHAAAKQAAAPAJAKQAIAJAOAAQAOAAAKgJQAIgKABgPQAAgKgFgHQgEgIgHgEQgIgFgJAAQgJAAgHAFg");
	this.shape_352.setTransform(-7.9,-111.8);

	this.shape_353 = new cjs.Shape();
	this.shape_353.graphics.f("#0099CC").s().p("AgXAvQgMgHgHgMQgGgMgBgQQABgPAGgNQAHgLAMgIQAMgGAPAAQAOAAALAFQALAEAIAIIgMAPQgGgGgIgDQgHgDgKAAQgJAAgGAEQgHAEgFAIQgEAIAAAJQAAAKAEAHQAFAIAHAFQAGAEAJAAQAKAAAIgDQAIgEAFgGIANANQgHAJgMAGQgKAFgQAAQgPgBgMgGg");
	this.shape_353.setTransform(-19.8,-111.8);

	this.shape_354 = new cjs.Shape();
	this.shape_354.graphics.f("#0099CC").s().p("AgMAUIAHgRIgEgEIgBgGQAAgFADgEQAEgDAEAAQAGAAADADQADADABAGIgBAGIgDAEIgLARg");
	this.shape_354.setTransform(-36.2,-106.9);

	this.shape_355 = new cjs.Shape();
	this.shape_355.graphics.f("#0099CC").s().p("AgFA/QgGgDgEgHQgEgHAAgLIAAg2IgQAAIAAgRIAQAAIAAgdIAVAAIAAAdIAgAAIAAARIggAAIAAAyQAAAIAEADQADAEAFgBIAHgBIAJgDIAFARQgFAEgHACQgHACgHAAQgHAAgHgDg");
	this.shape_355.setTransform(-42.2,-113);

	this.shape_356 = new cjs.Shape();
	this.shape_356.graphics.f("#0099CC").s().p("AgZAvQgMgHgHgMQgHgMAAgQQAAgPAHgNQAHgLAMgIQAMgGAPAAQATAAALAHQAMAIAFAOQAEAOgBASIhPAAQACANAJAHQAJAHAMAAQAIAAAIgDQAIgDAGgGIAMANQgIAIgLAFQgLAFgOAAQgQgBgMgGgAAggHQgBgNgIgIQgIgHgNAAQgMAAgIAHQgIAIgCANIA8AAIAAAAg");
	this.shape_356.setTransform(-52.2,-111.8);

	this.shape_357 = new cjs.Shape();
	this.shape_357.graphics.f("#0099CC").s().p("ABCA2IAAg7QAAgMgHgHQgHgHgLAAQgJAAgHAFQgHAEgDAHQgEAIAAAIIAAA1IgVAAIAAg7QgBgMgHgHQgGgHgMAAQgJAAgHAFQgGAEgEAHQgDAIAAAIIAAA1IgXAAIAAhqIAXAAIAAAVQAFgLAKgFQAKgGANABQAOAAAKAGQAJAHADAMQAGgNAKgGQAKgHAPABQASAAALAKQAKALAAAUIAABBg");
	this.shape_357.setTransform(-68.3,-111.9);

	this.shape_358 = new cjs.Shape();
	this.shape_358.graphics.f("#0099CC").s().p("AgdAyQgIgFgFgHQgEgIgBgJQABgPAKgHQAKgIAUgBIAfAAIAAgDQAAgLgHgFQgGgGgMAAQgHAAgIADQgIADgIAFIgJgQIAOgHIAOgFQAHgBAKAAQAUAAALAJQALALAAARIABBFIgXAAIAAgNQgGAHgJAEQgJADgKAAQgMAAgIgEgAgUAJQgFADAAAIQAAAHAGAFQAFAEAKAAQALAAAJgGQAIgFABgKIAAgJIgcAAIgDAAQgJAAgFADg");
	this.shape_358.setTransform(-85,-111.8);

	this.shape_359 = new cjs.Shape();
	this.shape_359.graphics.f("#0099CC").s().p("AgEA/QgHgDgEgHQgEgHgBgLIAAg2IgOAAIAAgRIAOAAIAAgdIAXAAIAAAdIAfAAIAAARIgfAAIAAAyQAAAIACADQADAEAGgBIAIgBIAIgDIAFARQgGAEgGACQgHACgGAAQgJAAgFgDg");
	this.shape_359.setTransform(-103,-113);

	this.shape_360 = new cjs.Shape();
	this.shape_360.graphics.f("#0099CC").s().p("AgLBLIAAhpIAWAAIAABpgAgIgzQgFgEAAgFQAAgHAFgDQADgEAFAAQAGAAAEAEQADADAAAHQAAAFgDAEQgEAEgGAAQgFAAgDgEg");
	this.shape_360.setTransform(-110,-114);

	this.shape_361 = new cjs.Shape();
	this.shape_361.graphics.f("#0099CC").s().p("AgWAyQgLgDgIgIIAIgQQAFAEAGADIANAFIALABQAIAAAEgDQAFgCABgGQgBgHgGgDQgFgDgIgDIgQgFQgIgDgGgGQgFgGAAgLQAAgLAFgHQAFgHAKgDQAJgDAJAAQAKAAAKADQAJACAIAGIgJARQgGgFgIgCQgJgDgHAAQgGAAgEADQgFACAAAGQABAFAFAEQAGADAHACIARAGQAIADAGAGQAGAGAAALQAAALgGAHQgGAHgJAEQgJADgLAAQgLAAgMgEg");
	this.shape_361.setTransform(-117.7,-111.8);

	this.shape_362 = new cjs.Shape();
	this.shape_362.graphics.f("#0099CC").s().p("AgdA2IAAhqIAXAAIAAAVQAFgLAJgFQAJgGANABIAAAVQgLAAgIAEQgIADgEAHQgEAHgBAJIAAA3g");
	this.shape_362.setTransform(-133.9,-111.8);

	this.shape_363 = new cjs.Shape();
	this.shape_363.graphics.f("#0099CC").s().p("AgcAvQgMgHgIgMQgGgMgBgQQABgPAGgNQAIgLAMgIQANgGAPAAQAQAAANAGQAMAIAIALQAGANABAPQgBAQgGAMQgIAMgMAHQgNAGgQABQgPgBgNgGgAgQgdQgHAEgFAIQgDAHAAAKQgBAPAKAKQAJAJANAAQAOAAAJgJQAKgKgBgPQAAgKgDgHQgFgIgHgEQgIgFgJAAQgIAAgIAFg");
	this.shape_363.setTransform(-144.9,-111.8);

	this.shape_364 = new cjs.Shape();
	this.shape_364.graphics.f("#0099CC").s().p("AgKBKIAAiTIAVAAIAACTg");
	this.shape_364.setTransform(-154,-113.9);

	this.shape_365 = new cjs.Shape();
	this.shape_365.graphics.f("#0099CC").s().p("AgcAvQgMgHgIgMQgGgMgBgQQABgPAGgNQAIgLAMgIQANgGAPAAQAQAAANAGQAMAIAHALQAIANAAAPQAAAQgIAMQgHAMgMAHQgNAGgQABQgPgBgNgGgAgQgdQgHAEgFAIQgEAHAAAKQAAAPAJAKQAKAJANAAQAPAAAIgJQAKgKgBgPQAAgKgDgHQgFgIgHgEQgIgFgJAAQgJAAgHAFg");
	this.shape_365.setTransform(-163.2,-111.8);

	this.shape_366 = new cjs.Shape();
	this.shape_366.graphics.f("#0099CC").s().p("AgfBEQgLgHgGgMQgHgNAAgQQAAgQAHgLQAGgMALgHQAMgHAPAAQAMAAAJAFQAKAFAGAKIAAg9IAXAAIAACUIgXAAIAAgTQgGAKgJAFQgKAFgMAAQgPAAgMgHgAgQgJQgHAFgEAHQgFAIAAAKQAAAKAFAIQAEAIAHAEQAHAEAJAAQAKAAAHgEQAHgEAEgIQAFgIAAgKQAAgKgFgIQgEgHgHgFQgHgEgKAAQgJAAgHAEg");
	this.shape_366.setTransform(-176.9,-113.9);

	this.shape_367 = new cjs.Shape();
	this.shape_367.graphics.f("#0099CC").s().p("ABCA2IAAg7QgBgMgGgHQgHgHgMAAQgIAAgHAFQgGAEgEAHQgDAIgBAIIAAA1IgWAAIAAg7QAAgMgGgHQgHgHgLAAQgKAAgGAFQgHAEgDAHQgFAIAAAIIAAA1IgWAAIAAhqIAWAAIAAAVQAHgLAJgFQAKgGAOABQAOAAAJAGQAIAHAFAMQAEgNALgGQAKgHAPABQASAAAKAKQAKALABAUIAABBg");
	this.shape_367.setTransform(-201.8,-111.9);

	this.shape_368 = new cjs.Shape();
	this.shape_368.graphics.f("#0099CC").s().p("AgnArQgKgLAAgTIAAhCIAXAAIAAA7QAAAMAHAHQAGAHAMAAQAIAAAGgFQAHgEADgHQAEgIAAgIIAAg1IAXAAIAABqIgXAAIAAgVQgFALgKAFQgKAFgMABQgTgBgKgKg");
	this.shape_368.setTransform(-219.1,-111.8);

	this.shape_369 = new cjs.Shape();
	this.shape_369.graphics.f("#0099CC").s().p("AgWAyQgLgDgIgIIAJgQQAEAEAGADIAMAFIAMABQAIAAAEgDQAFgCABgGQgBgHgGgDQgFgDgIgDIgQgFQgIgDgGgGQgFgGAAgLQAAgLAFgHQAFgHAKgDQAIgDAKAAQAKAAAKADQAJACAIAGIgJARQgGgFgJgCQgIgDgHAAQgGAAgFADQgEACAAAGQABAFAFAEQAGADAHACIARAGQAIADAGAGQAGAGAAALQAAALgGAHQgFAHgKAEQgJADgLAAQgLAAgMgEg");
	this.shape_369.setTransform(-230.3,-111.8);

	this.shape_370 = new cjs.Shape();
	this.shape_370.graphics.f("#0099CC").s().p("Ag2BJIAAiRIAWAAIAAATQAHgJAJgFQAJgFAMAAQAPAAAMAGQAKAIAHALQAGANAAAQQAAAQgGALQgGAMgLAHQgMAGgPABQgMAAgJgFQgJgFgHgKIAAA6gAgQgwQgHAEgEAHQgEAIgBAKQABAQAIAIQAJAKAOAAQAJAAAIgEQAHgFAEgHQAEgHABgLQgBgKgEgIQgEgHgHgEQgIgFgJAAQgJAAgHAFg");
	this.shape_370.setTransform(-241.1,-109.9);

	this.shape_371 = new cjs.Shape();
	this.shape_371.graphics.f("#0099CC").s().p("AgLBLIAAhpIAWAAIAABpgAgIgzQgFgEAAgFQAAgHAFgDQADgEAFAAQAGAAAEAEQADADAAAHQAAAFgDAEQgEAEgGAAQgFAAgDgEg");
	this.shape_371.setTransform(-251.3,-114);

	this.shape_372 = new cjs.Shape();
	this.shape_372.graphics.f("#0099CC").s().p("ABCA2IAAg7QAAgMgHgHQgGgHgMAAQgKAAgGAFQgGAEgEAHQgDAIAAAIIAAA1IgXAAIAAg7QAAgMgHgHQgGgHgMAAQgJAAgHAFQgGAEgEAHQgDAIAAAIIAAA1IgXAAIAAhqIAXAAIAAAVQAFgLAKgFQAKgGANABQAPAAAJAGQAJAHADAMQAGgNAKgGQAKgHAPABQASAAAKAKQALALAAAUIAABBg");
	this.shape_372.setTransform(-272.9,-111.9);

	this.shape_373 = new cjs.Shape();
	this.shape_373.graphics.f("#0099CC").s().p("AgZAvQgMgHgHgMQgHgMAAgQQAAgPAHgNQAHgLAMgIQAMgGAPAAQATAAALAHQAMAIAFAOQAEAOgBASIhPAAQACANAJAHQAJAHAMAAQAIAAAIgDQAIgDAGgGIAMANQgIAIgLAFQgLAFgOAAQgQgBgMgGgAAggHQgBgNgIgIQgIgHgNAAQgMAAgIAHQgIAIgCANIA8AAIAAAAg");
	this.shape_373.setTransform(-289.3,-111.8);

	this.shape_374 = new cjs.Shape();
	this.shape_374.graphics.f("#0099CC").s().p("AgdA2IAAhqIAXAAIAAAVQAGgLAIgFQAJgGANABIAAAVQgLAAgIAEQgIADgDAHQgFAHgBAJIAAA3g");
	this.shape_374.setTransform(-298.4,-111.8);

	this.shape_375 = new cjs.Shape();
	this.shape_375.graphics.f("#0099CC").s().p("AgcAvQgNgHgGgMQgIgMAAgQQAAgPAIgNQAGgLANgIQANgGAPAAQAQAAANAGQAMAIAIALQAGANAAAPQAAAQgGAMQgIAMgMAHQgNAGgQABQgPgBgNgGgAgQgdQgHAEgFAIQgDAHAAAKQAAAPAJAKQAIAJAOAAQAOAAAKgJQAJgKAAgPQAAgKgFgHQgEgIgHgEQgIgFgJAAQgJAAgHAFg");
	this.shape_375.setTransform(-309.3,-111.8);

	this.shape_376 = new cjs.Shape();
	this.shape_376.graphics.f("#0099CC").s().p("AgpBGIAAiLIAXAAIAAB2IA8AAIAAAVg");
	this.shape_376.setTransform(-320.2,-113.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_376},{t:this.shape_375},{t:this.shape_374},{t:this.shape_373},{t:this.shape_372},{t:this.shape_371},{t:this.shape_370},{t:this.shape_369},{t:this.shape_368},{t:this.shape_367},{t:this.shape_366},{t:this.shape_365},{t:this.shape_364},{t:this.shape_363},{t:this.shape_362},{t:this.shape_361},{t:this.shape_360},{t:this.shape_359},{t:this.shape_358},{t:this.shape_357},{t:this.shape_356},{t:this.shape_355},{t:this.shape_354},{t:this.shape_353},{t:this.shape_352},{t:this.shape_351},{t:this.shape_350},{t:this.shape_349},{t:this.shape_348},{t:this.shape_347},{t:this.shape_346},{t:this.shape_345},{t:this.shape_344},{t:this.shape_343},{t:this.shape_342},{t:this.shape_341},{t:this.shape_340},{t:this.shape_339},{t:this.shape_338},{t:this.shape_337},{t:this.shape_336},{t:this.shape_335},{t:this.shape_334},{t:this.shape_333},{t:this.shape_332},{t:this.shape_331},{t:this.shape_330},{t:this.shape_329},{t:this.shape_328},{t:this.shape_327},{t:this.shape_326},{t:this.shape_325},{t:this.shape_324},{t:this.shape_323},{t:this.shape_322},{t:this.shape_321},{t:this.shape_320},{t:this.shape_319},{t:this.shape_318},{t:this.shape_317},{t:this.shape_316},{t:this.shape_315},{t:this.shape_314},{t:this.shape_313},{t:this.shape_312},{t:this.shape_311},{t:this.shape_310},{t:this.shape_309},{t:this.shape_308},{t:this.shape_307},{t:this.shape_306},{t:this.shape_305},{t:this.shape_304},{t:this.shape_303},{t:this.shape_302},{t:this.shape_301},{t:this.shape_300},{t:this.shape_299},{t:this.shape_298},{t:this.shape_297},{t:this.shape_296},{t:this.shape_295},{t:this.shape_294},{t:this.shape_293},{t:this.shape_292},{t:this.shape_291},{t:this.shape_290},{t:this.shape_289},{t:this.shape_288},{t:this.shape_287},{t:this.shape_286},{t:this.shape_285},{t:this.shape_284},{t:this.shape_283},{t:this.shape_282},{t:this.shape_281},{t:this.shape_280},{t:this.shape_279},{t:this.shape_278},{t:this.shape_277},{t:this.shape_276},{t:this.shape_275},{t:this.shape_274},{t:this.shape_273},{t:this.shape_272},{t:this.shape_271},{t:this.shape_270},{t:this.shape_269},{t:this.shape_268},{t:this.shape_267},{t:this.shape_266},{t:this.shape_265},{t:this.shape_264},{t:this.shape_263},{t:this.shape_262},{t:this.shape_261},{t:this.shape_260},{t:this.shape_259},{t:this.shape_258},{t:this.shape_257},{t:this.shape_256},{t:this.shape_255},{t:this.shape_254},{t:this.shape_253},{t:this.shape_252},{t:this.shape_251},{t:this.shape_250},{t:this.shape_249},{t:this.shape_248},{t:this.shape_247},{t:this.shape_246},{t:this.shape_245},{t:this.shape_244},{t:this.shape_243},{t:this.shape_242},{t:this.shape_241},{t:this.shape_240},{t:this.shape_239},{t:this.shape_238},{t:this.shape_237},{t:this.shape_236},{t:this.shape_235},{t:this.shape_234},{t:this.shape_233},{t:this.shape_232},{t:this.shape_231},{t:this.shape_230},{t:this.shape_229},{t:this.shape_228},{t:this.shape_227},{t:this.shape_226},{t:this.shape_225},{t:this.shape_224},{t:this.shape_223},{t:this.shape_222},{t:this.shape_221},{t:this.shape_220},{t:this.shape_219},{t:this.shape_218},{t:this.shape_217},{t:this.shape_216},{t:this.shape_215},{t:this.shape_214},{t:this.shape_213},{t:this.shape_212},{t:this.shape_211},{t:this.shape_210},{t:this.shape_209},{t:this.shape_208},{t:this.shape_207},{t:this.shape_206},{t:this.shape_205},{t:this.shape_204},{t:this.shape_203},{t:this.shape_202},{t:this.shape_201},{t:this.shape_200},{t:this.shape_199},{t:this.shape_198},{t:this.shape_197},{t:this.shape_196},{t:this.shape_195},{t:this.shape_194},{t:this.shape_193},{t:this.shape_192},{t:this.shape_191},{t:this.shape_190},{t:this.shape_189},{t:this.shape_188},{t:this.shape_187},{t:this.shape_186},{t:this.shape_185},{t:this.shape_184},{t:this.shape_183},{t:this.shape_182},{t:this.shape_181},{t:this.shape_180},{t:this.shape_179},{t:this.shape_178},{t:this.shape_177},{t:this.shape_176},{t:this.shape_175},{t:this.shape_174},{t:this.shape_173},{t:this.shape_172},{t:this.shape_171},{t:this.shape_170},{t:this.shape_169},{t:this.shape_168},{t:this.shape_167},{t:this.shape_166},{t:this.shape_165},{t:this.shape_164},{t:this.shape_163},{t:this.shape_162},{t:this.shape_161},{t:this.shape_160},{t:this.shape_159},{t:this.shape_158},{t:this.shape_157},{t:this.shape_156},{t:this.shape_155},{t:this.shape_154},{t:this.shape_153},{t:this.shape_152},{t:this.shape_151},{t:this.shape_150},{t:this.shape_149},{t:this.shape_148},{t:this.shape_147},{t:this.shape_146},{t:this.shape_145},{t:this.shape_144},{t:this.shape_143},{t:this.shape_142},{t:this.shape_141},{t:this.shape_140},{t:this.shape_139},{t:this.shape_138},{t:this.shape_137},{t:this.shape_136},{t:this.shape_135},{t:this.shape_134},{t:this.shape_133},{t:this.shape_132},{t:this.shape_131},{t:this.shape_130},{t:this.shape_129},{t:this.shape_128},{t:this.shape_127},{t:this.shape_126},{t:this.shape_125},{t:this.shape_124},{t:this.shape_123},{t:this.shape_122},{t:this.shape_121},{t:this.shape_120},{t:this.shape_119},{t:this.shape_118},{t:this.shape_117},{t:this.shape_116},{t:this.shape_115},{t:this.shape_114},{t:this.shape_113},{t:this.shape_112},{t:this.shape_111},{t:this.shape_110},{t:this.shape_109},{t:this.shape_108},{t:this.shape_107},{t:this.shape_106},{t:this.shape_105},{t:this.shape_104},{t:this.shape_103},{t:this.shape_102},{t:this.shape_101},{t:this.shape_100},{t:this.shape_99},{t:this.shape_98},{t:this.shape_97},{t:this.shape_96},{t:this.shape_95},{t:this.shape_94},{t:this.shape_93},{t:this.shape_92},{t:this.shape_91},{t:this.shape_90},{t:this.shape_89},{t:this.shape_88},{t:this.shape_87},{t:this.shape_86},{t:this.shape_85},{t:this.shape_84},{t:this.shape_83},{t:this.shape_82},{t:this.shape_81},{t:this.shape_80},{t:this.shape_79},{t:this.shape_78},{t:this.shape_77},{t:this.shape_76},{t:this.shape_75},{t:this.shape_74},{t:this.shape_73},{t:this.shape_72},{t:this.shape_71},{t:this.shape_70},{t:this.shape_69},{t:this.shape_68},{t:this.shape_67},{t:this.shape_66},{t:this.shape_65},{t:this.shape_64},{t:this.shape_63},{t:this.shape_62},{t:this.shape_61},{t:this.shape_60},{t:this.shape_59},{t:this.shape_58},{t:this.shape_57},{t:this.shape_56},{t:this.shape_55},{t:this.shape_54},{t:this.shape_53},{t:this.shape_52},{t:this.shape_51},{t:this.shape_50},{t:this.shape_49},{t:this.shape_48},{t:this.shape_47},{t:this.shape_46},{t:this.shape_45},{t:this.shape_44},{t:this.shape_43},{t:this.shape_42},{t:this.shape_41},{t:this.shape_40},{t:this.shape_39},{t:this.shape_38},{t:this.shape_37},{t:this.shape_36},{t:this.shape_35},{t:this.shape_34},{t:this.shape_33},{t:this.shape_32},{t:this.shape_31},{t:this.shape_30},{t:this.shape_29},{t:this.shape_28},{t:this.shape_27},{t:this.shape_26},{t:this.shape_25},{t:this.shape_24},{t:this.shape_23},{t:this.shape_22},{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-328.3,-132.6,656.6,265.2);


(lib.Tween12 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.instance = new lib.lion_red();
	this.instance.parent = this;
	this.instance.setTransform(-90,-120,0.3,0.3);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-90,-120,180,240);


(lib.Tween9 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#0099CC").s().p("AAkBGIAAhNQAAgQgIgJQgJgIgQgBQgQABgKAKQgLALgBAQIAABJIgeAAIAAiKIAeAAIAAAbQAHgOANgHQANgHARAAQAYABAOAOQANAOAAAZIAABVg");
	this.shape.setTransform(7.8,67.5);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#0099CC").s().p("AghA9QgQgIgJgQQgIgQgBgVQABgUAIgQQAJgPAQgJQAQgJATAAQAZAAAPAKQAOAKAHASQAGASgCAYIhnAAQADARAMAJQALAJAQAAQALAAAKgEQAKgEAHgIIAQARQgKALgOAGQgPAGgSAAQgUAAgQgJgAApgJQgBgRgKgKQgKgJgRAAQgQAAgLAJQgKAKgDARIBOAAIAAAAg");
	this.shape_1.setTransform(-8.6,67.5);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#0099CC").s().p("AgoBYQgPgJgIgQQgJgQABgVQgBgVAJgPQAIgPAPgJQAPgJATAAQAQAAAMAHQANAGAHAMIAAhOIAfAAIAADAIgfAAIAAgYQgHAMgMAHQgMAGgQAAQgUAAgPgJgAgVgMQgJAGgGAJQgFALgBANQABANAFAKQAGAKAJAGQAJAGAMAAQAMAAAKgGQAJgGAGgKQAGgKgBgNQABgNgGgLQgGgJgJgGQgKgFgMAAQgMAAgJAFg");
	this.shape_2.setTransform(-25.9,64.9);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#0099CC").s().p("AgmBGIAAiKIAeAAIAAAcQAHgOALgHQANgIAQAAIAAAdQgOgBgKAFQgLAFgEAJQgHAIgBAMIAABIg");
	this.shape_3.setTransform(-38.2,67.5);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#0099CC").s().p("AgmBAQgLgFgGgJQgGgKAAgNQABgSANgKQANgMAZAAIApAAIAAgFQAAgMgIgIQgIgHgQAAQgJAAgLADQgKAEgKAHIgNgVIASgKQAJgDAKgDQAKgCAMAAQAbABAOANQAOAMAAAXIABBaIgeAAIAAgRQgHAKgLADQgMAGgOAAQgPgBgLgGgAgaAMQgHAFAAAJQABAKAGAFQAIAGAMgBQAPAAALgHQALgHABgMIAAgMIgkAAQgPAAgHAEg");
	this.shape_4.setTransform(-52.3,67.6);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#0099CC").s().p("AgkBQQgVgMgNgVQgNgVAAgaQABgaANgUQAMgVAWgMQAWgMAbAAQATAAATAHQASAHAOALIgRAXQgLgKgOgFQgOgGgOAAQgSAAgPAJQgPAIgIAPQgJAOAAASQAAASAJAPQAIAOAPAJQAPAIASAAQAKAAALgDQALgDAKgGIAAgzIAbAAIAABDQgKAHgMAGQgLAFgMADQgNADgNAAQgaAAgWgMg");
	this.shape_5.setTransform(-69.7,65.4);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#0099CC").s().p("AgOBiIAAiKIAdAAIAACKgAgLhCQgGgFAAgHQAAgIAGgGQAFgEAGgBQAIABAEAEQAFAGABAIQgBAHgFAFQgEAFgIAAQgGAAgFgFg");
	this.shape_6.setTransform(-9.5,22.5);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#0099CC").s().p("AgmBGIAAiKIAeAAIAAAcQAHgOALgHQAMgIARAAIAAAdQgOgBgLAFQgJAFgFAJQgHAIgBAMIAABIg");
	this.shape_7.setTransform(-17.3,25.3);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#0099CC").s().p("AgmBBQgLgGgGgKQgFgJgBgMQABgUANgKQANgLAZAAIAqAAIAAgEQAAgOgJgHQgIgHgQAAQgKAAgKADQgKADgLAIIgMgVIASgJQAJgFAKgCQAKgBAMAAQAbgBAOANQAPANAAAXIAABaIgdAAIAAgRQgIAKgLAEQgMAEgOABQgPgBgLgFgAgaAMQgHAEAAAKQABAJAGAGQAIAFAMABQAPgBALgHQALgHACgMIAAgMIglAAQgPgBgHAFg");
	this.shape_8.setTransform(-31.4,25.4);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#0099CC").s().p("AgdBhIAAhuIgSAAIAAgWIASAAIAAgOQAAgQAHgLQAHgKAKgFQAKgFAMAAQAJAAAIACQAIADAGAFIgLAWQgEgDgFgBIgKgCQgHAAgGAEQgFAFAAAKIAAAQIAjAAIAAAWIgjAAIAABug");
	this.shape_9.setTransform(-41.8,22.6);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#0099CC").s().p("AgmBBQgLgGgGgKQgFgJgBgMQAAgUAOgKQAOgLAZAAIAoAAIAAgEQABgOgJgHQgJgHgPAAQgJAAgLADQgKADgLAIIgMgVIATgJQAIgFAKgCQAKgBAMAAQAagBAPANQAPANAAAXIAABaIgeAAIAAgRQgHAKgMAEQgLAEgOABQgPgBgLgFgAgaAMQgHAEAAAKQAAAJAIAGQAHAFAMABQAQgBAKgHQALgHABgMIAAgMIgkAAQgOgBgIAFg");
	this.shape_10.setTransform(-55.6,25.4);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#0099CC").s().p("AglBUQgTgHgPgOIAOgaQAOANAQAHQAQAGAOAAQARAAAJgFQAIgGABgLQgBgKgHgFQgHgGgLgEIgXgHQgMgEgLgFQgMgFgHgKQgHgJAAgQQAAgQAJgLQAIgMAPgGQAPgGATAAQARAAARAFQAQAFANAJIgNAbQgPgJgNgEQgOgEgLAAQgNAAgHAFQgIAFgBAJQABAKAHAFQAHAGALAEIAXAHQAMAEALAGQALAFAHAKQAHAKABAQQgBAQgIAMQgJAMgPAGQgQAGgUAAQgVAAgTgIg");
	this.shape_11.setTransform(-71.2,23.2);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#0099CC").s().p("AAkBGIAAhNQAAgQgIgJQgJgIgQgBQgQABgKAKQgLALgBAQIAABJIgeAAIAAiKIAeAAIAAAbQAHgOANgHQANgHARAAQAYABAOAOQANAOAAAZIAABVg");
	this.shape_12.setTransform(3.3,-16.8);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#0099CC").s().p("AgzA4QgNgPAAgZIAAhVIAeAAIAABNQAAAQAIAJQAJAJAPAAQALgBAJgFQAIgGAEgKQAFgJAAgLIAAhFIAeAAIAACKIgeAAIAAgbQgHAOgNAHQgMAHgQAAQgYAAgOgOg");
	this.shape_13.setTransform(-14.3,-16.7);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#0099CC").s().p("AgYB6QgHgDgHgEIAKgYQAEADAFACQAEACAFAAQAHAAAEgFQAEgEAAgKIAAiQIAeAAIAACNQAAAQgHALQgGALgKAFQgKAFgLAAQgIAAgHgCgAAHhcQgFgFAAgIQAAgIAFgFQAFgFAIAAQAJAAAEAFQAGAFAAAIQAAAIgGAFQgEAGgJAAQgIAAgFgGg");
	this.shape_14.setTransform(-28.3,-17.1);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#0099CC").s().p("AApBbIgig3IgEAAIgDAAIgsAAIAAA3IgeAAIAAi1IBKAAQAiAAATAQQATAQAAAeQAAAWgKAOQgKAPgSAHIApA9gAgsAJIAsAAQAUAAAMgJQALgIAAgTQAAgSgLgIQgMgKgUABIgsAAg");
	this.shape_15.setTransform(-38.9,-18.9);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#0099CC").s().p("AgmBBQgLgGgGgJQgGgKAAgNQABgSANgLQANgLAZAAIApAAIAAgFQAAgNgIgHQgIgHgQgBQgJAAgLAFQgKADgKAHIgNgVIASgKQAJgEAKgBQAKgCAMAAQAbAAAOAMQAOAOAAAWIABBaIgeAAIAAgRQgHAJgLAFQgMAEgOAAQgPAAgLgFgAgaAMQgHAFAAAJQABAJAGAGQAIAGAMAAQAPAAALgIQALgHABgLIAAgOIgkAAQgPABgHAEg");
	this.shape_16.setTransform(-56.8,-16.7);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#0099CC").s().p("Ag8BbIAAi1IB5AAIAAAcIhaAAIAAA0IBRAAIAAAbIhRAAIAABKg");
	this.shape_17.setTransform(-70.5,-18.9);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#0099CC").s().p("AglA9QgQgJgJgPQgJgQAAgVQAAgUAJgQQAJgPAQgJQARgJAUAAQAWAAAQAJQAQAJAJAPQAJAQAAAUQAAAVgJAQQgJAPgQAJQgQAJgWAAQgUAAgRgJgAgVgmQgJAGgGAKQgFAKAAAMQAAAVAMAMQALAMASAAQATAAALgMQAMgMAAgVQAAgMgFgKQgGgKgJgGQgJgFgNgBQgLABgKAFg");
	this.shape_18.setTransform(70.7,-58.9);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#0099CC").s().p("AgGBSQgJgEgFgJQgGgJAAgOIAAhHIgTAAIAAgWIATAAIAAgmIAdAAIAAAmIApAAIAAAWIgpAAIAABBQAAALAEAEQAEAEAHAAIAJgCIAMgEIAHAXQgIAFgJACQgIADgJAAQgLAAgHgEg");
	this.shape_19.setTransform(57.4,-60.5);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#0099CC").s().p("AghA9QgQgIgJgQQgIgQgBgVQABgUAIgQQAJgPAQgJQAQgJATAAQAZAAAPAKQAOAKAHASQAGASgCAYIhnAAQADARAMAJQALAJAQAAQALAAAKgEQAKgEAHgIIAQARQgKALgOAGQgPAGgSAAQgUAAgQgJgAApgJQgBgRgKgKQgKgJgRAAQgQAAgLAJQgKAKgDARIBOAAIAAAAg");
	this.shape_20.setTransform(36.6,-58.9);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#0099CC").s().p("ABWBGIAAhNQgBgQgIgJQgJgJgPAAQgMABgJAFQgIAGgFAKQgEAJAAALIAABFIgdAAIAAhNQAAgQgJgJQgIgJgQAAQgMABgIAFQgJAGgEAKQgFAJAAALIAABFIgeAAIAAiKIAeAAIAAAbQAHgOANgHQANgHARAAQATAAAMAJQALAJAFAQQAHgSANgIQAOgIATAAQAYABANAOQANAOABAZIAABVg");
	this.shape_21.setTransform(15.6,-59);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("#0099CC").s().p("AglA9QgQgJgJgPQgJgQAAgVQAAgUAJgQQAJgPAQgJQARgJAUAAQAWAAAQAJQAQAJAJAPQAJAQAAAUQAAAVgJAQQgJAPgQAJQgQAJgWAAQgUAAgRgJgAgVgmQgJAGgGAKQgFAKAAAMQAAAVAMAMQALAMASAAQATAAALgMQAMgMAAgVQAAgMgFgKQgGgKgJgGQgJgFgNgBQgLABgKAFg");
	this.shape_22.setTransform(-6.3,-58.9);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f("#0099CC").s().p("AgeA9QgPgIgJgQQgJgQAAgVQAAgUAJgQQAJgPAPgJQAQgJATAAQATAAAPAGQAOAGAKAKIgRAUQgHgIgKgEQgKgEgMAAQgLAAgJAGQgKAFgFAKQgFAKAAAMQAAAOAFAJQAFAKAKAGQAJAFALAAQANAAAKgEQALgEAHgIIAQAQQgJANgPAHQgPAGgUAAQgTAAgQgJg");
	this.shape_23.setTransform(-21.8,-58.9);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f("#0099CC").s().p("AgOBgIAAi/IAdAAIAAC/g");
	this.shape_24.setTransform(-32.9,-61.6);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f("#0099CC").s().p("AghA9QgQgIgJgQQgIgQgBgVQABgUAIgQQAJgPAQgJQAQgJATAAQAZAAAPAKQAOAKAHASQAGASgCAYIhnAAQADARAMAJQALAJAQAAQALAAAKgEQAKgEAHgIIAQARQgKALgOAGQgPAGgSAAQgUAAgQgJgAApgJQgBgRgKgKQgKgJgRAAQgQAAgLAJQgKAKgDARIBOAAIAAAAg");
	this.shape_25.setTransform(-44.4,-58.9);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f("#0099CC").s().p("AArBbIgriNIgqCNIghAAIg8i1IAhAAIAtCTIAsiTIAcAAIAtCTIAsiTIAfAAIg8C1g");
	this.shape_26.setTransform(-65.3,-61.1);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_26},{t:this.shape_25},{t:this.shape_24},{t:this.shape_23},{t:this.shape_22},{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-81,-85.3,162.1,170.6);


(lib.Tween7 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#0099CC").s().p("AAkBGIAAhNQAAgQgIgJQgJgIgQgBQgQABgKAKQgLALgBAQIAABJIgeAAIAAiKIAeAAIAAAbQAHgOANgHQANgHARAAQAYABAOAOQANAOAAAZIAABVg");
	this.shape.setTransform(7.8,67.5);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#0099CC").s().p("AghA9QgQgIgJgQQgIgQgBgVQABgUAIgQQAJgPAQgJQAQgJATAAQAZAAAPAKQAOAKAHASQAGASgCAYIhnAAQADARAMAJQALAJAQAAQALAAAKgEQAKgEAHgIIAQARQgKALgOAGQgPAGgSAAQgUAAgQgJgAApgJQgBgRgKgKQgKgJgRAAQgQAAgLAJQgKAKgDARIBOAAIAAAAg");
	this.shape_1.setTransform(-8.7,67.5);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#0099CC").s().p("AgoBYQgPgJgIgQQgJgQAAgVQAAgVAJgPQAIgPAPgJQAPgJATAAQAQAAANAHQAMAGAIAMIAAhOIAdAAIAADAIgdAAIAAgYQgIAMgMAHQgNAGgPAAQgUAAgPgJgAgVgMQgJAGgGAJQgGALAAANQAAANAGAKQAGAKAJAGQAKAGALAAQAMAAAKgGQAJgGAGgKQAFgKABgNQgBgNgFgLQgGgJgJgGQgKgFgMAAQgLAAgKAFg");
	this.shape_2.setTransform(-25.9,64.9);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#0099CC").s().p("AgmBGIAAiKIAeAAIAAAcQAHgOALgHQAMgIARAAIAAAdQgOgBgLAFQgKAFgFAJQgGAIgBAMIAABIg");
	this.shape_3.setTransform(-38.2,67.5);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#0099CC").s().p("AgmBAQgLgFgGgJQgGgKAAgNQAAgSAOgKQANgMAaAAIAoAAIAAgFQABgMgJgIQgJgHgPAAQgJAAgLADQgKAEgLAHIgMgVIATgKQAIgDAKgDQAKgCAMAAQAaABAPANQAPAMAAAXIAABaIgeAAIAAgRQgHAKgMADQgLAGgOAAQgPgBgLgGgAgaAMQgHAFAAAJQAAAKAIAFQAGAGANgBQAQAAAKgHQALgHABgMIAAgMIgkAAQgOAAgIAEg");
	this.shape_4.setTransform(-52.3,67.6);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#0099CC").s().p("AgjBQQgWgMgNgVQgMgVAAgaQAAgaAMgUQANgVAWgMQAWgMAbAAQATAAATAHQASAHANALIgRAXQgKgKgOgFQgOgGgOAAQgSAAgPAJQgOAIgKAPQgJAOAAASQAAASAJAPQAKAOAPAJQAPAIARAAQALAAAKgDQALgDAKgGIAAgzIAaAAIAABDQgJAHgLAGQgMAFgNADQgMADgNAAQgaAAgVgMg");
	this.shape_5.setTransform(-69.8,65.4);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#0099CC").s().p("AgOBiIAAiKIAcAAIAACKgAgMhCQgEgFgBgHQABgIAEgGQAFgEAHgBQAHABAGAEQAEAGAAAIQAAAHgEAFQgGAFgHAAQgHAAgFgFg");
	this.shape_6.setTransform(-9.5,22.5);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#0099CC").s().p("AgmBGIAAiKIAeAAIAAAcQAHgOALgHQANgIAQAAIAAAdQgOgBgKAFQgLAFgFAJQgGAIgBAMIAABIg");
	this.shape_7.setTransform(-17.4,25.3);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#0099CC").s().p("AgmBBQgLgGgGgKQgGgJAAgMQABgUANgKQAOgLAYAAIApAAIAAgEQAAgOgIgHQgIgHgQAAQgKAAgKADQgKADgKAIIgNgVIATgJQAIgFAKgCQAKgBAMAAQAbgBAOANQAOANAAAXIABBaIgeAAIAAgRQgHAKgMAEQgLAEgOABQgPgBgLgFgAgaAMQgHAEAAAKQAAAJAIAGQAGAFANABQAPgBALgHQALgHABgMIAAgMIgkAAQgOgBgIAFg");
	this.shape_8.setTransform(-31.5,25.4);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#0099CC").s().p("AgdBhIAAhuIgTAAIAAgWIATAAIAAgOQAAgQAHgLQAHgKALgFQAJgFAMAAQAJAAAIACQAIADAHAFIgMAWQgEgDgFgBIgKgCQgIAAgFAEQgFAFAAAKIAAAQIAjAAIAAAWIgjAAIAABug");
	this.shape_9.setTransform(-41.8,22.6);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#0099CC").s().p("AgmBBQgLgGgGgKQgFgJgBgMQAAgUAOgKQANgLAZAAIAqAAIAAgEQAAgOgJgHQgIgHgQAAQgKAAgKADQgKADgKAIIgNgVIASgJQAJgFAKgCQAKgBAMAAQAagBAPANQAOANAAAXIABBaIgdAAIAAgRQgIAKgLAEQgMAEgOABQgPgBgLgFgAgaAMQgHAEAAAKQABAJAGAGQAIAFAMABQAPgBALgHQALgHACgMIAAgMIglAAQgPgBgHAFg");
	this.shape_10.setTransform(-55.6,25.4);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#0099CC").s().p("AglBUQgTgHgPgOIAOgaQAOANAQAHQAQAGAOAAQARAAAJgFQAIgGABgLQgBgKgHgFQgHgGgLgEIgXgHQgMgEgLgFQgMgFgHgKQgHgJAAgQQAAgQAJgLQAIgMAPgGQAPgGATAAQARAAARAFQAQAFANAJIgNAbQgPgJgNgEQgOgEgLAAQgNAAgHAFQgIAFgBAJQABAKAHAFQAHAGALAEIAXAHQAMAEALAGQALAFAHAKQAHAKABAQQgBAQgIAMQgJAMgPAGQgQAGgUAAQgVAAgTgIg");
	this.shape_11.setTransform(-71.2,23.2);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#0099CC").s().p("AAkBGIAAhNQAAgQgIgJQgJgIgQgBQgQABgKAKQgLALgBAQIAABJIgeAAIAAiKIAeAAIAAAbQAHgOANgHQANgHARAAQAYABAOAOQANAOAAAZIAABVg");
	this.shape_12.setTransform(3.2,-16.8);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#0099CC").s().p("AgzA4QgNgPAAgZIAAhVIAeAAIAABNQAAAQAIAJQAJAJAPAAQALgBAJgFQAIgGAEgKQAFgJAAgLIAAhFIAeAAIAACKIgeAAIAAgbQgHAOgNAHQgMAHgQAAQgYAAgOgOg");
	this.shape_13.setTransform(-14.3,-16.7);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#0099CC").s().p("AgYB6QgIgDgFgEIAKgYQAEADAEACQAFACAEAAQAHAAADgFQAFgEABgKIAAiQIAdAAIAACNQgBAQgGALQgGALgLAFQgKAFgKAAQgIAAgHgCgAAHhcQgFgFAAgIQAAgIAFgFQAFgFAIAAQAIAAAGAFQAEAFAAAIQAAAIgEAFQgGAGgIAAQgIAAgFgGg");
	this.shape_14.setTransform(-28.4,-17.1);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#0099CC").s().p("AAoBbIghg3IgEAAIgDAAIgrAAIAAA3IgfAAIAAi1IBKAAQAiAAATAQQATAQAAAeQAAAWgKAOQgKAPgRAHIAoA9gAgrAJIArAAQAUAAALgJQAMgIAAgTQAAgSgMgIQgLgKgUABIgrAAg");
	this.shape_15.setTransform(-38.9,-18.9);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#0099CC").s().p("AgmBBQgLgGgGgJQgGgKAAgNQAAgSAOgLQANgLAaAAIAoAAIAAgFQABgNgJgHQgJgHgPgBQgJAAgLAFQgKADgLAHIgMgVIATgKQAIgEAKgBQAKgCAMAAQAaAAAPAMQAPAOAAAWIAABaIgeAAIAAgRQgHAJgMAFQgLAEgOAAQgPAAgLgFgAgaAMQgHAFAAAJQAAAJAIAGQAGAGANAAQAQAAAKgIQALgHABgLIAAgOIgkAAQgOABgIAEg");
	this.shape_16.setTransform(-56.8,-16.7);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#0099CC").s().p("Ag8BbIAAi1IB5AAIAAAcIhbAAIAAA0IBSAAIAAAbIhSAAIAABKg");
	this.shape_17.setTransform(-70.5,-18.9);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#0099CC").s().p("AglA9QgQgJgJgPQgJgQAAgVQAAgUAJgQQAJgPAQgJQARgJAUAAQAWAAAQAJQAQAJAJAPQAJAQAAAUQAAAVgJAQQgJAPgQAJQgQAJgWAAQgUAAgRgJgAgVgmQgJAGgGAKQgFAKAAAMQAAAVAMAMQALAMASAAQATAAALgMQAMgMAAgVQAAgMgFgKQgGgKgJgGQgJgFgNgBQgLABgKAFg");
	this.shape_18.setTransform(70.7,-58.9);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#0099CC").s().p("AgGBSQgJgEgFgJQgGgJAAgOIAAhHIgTAAIAAgWIATAAIAAgmIAdAAIAAAmIApAAIAAAWIgpAAIAABBQAAALAEAEQAEAEAHAAIAJgCIAMgEIAHAXQgIAFgJACQgIADgJAAQgLAAgHgEg");
	this.shape_19.setTransform(57.4,-60.5);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#0099CC").s().p("AghA9QgQgIgJgQQgIgQgBgVQABgUAIgQQAJgPAQgJQAQgJATAAQAZAAAPAKQAOAKAHASQAGASgCAYIhnAAQADARAMAJQALAJAQAAQALAAAKgEQAKgEAHgIIAQARQgKALgOAGQgPAGgSAAQgUAAgQgJgAApgJQgBgRgKgKQgKgJgRAAQgQAAgLAJQgKAKgDARIBOAAIAAAAg");
	this.shape_20.setTransform(36.5,-58.9);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#0099CC").s().p("ABWBGIAAhNQgBgQgIgJQgJgJgPAAQgMABgJAFQgIAGgFAKQgEAJAAALIAABFIgdAAIAAhNQAAgQgJgJQgIgJgQAAQgMABgIAFQgJAGgEAKQgFAJAAALIAABFIgeAAIAAiKIAeAAIAAAbQAHgOANgHQANgHARAAQATAAAMAJQALAJAFAQQAHgSANgIQAOgIATAAQAYABANAOQANAOABAZIAABVg");
	this.shape_21.setTransform(15.5,-59);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("#0099CC").s().p("AglA9QgQgJgJgPQgJgQAAgVQAAgUAJgQQAJgPAQgJQARgJAUAAQAWAAAQAJQAQAJAJAPQAJAQAAAUQAAAVgJAQQgJAPgQAJQgQAJgWAAQgUAAgRgJgAgVgmQgJAGgGAKQgFAKAAAMQAAAVAMAMQALAMASAAQATAAALgMQAMgMAAgVQAAgMgFgKQgGgKgJgGQgJgFgNgBQgLABgKAFg");
	this.shape_22.setTransform(-6.4,-58.9);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f("#0099CC").s().p("AgeA9QgPgIgJgQQgJgQAAgVQAAgUAJgQQAJgPAPgJQAQgJATAAQATAAAPAGQAOAGAKAKIgRAUQgHgIgKgEQgKgEgMAAQgLAAgJAGQgKAFgFAKQgFAKAAAMQAAAOAFAJQAFAKAKAGQAJAFALAAQANAAAKgEQALgEAHgIIAQAQQgJANgPAHQgPAGgUAAQgTAAgQgJg");
	this.shape_23.setTransform(-21.8,-58.9);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f("#0099CC").s().p("AgOBgIAAi/IAdAAIAAC/g");
	this.shape_24.setTransform(-32.9,-61.6);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f("#0099CC").s().p("AghA9QgQgIgJgQQgIgQgBgVQABgUAIgQQAJgPAQgJQAQgJATAAQAZAAAPAKQAOAKAHASQAGASgCAYIhnAAQADARAMAJQALAJAQAAQALAAAKgEQAKgEAHgIIAQARQgKALgOAGQgPAGgSAAQgUAAgQgJgAApgJQgBgRgKgKQgKgJgRAAQgQAAgLAJQgKAKgDARIBOAAIAAAAg");
	this.shape_25.setTransform(-44.4,-58.9);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f("#0099CC").s().p("AArBbIgriNIgrCNIggAAIg7i1IAgAAIAsCTIAsiTIAeAAIAsCTIAriTIAhAAIg+C1g");
	this.shape_26.setTransform(-65.4,-61.1);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_26},{t:this.shape_25},{t:this.shape_24},{t:this.shape_23},{t:this.shape_22},{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-81,-85.3,162.1,170.6);


(lib.getstarted = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AgfBEQgLgHgGgMQgHgNAAgQQAAgQAHgLQAGgMALgHQAMgHAPAAQAMAAAJAFQAKAFAGAKIAAg9IAXAAIAACUIgXAAIAAgTQgGAKgJAFQgKAFgMAAQgPAAgMgHgAgQgJQgHAFgEAHQgFAIAAAKQAAAKAFAIQAEAIAHAEQAHAEAJAAQAKAAAHgEQAHgEAEgIQAFgIAAgKQAAgKgFgIQgEgHgHgFQgHgEgKAAQgJAAgHAEg");
	this.shape.setTransform(49.3,1.2);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AgZAvQgMgHgHgMQgHgMAAgQQAAgPAHgNQAHgLAMgIQAMgGAPAAQATAAALAHQAMAIAFAOQAEAOgBATIhPAAQACAMAJAHQAJAHAMAAQAIAAAIgDQAIgDAGgGIAMANQgIAIgLAFQgLAEgOABQgQAAgMgHgAAggHQgBgNgIgIQgIgHgNAAQgMAAgIAHQgIAIgCANIA8AAIAAAAg");
	this.shape_1.setTransform(37.2,3.3);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("AgEA/QgHgDgEgHQgEgHgBgLIAAg2IgPAAIAAgRIAPAAIAAgdIAXAAIAAAdIAfAAIAAARIgfAAIAAAyQAAAIACADQADAEAGgBIAIgBIAIgDIAFARQgFAEgHACQgHACgHAAQgIAAgFgDg");
	this.shape_2.setTransform(27.4,2);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFFFFF").s().p("AgdA2IAAhqIAXAAIAAAVQAFgKAJgGQAJgFANgBIAAAWQgLAAgIAEQgHADgEAHQgFAHgBAJIAAA3g");
	this.shape_3.setTransform(20,3.2);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FFFFFF").s().p("AgdAxQgIgDgFgIQgEgHgBgKQABgOAKgIQAKgJAUAAIAfAAIAAgDQAAgLgHgFQgGgGgMABQgHAAgIACQgIADgIAFIgJgQIAOgIIAOgDQAHgCAKAAQAUAAALAKQALAJAAASIABBFIgXAAIAAgNQgGAHgJADQgJAEgKAAQgMAAgIgFgAgUAJQgFADAAAIQAAAIAGADQAFAEAKABQALAAAJgGQAIgFABgKIAAgJIgcAAIgDAAQgJAAgFADg");
	this.shape_4.setTransform(9.2,3.3);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FFFFFF").s().p("AgFA/QgGgDgEgHQgEgHgBgLIAAg2IgOAAIAAgRIAOAAIAAgdIAXAAIAAAdIAfAAIAAARIgfAAIAAAyQAAAIACADQADAEAGgBIAHgBIAJgDIAGARQgHAEgGACQgHACgGAAQgIAAgHgDg");
	this.shape_5.setTransform(-0.3,2);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#FFFFFF").s().p("AgcBBQgPgHgLgKIALgUQALAKAMAGQANAEAKAAQAMAAAHgEQAHgEAAgJQAAgHgGgEQgFgFgIgDIgRgGQgLgCgIgEQgIgEgGgHQgGgIABgMQgBgMAHgJQAGgIALgFQAMgFAOAAQAOAAANAEQANAEAKAGIgKAVQgMgHgLgDQgLgDgIAAQgJAAgGAEQgGADAAAIQAAAIAFADQAGAFAIADIASAGQAJADAJAEQAIADAFAIQAGAIAAAMQAAANgHAJQgGAJgMAFQgMAEgQABQgPgBgPgFg");
	this.shape_6.setTransform(-10.9,1.6);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#FFFFFF").s().p("AgFA/QgGgDgEgHQgEgHAAgLIAAg2IgQAAIAAgRIAQAAIAAgdIAVAAIAAAdIAgAAIAAARIggAAIAAAyQAAAIAEADQADAEAFgBIAHgBIAJgDIAFARQgFAEgHACQgHACgHAAQgHAAgHgDg");
	this.shape_7.setTransform(-26.9,2);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#FFFFFF").s().p("AgZAvQgMgHgHgMQgHgMAAgQQAAgPAHgNQAHgLAMgIQAMgGAPAAQATAAALAHQAMAIAFAOQAEAOgBATIhPAAQACAMAJAHQAJAHAMAAQAIAAAIgDQAIgDAGgGIAMANQgIAIgLAFQgLAEgOABQgQAAgMgHgAAggHQgBgNgIgIQgIgHgNAAQgMAAgIAHQgIAIgCANIA8AAIAAAAg");
	this.shape_8.setTransform(-36.9,3.3);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#FFFFFF").s().p("AgbA9QgRgJgKgQQgJgQAAgUQAAgTAKgQQAJgQARgJQARgKAVAAQAPAAAOAFQAOAGAKAJIgNARQgIgHgLgFQgKgEgLAAQgOAAgLAHQgMAGgHAMQgGALAAANQAAAOAHALQAGALAMAHQALAGAOABQAIAAAIgDQAIgDAIgEIAAgnIAVAAIAAA0IgRAJQgJAEgJACQgKADgKAAQgUAAgQgKg");
	this.shape_9.setTransform(-50.7,1.6);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#0099CC").s().p("AqEEsQhpAAAAhiIAAmSQAAhjBpAAIUJAAQBpAAAABjIAAGSQAABihpAAg");

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-75,-30,150,60);


(lib.backtohome = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AgZAvQgMgHgHgMQgHgMAAgQQAAgPAHgMQAHgMAMgIQAMgGAPAAQATAAALAIQAMAHAFAOQAEAOgBATIhPAAQACAMAJAHQAJAHAMAAQAIAAAIgDQAIgDAGgGIAMANQgIAIgLAFQgLAEgOABQgQAAgMgHgAAggHQgBgNgIgHQgIgIgNAAQgMAAgIAIQgIAHgCANIA8AAIAAAAg");
	this.shape.setTransform(65.4,3.4);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("ABCA2IAAg7QAAgMgHgHQgHgHgMAAQgIAAgHAFQgGAEgEAHQgDAIgBAIIAAA1IgWAAIAAg7QAAgMgGgHQgHgHgLAAQgKAAgGAFQgHAEgDAHQgFAIAAAIIAAA1IgWAAIAAhqIAWAAIAAAVQAHgLAJgFQAKgGAOABQAOAAAJAGQAIAHAFAMQAEgNALgGQAKgHAPABQASAAAKAKQAKALABAUIAABBg");
	this.shape_1.setTransform(49.3,3.3);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("AgcAvQgMgHgIgMQgGgMgBgQQABgQAGgLQAIgMAMgIQANgGAPAAQAQAAANAGQAMAIAIAMQAGALABAQQgBAQgGAMQgIAMgMAHQgNAHgQAAQgPAAgNgHgAgQgdQgHAEgFAIQgDAHAAAKQgBAPAKAKQAJAKANAAQAOAAAJgKQAKgKgBgPQAAgKgDgHQgFgIgHgEQgIgEgJAAQgIAAgIAEg");
	this.shape_2.setTransform(32.4,3.4);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFFFFF").s().p("AAlBGIAAg6IhJAAIAAA6IgYAAIAAiLIAYAAIAAA9IBJAAIAAg9IAYAAIAACLg");
	this.shape_3.setTransform(18.3,1.7);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FFFFFF").s().p("AgcAvQgMgHgIgMQgHgMAAgQQAAgQAHgLQAIgMAMgIQANgGAPAAQAQAAANAGQAMAIAIAMQAGALABAQQgBAQgGAMQgIAMgMAHQgNAHgQAAQgPAAgNgHgAgQgdQgHAEgFAIQgDAHAAAKQgBAPAKAKQAIAKAOAAQAOAAAJgKQAKgKAAgPQgBgKgDgHQgFgIgHgEQgHgEgKAAQgIAAgIAEg");
	this.shape_4.setTransform(-1.9,3.4);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FFFFFF").s().p("AgEA/QgHgDgEgHQgEgHgBgLIAAg2IgOAAIAAgRIAOAAIAAgdIAXAAIAAAdIAfAAIAAARIgfAAIAAAyQAAAIACADQADAEAGgBIAIgBIAIgDIAFARQgGAEgGACQgHACgGAAQgJAAgFgDg");
	this.shape_5.setTransform(-12.1,2.1);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#FFFFFF").s().p("AAWBKIgegxIgSATIAAAeIgXAAIAAiTIAXAAIAABYIAuguIAbAAIgoAoIArBBg");
	this.shape_6.setTransform(-27.4,1.2);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#FFFFFF").s().p("AgXAvQgMgHgHgMQgHgMAAgQQAAgPAHgMQAHgMAMgIQAMgGAPAAQAOAAALAEQAMAFAHAIIgMAPQgGgGgIgDQgIgDgJAAQgIAAgIAEQgGAFgFAHQgDAIAAAJQAAAKADAIQAFAHAGAEQAIAFAIAAQAKAAAIgEQAIgDAGgGIAMANQgHAKgMAEQgLAFgPABQgPAAgMgHg");
	this.shape_7.setTransform(-39.8,3.4);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#FFFFFF").s().p("AgdAxQgIgDgFgIQgEgIgBgJQABgPAKgHQAKgJAUAAIAfAAIAAgDQAAgLgHgFQgGgGgMABQgHgBgIADQgIADgIAFIgJgQIAOgIIAOgDQAHgCAKAAQAUAAALAKQALAKAAARIABBFIgXAAIAAgNQgGAHgJADQgJAEgKAAQgMAAgIgFgAgUAJQgFADAAAIQAAAIAGADQAFAFAKAAQALgBAJgFQAIgGABgJIAAgJIgcAAIgDAAQgJAAgFADg");
	this.shape_8.setTransform(-51.6,3.4);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#FFFFFF").s().p("Ag3BGIAAiLIA7AAQAWAAAMAJQANAJAAARQAAAMgHAIQgGAIgMADQAPADAIAIQAHAJAAAOQAAATgNAKQgNAKgYAAgAggAxIAjAAQAOAAAIgFQAHgGABgKQgBgJgHgFQgIgGgOABIgjAAgAgggLIAjAAQAMAAAFgFQAHgFAAgJQAAgJgHgEQgFgFgMAAIgjAAg");
	this.shape_9.setTransform(-63.7,1.7);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#0099CC").s().p("AsfEsQhkAAAAhOIAAm7QAAhOBkAAIY/AAQBkAAAABOIAAG7QAABOhkAAg");

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-90,-30,180,60);


(lib.owl_up = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_14 = function() {
		this.stop()
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).wait(14).call(this.frame_14).wait(1));

	// Layer_1
	this.instance = new lib.Tween16("synched",0);
	this.instance.parent = this;

	this.instance_1 = new lib.Tween17("synched",0);
	this.instance_1.parent = this;
	this.instance_1.setTransform(0,-36.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance}]}).to({state:[{t:this.instance_1}]},14).wait(1));
	this.timeline.addTween(cjs.Tween.get(this.instance).to({_off:true,y:-36.5},14,cjs.Ease.quartInOut).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-90,-120,180,240);


(lib.owl_g = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.instance = new lib.owl_red();
	this.instance.parent = this;
	this.instance.setTransform(-90,-120,0.3,0.3);

	this.instance_1 = new lib.owl_up();
	this.instance_1.parent = this;

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance}]}).to({state:[{t:this.instance_1}]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-90,-120,180,240);


(lib.octopus_up = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_14 = function() {
		this.stop()
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).wait(14).call(this.frame_14).wait(1));

	// Layer_1
	this.instance = new lib.Tween21("synched",0);
	this.instance.parent = this;

	this.instance_1 = new lib.Tween22("synched",0);
	this.instance_1.parent = this;
	this.instance_1.setTransform(0,-46);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance}]}).to({state:[{t:this.instance_1}]},14).wait(1));
	this.timeline.addTween(cjs.Tween.get(this.instance).to({_off:true,y:-46},14,cjs.Ease.quartInOut).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-90,-120,180,240);


(lib.octopus_g = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.instance = new lib.octopus_red();
	this.instance.parent = this;
	this.instance.setTransform(-90,-120,0.3,0.3);

	this.instance_1 = new lib.octopus_up();
	this.instance_1.parent = this;

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance}]}).to({state:[{t:this.instance_1}]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-90,-120,180,240);


(lib.lion_up = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_14 = function() {
		this.stop()
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).wait(14).call(this.frame_14).wait(1));

	// Layer_1
	this.instance = new lib.Tween12("synched",0);
	this.instance.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance).to({y:-36.5},14,cjs.Ease.quartInOut).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-90,-120,180,240);


(lib.lion_g = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.instance = new lib.Tween12("synched",0);
	this.instance.parent = this;

	this.instance_1 = new lib.lion_up();
	this.instance_1.parent = this;

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance}]}).to({state:[{t:this.instance_1}]},1).wait(1));
	this.timeline.addTween(cjs.Tween.get(this.instance).to({_off:true,mode:"independent"},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-90,-120,180,240);


(lib.dolphin_up = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_14 = function() {
		this.stop()
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).wait(14).call(this.frame_14).wait(1));

	// Layer_1
	this.instance = new lib.Tween25("synched",0);
	this.instance.parent = this;

	this.instance_1 = new lib.Tween26("synched",0);
	this.instance_1.parent = this;
	this.instance_1.setTransform(0,-46);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance}]}).to({state:[{t:this.instance_1}]},14).wait(1));
	this.timeline.addTween(cjs.Tween.get(this.instance).to({_off:true,y:-46},14,cjs.Ease.quartInOut).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-90,-120,180,240);


(lib.dolphin_g = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.instance = new lib.dolphin_red();
	this.instance.parent = this;
	this.instance.setTransform(-90,-120,0.3,0.3);

	this.instance_1 = new lib.dolphin_up();
	this.instance_1.parent = this;

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance}]}).to({state:[{t:this.instance_1}]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-90,-120,180,240);


(lib.alpaca_up = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_14 = function() {
		this.stop()
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).wait(14).call(this.frame_14).wait(1));

	// Layer_1
	this.instance = new lib.Tween19("synched",0);
	this.instance.parent = this;

	this.instance_1 = new lib.Tween20("synched",0);
	this.instance_1.parent = this;
	this.instance_1.setTransform(0,-46);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance}]}).to({state:[{t:this.instance_1}]},14).wait(1));
	this.timeline.addTween(cjs.Tween.get(this.instance).to({_off:true,y:-46},14,cjs.Ease.quartInOut).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-90,-120,180,240);


(lib.alpaca_g = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.instance = new lib.alpaca_red();
	this.instance.parent = this;
	this.instance.setTransform(-90,-120,0.3,0.3);

	this.instance_1 = new lib.alpaca_up();
	this.instance_1.parent = this;

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance}]}).to({state:[{t:this.instance_1}]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-90,-120,180,240);


// stage content:
(lib.Mulmed = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_59 = function() {
		this.stop()
		
		this.startBtn.addEventListener("click", clickStart.bind(this));
		
		function clickStart()
		{
			this.gotoAndPlay(61);
		}
	}
	this.frame_119 = function() {
		this.stop()
		
		this.backHome.addEventListener("click", goHome.bind(this));
		
		function goHome()
		{
			this.gotoAndPlay(122);
		}
	}
	this.frame_148 = function() {
		this.gotoAndPlay(0);
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).wait(59).call(this.frame_59).wait(60).call(this.frame_119).wait(29).call(this.frame_148).wait(2));

	// backtohome
	this.backHome = new lib.backtohome();
	this.backHome.name = "backHome";
	this.backHome.parent = this;
	this.backHome.setTransform(-2062.2,610);
	this.backHome._off = true;
	new cjs.ButtonHelper(this.backHome, 0, 1, 1);

	this.timeline.addTween(cjs.Tween.get(this.backHome).wait(89).to({_off:false},0).to({x:181.8},30,cjs.Ease.quintOut).to({x:1816.5},29,cjs.Ease.quintIn).to({_off:true},1).wait(1));

	// text
	this.instance = new lib.Tween18("synched",0);
	this.instance.parent = this;
	this.instance.setTransform(-2154.6,212.6);
	this.instance._off = true;

	this.instance_1 = new lib.Tween14("synched",0);
	this.instance_1.parent = this;
	this.instance_1.setTransform(420.1,212.6);
	this.instance_1._off = true;

	this.instance_2 = new lib.Tween15("synched",0);
	this.instance_2.parent = this;
	this.instance_2.setTransform(2054.8,212.6);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.instance}]},89).to({state:[{t:this.instance_1}]},30).to({state:[{t:this.instance_2}]},29).to({state:[]},1).wait(1));
	this.timeline.addTween(cjs.Tween.get(this.instance).wait(89).to({_off:false},0).to({_off:true,x:420.1},30,cjs.Ease.quintOut).wait(31));
	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(89).to({_off:false},30,cjs.Ease.quintOut).to({_off:true,x:2054.8},29,cjs.Ease.quintIn).wait(2));

	// owl
	this.instance_3 = new lib.owl_g();
	this.instance_3.parent = this;
	this.instance_3.setTransform(-608.2,200);
	this.instance_3._off = true;
	new cjs.ButtonHelper(this.instance_3, 0, 1, 1);

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(89).to({_off:false},0).to({x:1098.2},30,cjs.Ease.quintOut).to({x:2732.9},29,cjs.Ease.quintIn).to({_off:true},1).wait(1));

	// octopus
	this.instance_4 = new lib.octopus_g();
	this.instance_4.parent = this;
	this.instance_4.setTransform(-968.2,520);
	this.instance_4._off = true;
	new cjs.ButtonHelper(this.instance_4, 0, 1, 1);

	this.timeline.addTween(cjs.Tween.get(this.instance_4).wait(89).to({_off:false},0).to({x:878.2},30,cjs.Ease.quintOut).to({x:2512.9},29,cjs.Ease.quintIn).to({_off:true},1).wait(1));

	// lion
	this.instance_5 = new lib.lion_g();
	this.instance_5.parent = this;
	this.instance_5.setTransform(-1328.2,200);
	this.instance_5._off = true;
	new cjs.ButtonHelper(this.instance_5, 0, 1, 1);

	this.timeline.addTween(cjs.Tween.get(this.instance_5).wait(89).to({_off:false},0).to({x:878.2},30,cjs.Ease.quintOut).to({x:2512.9},29,cjs.Ease.quintIn).to({_off:true},1).wait(1));

	// dolphin
	this.instance_6 = new lib.dolphin_g();
	this.instance_6.parent = this;
	this.instance_6.setTransform(-229.3,520);
	this.instance_6._off = true;
	new cjs.ButtonHelper(this.instance_6, 0, 1, 1);

	this.timeline.addTween(cjs.Tween.get(this.instance_6).wait(89).to({_off:false},0).to({x:1098.2},30,cjs.Ease.quintOut).to({x:2732.9},29,cjs.Ease.quintIn).to({_off:true},1).wait(1));

	// alpaca
	this.instance_7 = new lib.alpaca_g();
	this.instance_7.parent = this;
	this.instance_7.setTransform(-1688.2,520);
	this.instance_7._off = true;
	new cjs.ButtonHelper(this.instance_7, 0, 1, 1);

	this.timeline.addTween(cjs.Tween.get(this.instance_7).wait(89).to({_off:false},0).to({x:658.2},30,cjs.Ease.quintOut).to({x:2292.9},29,cjs.Ease.quintIn).to({_off:true},1).wait(1));

	// getStarted
	this.startBtn = new lib.getstarted();
	this.startBtn.name = "startBtn";
	this.startBtn.parent = this;
	this.startBtn.setTransform(-168.8,613.5);
	new cjs.ButtonHelper(this.startBtn, 0, 1, 1);

	this.timeline.addTween(cjs.Tween.get(this.startBtn).to({x:149},59,cjs.Ease.quintOut).wait(1).to({x:152.7},0).wait(1).to({x:156.5},0).wait(1).to({x:160.3},0).wait(1).to({x:164.3},0).wait(1).to({x:168.5},0).wait(1).to({x:172.8},0).wait(1).to({x:177.5},0).wait(1).to({x:182.6},0).wait(1).to({x:188.2},0).wait(1).to({x:194.4},0).wait(1).to({x:201.4},0).wait(1).to({x:209.4},0).wait(1).to({x:218.5},0).wait(1).to({x:229.1},0).wait(1).to({x:241.4},0).wait(1).to({x:256},0).wait(1).to({x:273.3},0).wait(1).to({x:294.1},0).wait(1).to({x:319.3},0).wait(1).to({x:350},0).wait(1).to({x:387.9},0).wait(1).to({x:435.2},0).wait(1).to({x:494.9},0).wait(1).to({x:571.3},0).wait(1).to({x:670.5},0).wait(1).to({x:800.7},0).wait(1).to({x:972.7},0).wait(1).to({x:1197.6},0).wait(1).to({x:1482.4},0).to({_off:true},1).wait(61));

	// welcome
	this.instance_8 = new lib.Tween7("synched",0);
	this.instance_8.parent = this;
	this.instance_8.setTransform(-162.8,360.1);

	this.instance_9 = new lib.Tween9("synched",0);
	this.instance_9.parent = this;
	this.instance_9.setTransform(155,360.1);
	this.instance_9._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_8).to({_off:true,x:155},59,cjs.Ease.quintOut).wait(91));
	this.timeline.addTween(cjs.Tween.get(this.instance_9).to({_off:false},59,cjs.Ease.quintOut).wait(1).to({regX:-0.5,regY:1.6,x:158.2,y:361.7},0).wait(1).to({x:162},0).wait(1).to({x:165.8},0).wait(1).to({x:169.8},0).wait(1).to({x:174},0).wait(1).to({x:178.3},0).wait(1).to({x:183},0).wait(1).to({x:188.1},0).wait(1).to({x:193.7},0).wait(1).to({x:199.9},0).wait(1).to({x:206.9},0).wait(1).to({x:214.9},0).wait(1).to({x:224},0).wait(1).to({x:234.6},0).wait(1).to({x:246.9},0).wait(1).to({x:261.5},0).wait(1).to({x:278.8},0).wait(1).to({x:299.6},0).wait(1).to({x:324.8},0).wait(1).to({x:355.5},0).wait(1).to({x:393.4},0).wait(1).to({x:440.7},0).wait(1).to({x:500.4},0).wait(1).to({x:576.8},0).wait(1).to({x:676},0).wait(1).to({x:806.2},0).wait(1).to({x:978.2},0).wait(1).to({x:1203.1},0).wait(1).to({regX:0,regY:0,x:1488.4,y:360.1},0).to({_off:true},1).wait(61));

	// vidBackground
	this.instance_10 = new lib.an_Video({'id': 'instance_10', 'src':'videos/background.mp4', 'autoplay':true, 'controls':false, 'muted':true, 'loop':true, 'poster':'images/', 'preload':true, 'class':'video'});

	this.instance_10.setTransform(1946.4,360,3.2,2.4,0,0,0,200,150);

	this.timeline.addTween(cjs.Tween.get(this.instance_10).to({x:941.3},59,cjs.Ease.quintOut).wait(1).to({x:945},0).wait(1).to({x:948.7},0).wait(1).to({x:952.6},0).wait(1).to({x:956.6},0).wait(1).to({x:960.7},0).wait(1).to({x:965.1},0).wait(1).to({x:969.8},0).wait(1).to({x:974.9},0).wait(1).to({x:980.5},0).wait(1).to({x:986.7},0).wait(1).to({x:993.7},0).wait(1).to({x:1001.6},0).wait(1).to({x:1010.7},0).wait(1).to({x:1021.3},0).wait(1).to({x:1033.7},0).wait(1).to({x:1048.2},0).wait(1).to({x:1065.6},0).wait(1).to({x:1086.4},0).wait(1).to({x:1111.5},0).wait(1).to({x:1142.2},0).wait(1).to({x:1180.1},0).wait(1).to({x:1227.4},0).wait(1).to({x:1287.1},0).wait(1).to({x:1363.6},0).wait(1).to({x:1462.8},0).wait(1).to({x:1593},0).wait(1).to({x:1764.9},0).wait(1).to({x:1989.8},0).wait(1).to({x:2274.6,y:360.1},0).to({_off:true},1).wait(61));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(396.2,358.8,2831.8,722.4);
// library properties:
lib.properties = {
	id: '4620E67E05447F42B189D78786A60DB7',
	width: 1280,
	height: 720,
	fps: 30,
	color: "#FFFFFF",
	opacity: 1.00,
	manifest: [
		{src:"images/Mulmed_atlas_.png?1576253129183", id:"Mulmed_atlas_"},
		{src:"components/lib/jquery-2.2.4.min.js?1576253130485", id:"lib/jquery-2.2.4.min.js"},
		{src:"components/sdk/anwidget.js?1576253130485", id:"sdk/anwidget.js"},
		{src:"components/video/src/video.js?1576253130485", id:"an.Video"}
	],
	preloads: []
};



// bootstrap callback support:

(lib.Stage = function(canvas) {
	createjs.Stage.call(this, canvas);
}).prototype = p = new createjs.Stage();

p.setAutoPlay = function(autoPlay) {
	this.tickEnabled = autoPlay;
}
p.play = function() { this.tickEnabled = true; this.getChildAt(0).gotoAndPlay(this.getTimelinePosition()) }
p.stop = function(ms) { if(ms) this.seek(ms); this.tickEnabled = false; }
p.seek = function(ms) { this.tickEnabled = true; this.getChildAt(0).gotoAndStop(lib.properties.fps * ms / 1000); }
p.getDuration = function() { return this.getChildAt(0).totalFrames / lib.properties.fps * 1000; }

p.getTimelinePosition = function() { return this.getChildAt(0).currentFrame / lib.properties.fps * 1000; }

an.bootcompsLoaded = an.bootcompsLoaded || [];
if(!an.bootstrapListeners) {
	an.bootstrapListeners=[];
}

an.bootstrapCallback=function(fnCallback) {
	an.bootstrapListeners.push(fnCallback);
	if(an.bootcompsLoaded.length > 0) {
		for(var i=0; i<an.bootcompsLoaded.length; ++i) {
			fnCallback(an.bootcompsLoaded[i]);
		}
	}
};

an.compositions = an.compositions || {};
an.compositions['4620E67E05447F42B189D78786A60DB7'] = {
	getStage: function() { return exportRoot.getStage(); },
	getLibrary: function() { return lib; },
	getSpriteSheet: function() { return ss; },
	getImages: function() { return img; }
};

an.compositionLoaded = function(id) {
	an.bootcompsLoaded.push(id);
	for(var j=0; j<an.bootstrapListeners.length; j++) {
		an.bootstrapListeners[j](id);
	}
}

an.getComposition = function(id) {
	return an.compositions[id];
}

function _updateVisibility(evt) {
	if((this.getStage() == null || this._off || this._lastAddedFrame != this.parent.currentFrame) && this._element) {
		this._element.detach();
		stage.removeEventListener('drawstart', this._updateVisibilityCbk);
		this._updateVisibilityCbk = false;
	}
}
function _handleDrawEnd(evt) {
	var props = this.getConcatenatedDisplayProps(this._props), mat = props.matrix;
	var tx1 = mat.decompose(); var sx = tx1.scaleX; var sy = tx1.scaleY;
	var dp = window.devicePixelRatio || 1; var w = this.nominalBounds.width * sx; var h = this.nominalBounds.height * sy;
	mat.tx/=dp;mat.ty/=dp; mat.a/=(dp*sx);mat.b/=(dp*sx);mat.c/=(dp*sy);mat.d/=(dp*sy);
	this._element.setProperty('transform-origin', this.regX + 'px ' + this.regY + 'px');
	var x = (mat.tx + this.regX*mat.a + this.regY*mat.c - this.regX);
	var y = (mat.ty + this.regX*mat.b + this.regY*mat.d - this.regY);
	var tx = 'matrix(' + mat.a + ',' + mat.b + ',' + mat.c + ',' + mat.d + ',' + x + ',' + y + ')';
	this._element.setProperty('transform', tx);
	this._element.setProperty('width', w);
	this._element.setProperty('height', h);
	this._element.update();
}

function _tick(evt) {
	var stage = this.getStage();
	stage&&stage.on('drawend', this._handleDrawEnd, this, true);
	if(!this._updateVisibilityCbk) {
		this._updateVisibilityCbk = stage.on('drawstart', this._updateVisibility, this, false);
	}
}


})(createjs = createjs||{}, AdobeAn = AdobeAn||{});
var createjs, AdobeAn;