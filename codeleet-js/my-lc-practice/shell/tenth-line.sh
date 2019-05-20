#!/bin/sh
# solution 1
# tail -n +10 file.txt | head -1


# solution 2
# AWK

# AWK is a powerful tool (programming) that deals with text.

# The following command prints the line if the variable (NR = Number of Rows) equals to 10.
# awk "NR==10" file.txt

# SED

# sed is a stream editor under command line. It executes the instruction on the text stream and the following prints the 10-th line using sed.

sed -n '10p' file.txt