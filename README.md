
<!--#echo json="package.json" key="name" underline="=" -->
node-r_esm
==========
<!--/#echo -->

<!--#echo json="package.json" key="description" -->
Little wrapper script to allow running your .mjs file via its shebang
<!--/#echo -->


The ["esm" module](https://github.com/standard-things/esm/) has the nice
invocation method of running an ES module file like this:

```bash
$ nodejs -r esm test/nospace.mjs
util.promisify? function
```

However, if you try to use that in a shebang line, you'll get an error like

```bash
$ ./test/nospace.mjs
/usr/bin/env: node -r esm: No such file or directory
```

… because the you can only pass one arg after the program name.

This package contains a small bash script that inserts the `-r esm`
options, so you can write your shebang like this:

```bash
#!/usr/bin/env node-r_esm
```

and this run your module like this:

```bash
$ ./test/shebang.mjs
util.promisify? function
```



Caveats
-------

* This module doesn't (yet) care about whether the `esm` module is
  installed, or where. Your package will probably have to declare it
  as a dependency. The version used, and whether nodejs will find it,
  might even depend on the current working directory from which the
  shebang file is invoked.





&nbsp;


License
-------
<!--#echo json="package.json" key=".license" -->
ISC
<!--/#echo -->
