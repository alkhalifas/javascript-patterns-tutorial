const MyMixins1 = superclass =>
    class extends superclass {
        moveUp() {
            console.log('move up');
        }
        moveDown() {
            console.log('move down');
        }
        stop() {
            console.log('stop! in the name of love!');
        }
    };

const MyMixins2 = superclass =>
    class extends superclass {
        moveRight() {
            console.log('move right');
        }
    };

  // A skeleton carAnimator constructor
  class CarAnimator {
      moveLeft() {
          console.log('move left');
      }
  }
  // A skeleton personAnimator constructor
  class PersonAnimator {
      moveRandomly() {
          /*..*/
      }
  }

  // Extend MyMixins using CarAnimator
  class MyAnimator extends MyMixins1(MyMixins2(CarAnimator)) {}

  // Create a new instance of carAnimator
  const myAnimator = new MyAnimator();
  myAnimator.moveLeft();
  myAnimator.moveDown();
  myAnimator.stop();
  myAnimator.moveRight();
