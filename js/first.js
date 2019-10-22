class TestClass {
    constructor(){

    }

    testMeth(){
        alert("test");
    }

    callSecond(){
      let second = new SecondClass().secondMeth();
      second.secondMeth();
    }
}