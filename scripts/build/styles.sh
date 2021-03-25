for file in client/styles/*.less
do
    lessc $file | cssmin > dist/styles/$(basename -s .less $file).css
done