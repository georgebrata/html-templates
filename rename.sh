for i in *\ *; do if [ -f "$i" ]; then mv "$i" ${i// /_}; fi; done
