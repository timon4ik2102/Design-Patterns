import Logger from './logger.ts';

function singletonTest() {
    const logger1 = Logger.getInstance();
    const logger2 = Logger.getInstance();

    logger1.createLog("Hello1");
    logger2.createLog("Hello2");
    console.log(logger1.getLog());
    console.log(logger2.getLog());
    console.log(logger1 === logger2);
}

export default singletonTest;
