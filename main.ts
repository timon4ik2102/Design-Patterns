import singletonTest from './creational/singleton/singletonTest.ts';
import prototypeTest from './creational/prototype/prototypTest.ts';
import { FerrariFactory} from './creational/abstractFactory/ferrariFactory.ts';
import { HondaFactory } from './creational/abstractFactory/hondaFactory.ts';
import builderTest from './creational/builder/builderTest.ts';
import factoryMethodTest from './creational/factory/factoryMethodTest.ts';
import createAbstractFactory from './creational/abstractFactory/createAbstractFactory.ts';


// factoryMethodTest();
// singletonTest();
// prototypeTest() 
// builderTest()
createAbstractFactory(new FerrariFactory(), 'Ferrari F8', 420, 'ferrari gtb 296', 250000);
createAbstractFactory(new HondaFactory(), 'Honda Civic', 120, 'honda civic', 100000);