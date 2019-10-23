attributes = "John;20;MIS;9.5;-9.5";
separator = ";";
pieces = attributes.split(separator);
console.log(pieces);

for (i=0; i<pieces.length; i++)
{
    console.log(pieces[i]);
}

joined = pieces.join(separator);
console.log(joined);