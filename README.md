csvSlice
========

Make big csv files smaller. The current iteration is a node command line tool.

To use it simply type:

    node 25lincsv.js [target big csv path] [path of new file]

ex:

    node 25linecsv.js Case_Data_from_San_Francisco_311.csv littler.csv

Will produce a new csv with the header line and 25 lines of data.


## Possible features to make it more useable:

-Handle multi line headers through arg or something

-Offer different amounts of lines to be returned depending on args.

-Try to explain why I did it this way instead of using one of Node's 10000s of CSV parsers.
