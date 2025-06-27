function Properties(Ajith){

    const addition = (a,b,c) => {
        const result = a+b+c;
        return result;
    }

    const addition2 = function(y,z) {
        return y,z;
    }

    return(
        <>
        <h1>Interducing Properties{Ajith.name}{" Day 2 "}{Ajith.content}</h1>
        
        <p>a+b+c = {addition(10,20,30)}</p>
        <p>y,z={addition2(10,20)}</p>
        </>
    );
}

export default Properties;