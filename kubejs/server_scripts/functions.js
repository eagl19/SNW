function Id_or_tag_to_item(NAME){
	if(NAME.startsWith("#")){
		return {tag: NAME.slice(1)};
	} else{
		return {item : NAME };
	}
}