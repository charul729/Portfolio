console.log('Hello everyone');



    //NORMAL WAY TO CALL AND CREATE AN OBJECT
    //RECTANGLE IS AN OBJECT
    rectangle={
        length:1,
        breadth:2,

        draw()
        {
            console.log('drawing rectangle');
        }
    }

console.log('breadth is:'+rectangle.breadth);


//FACTORY FUNCTION

function createRectangle(l, b)
{
    return rectangle={
        length:l,
        breadth1:b,

        draw2()
        {
            console.log('breadth: ');
        }
    }
}

let createObj= createRectangle(7, 66);
console.log(createObj.length);
console.log(createObj.breadth1);