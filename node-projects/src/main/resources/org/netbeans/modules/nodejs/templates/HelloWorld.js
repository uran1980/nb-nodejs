<#assign licenseFirst = "/*">
<#assign licensePrefix = " * ">
<#assign licenseLast = " */">
<#include "../../Templates/Licenses/license-${project.license}.txt">

var http = require('http');
http.createServer(function (req, res) {
    res.writeHead(200, {
        'Content-Type': 'text/plain'
    });
    
    res.end('Hello World.\n');
    
}).listen(${port}, "");
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                   rg/netbeans/modules/nodejs/templates[01;32mtim@tim[01;34m ~/work/personal/netbeans-nodejs/org.netbeans.modules.nodejs/src/main/resources/org/netbeans/modules/nodejs/templates $[00m ./scr ipt HelloWorldProjectDescription.html 
<html>
    <head>
        <title></title>
        <meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
    </head>
    <body>
        Node.JS Hello World
    </body>
</html>

]0;tim@tim:~/work/personal/netbeans-nodejs/org.netbeans.modules.nodejs/src/main/resources/org/netbeans/modules/nodejs/templates[01;32mtim@tim[01;34m ~/work/personal/netbeans-nodejs/org.netbeans.modules.nodejs/src/main/resources/org/netbeans/modules/nodejs/templates $[00m cd
]0;tim@tim:~[01;32mtim@tim[01;34m ~ $[00m cd owrkp^C
]0;tim@tim:~[01;32mtim@tim[01;34m ~ $[00m cd work/personal/nod[K[Ketbeans-nodejs/
]0;tim@tim:~/work/personal/netbeans-nodejs[01;32mtim@tim[01;34m ~/work/personal/netbeans-nodejs $[00m ls[K[Kcd org.netbeans.modules.nodejs/
]0;tim@tim:~/work/personal/netbeans-nodejs/org.netbeans.modules.nodejs[01;32mtim@tim[01;34m ~/work/personal/netbeans-nodejs/org.netbeans.modules.nodejs $[00m ls
pom.xml  [0m[01;34msrc[0m  [01;34mtarget[0m
]0;tim@tim:~/work/personal/netbeans-nodejs/org.netbeans.modules.nodejs[01;32mtim@tim[01;34m ~/work/personal/netbeans-nodejs/org.netbeans.modules.nodejs $[00m cd src/tes[K[K[K
]0;tim@tim:~/work/personal/netbeans-nodejs/org.netbeans.modules.nodejs/src[01;32mtim@tim[01;34m ~/work/personal/netbeans-nodejs/org.netbeans.modules.nodejs/src $[00m lls
bash: lls: command not found
]0;tim@tim:~/work/personal/netbeans-nodejs/org.netbeans.modules.nodejs/src[01;32mtim@tim[01;34m ~/work/personal/netbeans-nodejs/org.netbeans.modules.nodejs/src $[00m mkd[K[K[Kls
[0m[01;34mmain[0m
]0;tim@tim:~/work/personal/netbeans-nodejs/org.netbeans.modules.nodejs/src[01;32mtim@tim[01;34m ~/work/personal/netbeans-nodejs/org.netbeans.modules.nodejs/src $[00m mkdir test[C[C test- testp test[C[C[C[C[C/java/org/netbeans/modules/nodejs/json
]0;tim@tim:~/work/personal/netbeans-nodejs/org.netbeans.modules.nodejs/src[01;32mtim@tim[01;34m ~/work/personal/netbeans-nodejs/org.netbeans.modules.nodejs/src $[00m mkdir -p test/java/org/netbeans/modules/nodejs/json[K[K[K[Kregistry
]0;tim@tim:~/work/personal/netbeans-nodejs/org.netbeans.modules.nodejs/src[01;32mtim@tim[01;34m ~/work/personal/netbeans-nodejs/org.netbeans.modules.nodejs/src $[00m mkdir -p test/java/org/netbeans/modules/nodejs/registryjson[K[C/org/netbeans/modules/nodejs/json[K/org/netbeans/modules/nodejs/json[K/org/netbeans/modules/nodejs/json[K/org/netbeans/modules/nodejs/json[Kr/org/netbeans/modules/nodejs/jsone/org/netbeans/modules/nodejs/jsons/org/netbeans/modules/nodejs/jsono/org/netbeans/modules/nodejs/jsonu/org/netbeans/modules/nodejs/jsonr/org/netbeans/modules/nodejs/jsonc/org/netbeans/modules/nodejs/jsone/org/netbeans/modules/nodejs/jsons/org/netbeans/modules/nodejs/json[C[C[C[C[C[C[C[C[C[C[C[C[C[C[C[C[C[C[C[C[C[C[C[C[C[C[C[C[C[C[C[C[C
]0;tim@tim:~/work/personal/netbeans-nodejs/org.netbeans.modules.nodejs/src[01;32mtim@tim[01;34m ~/work/personal/netbeans-nodejs/org.netbeans.modules.nodejs/src $[00m cd
]0;tim@tim:~[01;32mtim@tim[01;34m ~ $[00m cd work/personal/
]0;tim@tim:~/work/personal[01;32mtim@tim[01;34m ~/work/personal $[00m git clone https://github.com/timboudreau/nb-nodejs.git
Cloning into 'nb-nodejs'...
remote: Counting objects: 4, done.[K
remote: Compressing objects:  33% (1/3)   [Kremote: Compressing objects:  66% (2/3)   [Kremote: Compressing objects: 100% (3/3)   [Kremote: Compressing objects: 100% (3/3), done.[K
remote: Total 4 (delta 0), reused 0 (delta 0)[K
Unpacking objects:  25% (1/4)   Unpacking objects:  50% (2/4)   Unpacking objects:  75% (3/4)   Unpacking objects: 100% (4/4)   Unpacking objects: 100% (4/4), done.
]0;tim@tim:~/work/personal[01;32mtim@tim[01;34m ~/work/personal $[00m cd nb-nodejs/
]0;tim@tim:~/work/personal/nb-nodejs[01;32mtim@tim[01;34m ~/work/personal/nb-nodejs $[00m ls
README.md
]0;tim@tim:~/work/personal/nb-nodejs[01;32mtim@tim[01;34m ~/work/personal/nb-nodejs $[00m ls -la
total 10
drwxr-xr-x  3 tim tim 2048 Dec  2 00:23 [0m[01;34m.[0m
drwxr-xr-x 31 tim tim 2048 Dec  2 00:23 [01;34m..[0m
drwxr-xr-x  7 tim tim 2048 Dec  2 00:23 [01;34m.git[0m
-rw-r--r--  1 tim tim   45 Dec  2 00:23 .gitignore
-rw-r--r--  1 tim tim   83 Dec  2 00:23 README.md
]0;tim@tim:~/work/personal/nb-nodejs[01;32mtim@tim[01;34m ~/work/personal/nb-nodejs $[00m mv .git .gitignore README.md ../netbeans-nodejs/
]0;tim@tim:~/work/personal/nb-nodejs[01;32mtim@tim[01;34m ~/work/personal/nb-nodejs $[00m cd ../n[K
]0;tim@tim:~/work/personal[01;32mtim@tim[01;34m ~/work/personal $[00m rm -Rf nb-nodejs/
]0;tim@tim:~/work/personal[01;32mtim@tim[01;34m ~/work/personal $[00m cd netbeans-nodejs/
]0;tim@tim:~/work/personal/netbeans-nodejs[01;32mtim@tim[01;34m ~/work/personal/netbeans-nodejs $[00m ls
[0m[01;34morg.netbeans.modules.nodejs[0m  pom.xml  README.md  [01;34mtarget[0m
]0;tim@tim:~/work/personal/netbeans-nodejs[01;32mtim@tim[01;34m ~/work/personal/netbeans-nodejs $[00m git status
# On branch master
# Untracked files:
#   (use "git add <file>..." to include in what will be committed)
#
#	[31morg.netbeans.modules.nodejs/[m
#	[31mpom.xml[m
#	[31mtarget/[m
nothing added to commit but untracked files present (use "git add" to track)
]0;tim@tim:~/work/personal/netbeans-nodejs[01;32mtim@tim[01;34m ~/work/personal/netbeans-nodejs $[00m ls target/
[0m[01;34mnetbeans_site[0m
]0;tim@tim:~/work/personal/netbeans-nodejs[01;32mtim@tim[01;34m ~/work/personal/netbeans-nodejs $[00m nano .gitignore 
(B)07[?47h[1;38r[m[4l[?25h===[39;49m[39;49m[m[H[2J[0;7m  GNU nano 2.3.1                               File: .gitignore                                                                     [3;1H[m*.class[5d# Package Files #[6d*.jar[7d*.war[8d*.ear[36;59H[0;7m[ Read 6 lines ][37d^G[m Get Help[37;23H[0;7m^O[m WriteOut[37;45H[0;7m^W[m Where Is[37;67H[0;7m^V[m Next Page[37;89H[0;7m^U[m UnCut Text[37;111H[0;7mM-|[m First Line[38d[0;7m^X[m Exit[38;23H[0;7m^R[m Read File[38;45H[0;7m^Y[m Prev Page[38;67H[0;7m^K[m Cut Text[38;89H[0;7m^C[m Cur Pos[38;111H[0;7mM-?[m Last Line[3d[4d[5d[6d[7d[8d[9d[1;123H[0;7mModified[9d[mbuild/[10dtarget/[11d.DS_[36d[K[11;5HStore[12d[36d[0;7mSave modified buffer (ANSWERING "No" WILL DESTROY CHANGES) ?                                                                        [37;1H Y[m Yes[K[38d[0;7m N[m No  [38;17H[0;7m^C[m Cancel[K[36;62H[0;7mFile Name to Write: .gitignore                              [37d^G[m Get Help[37;34H[0;7mM-D[m DOS Format[37;67H[0;7mM-A[m Append[37;100H[0;7mM-B[m Backup File[38d[0;7m^C[m Cancel[17G         [38;34H[0;7mM-M[m Mac Format[38;67H[0;7mM-P[m Prepend[36;31H[37d[39;49m[m[J[1;123H[0;7m        [36;57H[m[1K [0;7m[ Wrote 10 lines ][m[K[38;132H[38;1H[2J[?47l8>]0;tim@tim:~/work/personal/netbeans-nodejs[01;32mtim@tim[01;34m ~/work/personal/netbeans-nodejs $[00m git status
# On branch master
# Changes not staged for commit:
#   (use "git add <file>..." to update what will be committed)
#   (use "git checkout -- <file>..." to discard changes in working directory)
#
#	[31mmodified:   .gitignore[m
#
# Untracked files:
#   (use "git add <file>..." to include in what will be committed)
#
#	[31morg.netbeans.modules.nodejs/[m
#	[31mpom.xml[m
no changes added to commit (use "git add" and/or "git commit -a")
]0;tim@tim:~/work/personal/netbeans-nodejs[01;32mtim@tim[01;34m ~/work/personal/netbeans-nodejs $[00m git add -A --dry-run
add '.gitignore'
add 'org.netbeans.modules.nodejs/nb-configuration.xml'
warning: CRLF will be replaced by LF in org.netbeans.modules.nodejs/pom.xml.
The file will have its original line endings in your working directory.
add 'org.netbeans.modules.nodejs/pom.xml'
add 'org.netbeans.modules.nodejs/src/main/java/org/netbeans/modules/nodejs/DefaultExectable.java'
add 'org.netbeans.modules.nodejs/src/main/java/org/netbeans/modules/nodejs/ExplorerPanel.java'
add 'org.netbeans.modules.nodejs/src/main/java/org/netbeans/modules/nodejs/LineConverter.java'
add 'org.netbeans.modules.nodejs/src/main/java/org/netbeans/modules/nodejs/NodeJSExecutable.java'
add 'org.netbeans.modules.nodejs/src/main/java/org/netbeans/modules/nodejs/NodeJSFileOwnerQueryImpl.java'
add 'org.netbeans.modules.nodejs/src/main/java/org/netbeans/modules/nodejs/NodeJSProject.java'
add 'org.netbeans.modules.nodejs/src/main/java/org/netbeans/modules/nodejs/NodeJSProjectFactory.java'
add 'org.netbeans.modules.nodejs/src/main/java/org/netbeans/modules/nodejs/NodeJSProjectProperties.java'
add 'org.netbeans.modules.nodejs/src/main/java/org/netbeans/modules/nodejs/NodeJSProjectSources.java'
add 'org.netbeans.modules.nodejs/src/main/java/org/netbeans/modules/nodejs/NodeJsClassPathProvider.java'
add 'org.netbeans.modules.nodejs/src/main/java/org/netbeans/modules/nodejs/NodeJsEncodingQuery.java'
add 'org.netbeans.modules.nodejs/src/main/java/org/netbeans/modules/nodejs/NodeSharabilityQuery.java'
add 'org.netbeans.modules.nodejs/src/main/java/org/netbeans/modules/nodejs/ProjectMetadata.java'
add 'org.netbeans.modules.nodejs/src/main/java/org/netbeans/modules/nodejs/ProjectMetadataImpl.java'
add 'org.netbeans.modules.nodejs/src/main/java/org/netbeans/modules/nodejs/PropertiesPanel.form'
add 'org.netbeans.modules.nodejs/src/main/java/org/netbeans/modules/nodejs/PropertiesPanel.java'
add 'org.netbeans.modules.nodejs/src/main/java/org/netbeans/modules/nodejs/ScriptResolver.java'
add 'org.netbeans.modules.nodejs/src/main/java/org/netbeans/modules/nodejs/actions/RunAction.java'
add 'org.netbeans.modules.nodejs/src/main/java/org/netbeans/modules/nodejs/jdk7/SymbolicLinkSupport.java'
add 'org.netbeans.modules.nodejs/src/main/java/org/netbeans/modules/nodejs/json/JsonPanel.java'
add 'org.netbeans.modules.nodejs/src/main/java/org/netbeans/modules/nodejs/json/ObjectMapperProvider.java'
add 'org.netbeans.modules.nodejs/src/main/java/org/netbeans/modules/nodejs/json/SimpleJSONParser.java'
add 'org.netbeans.modules.nodejs/src/main/java/org/netbeans/modules/nodejs/libraries/LibrariesPanel.form'
add 'org.netbeans.modules.nodejs/src/main/java/org/netbeans/modules/nodejs/libraries/LibrariesPanel.java'
add 'org.netbeans.modules.nodejs/src/main/java/org/netbeans/modules/nodejs/libraries/OneLibraryPanel.form'
add 'org.netbeans.modules.nodejs/src/main/java/org/netbeans/modules/nodejs/libraries/OneLibraryPanel.java'
add 'org.netbeans.modules.nodejs/src/main/java/org/netbeans/modules/nodejs/node/AddLibraryAction.java'
add 'org.netbeans.modules.nodejs/src/main/java/org/netbeans/modules/nodejs/node/FileObjectComparator.java'
add 'org.netbeans.modules.nodejs/src/main/java/org/netbeans/modules/nodejs/node/LibrariesChildFactory.java'
add 'org.netbeans.modules.nodejs/src/main/java/org/netbeans/modules/nodejs/node/LibraryFilterNode.java'
add 'org.netbeans.modules.nodejs/src/main/java/org/netbeans/modules/nodejs/node/LibraryNodeChildren.java'
add 'org.netbeans.modules.nodejs/src/main/java/org/netbeans/modules/nodejs/node/NodeJSLogicalViewProvider.java'
add 'org.netbeans.modules.nodejs/src/main/java/org/netbeans/modules/nodejs/node/ProjectNodeKey.java'
add 'org.netbeans.modules.nodejs/src/main/java/org/netbeans/modules/nodejs/node/ProjectNodeKeyTypes.java'
add 'org.netbeans.modules.nodejs/src/main/java/org/netbeans/modules/nodejs/options/NodeOptionsPanelController.java'
add 'org.netbeans.modules.nodejs/src/main/java/org/netbeans/modules/nodejs/options/NodePanel.form'
add 'org.netbeans.modules.nodejs/src/main/java/org/netbeans/modules/nodejs/options/NodePanel.java'
add 'org.netbeans.modules.nodejs/src/main/java/org/netbeans/modules/nodejs/registry/FileChangeRegistry.java'
add 'org.netbeans.modules.nodejs/src/main/java/org/netbeans/modules/nodejs/ui/UiUtil.java'
add 'org.netbeans.modules.nodejs/src/main/java/org/netbeans/modules/nodejs/ui2/ImportantFiles.java'
add 'org.netbeans.modules.nodejs/src/main/java/org/netbeans/modules/nodejs/ui2/ImportantFilesChildFactory.java'
add 'org.netbeans.modules.nodejs/src/main/java/org/netbeans/modules/nodejs/ui2/Key.java'
add 'org.netbeans.modules.nodejs/src/main/java/org/netbeans/modules/nodejs/ui2/KeyType.java'
add 'org.netbeans.modules.nodejs/src/main/java/org/netbeans/modules/nodejs/ui2/ProjectChildren.java'
add 'org.netbeans.modules.nodejs/src/main/java/org/netbeans/modules/nodejs/ui2/RootNode.java'
add 'org.netbeans.modules.nodejs/src/main/java/org/netbeans/modules/nodejs/ui2/SourcesChildFactory.java'
add 'org.netbeans.modules.nodejs/src/main/java/org/netbeans/modules/nodejs/wizard/ProjectWizardIterator.java'
add 'org.netbeans.modules.nodejs/src/main/java/org/netbeans/modules/nodejs/wizard/ProjectWizardKeys.java'
add 'org.netbeans.modules.nodejs/src/main/java/org/netbeans/modules/nodejs/wizard/ProjectWizardPanel.form'
add 'org.netbeans.modules.nodejs/src/main/java/org/netbeans/modules/nodejs/wizard/ProjectWizardPanel.java'
add 'org.netbeans.modules.nodejs/src/main/nbm/manifest.mf'
add 'org.netbeans.modules.nodejs/src/main/resources/org/netbeans/modules/nodejs/Bundle.properties'
add 'org.netbeans.modules.nodejs/src/main/resources/org/netbeans/modules/nodejs/layer.xml'
add 'org.netbeans.modules.nodejs/src/main/resources/org/netbeans/modules/nodejs/libraries/Bundle.properties'
add 'org.netbeans.modules.nodejs/src/main/resources/org/netbeans/modules/nodejs/node/Bundle.properties'
add 'org.netbeans.modules.nodejs/src/main/resources/org/netbeans/modules/nodejs/options/Bundle.properties'
add 'org.netbeans.modules.nodejs/src/main/resources/org/netbeans/modules/nodejs/resources/hollow.png'
add 'org.netbeans.modules.nodejs/src/main/resources/org/netbeans/modules/nodejs/resources/js.png'
add 'org.netbeans.modules.nodejs/src/main/resources/org/netbeans/modules/nodejs/resources/libBadge.png'
add 'org.netbeans.modules.nodejs/src/main/resources/org/netbeans/modules/nodejs/resources/libs.png'
add 'org.netbeans.modules.nodejs/src/main/resources/org/netbeans/modules/nodejs/resources/logo.png'
add 'org.netbeans.modules.nodejs/src/main/resources/org/netbeans/modules/nodejs/resources/logoBadge.png'
add 'org.netbeans.modules.nodejs/src/main/resources/org/netbeans/modules/nodejs/templates/Empty.js'
add 'org.netbeans.modules.nodejs/src/main/resources/org/netbeans/modules/nodejs/templates/HelloWorld.js'
add 'org.netbeans.modules.nodejs/src/main/resources/org/netbeans/modules/nodejs/templates/HelloWorldProjectDescription.html'
add 'org.netbeans.modules.nodejs/src/main/resources/org/netbeans/modules/nodejs/templates/HelloWorldProjectTemplate.properties'
add 'org.netbeans.modules.nodejs/src/main/resources/org/netbeans/modules/nodejs/templates/Module.js'
add 'org.netbeans.modules.nodejs/src/main/resources/org/netbeans/modules/nodejs/templates/_package.json'
add 'org.netbeans.modules.nodejs/src/main/resources/org/netbeans/modules/nodejs/templates/npmignore'
add 'org.netbeans.modules.nodejs/src/main/resources/org/netbeans/modules/nodejs/templates/script'
add 'org.netbeans.modules.nodejs/src/main/resources/org/netbeans/modules/nodejs/ui2/Bundle.properties'
add 'org.netbeans.modules.nodejs/src/main/resources/org/netbeans/modules/nodejs/usrEnvNodeResolver.xml'
add 'org.netbeans.modules.nodejs/src/main/resources/org/netbeans/modules/nodejs/wizard/Bundle.properties'
add 'org.netbeans.modules.nodejs/src/test/java/org/netbeans/modules/nodejs/json/MetadataTest.java'
add 'org.netbeans.modules.nodejs/src/test/java/org/netbeans/modules/nodejs/json/SimpleJSONParserTest.java'
add 'org.netbeans.modules.nodejs/src/test/java/org/netbeans/modules/nodejs/registry/FileChangeRegistryTest.java'
add 'org.netbeans.modules.nodejs/src/test/resources/org/netbeans/modules/nodejs/json/bad_1.json'
add 'org.netbeans.modules.nodejs/src/test/resources/org/netbeans/modules/nodejs/json/bad_2.json'
add 'org.netbeans.modules.nodejs/src/test/resources/org/netbeans/modules/nodejs/json/bad_3.json'
add 'org.netbeans.modules.nodejs/src/test/resources/org/netbeans/modules/nodejs/json/bad_4.json'
add 'org.netbeans.modules.nodejs/src/test/resources/org/netbeans/modules/nodejs/json/package_0.json'
add 'org.netbeans.modules.nodejs/src/test/resources/org/netbeans/modules/nodejs/json/package_1.json'
add 'org.netbeans.modules.nodejs/src/test/resources/org/netbeans/modules/nodejs/json/package_10.json'
add 'org.netbeans.modules.nodejs/src/test/resources/org/netbeans/modules/nodejs/json/package_2.json'
add 'org.netbeans.modules.nodejs/src/test/resources/org/netbeans/modules/nodejs/json/package_3.json'
add 'org.netbeans.modules.nodejs/src/test/resources/org/netbeans/modules/nodejs/json/package_4.json'
add 'org.netbeans.modules.nodejs/src/test/resources/org/netbeans/modules/nodejs/json/package_5.json'
add 'org.netbeans.modules.nodejs/src/test/resources/org/netbeans/modules/nodejs/json/package_6.json'
add 'org.netbeans.modules.nodejs/src/test/resources/org/netbeans/modules/nodejs/json/package_7.json'
add 'org.netbeans.modules.nodejs/src/test/resources/org/netbeans/modules/nodejs/json/package_8.json'
add 'org.netbeans.modules.nodejs/src/test/resources/org/netbeans/modules/nodejs/json/package_9.json'
add 'pom.xml'
]0;tim@tim:~/work/personal/netbeans-nodejs[01;32mtim@tim[01;34m ~/work/personal/netbeans-nodejs $[00m dos2unix org.netbeans.modules.nodejs/nb-configuration.xml 
dos2unix: converting file org.netbeans.modules.nodejs/nb-configuration.xml to Unix format ...
]0;tim@tim:~/work/personal/netbeans-nodejs[01;32mtim@tim[01;34m ~/work/personal/netbeans-nodejs $[00m ls
[0m[01;34morg.netbeans.modules.nodejs[0m  pom.xml  README.md  [01;34mtarget[0m
]0;tim@tim:~/work/personal/netbeans-nodejs[01;32mtim@tim[01;34m ~/work/personal/netbeans-nodejs $[00m ls
[0m[01;34morg.netbeans.modules.nodejs[0m  pom.xml  README.md  [01;34mtarget[0m
]0;tim@tim:~/work/personal/netbeans-nodejs[01;32mtim@tim[01;34m ~/work/personal/netbeans-nodejs $[00m mvn clean
Picked up _JAVA_OPTIONS: -Dawt.useSystemAAFontSettings=lcd
[INFO] Scanning for projects...
[INFO] ------------------------------------------------------------------------
[INFO] Reactor Build Order:
[INFO] 
[INFO] netbeans-nodejs
[INFO] NodeJS Projects
[INFO]                                                                         
[INFO] ------------------------------------------------------------------------
[INFO] Building netbeans-nodejs 2.0
[INFO] ------------------------------------------------------------------------
[INFO] 
[INFO] --- maven-clean-plugin:2.4.1:clean (default-clean) @ netbeans-nodejs ---
[INFO] Deleting /home/tim/work/personal/netbeans-nodejs/target
[INFO]                                                                         
[INFO] ------------------------------------------------------------------------
[INFO] Building NodeJS Projects 2.0
[INFO] ------------------------------------------------------------------------
[INFO] 
[INFO] --- maven-clean-plugin:2.4.1:clean (default-clean) @ nodejs ---
[INFO] Deleting /home/tim/work/personal/netbeans-nodejs/org.netbeans.modules.nodejs/target
[INFO] ------------------------------------------------------------------------
[INFO] Reactor Summary:
[INFO] 
[INFO] netbeans-nodejs ................................... SUCCESS [0.137s]
[INFO] NodeJS Projects ................................... SUCCESS [0.065s]
[INFO] ------------------------------------------------------------------------
[INFO] BUILD SUCCESS
[INFO] ------------------------------------------------------------------------
[INFO] Total time: 1.185s
[INFO] Finished at: Sun Dec 02 00:31:29 EST 2012
[INFO] Final Memory: 8M/245M
[INFO] ------------------------------------------------------------------------
]0;tim@tim:~/work/personal/netbeans-nodejs[01;32mtim@tim[01;34m ~/work/personal/netbeans-nodejs $[00m ls -l
total 8
drwxr-xr-x 3 tim tim 2048 Dec  2 00:31 [0m[01;34morg.netbeans.modules.nodejs[0m
-rw-r--r-- 1 tim tim 3702 Dec  1 23:26 pom.xml
-rw-r--r-- 1 tim tim   83 Dec  2 00:23 README.md
]0;tim@tim:~/work/personal/netbeans-nodejs[01;32mtim@tim[01;34m ~/work/personal/netbeans-nodejs $[00m mv org.netbeans.modules.nodejs/[K node-projects
]0;tim@tim:~/work/personal/netbeans-nodejs[01;32mtim@tim[01;34m ~/work/personal/netbeans-nodejs $[00m git status
# On branch master
# Changes not staged for commit:
#   (use "git add <file>..." to update what will be committed)
#   (use "git checkout -- <file>..." to discard changes in working directory)
#
#	[31mmodified:   .gitignore[m
#
# Untracked files:
#   (use "git add <file>..." to include in what will be committed)
#
#	[31mnode-projects/[m
#	[31mpom.xml[m
no changes added to commit (use "git add" and/or "git commit -a")
]0;tim@tim:~/work/personal/netbeans-nodejs[01;32mtim@tim[01;34m ~/work/personal/netbeans-nodejs $[00m git add -A --dry-run
add '.gitignore'
add 'node-projects/nb-configuration.xml'
warning: CRLF will be replaced by LF in node-projects/pom.xml.
The file will have its original line endings in your working directory.
add 'node-projects/pom.xml'
add 'node-projects/src/main/java/org/netbeans/modules/nodejs/DefaultExectable.java'
add 'node-projects/src/main/java/org/netbeans/modules/nodejs/ExplorerPanel.java'
add 'node-projects/src/main/java/org/netbeans/modules/nodejs/LineConverter.java'
add 'node-projects/src/main/java/org/netbeans/modules/nodejs/NodeJSExecutable.java'
add 'node-projects/src/main/java/org/netbeans/modules/nodejs/NodeJSFileOwnerQueryImpl.java'
add 'node-projects/src/main/java/org/netbeans/modules/nodejs/NodeJSProject.java'
add 'node-projects/src/main/java/org/netbeans/modules/nodejs/NodeJSProjectFactory.java'
add 'node-projects/src/main/java/org/netbeans/modules/nodejs/NodeJSProjectProperties.java'
add 'node-projects/src/main/java/org/netbeans/modules/nodejs/NodeJSProjectSources.java'
add 'node-projects/src/main/java/org/netbeans/modules/nodejs/NodeJsClassPathProvider.java'
add 'node-projects/src/main/java/org/netbeans/modules/nodejs/NodeJsEncodingQuery.java'
add 'node-projects/src/main/java/org/netbeans/modules/nodejs/NodeSharabilityQuery.java'
add 'node-projects/src/main/java/org/netbeans/modules/nodejs/ProjectMetadata.java'
add 'node-projects/src/main/java/org/netbeans/modules/nodejs/ProjectMetadataImpl.java'
add 'node-projects/src/main/java/org/netbeans/modules/nodejs/PropertiesPanel.form'
add 'node-projects/src/main/java/org/netbeans/modules/nodejs/PropertiesPanel.java'
add 'node-projects/src/main/java/org/netbeans/modules/nodejs/ScriptResolver.java'
add 'node-projects/src/main/java/org/netbeans/modules/nodejs/actions/RunAction.java'
add 'node-projects/src/main/java/org/netbeans/modules/nodejs/jdk7/SymbolicLinkSupport.java'
add 'node-projects/src/main/java/org/netbeans/modules/nodejs/json/JsonPanel.java'
add 'node-projects/src/main/java/org/netbeans/modules/nodejs/json/ObjectMapperProvider.java'
add 'node-projects/src/main/java/org/netbeans/modules/nodejs/json/SimpleJSONParser.java'
add 'node-projects/src/main/java/org/netbeans/modules/nodejs/libraries/LibrariesPanel.form'
add 'node-projects/src/main/java/org/netbeans/modules/nodejs/libraries/LibrariesPanel.java'
add 'node-projects/src/main/java/org/netbeans/modules/nodejs/libraries/OneLibraryPanel.form'
add 'node-projects/src/main/java/org/netbeans/modules/nodejs/libraries/OneLibraryPanel.java'
add 'node-projects/src/main/java/org/netbeans/modules/nodejs/node/AddLibraryAction.java'
add 'node-projects/src/main/java/org/netbeans/modules/nodejs/node/FileObjectComparator.java'
add 'node-projects/src/main/java/org/netbeans/modules/nodejs/node/LibrariesChildFactory.java'
add 'node-projects/src/main/java/org/netbeans/modules/nodejs/node/LibraryFilterNode.java'
add 'node-projects/src/main/java/org/netbeans/modules/nodejs/node/LibraryNodeChildren.java'
add 'node-projects/src/main/java/org/netbeans/modules/nodejs/node/NodeJSLogicalViewProvider.java'
add 'node-projects/src/main/java/org/netbeans/modules/nodejs/node/ProjectNodeKey.java'
add 'node-projects/src/main/java/org/netbeans/modules/nodejs/node/ProjectNodeKeyTypes.java'
add 'node-projects/src/main/java/org/netbeans/modules/nodejs/options/NodeOptionsPanelController.java'
add 'node-projects/src/main/java/org/netbeans/modules/nodejs/options/NodePanel.form'
add 'node-projects/src/main/java/org/netbeans/modules/nodejs/options/NodePanel.java'
add 'node-projects/src/main/java/org/netbeans/modules/nodejs/registry/FileChangeRegistry.java'
add 'node-projects/src/main/java/org/netbeans/modules/nodejs/ui/UiUtil.java'
add 'node-projects/src/main/java/org/netbeans/modules/nodejs/ui2/ImportantFiles.java'
add 'node-projects/src/main/java/org/netbeans/modules/nodejs/ui2/ImportantFilesChildFactory.java'
add 'node-projects/src/main/java/org/netbeans/modules/nodejs/ui2/Key.java'
add 'node-projects/src/main/java/org/netbeans/modules/nodejs/ui2/KeyType.java'
add 'node-projects/src/main/java/org/netbeans/modules/nodejs/ui2/ProjectChildren.java'
add 'node-projects/src/main/java/org/netbeans/modules/nodejs/ui2/RootNode.java'
add 'node-projects/src/main/java/org/netbeans/modules/nodejs/ui2/SourcesChildFactory.java'
add 'node-projects/src/main/java/org/netbeans/modules/nodejs/wizard/ProjectWizardIterator.java'
add 'node-projects/src/main/java/org/netbeans/modules/nodejs/wizard/ProjectWizardKeys.java'
add 'node-projects/src/main/java/org/netbeans/modules/nodejs/wizard/ProjectWizardPanel.form'
add 'node-projects/src/main/java/org/netbeans/modules/nodejs/wizard/ProjectWizardPanel.java'
add 'node-projects/src/main/nbm/manifest.mf'
add 'node-projects/src/main/resources/org/netbeans/modules/nodejs/Bundle.properties'
add 'node-projects/src/main/resources/org/netbeans/modules/nodejs/layer.xml'
add 'node-projects/src/main/resources/org/netbeans/modules/nodejs/libraries/Bundle.properties'
add 'node-projects/src/main/resources/org/netbeans/modules/nodejs/node/Bundle.properties'
add 'node-projects/src/main/resources/org/netbeans/modules/nodejs/options/Bundle.properties'
add 'node-projects/src/main/resources/org/netbeans/modules/nodejs/resources/hollow.png'
add 'node-projects/src/main/resources/org/netbeans/modules/nodejs/resources/js.png'
add 'node-projects/src/main/resources/org/netbeans/modules/nodejs/resources/libBadge.png'
add 'node-projects/src/main/resources/org/netbeans/modules/nodejs/resources/libs.png'
add 'node-projects/src/main/resources/org/netbeans/modules/nodejs/resources/logo.png'
add 'node-projects/src/main/resources/org/netbeans/modules/nodejs/resources/logoBadge.png'
add 'node-projects/src/main/resources/org/netbeans/modules/nodejs/templates/Empty.js'
add 'node-projects/src/main/resources/org/netbeans/modules/nodejs/templates/HelloWorld.js'
add 'node-projects/src/main/resources/org/netbeans/modules/nodejs/templates/HelloWorldProjectDescription.html'
add 'node-projects/src/main/resources/org/netbeans/modules/nodejs/templates/HelloWorldProjectTemplate.properties'
add 'node-projects/src/main/resources/org/netbeans/modules/nodejs/templates/Module.js'
add 'node-projects/src/main/resources/org/netbeans/modules/nodejs/templates/_package.json'
add 'node-projects/src/main/resources/org/netbeans/modules/nodejs/templates/npmignore'
add 'node-projects/src/main/resources/org/netbeans/modules/nodejs/templates/script'
add 'node-projects/src/main/resources/org/netbeans/modules/nodejs/ui2/Bundle.properties'
add 'node-projects/src/main/resources/org/netbeans/modules/nodejs/usrEnvNodeResolver.xml'
add 'node-projects/src/main/resources/org/netbeans/modules/nodejs/wizard/Bundle.properties'
add 'node-projects/src/test/java/org/netbeans/modules/nodejs/json/MetadataTest.java'
add 'node-projects/src/test/java/org/netbeans/modules/nodejs/json/SimpleJSONParserTest.java'
add 'node-projects/src/test/java/org/netbeans/modules/nodejs/registry/FileChangeRegistryTest.java'
add 'node-projects/src/test/resources/org/netbeans/modules/nodejs/json/bad_1.json'
add 'node-projects/src/test/resources/org/netbeans/modules/nodejs/json/bad_2.json'
add 'node-projects/src/test/resources/org/netbeans/modules/nodejs/json/bad_3.json'
add 'node-projects/src/test/resources/org/netbeans/modules/nodejs/json/bad_4.json'
add 'node-projects/src/test/resources/org/netbeans/modules/nodejs/json/package_0.json'
add 'node-projects/src/test/resources/org/netbeans/modules/nodejs/json/package_1.json'
add 'node-projects/src/test/resources/org/netbeans/modules/nodejs/json/package_10.json'
add 'node-projects/src/test/resources/org/netbeans/modules/nodejs/json/package_2.json'
add 'node-projects/src/test/resources/org/netbeans/modules/nodejs/json/package_3.json'
add 'node-projects/src/test/resources/org/netbeans/modules/nodejs/json/package_4.json'
add 'node-projects/src/test/resources/org/netbeans/modules/nodejs/json/package_5.json'
add 'node-projects/src/test/resources/org/netbeans/modules/nodejs/json/package_6.json'
add 'node-projects/src/test/resources/org/netbeans/modules/nodejs/json/package_7.json'
add 'node-projects/src/test/resources/org/netbeans/modules/nodejs/json/package_8.json'
add 'node-projects/src/test/resources/org/netbeans/modules/nodejs/json/package_9.json'
add 'pom.xml'
]0;tim@tim:~/work/personal/netbeans-nodejs[01;32mtim@tim[01;34m ~/work/personal/netbeans-nodejs $[00m git add -A
warning: CRLF will be replaced by LF in node-projects/pom.xml.
The file will have its original line endings in your working directory.
]0;tim@tim:~/work/personal/netbeans-nodejs[01;32mtim@tim[01;34m ~/work/personal/netbeans-nodejs $[00m dos2unix nod-[Ke-projects/pom.xml 
dos2unix: converting file node-projects/pom.xml to Unix format ...
]0;tim@tim:~/work/personal/netbeans-nodejs[01;32mtim@tim[01;34m ~/work/personal/netbeans-nodejs $[00m dos2unix no[K[Kpom.xml 
dos2unix: converting file pom.xml to Unix format ...
]0;tim@tim:~/work/personal/netbeans-nodejs[01;32mtim@tim[01;34m ~/work/personal/netbeans-nodejs $[00m ls
[0m[01;34mnode-projects[0m  pom.xml  README.md
]0;tim@tim:~/work/personal/netbeans-nodejs[01;32mtim@tim[01;34m ~/work/personal/netbeans-nodejs $[00m dos[K[K[Kls
[0m[01;34mnode-projects[0m  pom.xml  README.md
]0;tim@tim:~/work/personal/netbeans-nodejs[01;32mtim@tim[01;34m ~/work/personal/netbeans-nodejs $[00m md README.md 
Picked up _JAVA_OPTIONS: -Dawt.useSystemAAFontSettings=lcd
^C]0;tim@tim:~/work/personal/netbeans-nodejs[01;32mtim@tim[01;34m ~/work/personal/netbeans-nodejs $[00m ls
[0m[01;34mnode-projects[0m  pom.xml  README.md
]0;tim@tim:~/work/personal/netbeans-nodejs[01;32mtim@tim[01;34m ~/work/personal/netbeans-nodejs $[00m cat README.md | md
Picked up _JAVA_OPTIONS: -Dawt.useSystemAAFontSettings=lcd
<h1>nb-nodejs</h1>

<p>NodeJS support for NetBeans, originally hosted on netbeans.org.</p>

<p>Provides a project type and support for running <a href="nodejs.org">NodeJS</a> 
projects and files in the <a href="http://netbeans.org">NetBeans</a> IDE.</p>

<h2>Features</h2>

<ul>
<li>A NodeJS project type which uses Node's built-in
 metadata: Any folder with a  <code>package.json</code> file is a project</li>
<li>Support for running projects or individual files in Node</li>
<li>Detects dependencies by scanning sources, understands and can update 
 <code>package.json</code> metadata</li>
<li>Support for adding libraries to a project using <code>npm</code> under the hood</li>
<li>Clickable stack traces in the output window
    * Ability to download and open NodeJS's sources as links in a stack trace</li>
<li>Allows the IDE to recognize scripts beginning with
   #!/usr/bin/env node
 as a Javascript source</li>
</ul>

<p>See <a href="http://timboudreau.com/blog/read/NetBeans_Tools_for_Node_js">this blog</a>
for a broader description of the project.</p>

<p>It is now under the licensed under the simple MIT license, which amounts to
do what you want with it but give credit where credit is due.</p>

]0;tim@tim:~/work/personal/netbeans-nodejs[01;32mtim@tim[01;34m ~/work/personal/netbeans-nodejs $[00m cat README.md | md
Picked up _JAVA_OPTIONS: -Dawt.useSystemAAFontSettings=lcd
<h1>nb-nodejs</h1>

<p>NodeJS support for NetBeans, originally hosted on netbeans.org.</p>

<p>Provides a project type and support for running <a href="nodejs.org">NodeJS</a> 
projects and files in the <a href="http://netbeans.org">NetBeans</a> IDE.</p>

<h2>Features</h2>

<ul>
<li>A NodeJS project type which uses Node's built-in
 metadata: Any folder with a  <code>package.json</code> file is a project</li>
<li>Support for running projects or individual files in Node</li>
<li>Detects dependencies by scanning sources, understands and can update 
 <code>package.json</code> metadata</li>
<li>Support for adding libraries to a project using <code>npm</code> under the hood</li>
<li>Clickable stack traces in the output window
<ul><li>Ability to download and open NodeJS's sources as links in a stack trace</li></ul></li>
<li>Allows the IDE to recognize scripts beginning with
   #!/usr/bin/env node
 as a Javascript source</li>
</ul>

<p>See <a href="http://timboudreau.com/blog/read/NetBeans_Tools_for_Node_js">this blog</a>
for a broader description of the project.</p>

<p>It is now under the licensed under the simple MIT license, which amounts to
do what you want with it but give credit where credit is due.</p>

]0;tim@tim:~/work/personal/netbeans-nodejs[01;32mtim@tim[01;34m ~/work/personal/netbeans-nodejs $[00m cat README.md | md
Picked up _JAVA_OPTIONS: -Dawt.useSystemAAFontSettings=lcd
<h1>nb-nodejs</h1>

<p>NodeJS support for NetBeans, originally hosted on netbeans.org.</p>

<p>Provides a project type and support for running <a href="nodejs.org">NodeJS</a> 
projects and files in the <a href="http://netbeans.org">NetBeans</a> IDE.</p>

<h2>Features</h2>

<ul>
<li>A NodeJS project type which uses Node's built-in
 metadata: Any folder with a  <code>package.json</code> file is a project</li>
<li>Support for running projects or individual files in Node</li>
<li>Detects dependencies by scanning sources, understands and can update 
 <code>package.json</code> metadata</li>
<li>Support for adding libraries to a project using <code>npm</code> under the hood</li>
<li>Clickable stack traces in the output window
<ul><li>Ability to download and open NodeJS's sources as links in a stack trace</li></ul></li>
<li>Allows the IDE to recognize scripts beginning with
   <code>#!/usr/bin/env node</code>
 as a Javascript source</li>
</ul>

<p>See <a href="http://timboudreau.com/blog/read/NetBeans_Tools_for_Node_js">this blog</a>
for a broader description of the project.</p>

<p>It is now under the licensed under the simple MIT license, which amounts to
do what you want with it but give credit where credit is due.</p>

]0;tim@tim:~/work/personal/netbeans-nodejs[01;32mtim@tim[01;34m ~/work/personal/netbeans-nodejs $[00m cat README.md | md > /tmp/x.html
Picked up _JAVA_OPTIONS: -Dawt.useSystemAAFontSettings=lcd
]0;tim@tim:~/work/personal/netbeans-nodejs[01;32mtim@tim[01;34m ~/work/personal/netbeans-nodejs $[00m chromium /tmp/x.html 
Created new window in existing browser session.
]0;tim@tim:~/work/personal/netbeans-nodejs[01;32mtim@tim[01;34m ~/work/personal/netbeans-nodejs $[00m chromium /tmp/x.html at README.md | md > /tmp/x.html
Picked up _JAVA_OPTIONS: -Dawt.useSystemAAFontSettings=lcd
]0;tim@tim:~/work/personal/netbeans-nodejs[01;32mtim@tim[01;34m ~/work/personal/netbeans-nodejs $[00m git add -A
]0;tim@tim:~/work/personal/netbeans-nodejs[01;32mtim@tim[01;34m ~/work/personal/netbeans-nodejs $[00m git ci -m "Moving sources from netbeans.org to github"
[master 58bc87a] Moving sources from netbeans.org to github
 96 files changed, 11973 insertions(+), 4 deletions(-)
 rewrite README.md (74%)
 create mode 100644 node-projects/nb-configuration.xml
 create mode 100644 node-projects/pom.xml
 create mode 100644 node-projects/src/main/java/org/netbeans/modules/nodejs/DefaultExectable.java
 create mode 100644 node-projects/src/main/java/org/netbeans/modules/nodejs/ExplorerPanel.java
 create mode 100644 node-projects/src/main/java/org/netbeans/modules/nodejs/LineConverter.java
 create mode 100644 node-projects/src/main/java/org/netbeans/modules/nodejs/NodeJSExecutable.java
 create mode 100644 node-projects/src/main/java/org/netbeans/modules/nodejs/NodeJSFileOwnerQueryImpl.java
 create mode 100644 node-projects/src/main/java/org/netbeans/modules/nodejs/NodeJSProject.java
 create mode 100644 node-projects/src/main/java/org/netbeans/modules/nodejs/NodeJSProjectFactory.java
 create mode 100644 node-projects/src/main/java/org/netbeans/modules/nodejs/NodeJSProjectProperties.java
 create mode 100644 node-projects/src/main/java/org/netbeans/modules/nodejs/NodeJSProjectSources.java
 create mode 100644 node-projects/src/main/java/org/netbeans/modules/nodejs/NodeJsClassPathProvider.java
 create mode 100644 node-projects/src/main/java/org/netbeans/modules/nodejs/NodeJsEncodingQuery.java
 create mode 100644 node-projects/src/main/java/org/netbeans/modules/nodejs/NodeSharabilityQuery.java
 create mode 100644 node-projects/src/main/java/org/netbeans/modules/nodejs/ProjectMetadata.java
 create mode 100644 node-projects/src/main/java/org/netbeans/modules/nodejs/ProjectMetadataImpl.java
 create mode 100644 node-projects/src/main/java/org/netbeans/modules/nodejs/PropertiesPanel.form
 create mode 100644 node-projects/src/main/java/org/netbeans/modules/nodejs/PropertiesPanel.java
 create mode 100644 node-projects/src/main/java/org/netbeans/modules/nodejs/ScriptResolver.java
 create mode 100644 node-projects/src/main/java/org/netbeans/modules/nodejs/actions/RunAction.java
 create mode 100644 node-projects/src/main/java/org/netbeans/modules/nodejs/jdk7/SymbolicLinkSupport.java
 create mode 100644 node-projects/src/main/java/org/netbeans/modules/nodejs/json/JsonPanel.java
 create mode 100644 node-projects/src/main/java/org/netbeans/modules/nodejs/json/ObjectMapperProvider.java
 create mode 100644 node-projects/src/main/java/org/netbeans/modules/nodejs/json/SimpleJSONParser.java
 create mode 100644 node-projects/src/main/java/org/netbeans/modules/nodejs/libraries/LibrariesPanel.form
 create mode 100644 node-projects/src/main/java/org/netbeans/modules/nodejs/libraries/LibrariesPanel.java
 create mode 100644 node-projects/src/main/java/org/netbeans/modules/nodejs/libraries/OneLibraryPanel.form
 create mode 100644 node-projects/src/main/java/org/netbeans/modules/nodejs/libraries/OneLibraryPanel.java
 create mode 100644 node-projects/src/main/java/org/netbeans/modules/nodejs/node/AddLibraryAction.java
 create mode 100644 node-projects/src/main/java/org/netbeans/modules/nodejs/node/FileObjectComparator.java
 create mode 100644 node-projects/src/main/java/org/netbeans/modules/nodejs/node/LibrariesChildFactory.java
 create mode 100644 node-projects/src/main/java/org/netbeans/modules/nodejs/node/LibraryFilterNode.java
 create mode 100644 node-projects/src/main/java/org/netbeans/modules/nodejs/node/LibraryNodeChildren.java
 create mode 100644 node-projects/src/main/java/org/netbeans/modules/nodejs/node/NodeJSLogicalViewProvider.java
 create mode 100644 node-projects/src/main/java/org/netbeans/modules/nodejs/node/ProjectNodeKey.java
 create mode 100644 node-projects/src/main/java/org/netbeans/modules/nodejs/node/ProjectNodeKeyTypes.java
 create mode 100644 node-projects/src/main/java/org/netbeans/modules/nodejs/options/NodeOptionsPanelController.java
 create mode 100644 node-projects/src/main/java/org/netbeans/modules/nodejs/options/NodePanel.form
 create mode 100644 node-projects/src/main/java/org/netbeans/modules/nodejs/options/NodePanel.java
 create mode 100644 node-projects/src/main/java/org/netbeans/modules/nodejs/registry/FileChangeRegistry.java
 create mode 100644 node-projects/src/main/java/org/netbeans/modules/nodejs/ui/UiUtil.java
 create mode 100644 node-projects/src/main/java/org/netbeans/modules/nodejs/ui2/ImportantFiles.java
 create mode 100644 node-projects/src/main/java/org/netbeans/modules/nodejs/ui2/ImportantFilesChildFactory.java
 create mode 100644 node-projects/src/main/java/org/netbeans/modules/nodejs/ui2/Key.java
 create mode 100644 node-projects/src/main/java/org/netbeans/modules/nodejs/ui2/KeyType.java
 create mode 100644 node-projects/src/main/java/org/netbeans/modules/nodejs/ui2/ProjectChildren.java
 create mode 100644 node-projects/src/main/java/org/netbeans/modules/nodejs/ui2/RootNode.java
 create mode 100644 node-projects/src/main/java/org/netbeans/modules/nodejs/ui2/SourcesChildFactory.java
 create mode 100644 node-projects/src/main/java/org/netbeans/modules/nodejs/wizard/ProjectWizardIterator.java
 create mode 100644 node-projects/src/main/java/org/netbeans/modules/nodejs/wizard/ProjectWizardKeys.java
 create mode 100644 node-projects/src/main/java/org/netbeans/modules/nodejs/wizard/ProjectWizardPanel.form
 create mode 100644 node-projects/src/main/java/org/netbeans/modules/nodejs/wizard/ProjectWizardPanel.java
 create mode 100644 node-projects/src/main/nbm/manifest.mf
 create mode 100644 node-projects/src/main/resources/org/netbeans/modules/nodejs/Bundle.properties
 create mode 100644 node-projects/src/main/resources/org/netbeans/modules/nodejs/layer.xml
 create mode 100644 node-projects/src/main/resources/org/netbeans/modules/nodejs/libraries/Bundle.properties
 create mode 100644 node-projects/src/main/resources/org/netbeans/modules/nodejs/node/Bundle.properties
 create mode 100644 node-projects/src/main/resources/org/netbeans/modules/nodejs/options/Bundle.properties
 create mode 100644 node-projects/src/main/resources/org/netbeans/modules/nodejs/resources/hollow.png
 create mode 100644 node-projects/src/main/resources/org/netbeans/modules/nodejs/resources/js.png
 create mode 100644 node-projects/src/main/resources/org/netbeans/modules/nodejs/resources/libBadge.png
 create mode 100644 node-projects/src/main/resources/org/netbeans/modules/nodejs/resources/libs.png
 create mode 100644 node-projects/src/main/resources/org/netbeans/modules/nodejs/resources/logo.png
 create mode 100644 node-projects/src/main/resources/org/netbeans/modules/nodejs/resources/logoBadge.png
 create mode 100644 node-projects/src/main/resources/org/netbeans/modules/nodejs/templates/Empty.js
 create mode 100644 node-projects/src/main/resources/org/netbeans/modules/nodejs/templates/HelloWorld.js
 create mode 100644 node-projects/src/main/resources/org/netbeans/modules/nodejs/templates/HelloWorldProjectDescription.html
 create mode 100644 node-projects/src/main/resources/org/netbeans/modules/nodejs/templates/HelloWorldProjectTemplate.properties
 create mode 100644 node-projects/src/main/resources/org/netbeans/modules/nodejs/templates/Module.js
 create mode 100644 node-projects/src/main/resources/org/netbeans/modules/nodejs/templates/_package.json
 create mode 100644 node-projects/src/main/resources/org/netbeans/modules/nodejs/templates/npmignore
 create mode 100755 node-projects/src/main/resources/org/netbeans/modules/nodejs/templates/script
 create mode 100644 node-projects/src/main/resources/org/netbeans/modules/nodejs/ui2/Bundle.properties
 create mode 100644 node-projects/src/main/resources/org/netbeans/modules/nodejs/usrEnvNodeResolver.xml
 create mode 100644 node-projects/src/main/resources/org/netbeans/modules/nodejs/wizard/Bundle.properties
 create mode 100644 node-projects/src/test/java/org/netbeans/modules/nodejs/json/MetadataTest.java
 create mode 100644 node-projects/src/test/java/org/netbeans/modules/nodejs/json/SimpleJSONParserTest.java
 create mode 100644 node-projects/src/test/java/org/netbeans/modules/nodejs/registry/FileChangeRegistryTest.java
 create mode 100644 node-projects/src/test/resources/org/netbeans/modules/nodejs/json/bad_1.json
 create mode 100644 node-projects/src/test/resources/org/netbeans/modules/nodejs/json/bad_2.json
 create mode 100644 node-projects/src/test/resources/org/netbeans/modules/nodejs/json/bad_3.json
 create mode 100644 node-projects/src/test/resources/org/netbeans/modules/nodejs/json/bad_4.json
 create mode 100644 node-projects/src/test/resources/org/netbeans/modules/nodejs/json/package_0.json
 create mode 100644 node-projects/src/test/resources/org/netbeans/modules/nodejs/json/package_1.json
 create mode 100644 node-projects/src/test/resources/org/netbeans/modules/nodejs/json/package_10.json
 create mode 100644 node-projects/src/test/resources/org/netbeans/modules/nodejs/json/package_2.json
 create mode 100644 node-projects/src/test/resources/org/netbeans/modules/nodejs/json/package_3.json
 create mode 100644 node-projects/src/test/resources/org/netbeans/modules/nodejs/json/package_4.json
 create mode 100644 node-projects/src/test/resources/org/netbeans/modules/nodejs/json/package_5.json
 create mode 100644 node-projects/src/test/resources/org/netbeans/modules/nodejs/json/package_6.json
 create mode 100644 node-projects/src/test/resources/org/netbeans/modules/nodejs/json/package_7.json
 create mode 100644 node-projects/src/test/resources/org/netbeans/modules/nodejs/json/package_8.json
 create mode 100644 node-projects/src/test/resources/org/netbeans/modules/nodejs/json/package_9.json
 create mode 100644 pom.xml
]0;tim@tim:~/work/personal/netbeans-nodejs[01;32mtim@tim[01;34m ~/work/personal/netbeans-nodejs $[00m git push
Username for 'github.com': 
Password for 'github.com': 
fatal: Authentication failed
]0;tim@tim:~/work/personal/netbeans-nodejs[01;32mtim@tim[01;34m ~/work/personal/netbeans-nodejs $[00m git push
Username for 'github.com': 
Password for 'github.com': 
fatal: Authentication failed
]0;tim@tim:~/work/personal/netbeans-nodejs[01;32mtim@tim[01;34m ~/work/personal/netbeans-nodejs $[00m geid[K[Kdit ~/.ssh/
authorized_keys  config           id_rsa           id_rsa.pub       known_hosts      webkey.pem       
[01;32mtim@tim[01;34m ~/work/personal/netbeans-nodejs $[00m gedit ~/.ssh/id_rsa.pub 
]0;tim@tim:~/work/personal/netbeans-nodejs[01;32mtim@tim[01;34m ~/work/personal/netbeans-nodejs $[00m git push
Username for 'github.com': 
Password for 'github.com': 
fatal: Authentication failed
]0;tim@tim:~/work/personal/netbeans-nodejs[01;32mtim@tim[01;34m ~/work/personal/netbeans-nodejs $[00m git push git@github.com:timboudreau/nb-nodejs.git
The authenticity of host 'github.com (207.97.227.239)' can't be established.
RSA key fingerprint is 16:27:ac:a5:76:28:2d:36:63:1b:56:4d:eb:df:a6:48.
Are you sure you want to continue connecting (yes/no)? yes
Warning: Permanently added 'github.com,207.97.227.239' (RSA) to the list of known hosts.
Counting objects: 146, done.
Delta compression using up to 4 threads.
Compressing objects:   0% (1/116)   Compressing objects:   1% (2/116)   Compressing objects:   2% (3/116)   Compressing objects:   3% (4/116)   Compressing objects:   4% (5/116)   Compressing objects:   5% (6/116)   Compressing objects:   6% (7/116)   Compressing objects:   7% (9/116)   Compressing objects:   8% (10/116)   Compressing objects:   9% (11/116)   Compressing objects:  10% (12/116)   Compressing objects:  11% (13/116)   Compressing objects:  12% (14/116)   Compressing objects:  13% (16/116)   Compressing objects:  14% (17/116)   Compressing objects:  15% (18/116)   Compressing objects:  16% (19/116)   Compressing objects:  17% (20/116)   Compressing objects:  18% (21/116)   Compressing objects:  19% (23/116)   Compressing objects:  20% (24/116)   Compressing objects:  21% (25/116)   Compressing objects:  22% (26/116)   Compressing objects:  23% (27/116)   Compressing objects:  24% (28/116)   Compressing objects:  25% (29/116)   Compressing objects:  26% (31/116)   Compressing objects:  27% (32/116)   Compressing objects:  28% (33/116)   Compressing objects:  29% (34/116)   Compressing objects:  30% (35/116)   Compressing objects:  31% (36/116)   Compressing objects:  32% (38/116)   Compressing objects:  33% (39/116)   Compressing objects:  34% (40/116)   Compressing objects:  35% (41/116)   Compressing objects:  36% (42/116)   Compressing objects:  37% (43/116)   Compressing objects:  38% (45/116)   Compressing objects:  39% (46/116)   Compressing objects:  40% (47/116)   Compressing objects:  41% (48/116)   Compressing objects:  42% (49/116)   Compressing objects:  43% (50/116)   Compressing objects:  44% (52/116)   Compressing objects:  45% (53/116)   Compressing objects:  46% (54/116)   Compressing objects:  47% (55/116)   Compressing objects:  48% (56/116)   Compressing objects:  49% (57/116)   Compressing objects:  50% (58/116)   Compressing objects:  51% (60/116)   Compressing objects:  52% (61/116)   Compressing objects:  53% (62/116)   Compressing objects:  54% (63/116)   Compressing objects:  55% (64/116)   Compressing objects:  56% (65/116)   Compressing objects:  57% (67/116)   Compressing objects:  58% (68/116)   Compressing objects:  59% (69/116)   Compressing objects:  60% (70/116)   Compressing objects:  61% (71/116)   Compressing objects:  62% (72/116)   Compressing objects:  63% (74/116)   Compressing objects:  64% (75/116)   Compressing objects:  65% (76/116)   Compressing objects:  66% (77/116)   Compressing objects:  67% (78/116)   Compressing objects:  68% (79/116)   Compressing objects:  69% (81/116)   Compressing objects:  70% (82/116)   Compressing objects:  71% (83/116)   Compressing objects:  72% (84/116)   Compressing objects:  73% (85/116)   Compressing objects:  74% (86/116)   Compressing objects:  75% (87/116)   Compressing objects:  76% (89/116)   Compressing objects:  77% (90/116)   Compressing objects:  78% (91/116)   Compressing objects:  79% (92/116)   Compressing objects:  80% (93/116)   Compressing objects:  81% (94/116)   Compressing objects:  82% (96/116)   Compressing objects:  83% (97/116)   Compressing objects:  84% (98/116)   Compressing objects:  85% (99/116)   Compressing objects:  86% (100/116)   Compressing objects:  87% (101/116)   Compressing objects:  88% (103/116)   Compressing objects:  89% (104/116)   Compressing objects:  90% (105/116)   Compressing objects:  91% (106/116)   Compressing objects:  92% (107/116)   Compressing objects:  93% (108/116)   Compressing objects:  94% (110/116)   Compressing objects:  95% (111/116)   Compressing objects:  96% (112/116)   Compressing objects:  97% (113/116)   Compressing objects:  98% (114/116)   Compressing objects:  99% (115/116)   Compressing objects: 100% (116/116)   Compressing objects: 100% (116/116), done.
Writing objects:   0% (1/143)   Writing objects:   1% (2/143)   Writing objects:   2% (3/143)   Writing objects:   3% (5/143)   Writing objects:   4% (6/143)   Writing objects:   5% (8/143)   Writing objects:   6% (9/143)   Writing objects:   7% (11/143)   Writing objects:   8% (12/143)   Writing objects:   9% (13/143)   Writing objects:  10% (15/143)   Writing objects:  11% (17/143)   Writing objects:  12% (18/143)   Writing objects:  13% (19/143)   Writing objects:  14% (21/143)   Writing objects:  15% (22/143)   Writing objects:  16% (23/143)   Writing objects:  17% (25/143)   Writing objects:  18% (26/143)   Writing objects:  19% (28/143)   Writing objects:  20% (29/143)   Writing objects:  21% (31/143)   Writing objects:  22% (32/143)   Writing objects:  23% (33/143)   Writing objects:  24% (35/143)   Writing objects:  25% (36/143)   Writing objects:  26% (38/143)   Writing objects:  27% (39/143)   Writing objects:  28% (41/143)   Writing objects:  29% (42/143)   Writing objects:  30% (43/143)   Writing objects:  31% (45/143)   Writing objects:  32% (46/143)   Writing objects:  34% (49/143)   Writing objects:  35% (51/143)   Writing objects:  37% (53/143)   Writing objects:  38% (55/143)   Writing objects:  39% (56/143)   Writing objects:  40% (58/143)   Writing objects:  41% (60/143)   Writing objects:  43% (62/143)   Writing objects:  44% (63/143)   Writing objects:  45% (65/143)   Writing objects:  46% (66/143)   Writing objects:  47% (68/143)   Writing objects:  48% (70/143)   Writing objects:  49% (71/143)   Writing objects:  50% (72/143)   Writing objects:  51% (73/143)   Writing objects:  52% (75/143)   Writing objects:  53% (76/143)   Writing objects:  54% (78/143)   Writing objects:  55% (79/143)   Writing objects:  56% (81/143)   Writing objects:  57% (82/143)   Writing objects:  58% (83/143)   Writing objects:  59% (85/143)   Writing objects:  60% (86/143)   Writing objects:  61% (88/143)   Writing objects:  62% (89/143)   Writing objects:  63% (91/143)   Writing objects:  64% (92/143)   Writing objects:  65% (93/143)   Writing objects:  66% (95/143)   Writing objects:  67% (96/143)   Writing objects:  68% (98/143)   Writing objects:  69% (99/143)   Writing objects:  70% (101/143)   Writing objects:  71% (102/143)   Writing objects:  72% (103/143)   Writing objects:  73% (105/143)   Writing objects:  74% (106/143)   Writing objects:  75% (108/143)   Writing objects:  76% (109/143)   Writing objects:  77% (111/143)   Writing objects:  78% (112/143)   Writing objects:  79% (113/143)   Writing objects:  80% (115/143)   Writing objects:  81% (116/143)   Writing objects:  83% (119/143)   Writing objects:  84% (121/143)   Writing objects:  85% (122/143)   Writing objects:  86% (123/143)   Writing objects:  87% (125/143)   Writing objects:  88% (126/143)   Writing objects:  90% (129/143)   Writing objects:  91% (131/143)   Writing objects:  92% (132/143)   Writing objects:  93% (133/143)   Writing objects:  94% (135/143)   Writing objects:  96% (138/143)   Writing objects:  97% (139/143)   Writing objects:  98% (141/143)   Writing objects:  99% (142/143)   Writing objects: 100% (143/143)   Writing objects: 100% (143/143), 120.56 KiB, done.
Total 143 (delta 39), reused 0 (delta 0)
To git@github.com:timboudreau/nb-nodejs.git
   fdafae1..58bc87a  master -> master
]0;tim@tim:~/work/personal/netbeans-nodejs[01;32mtim@tim[01;34m ~/work/personal/netbeans-nodejs $[00m NodeJS support for NetBeans, originally hosted on netbeans.org^C
]0;tim@tim:~/work/personal/netbeans-nodejs[01;32mtim@tim[01;34m ~/work/personal/netbeans-nodejs $[00m nano .git/
COMMIT_EDITMSG  description     hooks/          info/           objects/        refs/           
config          HEAD            index           logs/           packed-refs     
[01;32mtim@tim[01;34m ~/work/personal/netbeans-nodejs $[00m nano .git/config 
(B)07[?47h[1;38r[m[4l[?25h===[39;49m[39;49m[m[H[2J[0;7m  GNU nano 2.3.1                               File: .git/config                                                                    [3;1H[m[core][4d  repositoryformatversion = 0[5;9Hfilemode = true[6;9Hbare = false[7;9Hlogallrefupdates = true[8d[remote "origin"][9;9Hfetch = +refs/heads/*:refs/remotes/origin/*[10;9Hurl = https://github.com/timboudreau/nb-nodejs.git[11d[branch "master"][12;9Hremote = origin[13;9Hmerge = refs/heads/master[36;58H[0;7m[ Read 11 lines ][37d^G[m Get Help[37;23H[0;7m^O[m WriteOut[37;45H[0;7m^W[m Where Is[37;67H[0;7m^V[m Next Page[37;89H[0;7m^U[m UnCut Text[37;111H[0;7mM-|[m First Line[38d[0;7m^X[m Exit[38;23H[0;7m^R[m Read File[38;45H[0;7m^Y[m Prev Page[38;67H[0;7m^K[m Cut Text[38;89H[0;7m^C[m Cur Pos[38;111H[0;7mM-?[m Last Line[3d[4d[5d[6d[7d[8d[9d[10d[10;59H[1;123H[0;7mModified[10;58H[m                  [36d[K[10;41H                          git@github.com:timboudreau/nb-nodejs.git[36d[0;7mSave modified buffer (ANSWERING "No" WILL DESTROY CHANGES) ?                                                                        [37;1H Y[m Yes[K[38d[0;7m N[m No  [38;17H[0;7m^C[m Cancel[K[36;62H[0;7mFile Name to Write: .git/config                             [37d^G[m Get Help[37;34H[0;7mM-D[m DOS Format[37;67H[0;7mM-A[m Append[37;