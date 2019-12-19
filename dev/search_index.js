var documenterSearchIndex = {"docs":
[{"location":"#Atmospheric-Physics-Notebooks-1","page":"Introduction","title":"Atmospheric Physics Notebooks","text":"","category":"section"},{"location":"#","page":"Introduction","title":"Introduction","text":"Author: Markus Petters","category":"page"},{"location":"#","page":"Introduction","title":"Introduction","text":"This repository contains Jupyter notebooks used to supplement instruction in MEA-412: Atmospheric Physics (Course Catalog) taught in the Department of Marine, Earth, and Atmospheric Sciences at NC State University. ","category":"page"},{"location":"#","page":"Introduction","title":"Introduction","text":"The notebooks can be executed in the browser through binder. Binder serves a  complete Jupyter/julia environment in your browser. Click on the badge below to launch it.","category":"page"},{"location":"#","page":"Introduction","title":"Introduction","text":"(Image: Binder)","category":"page"},{"location":"#","page":"Introduction","title":"Introduction","text":"Use the Jupyter file-manager to navigate to a notebook. For example, the directory /notebooks/Module 1 - Aerosol Dynamics as shown below.","category":"page"},{"location":"#","page":"Introduction","title":"Introduction","text":"(Image: alt text)","category":"page"},{"location":"#","page":"Introduction","title":"Introduction","text":"Start the notebook Module 1 - Aerosol Dynamics.ipynb and \"Run All Below\". Make sure to wait until the kernel is initialized.","category":"page"},{"location":"#","page":"Introduction","title":"Introduction","text":"(Image: alt text)","category":"page"},{"location":"#","page":"Introduction","title":"Introduction","text":"During the first execution of the notebook julia compiles some code. Time of first execution is ~2-5 min. Once a cell has been processed a number appears in parenthesis, e.g. In[1]","category":"page"},{"location":"#","page":"Introduction","title":"Introduction","text":"(Image: alt text)","category":"page"},{"location":"#","page":"Introduction","title":"Introduction","text":"The notebook is now ready. You can interact with the graphs using the widgets provided with each element. It is not necessary to execute the cells again. However, the notebook is a complete programming environment. Second execution of the code is fast. Indivual cells can be executed using CTRL-ENTER.","category":"page"},{"location":"#","page":"Introduction","title":"Introduction","text":"Binder watches for activity. After ~10 min of inactivity, the container is destroyed.  Once the container is destroyed the computing environment is closed and the buttons become unresponsive. ","category":"page"},{"location":"#","page":"Introduction","title":"Introduction","text":"The notebooks can also be executed locally as described in Local Installation.  ","category":"page"},{"location":"installation/#","page":"Local Installation","title":"Local Installation","text":"Install the latest release of julia from https://julialang.org/downloads/. ","category":"page"},{"location":"installation/#","page":"Local Installation","title":"Local Installation","text":"Once installed start the julia REPL (Read-Eval-Print-Loop)","category":"page"},{"location":"installation/#","page":"Local Installation","title":"Local Installation","text":"              _\n   _       _ _(_)_     |  Documentation: https://docs.julialang.org\n  (_)     | (_) (_)    |\n   _ _   _| |_  __ _   |  Type \"?\" for help, \"]?\" for Pkg help.\n  | | | | | | |/ _` |  |\n  | | |_| | | | (_| |  |  Version 1.3.0 (2019-11-26)\n _/ |\\__'_|_|_|\\__'_|  |  Official https://julialang.org/ release\n|__/                   |\n\njulia>","category":"page"},{"location":"installation/#","page":"Local Installation","title":"Local Installation","text":"At the prompt type ","category":"page"},{"location":"installation/#","page":"Local Installation","title":"Local Installation","text":"julia> ]","category":"page"},{"location":"installation/#","page":"Local Installation","title":"Local Installation","text":"to start the package manager. Then, add the following julia packages:","category":"page"},{"location":"installation/#","page":"Local Installation","title":"Local Installation","text":"pkg> add CSV Colors Compose Conda Contour DataFrames DifferentialEquations Distributions Documenter Gadfly  IJulia Interact Interpolations LsqFit NumericIO ParameterizedFunctions Pkg PyCall Roots SpecialFunctions WebIO","category":"page"},{"location":"installation/#","page":"Local Installation","title":"Local Installation","text":"Next, install the Jupyter notebook server","category":"page"},{"location":"installation/#","page":"Local Installation","title":"Local Installation","text":"julia> using IJulia\njulia> notebook()","category":"page"},{"location":"installation/#","page":"Local Installation","title":"Local Installation","text":"Next, exit the notbook and exit out of the julia REPL session. Restart the REPL. and install the WebIO Jupyter extension:","category":"page"},{"location":"installation/#","page":"Local Installation","title":"Local Installation","text":"julia> using WebIO\njulia> WebIO.install_jupyter_nbextension()","category":"page"},{"location":"installation/#","page":"Local Installation","title":"Local Installation","text":"Finally, download the ZIP'ed notebooks from GitHub: Atmospheric-Physics-Notebooks","category":"page"},{"location":"installation/#","page":"Local Installation","title":"Local Installation","text":"(Image: alt text)","category":"page"},{"location":"installation/#","page":"Local Installation","title":"Local Installation","text":"Extract the ZIP file to location of your choice (e.g. Documents). Next restart julia and perform the following additional installations. This step only needs to be performed once.","category":"page"},{"location":"installation/#","page":"Local Installation","title":"Local Installation","text":"julia> cd(\"Path/To/Atmospheric-Physics-Notebooks\")\njulia> ]\npkg> dev deps/AtmosphericThermodynamics/\npkg> dev deps/DifferentialMobilityAnalyzers/\npkg> add Calculus LambertW LinearAlgebra Random SpecialFunctions StatsBase","category":"page"},{"location":"installation/#","page":"Local Installation","title":"Local Installation","text":"Finally, start the notebook server:","category":"page"},{"location":"installation/#","page":"Local Installation","title":"Local Installation","text":"julia> using IJulia\njulia> notebook()","category":"page"},{"location":"installation/#","page":"Local Installation","title":"Local Installation","text":"Navigate to the extracted folder and open any of the notebooks, i.e. files with with the .ipynb extension.","category":"page"},{"location":"installation/#","page":"Local Installation","title":"Local Installation","text":"(Image: alt text)","category":"page"},{"location":"installation/#","page":"Local Installation","title":"Local Installation","text":"Start the notebook Module 1 - Aerosol Dynamics.ipynb and \"Run All Below\". Make sure to wait until the kernel is initialized.","category":"page"},{"location":"installation/#","page":"Local Installation","title":"Local Installation","text":"(Image: alt text)","category":"page"},{"location":"installation/#","page":"Local Installation","title":"Local Installation","text":"During the first execution of the notebook julia compiles some code. Time of first execution is ~2-5 min. Once a cell has been processed a number appears in parenthesis, e.g. In[1]","category":"page"},{"location":"installation/#","page":"Local Installation","title":"Local Installation","text":"(Image: alt text)","category":"page"},{"location":"installation/#","page":"Local Installation","title":"Local Installation","text":"The notebook is now ready. You can interact with the graphs using the widgets provided with each element. It is not necessary to execute the cells again.","category":"page"},{"location":"installation/#","page":"Local Installation","title":"Local Installation","text":"Note that the widget state can become corrupted during execution. It is good policy to run \"Restart Kernel & Clear All Output\", followed by saving the notebook.  ","category":"page"},{"location":"license/#Software-1","page":"License","title":"Software","text":"","category":"section"},{"location":"license/#","page":"License","title":"License","text":"Software provided within this repository is copyrighted by the author of the repository and licensed under the GNU General Public License.  Software refers to all scripts that create the figures and apps in the Jupyter notebooks.","category":"page"},{"location":"license/#","page":"License","title":"License","text":"Software from other sources (e.g. the parcel model) is cited when used and licensed as specified by the author(s) of said software.","category":"page"},{"location":"license/#Images-and-Notebooks-1","page":"License","title":"Images and Notebooks","text":"","category":"section"},{"location":"license/#","page":"License","title":"License","text":"The content in the Jupyter notebooks and images created by the author of the repository are licensed under the Creative Commons Attribution-NonCommercial-ShareAlike 4.0 International Public License (CC BY-NC-SA 4.0) Human Readable Format or  Full Text. Images taken from other sources are cited and licensed as specified by the originator.","category":"page"},{"location":"instructors/#Overview-1","page":"For Instructors","title":"Overview","text":"","category":"section"},{"location":"instructors/#","page":"For Instructors","title":"For Instructors","text":"The materials are designed for undergraduate students who have completed an introductory class in Atmospheric Sciences and Atmospheric Thermodynamics. However, the modules are also suitable to supplement graduate student instruction and also be used by professionals who seek simple introductory materials on the topic.","category":"page"},{"location":"instructors/#","page":"For Instructors","title":"For Instructors","text":"The modules are designed for students to construct knowledge by interacting with the web-apps. They can do so by working alone or collaborating in small teams. The modules are interconnected and somewhat build on each other. However, the modules can also be used independently as assignments for special topics in graduate classes, which include a more mathematical treatment of the subject.","category":"page"},{"location":"instructors/#","page":"For Instructors","title":"For Instructors","text":"There is ~5 min spin-up time to initialize a module, which includes login to the server and first execution of all apps. Students start the appropriate module at the beginning of class. The time can be used to conduct standard class business, hold a short review, or start a mini lecture. Due to this time overhead lecture periods of 75 min are preferred.","category":"page"},{"location":"instructors/#","page":"For Instructors","title":"For Instructors","text":"When used in a class setting, some of the individual apps are introduced with mini lectures. Students can work alone or in groups interacting with the individual apps in the module on prompt. This is followed by a whole-class discussion, soliciting responsed from each group, clearing up muddy points, and summarizing the main takeaway messages. Some of the exercises are specifically designed as homework, e.g. the programming exercises. Others can be assigned as either in-class or homework assignment, depdending on the class flow. ","category":"page"},{"location":"instructors/#","page":"For Instructors","title":"For Instructors","text":"Modules are grouped by topic and not tailored to be completed within a single class period.","category":"page"},{"location":"instructors/#Notable-Influences-1","page":"For Instructors","title":"Notable Influences","text":"","category":"section"},{"location":"instructors/#","page":"For Instructors","title":"For Instructors","text":"Process Oriented Guided Inquiry Learning POGIL pedagogy. Although the modules do not strictly apply all POGIL components, they embrace the idea that knowledge is constructed by the learner through actively manipulating, concepts, data and equations using peer instruction. \nRogers, R.R. and Yau, M.K.: A Short Course in Cloud Physics. Especially the collision/coalescence chapter.\nBjorn Stevens: Twelve Lectures in Cloud Physics. Especially the scripts' minimalist approach distilling the topics to its essentials.\nHinds, W. C.: Aerosol Technology. Especially the author's extensive example calculations.\nPetty, G. W.: A First Course in Atmospheric Radiation. \nGlossary of Meteorology. Used for definitions of key concepts.","category":"page"},{"location":"instructors/#Hosting-1","page":"For Instructors","title":"Hosting","text":"","category":"section"},{"location":"instructors/#","page":"For Instructors","title":"For Instructors","text":"The notebooks can be executed in the browser through binder. Binder serves a complete Jupyter/Julia environment in your browser. Click on the badge below to launch it.","category":"page"},{"location":"instructors/#","page":"For Instructors","title":"For Instructors","text":"(Image: Binder)","category":"page"},{"location":"instructors/#","page":"For Instructors","title":"For Instructors","text":"The binder service is free and appropriate for a few users or workshops. The service may not be reliable for class-deployment.","category":"page"},{"location":"instructors/#","page":"For Instructors","title":"For Instructors","text":"The repository follows the reproducible build specifications. A docker image can be prepared using repo2docker.","category":"page"},{"location":"instructors/#","page":"For Instructors","title":"For Instructors","text":"The docker image can be served to a large group using jupyter-hub with Kubernetes. Running the Kubernetes engine for students to access the content 24/7 costs ~$30/user and semester. Cloud hosting is needed because ","category":"page"},{"location":"instructors/#","page":"For Instructors","title":"For Instructors","text":"Hosting the service in the cloud makes the notebook available on tablets, mobile devices, and any computer that has browser access, thus broadening the opportunities to use the apps outside of class, and for students that need to use library computers.\nInstall on local machines can be tricky, especially for the notebooks that interface with atmospheric models written in other languages (e.g. python and fortran). \nThe notebook widget state can potentially be corrupted during saving and restart,  which leads to a delay in spin-up and student frustration. The Kubernetes engine serves a non-persistent container image that is guaranteed to work.\nThe Kubernetes engine can scale up and down with student demand.\nThe cloud services are almost 100% reliable.","category":"page"},{"location":"instructors/#Contributing-1","page":"For Instructors","title":"Contributing","text":"","category":"section"},{"location":"instructors/#","page":"For Instructors","title":"For Instructors","text":"If you wish to use the material in your course I recommend forking the repository and adapting the content as needed. If you do so, please share the improved content. Linking the repositories will help others to find the class materials.","category":"page"},{"location":"instructors/#","page":"For Instructors","title":"For Instructors","text":"If you have suggestions for improving the questions please email the author and/or open the discussion in the issues tab.","category":"page"},{"location":"instructors/#Software-1","page":"For Instructors","title":"Software","text":"","category":"section"},{"location":"instructors/#","page":"For Instructors","title":"For Instructors","text":"The apps are programmed using the Julia Progamming Language using the reactive prgramming paradigm. Some of the key packages that are used:","category":"page"},{"location":"instructors/#","page":"For Instructors","title":"For Instructors","text":"Gadfly.jl for standard plotting\nCompose.jl for vector graphics\nInteract.jl for reactive widgets\nDocumenter.jl for creating the documentation\nMakie.jl for GPU plotting and movie animations\nPyCall.jl for calling Python-based parcel model\nIJulia.jl for Jupyter integration\nWebIO.jl for rendering Apps","category":"page"},{"location":"instructors/#","page":"For Instructors","title":"For Instructors","text":"The key packages key pacakages that create the content are Gadfly and Interact.  Note that Gadfly is based on the Grammar of Graphics. It is built on top of Compose.jl, declerative vector graphics written in pure Juia. ","category":"page"},{"location":"instructors/#","page":"For Instructors","title":"For Instructors","text":"There are pros and cons of this approach. The pros for Gadfly.jl are","category":"page"},{"location":"instructors/#","page":"For Instructors","title":"For Instructors","text":"The grammar of graphics creates a paradigm for easy to decode and clear visualizations. This is critical for learning, as reading complex graphs and reasoning about the content is part of the learning objectives.\nThe visual appeal and rendering is of high quality (e.g. compared to default matplotlib). ","category":"page"},{"location":"instructors/#","page":"For Instructors","title":"For Instructors","text":"The main cons are ","category":"page"},{"location":"instructors/#","page":"For Instructors","title":"For Instructors","text":"The rendering can be slow(er).\nGrammar of graphics code can be verbose.\nThe syntax is very different than most other scientific plotting packages (e.g. MATLAB, python, IDL).","category":"page"},{"location":"instructors/#","page":"For Instructors","title":"For Instructors","text":"Interact.jl works with most of the available plotting packages (e.g. Plots.jl, GR.jl). In fact, the first version of these notebooks used Plots.jl. Note that Makie.jl is very promising but requires cloud-based GPU resources to be deployed effectively in this context.","category":"page"}]
}