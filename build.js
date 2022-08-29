const electronInstaller = require('electron-winstaller');
// NB: Use this syntax within an async function, Node does not have support for
//     top-level await as of Node 12.
async function foo() {
    try {
        await electronInstaller.createWindowsInstaller({
          appDirectory: './',
          outputDirectory: '/tmp/build/installer64',
          authors: 'My App Inc.',
          exe: 'myapp.exe'
        });
        console.log('It worked!');
    } catch (e) {
        console.log(`No dice: ${e.message}`);
    }
}
foo()