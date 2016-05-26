module.exports = {

	auth: function() {
      	var resource = $resource('someItem{/id}');
		return resource.get({id: 1});
	}
}