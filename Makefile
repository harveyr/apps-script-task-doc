copy_target = main

.PHONY: compile
compile:
	tsc

.PHONY: copy
copy: compile
	cat build/$(copy_target).js | pbcopy