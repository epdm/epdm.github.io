
.PHONY: readme
readme:
	pandoc readme.md --latex-engine=xelatex -o readme.pdf

.PHONY: output
output:
	rm -f snippets/body.html-snippet
	touch snippets/body.html-snippet
	
	cat definition_of_quality.md >> snippets/body.html-snippet
	cat six_sigma.md             >> snippets/body.html-snippet
	cat relationship_between_quality_and_reliability.md >> snippets/body.html-snippet
	cat impact_of_quality_on_cycle_time_and_cost.md     >> snippets/body.html-snippet
	cat iso_9000.md              >> snippets/body.html-snippet
	cat check_sheets.md          >> snippets/body.html-snippet
	cat pareto.md                >> snippets/body.html-snippet
	cat fishbone_ishikawa_diagrams.md >> snippets/body.html-snippet
	cat cause_screening.md       >> snippets/body.html-snippet
	cat teamwork.md              >> snippets/body.html-snippet
	cat multi_voting.md          >> snippets/body.html-snippet
	cat statistical_process_control.md >> snippets/body.html-snippet
	cat taguchi.md               >> snippets/body.html-snippet
	cat design_of_experiments.md >> snippets/body.html-snippet
	cat software_improvement_tools.md >> snippets/body.html-snippet
	cat references.md            >> snippets/body.html-snippet
	
	rm -f snippets/index.html
	touch snippets/index.html
	rm -f snippets/webpage.html-snippet
	
	pandoc snippets/body.html-snippet -r markdown -w html -o snippets/webpage.html-snippet
	cat snippets/top.html-fragment    >> snippets/index.html
	cat snippets/webpage.html-snippet >> snippets/index.html
	cat snippets/bottom.html-fragment >> snippets/index.html
	cp snippets/index.html index.html
