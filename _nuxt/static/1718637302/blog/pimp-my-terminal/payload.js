__NUXT_JSONP__("/blog/pimp-my-terminal", (function(a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t,u,v,w,x,y,z,A,B,C,D,E,F,G,H,I,J,K,L,M,N,O,P,Q,R,S,T,U,V,W,X,Y,Z,_,$,aa,ab,ac,ad,ae,af,ag,ah,ai,aj,ak,al,am,an,ao,ap,aq,ar,as,at,au,av,aw,ax,ay,az,aA,aB,aC,aD,aE,aF,aG,aH,aI,aJ,aK,aL,aM){return {data:[{page:{slug:"pimp-my-terminal",description:"For us developers, our terminal is our one stop shop for pretty much anything. We rely on it for installing packages, perform system analysis and spring up whole software projects. For those reasons, we should show it some love and affection.",title:"Pimp My Terminal",tags:["Technical","Miscellaneous"],image:"articles\u002Fpimp-my-terminal\u002Fheader.png",author:"Gonçalo Marantes",publishedAt:"2021-09-08",time:"15 minutes",toc:[{id:Y,depth:A,text:Z},{id:_,depth:A,text:$},{id:aa,depth:A,text:"Zsh and Oh My Zsh"},{id:ab,depth:A,text:ac},{id:ad,depth:A,text:ae},{id:af,depth:A,text:ag},{id:ah,depth:N,text:"ls, lsd and tree"},{id:ai,depth:A,text:aj},{id:ak,depth:N,text:al},{id:am,depth:N,text:an},{id:ao,depth:A,text:ap}],body:{type:"root",children:[{type:b,tag:f,props:{},children:[{type:a,value:"Just yesterday, I performed a fresh install on my personal computer as I strongly needed to do so. I decided to install the latest version of "},{type:b,tag:g,props:{href:"https:\u002F\u002Fgetsol.us\u002Fhome\u002F",rel:[k,l,m],target:n},children:[{type:a,value:"Solus OS"}]},{type:a,value:" with Budgie desktop environment and give it a go. (Who doesn't like to try out a new flavor of Linux from time to time?)."}]},{type:a,value:c},{type:b,tag:f,props:{},children:[{type:a,value:"The problem was that the default terminal looks kind of sad, so I decided to spruce things up a bit to make it easier for me to look at it. Budgie uses "},{type:b,tag:g,props:{href:"https:\u002F\u002Fhelp.gnome.org\u002Fusers\u002Fgnome-terminal\u002Fstable\u002F",rel:[k,l,m],target:n},children:[{type:a,value:"gnome-terminal"}]},{type:a,value:", so if you are rocking the reliable Ubuntu LTS version with Gnome, setup will be very similar to this."}]},{type:a,value:c},{type:b,tag:f,props:{},children:[{type:a,value:"Our starting point is the following:"}]},{type:a,value:c},{type:b,tag:z,props:{filename:"articles\u002Fpimp-my-terminal\u002Finitial-state.png",caption:aq},children:[{type:a,value:c}]},{type:a,value:c},{type:b,tag:B,props:{id:Y},children:[{type:b,tag:g,props:{href:"#fonts",ariaHidden:o,tabIndex:p},children:[{type:b,tag:d,props:{className:[q,r]},children:[]}]},{type:a,value:Z}]},{type:a,value:c},{type:b,tag:f,props:{},children:[{type:a,value:"We need to get rid of the default old-looking font that comes with bash. And we need to replace it with a modern font that supports glyphs or icons. Who doesn't like icons?"}]},{type:a,value:c},{type:b,tag:f,props:{},children:[{type:a,value:"You've probably already heard of the "},{type:b,tag:g,props:{href:"https:\u002F\u002Fwww.nerdfonts.com\u002F#home",rel:[k,l,m],target:n},children:[{type:a,value:"Nerd Fonts"}]},{type:a,value:" project, it basically aggregates your favorite fonts with icons from Font Awesome and other sources, in order for you to have everything in one place. There are many projects similar to Nerd Fonts, just pick one and go for it. I'm going with "},{type:b,tag:E,props:{},children:[{type:a,value:"Meslo"}]},{type:a,value:F}]},{type:a,value:c},{type:b,tag:B,props:{id:_},children:[{type:b,tag:g,props:{href:"#color-your-terminal",ariaHidden:o,tabIndex:p},children:[{type:b,tag:d,props:{className:[q,r]},children:[]}]},{type:a,value:$}]},{type:a,value:c},{type:b,tag:f,props:{},children:[{type:a,value:"Now that we have a cool font, we need some colors on our terminal. Luckily, there's a project called "},{type:b,tag:g,props:{href:"https:\u002F\u002Fmayccoll.github.io\u002FGogh\u002F",rel:[k,l,m],target:n},children:[{type:a,value:"Gogh"}]},{type:a,value:" where we can choose our favorite color palette in less that 5 seconds. Unfortunely, this project is only compatible with Gnome Terminal, XFCE4 and some others, this means that if you're using KDE with Konsole, it won't work. You can visit the "},{type:b,tag:g,props:{href:"https:\u002F\u002Fstore.kde.org\u002Fbrowse?cat=462",rel:[k,l,m],target:n},children:[{type:a,value:"KDE store"}]},{type:a,value:" instead!"}]},{type:a,value:c},{type:b,tag:f,props:{},children:[{type:a,value:"To run Gogh, simply run:"}]},{type:a,value:c},{type:b,tag:u,props:{className:[v]},children:[{type:b,tag:w,props:{className:[x,C]},children:[{type:b,tag:h,props:{},children:[{type:b,tag:d,props:{className:[e,i]},children:[{type:a,value:"bash"}]},{type:a,value:" -c  "},{type:b,tag:d,props:{className:[e,G]},children:[{type:a,value:H},{type:b,tag:d,props:{className:[e,y]},children:[{type:b,tag:d,props:{className:[e,y]},children:[{type:a,value:ar}]},{type:b,tag:d,props:{className:[e,i]},children:[{type:a,value:"wget"}]},{type:a,value:" -qO- https:\u002F\u002Fgit.io\u002FvQgMr"},{type:b,tag:d,props:{className:[e,y]},children:[{type:a,value:as}]}]},{type:a,value:H}]},{type:a,value:c}]}]}]},{type:a,value:c},{type:b,tag:f,props:{},children:[{type:a,value:"and pick the profiles you want to install. I'm going with "},{type:b,tag:E,props:{},children:[{type:a,value:"DeHydration"}]},{type:a,value:F}]},{type:a,value:c},{type:b,tag:z,props:{filename:"articles\u002Fpimp-my-terminal\u002Ffont-color-state.png",caption:aq},children:[{type:a,value:c}]},{type:a,value:c},{type:b,tag:B,props:{id:aa},children:[{type:b,tag:g,props:{href:"#zsh-and-oh-my-zsh",ariaHidden:o,tabIndex:p},children:[{type:b,tag:d,props:{className:[q,r]},children:[]}]},{type:b,tag:g,props:{href:"https:\u002F\u002Fwww.zsh.org\u002F",rel:[k,l,m],target:n},children:[{type:a,value:I}]},{type:a,value:at},{type:b,tag:g,props:{href:"https:\u002F\u002Fohmyz.sh\u002F",rel:[k,l,m],target:n},children:[{type:a,value:au}]}]},{type:a,value:c},{type:b,tag:f,props:{},children:[{type:a,value:"Out of the box, your Linux distro is probably using "},{type:b,tag:h,props:{},children:[{type:a,value:"Bash"}]},{type:a,value:", plain boring bash... I prefer to use "},{type:b,tag:h,props:{},children:[{type:a,value:I}]},{type:a,value:" due to easier configuration, community developed plugins and much much more."}]},{type:a,value:c},{type:b,tag:f,props:{},children:[{type:a,value:"Zsh is a shell designed for interactive use, and with a powerful community you can easily find anything you need. "},{type:b,tag:h,props:{},children:[{type:a,value:"Oh my Zsh"}]},{type:a,value:" is basically a framework that helps you install plugins, themes and other helpful stuff."}]},{type:a,value:c},{type:b,tag:av,props:{id:"installing-zsh"},children:[{type:b,tag:g,props:{href:"#installing-zsh",ariaHidden:o,tabIndex:p},children:[{type:b,tag:d,props:{className:[q,r]},children:[]}]},{type:a,value:aw},{type:b,tag:h,props:{},children:[{type:a,value:I}]}]},{type:a,value:c},{type:b,tag:u,props:{className:[v]},children:[{type:b,tag:w,props:{className:[x,C]},children:[{type:b,tag:h,props:{},children:[{type:b,tag:d,props:{className:[e,s]},children:[{type:a,value:"# SolusOS"}]},{type:a,value:c},{type:b,tag:d,props:{className:[e,i]},children:[{type:a,value:J}]},{type:a,value:ax},{type:b,tag:d,props:{className:[e,i]},children:[{type:a,value:K}]},{type:a,value:t},{type:b,tag:d,props:{className:[e,i]},children:[{type:a,value:ay}]},{type:a,value:t},{type:b,tag:d,props:{className:[e,s]},children:[{type:a,value:"# zsh"}]},{type:a,value:c},{type:b,tag:d,props:{className:[e,s]},children:[{type:a,value:az}]},{type:a,value:c},{type:b,tag:d,props:{className:[e,i]},children:[{type:a,value:J}]},{type:a,value:t},{type:b,tag:d,props:{className:[e,i]},children:[{type:a,value:aA}]},{type:a,value:t},{type:b,tag:d,props:{className:[e,i]},children:[{type:a,value:K}]},{type:a,value:t},{type:b,tag:d,props:{className:[e,i]},children:[{type:a,value:ay}]},{type:a,value:c},{type:b,tag:d,props:{className:[e,s]},children:[{type:a,value:"# ..."}]},{type:a,value:c},{type:b,tag:d,props:{className:[e,s]},children:[{type:a,value:"# other distros can be found here"}]},{type:a,value:c},{type:b,tag:d,props:{className:[e,s]},children:[{type:a,value:"# https:\u002F\u002Fgithub.com\u002Fohmyzsh\u002Fohmyzsh\u002Fwiki\u002FInstalling-ZSH"}]},{type:a,value:c}]}]}]},{type:a,value:c},{type:b,tag:av,props:{id:"installing-oh-my-zsh"},children:[{type:b,tag:g,props:{href:"#installing-oh-my-zsh",ariaHidden:o,tabIndex:p},children:[{type:b,tag:d,props:{className:[q,r]},children:[]}]},{type:a,value:aw},{type:b,tag:h,props:{},children:[{type:a,value:au}]}]},{type:a,value:c},{type:b,tag:u,props:{className:[v]},children:[{type:b,tag:w,props:{className:[x,C]},children:[{type:b,tag:h,props:{},children:[{type:b,tag:d,props:{className:[e,i]},children:[{type:a,value:"sh"}]},{type:a,value:" -c "},{type:b,tag:d,props:{className:[e,G]},children:[{type:a,value:H},{type:b,tag:d,props:{className:[e,y]},children:[{type:b,tag:d,props:{className:[e,y]},children:[{type:a,value:ar}]},{type:b,tag:d,props:{className:[e,i]},children:[{type:a,value:"curl"}]},{type:a,value:" -fsSL https:\u002F\u002Fraw.githubusercontent.com\u002Fohmyzsh\u002Fohmyzsh\u002Fmaster\u002Ftools\u002Finstall.sh"},{type:b,tag:d,props:{className:[e,y]},children:[{type:a,value:as}]}]},{type:a,value:H}]},{type:a,value:c}]}]}]},{type:a,value:c},{type:b,tag:B,props:{id:ab},children:[{type:b,tag:g,props:{href:"#powerlevel10k",ariaHidden:o,tabIndex:p},children:[{type:b,tag:d,props:{className:[q,r]},children:[]}]},{type:b,tag:g,props:{href:"https:\u002F\u002Fgithub.com\u002Fromkatv\u002Fpowerlevel10k",rel:[k,l,m],target:n},children:[{type:a,value:ac}]}]},{type:a,value:c},{type:b,tag:f,props:{},children:[{type:b,tag:h,props:{},children:[{type:a,value:"Powerlevel10k"}]},{type:a,value:" is a Zsh theme than can be easily installed with Oh My Zsh."}]},{type:a,value:c},{type:b,tag:u,props:{className:[v]},children:[{type:b,tag:w,props:{className:[x,C]},children:[{type:b,tag:h,props:{},children:[{type:b,tag:d,props:{className:[e,s]},children:[{type:a,value:"# Clone the repository"}]},{type:a,value:c},{type:b,tag:d,props:{className:[e,i]},children:[{type:a,value:O}]},{type:a,value:" clone --depth"},{type:b,tag:d,props:{className:[e,j]},children:[{type:a,value:P}]},{type:b,tag:d,props:{className:[e,"number"]},children:[{type:a,value:"1"}]},{type:a,value:" https:\u002F\u002Fgithub.com\u002Fromkatv\u002Fpowerlevel10k.git "},{type:b,tag:d,props:{className:[e,y]},children:[{type:a,value:Q},{type:b,tag:d,props:{className:[e,j]},children:[{type:a,value:R}]},{type:a,value:"$HOME"},{type:b,tag:d,props:{className:[e,j]},children:[{type:a,value:D}]},{type:a,value:S},{type:b,tag:d,props:{className:[e,j]},children:[{type:a,value:D}]},{type:a,value:T}]},{type:a,value:"\u002Fthemes\u002Fpowerlevel10k\n"}]}]}]},{type:a,value:c},{type:b,tag:f,props:{},children:[{type:a,value:"And then set ZSH_THEME=\"powerlevel10k\u002Fpowerlevel10k\" in ~\u002F.zshrc."}]},{type:a,value:c},{type:b,tag:f,props:{},children:[{type:a,value:"You will then be prompted with the theme setup options:"}]},{type:a,value:c},{type:b,tag:z,props:{filename:"articles\u002Fpimp-my-terminal\u002Fpowerlevel10k-setup.png",caption:"Powerlevel10k setup prompt"},children:[{type:a,value:c}]},{type:a,value:c},{type:b,tag:f,props:{},children:[{type:a,value:"Feel free to customize your terminal however you want."}]},{type:a,value:c},{type:b,tag:f,props:{},children:[{type:a,value:"Mine ended up looking like this:"}]},{type:a,value:c},{type:b,tag:z,props:{filename:"articles\u002Fpimp-my-terminal\u002Fpowerlevel10k-final.png",caption:"After seting up powerlevel10k"},children:[{type:a,value:c}]},{type:a,value:c},{type:b,tag:B,props:{id:ad},children:[{type:b,tag:g,props:{href:"#troubleshooting-visual-studio-code-terminal",ariaHidden:o,tabIndex:p},children:[{type:b,tag:d,props:{className:[q,r]},children:[]}]},{type:a,value:ae}]},{type:a,value:c},{type:b,tag:f,props:{},children:[{type:a,value:"It is possible that visual studio code's terminal will look something like this:"}]},{type:a,value:c},{type:b,tag:z,props:{filename:"articles\u002Fpimp-my-terminal\u002Fvscode-terminal-issue.png",caption:U},children:[{type:a,value:c}]},{type:a,value:c},{type:b,tag:f,props:{},children:[{type:a,value:"This is happening because we haven't set VSCode's terminal font to the one we've just configured. To do this, just press "},{type:b,tag:V,props:{},children:[{type:a,value:"ctrl"}]},{type:a,value:aB},{type:b,tag:V,props:{},children:[{type:a,value:"shift"}]},{type:a,value:aB},{type:b,tag:V,props:{},children:[{type:a,value:f}]},{type:a,value:" and write down terminal settings. Then search for the Font Family option and replace it with your new font."}]},{type:a,value:c},{type:b,tag:z,props:{filename:"articles\u002Fpimp-my-terminal\u002Fvscode-terminal-fix.png",caption:"VSCode Terminal font fix"},children:[{type:a,value:c}]},{type:a,value:c},{type:b,tag:B,props:{id:af},children:[{type:b,tag:g,props:{href:"#useful-commands",ariaHidden:o,tabIndex:p},children:[{type:b,tag:d,props:{className:[q,r]},children:[]}]},{type:a,value:ag}]},{type:a,value:c},{type:b,tag:f,props:{},children:[{type:a,value:"Now that we have "},{type:b,tag:h,props:{},children:[{type:a,value:I}]},{type:a,value:" installed, we can install some commands that can help us."}]},{type:a,value:c},{type:b,tag:W,props:{id:ah},children:[{type:b,tag:g,props:{href:"#ls-lsd-and-tree",ariaHidden:o,tabIndex:p},children:[{type:b,tag:d,props:{className:[q,r]},children:[]}]},{type:b,tag:h,props:{},children:[{type:a,value:aC}]},{type:a,value:", "},{type:b,tag:h,props:{},children:[{type:a,value:X}]},{type:a,value:at},{type:b,tag:h,props:{},children:[{type:a,value:"tree"}]}]},{type:a,value:c},{type:b,tag:f,props:{},children:[{type:b,tag:h,props:{},children:[{type:a,value:X}]},{type:a,value:" is a replacement for ls that can mainly makes the output prettier, adding icons and colors."}]},{type:a,value:c},{type:b,tag:z,props:{filename:"articles\u002Fpimp-my-terminal\u002Flsd.png",caption:"Using the lsd command"},children:[{type:a,value:c}]},{type:a,value:c},{type:b,tag:f,props:{},children:[{type:a,value:"Firstly you need to install "},{type:b,tag:h,props:{},children:[{type:a,value:X}]}]},{type:a,value:c},{type:b,tag:u,props:{className:[v]},children:[{type:b,tag:w,props:{className:[x,C]},children:[{type:b,tag:h,props:{},children:[{type:b,tag:d,props:{className:[e,s]},children:[{type:a,value:"# Solus"}]},{type:a,value:c},{type:b,tag:d,props:{className:[e,i]},children:[{type:a,value:J}]},{type:a,value:ax},{type:b,tag:d,props:{className:[e,i]},children:[{type:a,value:K}]},{type:a,value:aD},{type:b,tag:d,props:{className:[e,s]},children:[{type:a,value:az}]},{type:a,value:c},{type:b,tag:d,props:{className:[e,i]},children:[{type:a,value:J}]},{type:a,value:t},{type:b,tag:d,props:{className:[e,i]},children:[{type:a,value:aA}]},{type:a,value:t},{type:b,tag:d,props:{className:[e,i]},children:[{type:a,value:K}]},{type:a,value:aD}]}]}]},{type:a,value:c},{type:b,tag:f,props:{},children:[{type:a,value:"You can easily replace the traditional commands with new one by simply editing your zshrc file, just add the following lines:"}]},{type:a,value:c},{type:b,tag:u,props:{className:[v]},children:[{type:b,tag:w,props:{className:[x,C]},children:[{type:b,tag:h,props:{},children:[{type:b,tag:d,props:{className:[e,s]},children:[{type:a,value:"# replace ls with lsd"}]},{type:a,value:c},{type:b,tag:d,props:{className:[e,L,M]},children:[{type:a,value:aE}]},{type:a,value:aF},{type:b,tag:d,props:{className:[e,j]},children:[{type:a,value:aG}]},{type:a,value:aH},{type:b,tag:d,props:{className:[e,j]},children:[{type:a,value:aI}]},{type:a,value:t},{type:b,tag:d,props:{className:[e,L,M]},children:[{type:a,value:aJ}]},{type:a,value:t},{type:b,tag:d,props:{className:[e,"assign-left",y]},children:[{type:a,value:aC}]},{type:b,tag:d,props:{className:[e,j]},children:[{type:a,value:P}]},{type:b,tag:d,props:{className:[e,G]},children:[{type:a,value:"'lsd --group-dirs first'"}]},{type:a,value:c},{type:b,tag:d,props:{className:[e,s]},children:[{type:a,value:"# replace tree with lsd --tree "}]},{type:a,value:c},{type:b,tag:d,props:{className:[e,L,M]},children:[{type:a,value:aE}]},{type:a,value:aF},{type:b,tag:d,props:{className:[e,j]},children:[{type:a,value:aG}]},{type:a,value:aH},{type:b,tag:d,props:{className:[e,j]},children:[{type:a,value:aI}]},{type:a,value:t},{type:b,tag:d,props:{className:[e,L,M]},children:[{type:a,value:aJ}]},{type:a,value:t},{type:b,tag:d,props:{className:[e,j]},children:[{type:a,value:P}]},{type:b,tag:d,props:{className:[e,G]},children:[{type:a,value:"'lsd --tree'"}]},{type:a,value:c}]}]}]},{type:a,value:c},{type:b,tag:f,props:{},children:[{type:a,value:"Now everything should work like a charm."}]},{type:a,value:c},{type:b,tag:B,props:{id:ai},children:[{type:b,tag:g,props:{href:"#zsh-plugins",ariaHidden:o,tabIndex:p},children:[{type:b,tag:d,props:{className:[q,r]},children:[]}]},{type:a,value:aj}]},{type:a,value:c},{type:b,tag:f,props:{},children:[{type:a,value:"There are a lot of plugins available out there, and some might be more useful than others depending on your use cases. Nonetheless I suggest you take a look at the "},{type:b,tag:g,props:{href:"https:\u002F\u002Fgithub.com\u002Fohmyzsh\u002Fohmyzsh\u002Fwiki\u002FPlugins",rel:[k,l,m],target:n},children:[{type:a,value:"plugins"}]},{type:a,value:" that "},{type:b,tag:E,props:{},children:[{type:a,value:"zsh comes bundled with"}]},{type:a,value:F}]},{type:a,value:c},{type:b,tag:f,props:{},children:[{type:a,value:"Below, you can find some other plugins that "},{type:b,tag:E,props:{},children:[{type:a,value:"don't come out of the box with zsh"}]},{type:a,value:", but are extremely useful."}]},{type:a,value:c},{type:b,tag:W,props:{id:ak},children:[{type:b,tag:g,props:{href:"#autosuggestions",ariaHidden:o,tabIndex:p},children:[{type:b,tag:d,props:{className:[q,r]},children:[]}]},{type:b,tag:g,props:{href:"https:\u002F\u002Fgithub.com\u002Fzsh-users\u002Fzsh-autosuggestions",rel:[k,l,m],target:n},children:[{type:a,value:al}]}]},{type:a,value:c},{type:b,tag:z,props:{filename:"articles\u002Fpimp-my-terminal\u002Fautosuggestions-plugin.png",caption:U},children:[{type:a,value:c}]},{type:a,value:c},{type:b,tag:f,props:{},children:[{type:a,value:"This plugin helps you navigate your command options, making it easier for you to run whatever you need. To install with Oh My Zsh, you only need to clone the repo and add the plugin to .zshrc."}]},{type:a,value:c},{type:b,tag:u,props:{className:[v]},children:[{type:b,tag:w,props:{className:[x,C]},children:[{type:b,tag:h,props:{},children:[{type:b,tag:d,props:{className:[e,s]},children:[{type:a,value:aK}]},{type:a,value:c},{type:b,tag:d,props:{className:[e,i]},children:[{type:a,value:O}]},{type:a,value:" clone https:\u002F\u002Fgithub.com\u002Fzsh-users\u002Fzsh-autosuggestions "},{type:b,tag:d,props:{className:[e,y]},children:[{type:a,value:Q},{type:b,tag:d,props:{className:[e,j]},children:[{type:a,value:R}]},{type:a,value:aL},{type:b,tag:d,props:{className:[e,j]},children:[{type:a,value:D}]},{type:a,value:S},{type:b,tag:d,props:{className:[e,j]},children:[{type:a,value:D}]},{type:a,value:T}]},{type:a,value:"\u002Fplugins\u002Fzsh-autosuggestions\n"}]}]}]},{type:a,value:c},{type:b,tag:u,props:{className:[v]},children:[{type:b,tag:w,props:{className:[x,aM]},children:[{type:b,tag:h,props:{},children:[{type:a,value:"# in .zshrc\nplugins = ( \u003Csome other plugins\u003E zsh-autosuggestions)\n"}]}]}]},{type:a,value:c},{type:b,tag:W,props:{id:am},children:[{type:b,tag:g,props:{href:"#syntax-highlighting",ariaHidden:o,tabIndex:p},children:[{type:b,tag:d,props:{className:[q,r]},children:[]}]},{type:b,tag:g,props:{href:"https:\u002F\u002Fgithub.com\u002Fzsh-users\u002Fzsh-syntax-highlighting",rel:[k,l,m],target:n},children:[{type:a,value:an}]}]},{type:a,value:c},{type:b,tag:z,props:{filename:"articles\u002Fpimp-my-terminal\u002Fsyntax-highlight-plugin.png",caption:U},children:[{type:a,value:c}]},{type:a,value:c},{type:b,tag:f,props:{},children:[{type:a,value:"Who doesn't enjoy seeing color coded stuff while we write some commands? This plugin does just that. Just like the previous one, installation is as simple as can be."}]},{type:a,value:c},{type:b,tag:u,props:{className:[v]},children:[{type:b,tag:w,props:{className:[x,C]},children:[{type:b,tag:h,props:{},children:[{type:b,tag:d,props:{className:[e,s]},children:[{type:a,value:aK}]},{type:a,value:c},{type:b,tag:d,props:{className:[e,i]},children:[{type:a,value:O}]},{type:a,value:" clone https:\u002F\u002Fgithub.com\u002Fzsh-users\u002Fzsh-syntax-highlighting.git "},{type:b,tag:d,props:{className:[e,y]},children:[{type:a,value:Q},{type:b,tag:d,props:{className:[e,j]},children:[{type:a,value:R}]},{type:a,value:aL},{type:b,tag:d,props:{className:[e,j]},children:[{type:a,value:D}]},{type:a,value:S},{type:b,tag:d,props:{className:[e,j]},children:[{type:a,value:D}]},{type:a,value:T}]},{type:a,value:"\u002Fplugins\u002Fzsh-syntax-highlighting\n"}]}]}]},{type:a,value:c},{type:b,tag:u,props:{className:[v]},children:[{type:b,tag:w,props:{className:[x,aM]},children:[{type:b,tag:h,props:{},children:[{type:a,value:"# in .zshrc\nplugins = ( \u003Csome other plugins\u003E zsh-syntax-highlighting)\n"}]}]}]},{type:a,value:c},{type:b,tag:B,props:{id:ao},children:[{type:b,tag:g,props:{href:"#conclusion",ariaHidden:o,tabIndex:p},children:[{type:b,tag:d,props:{className:[q,r]},children:[]}]},{type:a,value:ap}]},{type:a,value:c},{type:b,tag:f,props:{},children:[{type:a,value:"I hope you've found this article helpful and that you've found a way to boost your productivity. You can take a look at "},{type:b,tag:g,props:{href:"https:\u002F\u002Fgithub.com\u002FMarantesss\u002Fdotfiles",rel:[k,l,m],target:n},children:[{type:a,value:"my dotfiles"}]},{type:a,value:" if there's something left unclear."}]},{type:a,value:c},{type:b,tag:f,props:{},children:[{type:a,value:"Feel free to show me your terminal setup on "},{type:b,tag:g,props:{href:"https:\u002F\u002Ftwitter.com\u002Fmarantesss",rel:[k,l,m],target:n},children:[{type:a,value:"Twitter"}]},{type:a,value:F}]},{type:a,value:c},{type:b,tag:f,props:{},children:[{type:a,value:"Happy scripting 🦄"}]}]},dir:"\u002Fblog",path:"\u002Fblog\u002Fpimp-my-terminal",extension:".md",createdAt:"2024-06-17T15:14:21.928Z",updatedAt:"2024-06-17T15:14:21.932Z"}}],fetch:[],mutations:void 0}}("text","element","\n","span","token","p","a","code","function","operator","nofollow","noopener","noreferrer","_blank","true",-1,"icon","icon-link","comment"," ","div","nuxt-content-highlight","pre","line-numbers","variable","dynamic-image",2,"h2","language-bash","\u002F","strong",".","string","\"","Zsh","sudo","install","builtin","class-name",3,"git","=","${ZSH_CUSTOM",":-",".oh-my-zsh","custom}","VSCode Terminal font issue","kbd","h3","lsd","fonts","Fonts","color-your-terminal","Color your terminal","zsh-and-oh-my-zsh","powerlevel10k","PowerLevel10k","troubleshooting-visual-studio-code-terminal","Troubleshooting Visual Studio Code Terminal","useful-commands","Useful commands","ls-lsd-and-tree","zsh-plugins","Zsh Plugins","autosuggestions","Autosuggestions","syntax-highlighting","Syntax Highlighting","conclusion","Conclusion","Solus OS default terminal","$(",")"," and ","Oh My Zsh","h4","Installing "," eopkg ","zsh","# Ubuntu\u002FDebian","apt"," + ","ls"," lsd\n","command"," -v lsd ","\u003E"," \u002Fdev\u002Fnull ","&&","alias","# clone the repo","~","language-text")));