import React from 'react';
function SearchInput(onSubmit){
    const [input,setInput]=React.useState("");
    
    const handleChange=(e)=>{
        setInput(e,target.value);
    };
    console.log("input",input);
    return (
        <form>
            <input
            tupe="text"
            placeholder="github 검색"
            value={input}
            onChange={handledChange}
            />
        </form>
    );
}

export default SearchInput;