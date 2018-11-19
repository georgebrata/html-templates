function CustomMarker(latlng, map, args) {
	this.latlng = latlng;	
	this.args = args;	
	this.setMap(map);	
}

CustomMarker.prototype = new google.maps.OverlayView();

CustomMarker.prototype.draw = function() {
	
	var self = this;
	
	var div = this.div;
	
	if (!div) {
	
		div = this.div = document.createElement('div');
		div.className = 'marker';
		div_inner = this.div = document.createElement('div');
		div_inner.className = 'marker_inner';
		div_center = this.div = document.createElement('div');
		div_center.className = 'marker_center';
		div_inner.appendChild(div_center);
		div.appendChild(div_inner);

		var divTween = TweenMax.to(div, 1, {scale:0.8, ease: Power2.easeInOut, yoyo:true, repeat:-1});
		
		// div.style.position = 'absolute';
		// div.style.cursor = 'pointer';
		// div.style.width = '20px';
		// div.style.height = '20px';
		// div.style.background = 'blue';
		
		if (typeof(self.args.marker_id) !== 'undefined') {
			div.dataset.marker_id = self.args.marker_id;
		}
		
		google.maps.event.addDomListener(div, "click", function(event) {
						
			google.maps.event.trigger(self, "click");
		});
		
		var panes = this.getPanes();
		panes.overlayImage.appendChild(div);
	}
	
	var point = this.getProjection().fromLatLngToDivPixel(this.latlng);
	
	if (point) {
		div.style.left = (point.x - 10) + 'px';
		div.style.top = (point.y - 20) + 'px';
	}
};

CustomMarker.prototype.remove = function() {
	if (this.div) {
		this.div.parentNode.removeChild(this.div);
		this.div = null;
	}	
};

CustomMarker.prototype.getPosition = function() {
	return this.latlng;	
};