function Letter(let)  {
	this.charac = let;
	this.appear = false;

	this.letterRender = function(charac){
		console.log("Inside letterRender :"+charac);
	  if(this.charac === false) {
	  	return "_";
	  }else{
	  	return charac;
	  }
	}
}

module.exports = Letter;