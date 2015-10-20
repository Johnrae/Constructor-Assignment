// Constructors
// Only add code to *THIS* section!

var Dog = function (params) {

  params = params || {};

  this.color  = params.color;
  this.status = 'normal';
  this.hungry = (params.hungry === false) ? false: true;

}

var Human = function (params) {

  params = params || {};

  this.cool = (params.cool === true) ? true: false;

  this.pet = function(petted){
    petted.status = 'happy';
  }

  this.feed = function (fed){
    fed.hungry = false;
  }
}

// Do not ADD or MODIFY code below this line :)
// Dogs
let sadie = new Dog({
  color: 'black',
  hungry: false,
});

let moonshine = new Dog({
  color: 'blue-red',
});

let atticus = new Dog();

// Humans
let mason = new Human();

let julia = new Human({
  cool: true,
});


let it = function (description, contents) {
  console.log('\n\n"It ' + description + '"');
  contents();
};

let expect = function (target) {
  return {
    toBe: function(expectation) {
      if (target === expectation) {
        console.log('\n     %cPASSED', 'color:green;', 'Expected', target, 'to be', expectation);
        return true;
      } else {
        console.log('\n     %cFAILED', 'color:red;', 'Expected', target, 'to be', expectation);
        return false;
      }
    }
  };
};

// Tests
it("should make Sadie happy when Mason pets her", function() {
  expect(sadie.status).toBe('normal');
  mason.pet(sadie);
  expect(sadie.status).toBe('happy');
});

it("should make Sadie black", function(){
  expect(sadie.color).toBe('black');
});

it("should be make Moonshine hungry and Sadie not hungry", function() {
  expect(moonshine.hungry).toBe(true);
  expect(sadie.hungry).toBe(false);
});

it("should make Moonshine no longer hungry when you feed him", function() {
  julia.feed(moonshine);
  expect(moonshine.hungry).toBe(false);
});


it("should not affect Atticus and Moonshine's owner properties when setting Mason as Sadie's owner ", function() {
  sadie.owner = mason;
  expect(moonshine.owner).toBe(undefined);
  expect(atticus.owner).toBe(undefined);
});

it("should make Julia cool and Mason not cool", function() {
  sadie.owner = mason;
  expect(julia.cool).toBe(true);
  expect(mason.cool).toBe(false);
});