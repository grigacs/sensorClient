



<!DOCTYPE html>
<html lang="en" class=" is-copy-enabled is-u2f-enabled">
  <head prefix="og: http://ogp.me/ns# fb: http://ogp.me/ns/fb# object: http://ogp.me/ns/object# article: http://ogp.me/ns/article# profile: http://ogp.me/ns/profile#">
    <meta charset='utf-8'>
    

    <link crossorigin="anonymous" href="https://assets-cdn.github.com/assets/frameworks-2bdc213eab044d6ffed07b82d4bbc13165d911fb38f4aa0d76593c6876697e7b.css" integrity="sha256-K9whPqsETW/+0HuC1LvBMWXZEfs49KoNdlk8aHZpfns=" media="all" rel="stylesheet" />
    <link crossorigin="anonymous" href="https://assets-cdn.github.com/assets/github-ae45a596bb7edc19d6a1c1987740dc53602546aae3aecb3bd068dc73f0a6f362.css" integrity="sha256-rkWllrt+3BnWocGYd0DcU2AlRqrjrss70Gjcc/Cm82I=" media="all" rel="stylesheet" />
    
    
    
    

    <link as="script" href="https://assets-cdn.github.com/assets/frameworks-88471af1fec40ff9418efbe2ddd15b6896af8d772f8179004c254dffc25ea490.js" rel="preload" />
    
    <link as="script" href="https://assets-cdn.github.com/assets/github-0eec4699f78c32e23c38462de8cce320d3ee33089d810a58f81e65b6f6fc7efe.js" rel="preload" />

    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta http-equiv="Content-Language" content="en">
    <meta name="viewport" content="width=device-width">
    
    <title>ionic2-web-chat/socket.io-1.2.0.js at master · couchbaselabs/ionic2-web-chat</title>
    <link rel="search" type="application/opensearchdescription+xml" href="/opensearch.xml" title="GitHub">
    <link rel="fluid-icon" href="https://github.com/fluidicon.png" title="GitHub">
    <link rel="apple-touch-icon" href="/apple-touch-icon.png">
    <link rel="apple-touch-icon" sizes="57x57" href="/apple-touch-icon-57x57.png">
    <link rel="apple-touch-icon" sizes="60x60" href="/apple-touch-icon-60x60.png">
    <link rel="apple-touch-icon" sizes="72x72" href="/apple-touch-icon-72x72.png">
    <link rel="apple-touch-icon" sizes="76x76" href="/apple-touch-icon-76x76.png">
    <link rel="apple-touch-icon" sizes="114x114" href="/apple-touch-icon-114x114.png">
    <link rel="apple-touch-icon" sizes="120x120" href="/apple-touch-icon-120x120.png">
    <link rel="apple-touch-icon" sizes="144x144" href="/apple-touch-icon-144x144.png">
    <link rel="apple-touch-icon" sizes="152x152" href="/apple-touch-icon-152x152.png">
    <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon-180x180.png">
    <meta property="fb:app_id" content="1401488693436528">

      <meta content="https://avatars2.githubusercontent.com/u/636956?v=3&amp;s=400" name="twitter:image:src" /><meta content="@github" name="twitter:site" /><meta content="summary" name="twitter:card" /><meta content="couchbaselabs/ionic2-web-chat" name="twitter:title" /><meta content="Contribute to ionic2-web-chat development by creating an account on GitHub." name="twitter:description" />
      <meta content="https://avatars2.githubusercontent.com/u/636956?v=3&amp;s=400" property="og:image" /><meta content="GitHub" property="og:site_name" /><meta content="object" property="og:type" /><meta content="couchbaselabs/ionic2-web-chat" property="og:title" /><meta content="https://github.com/couchbaselabs/ionic2-web-chat" property="og:url" /><meta content="Contribute to ionic2-web-chat development by creating an account on GitHub." property="og:description" />
      <meta name="browser-stats-url" content="https://api.github.com/_private/browser/stats">
    <meta name="browser-errors-url" content="https://api.github.com/_private/browser/errors">
    <link rel="assets" href="https://assets-cdn.github.com/">
    <link rel="web-socket" href="wss://live.github.com/_sockets/OTk0ODE2MTowYzgyNzhkNjhiNjI4YjViNzlhNzZhNDhiZTNhZmE4YzowYWUwZGNhMzZhNzlkNjJlNTNmNzg5NDU3MTE0ZDIzYTk1NTAzYTRhZjQ5NjAxNjNiODEwZDEyOTk4ZjVkZWNm--f1ff4f552d1751f7be9a3b3329779be297ee3757">
    <meta name="pjax-timeout" content="1000">
    <link rel="sudo-modal" href="/sessions/sudo_modal">
    <meta name="request-id" content="4E1EA08D:3F13:219C0E0:57DD3AD3" data-pjax-transient>

    <meta name="msapplication-TileImage" content="/windows-tile.png">
    <meta name="msapplication-TileColor" content="#ffffff">
    <meta name="selected-link" value="repo_source" data-pjax-transient>

    <meta name="google-site-verification" content="KT5gs8h0wvaagLKAVWq8bbeNwnZZK1r1XQysX3xurLU">
<meta name="google-site-verification" content="ZzhVyEFwb7w3e0-uOTltm8Jsck2F5StVihD0exw2fsA">
    <meta name="google-analytics" content="UA-3769691-2">

<meta content="collector.githubapp.com" name="octolytics-host" /><meta content="github" name="octolytics-app-id" /><meta content="4E1EA08D:3F13:219C0E0:57DD3AD3" name="octolytics-dimension-request_id" /><meta content="9948161" name="octolytics-actor-id" /><meta content="grigacs" name="octolytics-actor-login" /><meta content="ba1b608ddd5579081557be3b4aaba323631a5672f94357a305b683feede3f737" name="octolytics-actor-hash" />
<meta content="/&lt;user-name&gt;/&lt;repo-name&gt;/blob/show" data-pjax-transient="true" name="analytics-location" />



  <meta class="js-ga-set" name="dimension1" content="Logged In">



        <meta name="hostname" content="github.com">
    <meta name="user-login" content="grigacs">

        <meta name="expected-hostname" content="github.com">
      <meta name="js-proxy-site-detection-payload" content="ZTQ4YjI4NGNjMDg3MjcyNDliYjlkMTI1ODY0YTY0YTA4Y2U5OTFmZmMyNWNhYzQxM2Y5NWQzOTc3YzNlYzQ1NHx7InJlbW90ZV9hZGRyZXNzIjoiNzguMzAuMTYwLjE0MSIsInJlcXVlc3RfaWQiOiI0RTFFQTA4RDozRjEzOjIxOUMwRTA6NTdERDNBRDMiLCJ0aW1lc3RhbXAiOjE0NzQxMTYzMDh9">


      <link rel="mask-icon" href="https://assets-cdn.github.com/pinned-octocat.svg" color="#4078c0">
      <link rel="icon" type="image/x-icon" href="https://assets-cdn.github.com/favicon.ico">

    <meta name="html-safe-nonce" content="60091fd2c9b7f70bc9632ead3dc12eee9a891b8e">
    <meta content="795b613fbf80e6dbddee620b9506d4628346f6c8" name="form-nonce" />

    <meta http-equiv="x-pjax-version" content="5db3ce41248b0f708ed21f0730a42928">
    

      
  <meta name="description" content="Contribute to ionic2-web-chat development by creating an account on GitHub.">
  <meta name="go-import" content="github.com/couchbaselabs/ionic2-web-chat git https://github.com/couchbaselabs/ionic2-web-chat.git">

  <meta content="636956" name="octolytics-dimension-user_id" /><meta content="couchbaselabs" name="octolytics-dimension-user_login" /><meta content="49031527" name="octolytics-dimension-repository_id" /><meta content="couchbaselabs/ionic2-web-chat" name="octolytics-dimension-repository_nwo" /><meta content="true" name="octolytics-dimension-repository_public" /><meta content="false" name="octolytics-dimension-repository_is_fork" /><meta content="49031527" name="octolytics-dimension-repository_network_root_id" /><meta content="couchbaselabs/ionic2-web-chat" name="octolytics-dimension-repository_network_root_nwo" />
  <link href="https://github.com/couchbaselabs/ionic2-web-chat/commits/master.atom" rel="alternate" title="Recent Commits to ionic2-web-chat:master" type="application/atom+xml">


      <link rel="canonical" href="https://github.com/couchbaselabs/ionic2-web-chat/blob/master/www/js/socket.io-1.2.0.js" data-pjax-transient>
  </head>


  <body class="logged-in  env-production windows vis-public page-blob">
    <div id="js-pjax-loader-bar" class="pjax-loader-bar"><div class="progress"></div></div>
    <a href="#start-of-content" tabindex="1" class="accessibility-aid js-skip-to-content">Skip to content</a>

    
    
    



        <div class="header header-logged-in true" role="banner">
  <div class="container clearfix">

    <a class="header-logo-invertocat" href="https://github.com/" data-hotkey="g d" aria-label="Homepage" data-ga-click="Header, go to dashboard, icon:logo">
  <svg aria-hidden="true" class="octicon octicon-mark-github" height="28" version="1.1" viewBox="0 0 16 16" width="28"><path d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.013 8.013 0 0 0 16 8c0-4.42-3.58-8-8-8z"></path></svg>
</a>


        <div class="header-search scoped-search site-scoped-search js-site-search" role="search">
  <!-- </textarea> --><!-- '"` --><form accept-charset="UTF-8" action="/couchbaselabs/ionic2-web-chat/search" class="js-site-search-form" data-scoped-search-url="/couchbaselabs/ionic2-web-chat/search" data-unscoped-search-url="/search" method="get"><div style="margin:0;padding:0;display:inline"><input name="utf8" type="hidden" value="&#x2713;" /></div>
    <label class="form-control header-search-wrapper js-chromeless-input-container">
      <div class="header-search-scope">This repository</div>
      <input type="text"
        class="form-control header-search-input js-site-search-focus js-site-search-field is-clearable"
        data-hotkey="s"
        name="q"
        placeholder="Search"
        aria-label="Search this repository"
        data-unscoped-placeholder="Search GitHub"
        data-scoped-placeholder="Search"
        autocapitalize="off">
    </label>
</form></div>


      <ul class="header-nav float-left" role="navigation">
        <li class="header-nav-item">
          <a href="/pulls" aria-label="Pull requests you created" class="js-selected-navigation-item header-nav-link" data-ga-click="Header, click, Nav menu - item:pulls context:user" data-hotkey="g p" data-selected-links="/pulls /pulls/assigned /pulls/mentioned /pulls">
            Pull requests
</a>        </li>
        <li class="header-nav-item">
          <a href="/issues" aria-label="Issues you created" class="js-selected-navigation-item header-nav-link" data-ga-click="Header, click, Nav menu - item:issues context:user" data-hotkey="g i" data-selected-links="/issues /issues/assigned /issues/mentioned /issues">
            Issues
</a>        </li>
          <li class="header-nav-item">
            <a class="header-nav-link" href="https://gist.github.com/" data-ga-click="Header, go to gist, text:gist">Gist</a>
          </li>
      </ul>

    
<ul class="header-nav user-nav float-right" id="user-links">
  <li class="header-nav-item">
    
    <a href="/notifications" aria-label="You have no unread notifications" class="header-nav-link notification-indicator tooltipped tooltipped-s js-socket-channel js-notification-indicator" data-channel="tenant:1:notification-changed:9948161" data-ga-click="Header, go to notifications, icon:read" data-hotkey="g n">
        <span class="mail-status "></span>
        <svg aria-hidden="true" class="octicon octicon-bell" height="16" version="1.1" viewBox="0 0 14 16" width="14"><path d="M14 12v1H0v-1l.73-.58c.77-.77.81-2.55 1.19-4.42C2.69 3.23 6 2 6 2c0-.55.45-1 1-1s1 .45 1 1c0 0 3.39 1.23 4.16 5 .38 1.88.42 3.66 1.19 4.42l.66.58H14zm-7 4c1.11 0 2-.89 2-2H5c0 1.11.89 2 2 2z"></path></svg>
</a>
  </li>

  <li class="header-nav-item dropdown js-menu-container">
    <a class="header-nav-link tooltipped tooltipped-s js-menu-target" href="/new"
       aria-label="Create new…"
       data-ga-click="Header, create new, icon:add">
      <svg aria-hidden="true" class="octicon octicon-plus float-left" height="16" version="1.1" viewBox="0 0 12 16" width="12"><path d="M12 9H7v5H5V9H0V7h5V2h2v5h5z"></path></svg>
      <span class="dropdown-caret"></span>
    </a>

    <div class="dropdown-menu-content js-menu-content">
      <ul class="dropdown-menu dropdown-menu-sw">
        
<a class="dropdown-item" href="/new" data-ga-click="Header, create new repository">
  New repository
</a>

  <a class="dropdown-item" href="/new/import" data-ga-click="Header, import a repository">
    Import repository
  </a>


  <a class="dropdown-item" href="/organizations/new" data-ga-click="Header, create new organization">
    New organization
  </a>



  <div class="dropdown-divider"></div>
  <div class="dropdown-header">
    <span title="couchbaselabs/ionic2-web-chat">This repository</span>
  </div>
    <a class="dropdown-item" href="/couchbaselabs/ionic2-web-chat/issues/new" data-ga-click="Header, create new issue">
      New issue
    </a>

      </ul>
    </div>
  </li>

  <li class="header-nav-item dropdown js-menu-container">
    <a class="header-nav-link name tooltipped tooltipped-sw js-menu-target" href="/grigacs"
       aria-label="View profile and more"
       data-ga-click="Header, show menu, icon:avatar">
      <img alt="@grigacs" class="avatar" height="20" src="https://avatars2.githubusercontent.com/u/9948161?v=3&amp;s=40" width="20" />
      <span class="dropdown-caret"></span>
    </a>

    <div class="dropdown-menu-content js-menu-content">
      <div class="dropdown-menu dropdown-menu-sw">
        <div class="dropdown-header header-nav-current-user css-truncate">
          Signed in as <strong class="css-truncate-target">grigacs</strong>
        </div>

        <div class="dropdown-divider"></div>

        <a class="dropdown-item" href="/grigacs" data-ga-click="Header, go to profile, text:your profile">
          Your profile
        </a>
          <a class="dropdown-item" href="/grigacs?tab=stars" data-ga-click="Header, go to starred repos, text:your stars">
            Your stars
          </a>
        <a class="dropdown-item" href="/explore" data-ga-click="Header, go to explore, text:explore">
          Explore
        </a>
          <a class="dropdown-item" href="/integrations" data-ga-click="Header, go to integrations, text:integrations">
            Integrations
          </a>
        <a class="dropdown-item" href="https://help.github.com" data-ga-click="Header, go to help, text:help">
          Help
        </a>


        <div class="dropdown-divider"></div>

        <a class="dropdown-item" href="/settings/profile" data-ga-click="Header, go to settings, icon:settings">
          Settings
        </a>

        <!-- </textarea> --><!-- '"` --><form accept-charset="UTF-8" action="/logout" class="logout-form" data-form-nonce="795b613fbf80e6dbddee620b9506d4628346f6c8" method="post"><div style="margin:0;padding:0;display:inline"><input name="utf8" type="hidden" value="&#x2713;" /><input name="authenticity_token" type="hidden" value="yh+MsbarTyIckC1p8Wo3IGTwRsJzGEFMomF/IqYKhxeECGabT8ApFf3fUlOTLYdcKUfgLBoHewjvPy2QLsJxTw==" /></div>
          <button class="dropdown-item dropdown-signout" data-ga-click="Header, sign out, icon:logout">
            Sign out
          </button>
</form>      </div>
    </div>
  </li>
</ul>


    
  </div>
</div>


      


    <div id="start-of-content" class="accessibility-aid"></div>

      <div id="js-flash-container">
</div>


    <div role="main">
        <div itemscope itemtype="http://schema.org/SoftwareSourceCode">
    <div id="js-repo-pjax-container" data-pjax-container>
      
<div class="pagehead repohead instapaper_ignore readability-menu experiment-repo-nav">
  <div class="container repohead-details-container">

    

<ul class="pagehead-actions">

  <li>
        <!-- </textarea> --><!-- '"` --><form accept-charset="UTF-8" action="/notifications/subscribe" class="js-social-container" data-autosubmit="true" data-form-nonce="795b613fbf80e6dbddee620b9506d4628346f6c8" data-remote="true" method="post"><div style="margin:0;padding:0;display:inline"><input name="utf8" type="hidden" value="&#x2713;" /><input name="authenticity_token" type="hidden" value="Rp0lKqBMcijxIZ34N6xqG7U/7JhPLRdHlvORjwNJBb7w45VkxbUbt9e0UiLGWVbngn6VB7QKZgdmLWbCvz97ww==" /></div>      <input class="form-control" id="repository_id" name="repository_id" type="hidden" value="49031527" />

        <div class="select-menu js-menu-container js-select-menu">
          <a href="/couchbaselabs/ionic2-web-chat/subscription"
            class="btn btn-sm btn-with-count select-menu-button js-menu-target" role="button" tabindex="0" aria-haspopup="true"
            data-ga-click="Repository, click Watch settings, action:blob#show">
            <span class="js-select-button">
              <svg aria-hidden="true" class="octicon octicon-eye" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path d="M8.06 2C3 2 0 8 0 8s3 6 8.06 6C13 14 16 8 16 8s-3-6-7.94-6zM8 12c-2.2 0-4-1.78-4-4 0-2.2 1.8-4 4-4 2.22 0 4 1.8 4 4 0 2.22-1.78 4-4 4zm2-4c0 1.11-.89 2-2 2-1.11 0-2-.89-2-2 0-1.11.89-2 2-2 1.11 0 2 .89 2 2z"></path></svg>
              Watch
            </span>
          </a>
          <a class="social-count js-social-count"
            href="/couchbaselabs/ionic2-web-chat/watchers"
            aria-label="74 users are watching this repository">
            74
          </a>

        <div class="select-menu-modal-holder">
          <div class="select-menu-modal subscription-menu-modal js-menu-content" aria-hidden="true">
            <div class="select-menu-header js-navigation-enable" tabindex="-1">
              <svg aria-label="Close" class="octicon octicon-x js-menu-close" height="16" role="img" version="1.1" viewBox="0 0 12 16" width="12"><path d="M7.48 8l3.75 3.75-1.48 1.48L6 9.48l-3.75 3.75-1.48-1.48L4.52 8 .77 4.25l1.48-1.48L6 6.52l3.75-3.75 1.48 1.48z"></path></svg>
              <span class="select-menu-title">Notifications</span>
            </div>

              <div class="select-menu-list js-navigation-container" role="menu">

                <div class="select-menu-item js-navigation-item selected" role="menuitem" tabindex="0">
                  <svg aria-hidden="true" class="octicon octicon-check select-menu-item-icon" height="16" version="1.1" viewBox="0 0 12 16" width="12"><path d="M12 5l-8 8-4-4 1.5-1.5L4 10l6.5-6.5z"></path></svg>
                  <div class="select-menu-item-text">
                    <input checked="checked" id="do_included" name="do" type="radio" value="included" />
                    <span class="select-menu-item-heading">Not watching</span>
                    <span class="description">Be notified when participating or @mentioned.</span>
                    <span class="js-select-button-text hidden-select-button-text">
                      <svg aria-hidden="true" class="octicon octicon-eye" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path d="M8.06 2C3 2 0 8 0 8s3 6 8.06 6C13 14 16 8 16 8s-3-6-7.94-6zM8 12c-2.2 0-4-1.78-4-4 0-2.2 1.8-4 4-4 2.22 0 4 1.8 4 4 0 2.22-1.78 4-4 4zm2-4c0 1.11-.89 2-2 2-1.11 0-2-.89-2-2 0-1.11.89-2 2-2 1.11 0 2 .89 2 2z"></path></svg>
                      Watch
                    </span>
                  </div>
                </div>

                <div class="select-menu-item js-navigation-item " role="menuitem" tabindex="0">
                  <svg aria-hidden="true" class="octicon octicon-check select-menu-item-icon" height="16" version="1.1" viewBox="0 0 12 16" width="12"><path d="M12 5l-8 8-4-4 1.5-1.5L4 10l6.5-6.5z"></path></svg>
                  <div class="select-menu-item-text">
                    <input id="do_subscribed" name="do" type="radio" value="subscribed" />
                    <span class="select-menu-item-heading">Watching</span>
                    <span class="description">Be notified of all conversations.</span>
                    <span class="js-select-button-text hidden-select-button-text">
                      <svg aria-hidden="true" class="octicon octicon-eye" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path d="M8.06 2C3 2 0 8 0 8s3 6 8.06 6C13 14 16 8 16 8s-3-6-7.94-6zM8 12c-2.2 0-4-1.78-4-4 0-2.2 1.8-4 4-4 2.22 0 4 1.8 4 4 0 2.22-1.78 4-4 4zm2-4c0 1.11-.89 2-2 2-1.11 0-2-.89-2-2 0-1.11.89-2 2-2 1.11 0 2 .89 2 2z"></path></svg>
                      Unwatch
                    </span>
                  </div>
                </div>

                <div class="select-menu-item js-navigation-item " role="menuitem" tabindex="0">
                  <svg aria-hidden="true" class="octicon octicon-check select-menu-item-icon" height="16" version="1.1" viewBox="0 0 12 16" width="12"><path d="M12 5l-8 8-4-4 1.5-1.5L4 10l6.5-6.5z"></path></svg>
                  <div class="select-menu-item-text">
                    <input id="do_ignore" name="do" type="radio" value="ignore" />
                    <span class="select-menu-item-heading">Ignoring</span>
                    <span class="description">Never be notified.</span>
                    <span class="js-select-button-text hidden-select-button-text">
                      <svg aria-hidden="true" class="octicon octicon-mute" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path d="M8 2.81v10.38c0 .67-.81 1-1.28.53L3 10H1c-.55 0-1-.45-1-1V7c0-.55.45-1 1-1h2l3.72-3.72C7.19 1.81 8 2.14 8 2.81zm7.53 3.22l-1.06-1.06-1.97 1.97-1.97-1.97-1.06 1.06L11.44 8 9.47 9.97l1.06 1.06 1.97-1.97 1.97 1.97 1.06-1.06L13.56 8l1.97-1.97z"></path></svg>
                      Stop ignoring
                    </span>
                  </div>
                </div>

              </div>

            </div>
          </div>
        </div>
</form>
  </li>

  <li>
    
  <div class="js-toggler-container js-social-container starring-container ">

    <!-- </textarea> --><!-- '"` --><form accept-charset="UTF-8" action="/couchbaselabs/ionic2-web-chat/unstar" class="starred" data-form-nonce="795b613fbf80e6dbddee620b9506d4628346f6c8" data-remote="true" method="post"><div style="margin:0;padding:0;display:inline"><input name="utf8" type="hidden" value="&#x2713;" /><input name="authenticity_token" type="hidden" value="tnZomQO/rEt5UCSFHxdTL1mQGGTE++kXn75dprX4kbEaGlu9xWu6S55DBztF7NBq6hQUKFXUYyJKdh0nPTtv9g==" /></div>
      <button
        class="btn btn-sm btn-with-count js-toggler-target"
        aria-label="Unstar this repository" title="Unstar couchbaselabs/ionic2-web-chat"
        data-ga-click="Repository, click unstar button, action:blob#show; text:Unstar">
        <svg aria-hidden="true" class="octicon octicon-star" height="16" version="1.1" viewBox="0 0 14 16" width="14"><path d="M14 6l-4.9-.64L7 1 4.9 5.36 0 6l3.6 3.26L2.67 14 7 11.67 11.33 14l-.93-4.74z"></path></svg>
        Unstar
      </button>
        <a class="social-count js-social-count" href="/couchbaselabs/ionic2-web-chat/stargazers"
           aria-label="7 users starred this repository">
          7
        </a>
</form>
    <!-- </textarea> --><!-- '"` --><form accept-charset="UTF-8" action="/couchbaselabs/ionic2-web-chat/star" class="unstarred" data-form-nonce="795b613fbf80e6dbddee620b9506d4628346f6c8" data-remote="true" method="post"><div style="margin:0;padding:0;display:inline"><input name="utf8" type="hidden" value="&#x2713;" /><input name="authenticity_token" type="hidden" value="BTEzo7mP3IdGFuQGNZ8NnTSxHmYtbkheBtQ/hT+rAURo7c329peFEY1AGcz4cY57+1cP0z7OOC3AZIXYwrf1IQ==" /></div>
      <button
        class="btn btn-sm btn-with-count js-toggler-target"
        aria-label="Star this repository" title="Star couchbaselabs/ionic2-web-chat"
        data-ga-click="Repository, click star button, action:blob#show; text:Star">
        <svg aria-hidden="true" class="octicon octicon-star" height="16" version="1.1" viewBox="0 0 14 16" width="14"><path d="M14 6l-4.9-.64L7 1 4.9 5.36 0 6l3.6 3.26L2.67 14 7 11.67 11.33 14l-.93-4.74z"></path></svg>
        Star
      </button>
        <a class="social-count js-social-count" href="/couchbaselabs/ionic2-web-chat/stargazers"
           aria-label="7 users starred this repository">
          7
        </a>
</form>  </div>

  </li>

  <li>
          <!-- </textarea> --><!-- '"` --><form accept-charset="UTF-8" action="/couchbaselabs/ionic2-web-chat/fork" class="btn-with-count" data-form-nonce="795b613fbf80e6dbddee620b9506d4628346f6c8" method="post"><div style="margin:0;padding:0;display:inline"><input name="utf8" type="hidden" value="&#x2713;" /><input name="authenticity_token" type="hidden" value="oRb28DK6QDZZZrUsTTPcxouhaSOmbprMd0sXdHF2NPdH68oK0+gMyEc+WQpgiiCgpLraTnyAWy57xMe0YpMqsw==" /></div>
            <button
                type="submit"
                class="btn btn-sm btn-with-count"
                data-ga-click="Repository, show fork modal, action:blob#show; text:Fork"
                title="Fork your own copy of couchbaselabs/ionic2-web-chat to your account"
                aria-label="Fork your own copy of couchbaselabs/ionic2-web-chat to your account">
              <svg aria-hidden="true" class="octicon octicon-repo-forked" height="16" version="1.1" viewBox="0 0 10 16" width="10"><path d="M8 1a1.993 1.993 0 0 0-1 3.72V6L5 8 3 6V4.72A1.993 1.993 0 0 0 2 1a1.993 1.993 0 0 0-1 3.72V6.5l3 3v1.78A1.993 1.993 0 0 0 5 15a1.993 1.993 0 0 0 1-3.72V9.5l3-3V4.72A1.993 1.993 0 0 0 8 1zM2 4.2C1.34 4.2.8 3.65.8 3c0-.65.55-1.2 1.2-1.2.65 0 1.2.55 1.2 1.2 0 .65-.55 1.2-1.2 1.2zm3 10c-.66 0-1.2-.55-1.2-1.2 0-.65.55-1.2 1.2-1.2.65 0 1.2.55 1.2 1.2 0 .65-.55 1.2-1.2 1.2zm3-10c-.66 0-1.2-.55-1.2-1.2 0-.65.55-1.2 1.2-1.2.65 0 1.2.55 1.2 1.2 0 .65-.55 1.2-1.2 1.2z"></path></svg>
              Fork
            </button>
</form>
    <a href="/couchbaselabs/ionic2-web-chat/network" class="social-count"
       aria-label="6 users are forked this repository">
      6
    </a>
  </li>
</ul>

    <h1 class="public ">
  <svg aria-hidden="true" class="octicon octicon-repo" height="16" version="1.1" viewBox="0 0 12 16" width="12"><path d="M4 9H3V8h1v1zm0-3H3v1h1V6zm0-2H3v1h1V4zm0-2H3v1h1V2zm8-1v12c0 .55-.45 1-1 1H6v2l-1.5-1.5L3 16v-2H1c-.55 0-1-.45-1-1V1c0-.55.45-1 1-1h10c.55 0 1 .45 1 1zm-1 10H1v2h2v-1h3v1h5v-2zm0-10H2v9h9V1z"></path></svg>
  <span class="author" itemprop="author"><a href="/couchbaselabs" class="url fn" rel="author">couchbaselabs</a></span><!--
--><span class="path-divider">/</span><!--
--><strong itemprop="name"><a href="/couchbaselabs/ionic2-web-chat" data-pjax="#js-repo-pjax-container">ionic2-web-chat</a></strong>

</h1>

  </div>
  <div class="container">
    
<nav class="reponav js-repo-nav js-sidenav-container-pjax"
     itemscope
     itemtype="http://schema.org/BreadcrumbList"
     role="navigation"
     data-pjax="#js-repo-pjax-container">

  <span itemscope itemtype="http://schema.org/ListItem" itemprop="itemListElement">
    <a href="/couchbaselabs/ionic2-web-chat" aria-selected="true" class="js-selected-navigation-item selected reponav-item" data-hotkey="g c" data-selected-links="repo_source repo_downloads repo_commits repo_releases repo_tags repo_branches /couchbaselabs/ionic2-web-chat" itemprop="url">
      <svg aria-hidden="true" class="octicon octicon-code" height="16" version="1.1" viewBox="0 0 14 16" width="14"><path d="M9.5 3L8 4.5 11.5 8 8 11.5 9.5 13 14 8 9.5 3zm-5 0L0 8l4.5 5L6 11.5 2.5 8 6 4.5 4.5 3z"></path></svg>
      <span itemprop="name">Code</span>
      <meta itemprop="position" content="1">
</a>  </span>

    <span itemscope itemtype="http://schema.org/ListItem" itemprop="itemListElement">
      <a href="/couchbaselabs/ionic2-web-chat/issues" class="js-selected-navigation-item reponav-item" data-hotkey="g i" data-selected-links="repo_issues repo_labels repo_milestones /couchbaselabs/ionic2-web-chat/issues" itemprop="url">
        <svg aria-hidden="true" class="octicon octicon-issue-opened" height="16" version="1.1" viewBox="0 0 14 16" width="14"><path d="M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"></path></svg>
        <span itemprop="name">Issues</span>
        <span class="counter">0</span>
        <meta itemprop="position" content="2">
</a>    </span>

  <span itemscope itemtype="http://schema.org/ListItem" itemprop="itemListElement">
    <a href="/couchbaselabs/ionic2-web-chat/pulls" class="js-selected-navigation-item reponav-item" data-hotkey="g p" data-selected-links="repo_pulls /couchbaselabs/ionic2-web-chat/pulls" itemprop="url">
      <svg aria-hidden="true" class="octicon octicon-git-pull-request" height="16" version="1.1" viewBox="0 0 12 16" width="12"><path d="M11 11.28V5c-.03-.78-.34-1.47-.94-2.06C9.46 2.35 8.78 2.03 8 2H7V0L4 3l3 3V4h1c.27.02.48.11.69.31.21.2.3.42.31.69v6.28A1.993 1.993 0 0 0 10 15a1.993 1.993 0 0 0 1-3.72zm-1 2.92c-.66 0-1.2-.55-1.2-1.2 0-.65.55-1.2 1.2-1.2.65 0 1.2.55 1.2 1.2 0 .65-.55 1.2-1.2 1.2zM4 3c0-1.11-.89-2-2-2a1.993 1.993 0 0 0-1 3.72v6.56A1.993 1.993 0 0 0 2 15a1.993 1.993 0 0 0 1-3.72V4.72c.59-.34 1-.98 1-1.72zm-.8 10c0 .66-.55 1.2-1.2 1.2-.65 0-1.2-.55-1.2-1.2 0-.65.55-1.2 1.2-1.2.65 0 1.2.55 1.2 1.2zM2 4.2C1.34 4.2.8 3.65.8 3c0-.65.55-1.2 1.2-1.2.65 0 1.2.55 1.2 1.2 0 .65-.55 1.2-1.2 1.2z"></path></svg>
      <span itemprop="name">Pull requests</span>
      <span class="counter">0</span>
      <meta itemprop="position" content="3">
</a>  </span>

  <a href="/couchbaselabs/ionic2-web-chat/projects" class="js-selected-navigation-item reponav-item" data-selected-links="repo_projects new_repo_project repo_project /couchbaselabs/ionic2-web-chat/projects">
    <svg class="octicon" aria-hidden="true" version="1.1" width="15" height="16" viewBox="0 0 15 16">
      <path d="M1 15h13V1H1v14zM15 1v14a1 1 0 0 1-1 1H1a1 1 0 0 1-1-1V1a1 1 0 0 1 1-1h13a1 1 0 0 1 1 1zm-4.41 11h1.82c.59 0 .59-.41.59-1V3c0-.59 0-1-.59-1h-1.82C10 2 10 2.41 10 3v8c0 .59 0 1 .59 1zm-4-2h1.82C9 10 9 9.59 9 9V3c0-.59 0-1-.59-1H6.59C6 2 6 2.41 6 3v6c0 .59 0 1 .59 1zM2 13V3c0-.59 0-1 .59-1h1.82C5 2 5 2.41 5 3v10c0 .59 0 1-.59 1H2.59C2 14 2 13.59 2 13z"></path>
    </svg>
    Projects
    <span class="counter">0</span>
</a>
    <a href="/couchbaselabs/ionic2-web-chat/wiki" class="js-selected-navigation-item reponav-item" data-hotkey="g w" data-selected-links="repo_wiki /couchbaselabs/ionic2-web-chat/wiki">
      <svg aria-hidden="true" class="octicon octicon-book" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path d="M3 5h4v1H3V5zm0 3h4V7H3v1zm0 2h4V9H3v1zm11-5h-4v1h4V5zm0 2h-4v1h4V7zm0 2h-4v1h4V9zm2-6v9c0 .55-.45 1-1 1H9.5l-1 1-1-1H2c-.55 0-1-.45-1-1V3c0-.55.45-1 1-1h5.5l1 1 1-1H15c.55 0 1 .45 1 1zm-8 .5L7.5 3H2v9h6V3.5zm7-.5H9.5l-.5.5V12h6V3z"></path></svg>
      Wiki
</a>

  <a href="/couchbaselabs/ionic2-web-chat/pulse" class="js-selected-navigation-item reponav-item" data-selected-links="pulse /couchbaselabs/ionic2-web-chat/pulse">
    <svg aria-hidden="true" class="octicon octicon-pulse" height="16" version="1.1" viewBox="0 0 14 16" width="14"><path d="M11.5 8L8.8 5.4 6.6 8.5 5.5 1.6 2.38 8H0v2h3.6l.9-1.8.9 5.4L9 8.5l1.6 1.5H14V8z"></path></svg>
    Pulse
</a>
  <a href="/couchbaselabs/ionic2-web-chat/graphs" class="js-selected-navigation-item reponav-item" data-selected-links="repo_graphs repo_contributors /couchbaselabs/ionic2-web-chat/graphs">
    <svg aria-hidden="true" class="octicon octicon-graph" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path d="M16 14v1H0V0h1v14h15zM5 13H3V8h2v5zm4 0H7V3h2v10zm4 0h-2V6h2v7z"></path></svg>
    Graphs
</a>

</nav>

  </div>
</div>

<div class="container new-discussion-timeline experiment-repo-nav">
  <div class="repository-content">

    

<a href="/couchbaselabs/ionic2-web-chat/blob/ec6b1356b07a3e714e44985c6672a2a83dd35e15/www/js/socket.io-1.2.0.js" class="d-none js-permalink-shortcut" data-hotkey="y">Permalink</a>

<!-- blob contrib key: blob_contributors:v21:62656511a0b3e98f7039319a3d1dd035 -->

<div class="file-navigation js-zeroclipboard-container">
  
<div class="select-menu branch-select-menu js-menu-container js-select-menu float-left">
  <button class="btn btn-sm select-menu-button js-menu-target css-truncate" data-hotkey="w"
    
    type="button" aria-label="Switch branches or tags" tabindex="0" aria-haspopup="true">
    <i>Branch:</i>
    <span class="js-select-button css-truncate-target">master</span>
  </button>

  <div class="select-menu-modal-holder js-menu-content js-navigation-container" data-pjax aria-hidden="true">

    <div class="select-menu-modal">
      <div class="select-menu-header">
        <svg aria-label="Close" class="octicon octicon-x js-menu-close" height="16" role="img" version="1.1" viewBox="0 0 12 16" width="12"><path d="M7.48 8l3.75 3.75-1.48 1.48L6 9.48l-3.75 3.75-1.48-1.48L4.52 8 .77 4.25l1.48-1.48L6 6.52l3.75-3.75 1.48 1.48z"></path></svg>
        <span class="select-menu-title">Switch branches/tags</span>
      </div>

      <div class="select-menu-filters">
        <div class="select-menu-text-filter">
          <input type="text" aria-label="Filter branches/tags" id="context-commitish-filter-field" class="form-control js-filterable-field js-navigation-enable" placeholder="Filter branches/tags">
        </div>
        <div class="select-menu-tabs">
          <ul>
            <li class="select-menu-tab">
              <a href="#" data-tab-filter="branches" data-filter-placeholder="Filter branches/tags" class="js-select-menu-tab" role="tab">Branches</a>
            </li>
            <li class="select-menu-tab">
              <a href="#" data-tab-filter="tags" data-filter-placeholder="Find a tag…" class="js-select-menu-tab" role="tab">Tags</a>
            </li>
          </ul>
        </div>
      </div>

      <div class="select-menu-list select-menu-tab-bucket js-select-menu-tab-bucket" data-tab-filter="branches" role="menu">

        <div data-filterable-for="context-commitish-filter-field" data-filterable-type="substring">


            <a class="select-menu-item js-navigation-item js-navigation-open selected"
               href="/couchbaselabs/ionic2-web-chat/blob/master/www/js/socket.io-1.2.0.js"
               data-name="master"
               data-skip-pjax="true"
               rel="nofollow">
              <svg aria-hidden="true" class="octicon octicon-check select-menu-item-icon" height="16" version="1.1" viewBox="0 0 12 16" width="12"><path d="M12 5l-8 8-4-4 1.5-1.5L4 10l6.5-6.5z"></path></svg>
              <span class="select-menu-item-text css-truncate-target js-select-menu-filter-text">
                master
              </span>
            </a>
        </div>

          <div class="select-menu-no-results">Nothing to show</div>
      </div>

      <div class="select-menu-list select-menu-tab-bucket js-select-menu-tab-bucket" data-tab-filter="tags">
        <div data-filterable-for="context-commitish-filter-field" data-filterable-type="substring">


        </div>

        <div class="select-menu-no-results">Nothing to show</div>
      </div>

    </div>
  </div>
</div>

  <div class="BtnGroup float-right">
    <a href="/couchbaselabs/ionic2-web-chat/find/master"
          class="js-pjax-capture-input btn btn-sm BtnGroup-item"
          data-pjax
          data-hotkey="t">
      Find file
    </a>
    <button aria-label="Copy file path to clipboard" class="js-zeroclipboard btn btn-sm BtnGroup-item tooltipped tooltipped-s" data-copied-hint="Copied!" type="button">Copy path</button>
  </div>
  <div class="breadcrumb js-zeroclipboard-target">
    <span class="repo-root js-repo-root"><span class="js-path-segment"><a href="/couchbaselabs/ionic2-web-chat"><span>ionic2-web-chat</span></a></span></span><span class="separator">/</span><span class="js-path-segment"><a href="/couchbaselabs/ionic2-web-chat/tree/master/www"><span>www</span></a></span><span class="separator">/</span><span class="js-path-segment"><a href="/couchbaselabs/ionic2-web-chat/tree/master/www/js"><span>js</span></a></span><span class="separator">/</span><strong class="final-path">socket.io-1.2.0.js</strong>
  </div>
</div>


  <div class="commit-tease">
      <span class="float-right">
        <a class="commit-tease-sha" href="/couchbaselabs/ionic2-web-chat/commit/ec6b1356b07a3e714e44985c6672a2a83dd35e15" data-pjax>
          ec6b135
        </a>
        <relative-time datetime="2016-01-05T00:22:50Z">Jan 5, 2016</relative-time>
      </span>
      <div>
        <img alt="@nraboy" class="avatar" height="20" src="https://avatars0.githubusercontent.com/u/983958?v=3&amp;s=40" width="20" />
        <a href="/nraboy" class="user-mention" rel="contributor">nraboy</a>
          <a href="/couchbaselabs/ionic2-web-chat/commit/ec6b1356b07a3e714e44985c6672a2a83dd35e15" class="message" data-pjax="true" title="initial commit">initial commit</a>
      </div>

    <div class="commit-tease-contributors">
      <button type="button" class="btn-link muted-link contributors-toggle" data-facebox="#blob_contributors_box">
        <strong>1</strong>
         contributor
      </button>
      
    </div>

    <div id="blob_contributors_box" style="display:none">
      <h2 class="facebox-header" data-facebox-id="facebox-header">Users who have contributed to this file</h2>
      <ul class="facebox-user-list" data-facebox-id="facebox-description">
          <li class="facebox-user-list-item">
            <img alt="@nraboy" height="24" src="https://avatars2.githubusercontent.com/u/983958?v=3&amp;s=48" width="24" />
            <a href="/nraboy">nraboy</a>
          </li>
      </ul>
    </div>
  </div>

<div class="file">
  <div class="file-header">
  <div class="file-actions">

    <div class="BtnGroup">
      <a href="/couchbaselabs/ionic2-web-chat/raw/master/www/js/socket.io-1.2.0.js" class="btn btn-sm BtnGroup-item" id="raw-url">Raw</a>
        <a href="/couchbaselabs/ionic2-web-chat/blame/master/www/js/socket.io-1.2.0.js" class="btn btn-sm js-update-url-with-hash BtnGroup-item">Blame</a>
      <a href="/couchbaselabs/ionic2-web-chat/commits/master/www/js/socket.io-1.2.0.js" class="btn btn-sm BtnGroup-item" rel="nofollow">History</a>
    </div>

        <a class="btn-octicon tooltipped tooltipped-nw"
           href="github-windows://openRepo/https://github.com/couchbaselabs/ionic2-web-chat?branch=master&amp;filepath=www%2Fjs%2Fsocket.io-1.2.0.js"
           aria-label="Open this file in GitHub Desktop"
           data-ga-click="Repository, open with desktop, type:windows">
            <svg aria-hidden="true" class="octicon octicon-device-desktop" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path d="M15 2H1c-.55 0-1 .45-1 1v9c0 .55.45 1 1 1h5.34c-.25.61-.86 1.39-2.34 2h8c-1.48-.61-2.09-1.39-2.34-2H15c.55 0 1-.45 1-1V3c0-.55-.45-1-1-1zm0 9H1V3h14v8z"></path></svg>
        </a>

        <!-- </textarea> --><!-- '"` --><form accept-charset="UTF-8" action="/couchbaselabs/ionic2-web-chat/edit/master/www/js/socket.io-1.2.0.js" class="inline-form js-update-url-with-hash" data-form-nonce="795b613fbf80e6dbddee620b9506d4628346f6c8" method="post"><div style="margin:0;padding:0;display:inline"><input name="utf8" type="hidden" value="&#x2713;" /><input name="authenticity_token" type="hidden" value="qFwjj6RJfEWcvwvk9OB2yu4blu+mGlpOKzht9fG140htne9Mq4r5x+jWtqDIETQvvJ84/IobJvQ/eUEPMBTVAA==" /></div>
          <button class="btn-octicon tooltipped tooltipped-nw" type="submit"
            aria-label="Fork this project and edit the file" data-hotkey="e" data-disable-with>
            <svg aria-hidden="true" class="octicon octicon-pencil" height="16" version="1.1" viewBox="0 0 14 16" width="14"><path d="M0 12v3h3l8-8-3-3-8 8zm3 2H1v-2h1v1h1v1zm10.3-9.3L12 6 9 3l1.3-1.3a.996.996 0 0 1 1.41 0l1.59 1.59c.39.39.39 1.02 0 1.41z"></path></svg>
          </button>
</form>        <!-- </textarea> --><!-- '"` --><form accept-charset="UTF-8" action="/couchbaselabs/ionic2-web-chat/delete/master/www/js/socket.io-1.2.0.js" class="inline-form" data-form-nonce="795b613fbf80e6dbddee620b9506d4628346f6c8" method="post"><div style="margin:0;padding:0;display:inline"><input name="utf8" type="hidden" value="&#x2713;" /><input name="authenticity_token" type="hidden" value="1ypfb4DHXRY0N9MX9KQdtvDVsAPuHCOR5LGu08cspkTaaPx4e6VJTrHi0ZkfZ91pJPGUz1PayAiOKf3vy972BQ==" /></div>
          <button class="btn-octicon btn-octicon-danger tooltipped tooltipped-nw" type="submit"
            aria-label="Fork this project and delete the file" data-disable-with>
            <svg aria-hidden="true" class="octicon octicon-trashcan" height="16" version="1.1" viewBox="0 0 12 16" width="12"><path d="M11 2H9c0-.55-.45-1-1-1H5c-.55 0-1 .45-1 1H2c-.55 0-1 .45-1 1v1c0 .55.45 1 1 1v9c0 .55.45 1 1 1h7c.55 0 1-.45 1-1V5c.55 0 1-.45 1-1V3c0-.55-.45-1-1-1zm-1 12H3V5h1v8h1V5h1v8h1V5h1v8h1V5h1v9zm1-10H2V3h9v1z"></path></svg>
          </button>
</form>  </div>

  <div class="file-info">
      3 lines (3 sloc)
      <span class="file-info-divider"></span>
    80.9 KB
  </div>
</div>

  

  <div itemprop="text" class="blob-wrapper data type-javascript">
      <table class="highlight tab-size js-file-line-container" data-tab-size="8">
      <tr>
        <td id="L1" class="blob-num js-line-number" data-line-number="1"></td>
        <td id="LC1" class="blob-code blob-code-inner js-file-line">!function(e){if(&quot;object&quot;==typeof exports&amp;&amp;&quot;undefined&quot;!=typeof module)module.exports=e();else if(&quot;function&quot;==typeof define&amp;&amp;define.amd)define([],e);else{var f;&quot;undefined&quot;!=typeof window?f=window:&quot;undefined&quot;!=typeof global?f=global:&quot;undefined&quot;!=typeof self&amp;&amp;(f=self),f.io=e()}}(function(){var define,module,exports;return function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require==&quot;function&quot;&amp;&amp;require;if(!u&amp;&amp;a)return a(o,!0);if(i)return i(o,!0);throw new Error(&quot;Cannot find module &#39;&quot;+o+&quot;&#39;&quot;)}var f=n[o]={exports:{}};t[o][0].call(f.exports,function(e){var n=t[o][1][e];return s(n?n:e)},f,f.exports,e,t,n,r)}return n[o].exports}var i=typeof require==&quot;function&quot;&amp;&amp;require;for(var o=0;o&lt;r.length;o++)s(r[o]);return s}({1:[function(_dereq_,module,exports){module.exports=_dereq_(&quot;./lib/&quot;)},{&quot;./lib/&quot;:2}],2:[function(_dereq_,module,exports){var url=_dereq_(&quot;./url&quot;);var parser=_dereq_(&quot;socket.io-parser&quot;);var Manager=_dereq_(&quot;./manager&quot;);var debug=_dereq_(&quot;debug&quot;)(&quot;socket.io-client&quot;);module.exports=exports=lookup;var cache=exports.managers={};function lookup(uri,opts){if(typeof uri==&quot;object&quot;){opts=uri;uri=undefined}opts=opts||{};var parsed=url(uri);var source=parsed.source;var id=parsed.id;var io;if(opts.forceNew||opts[&quot;force new connection&quot;]||false===opts.multiplex){debug(&quot;ignoring socket cache for %s&quot;,source);io=Manager(source,opts)}else{if(!cache[id]){debug(&quot;new io instance for %s&quot;,source);cache[id]=Manager(source,opts)}io=cache[id]}return io.socket(parsed.path)}exports.protocol=parser.protocol;exports.connect=lookup;exports.Manager=_dereq_(&quot;./manager&quot;);exports.Socket=_dereq_(&quot;./socket&quot;)},{&quot;./manager&quot;:3,&quot;./socket&quot;:5,&quot;./url&quot;:6,debug:9,&quot;socket.io-parser&quot;:40}],3:[function(_dereq_,module,exports){var url=_dereq_(&quot;./url&quot;);var eio=_dereq_(&quot;engine.io-client&quot;);var Socket=_dereq_(&quot;./socket&quot;);var Emitter=_dereq_(&quot;component-emitter&quot;);var parser=_dereq_(&quot;socket.io-parser&quot;);var on=_dereq_(&quot;./on&quot;);var bind=_dereq_(&quot;component-bind&quot;);var object=_dereq_(&quot;object-component&quot;);var debug=_dereq_(&quot;debug&quot;)(&quot;socket.io-client:manager&quot;);var indexOf=_dereq_(&quot;indexof&quot;);module.exports=Manager;function Manager(uri,opts){if(!(this instanceof Manager))return new Manager(uri,opts);if(uri&amp;&amp;&quot;object&quot;==typeof uri){opts=uri;uri=undefined}opts=opts||{};opts.path=opts.path||&quot;/socket.io&quot;;this.nsps={};this.subs=[];this.opts=opts;this.reconnection(opts.reconnection!==false);this.reconnectionAttempts(opts.reconnectionAttempts||Infinity);this.reconnectionDelay(opts.reconnectionDelay||1e3);this.reconnectionDelayMax(opts.reconnectionDelayMax||5e3);this.timeout(null==opts.timeout?2e4:opts.timeout);this.readyState=&quot;closed&quot;;this.uri=uri;this.connected=[];this.attempts=0;this.encoding=false;this.packetBuffer=[];this.encoder=new parser.Encoder;this.decoder=new parser.Decoder;this.autoConnect=opts.autoConnect!==false;if(this.autoConnect)this.open()}Manager.prototype.emitAll=function(){this.emit.apply(this,arguments);for(var nsp in this.nsps){this.nsps[nsp].emit.apply(this.nsps[nsp],arguments)}};Emitter(Manager.prototype);Manager.prototype.reconnection=function(v){if(!arguments.length)return this._reconnection;this._reconnection=!!v;return this};Manager.prototype.reconnectionAttempts=function(v){if(!arguments.length)return this._reconnectionAttempts;this._reconnectionAttempts=v;return this};Manager.prototype.reconnectionDelay=function(v){if(!arguments.length)return this._reconnectionDelay;this._reconnectionDelay=v;return this};Manager.prototype.reconnectionDelayMax=function(v){if(!arguments.length)return this._reconnectionDelayMax;this._reconnectionDelayMax=v;return this};Manager.prototype.timeout=function(v){if(!arguments.length)return this._timeout;this._timeout=v;return this};Manager.prototype.maybeReconnectOnOpen=function(){if(!this.openReconnect&amp;&amp;!this.reconnecting&amp;&amp;this._reconnection&amp;&amp;this.attempts===0){this.openReconnect=true;this.reconnect()}};Manager.prototype.open=Manager.prototype.connect=function(fn){debug(&quot;readyState %s&quot;,this.readyState);if(~this.readyState.indexOf(&quot;open&quot;))return this;debug(&quot;opening %s&quot;,this.uri);this.engine=eio(this.uri,this.opts);var socket=this.engine;var self=this;this.readyState=&quot;opening&quot;;this.skipReconnect=false;var openSub=on(socket,&quot;open&quot;,function(){self.onopen();fn&amp;&amp;fn()});var errorSub=on(socket,&quot;error&quot;,function(data){debug(&quot;connect_error&quot;);self.cleanup();self.readyState=&quot;closed&quot;;self.emitAll(&quot;connect_error&quot;,data);if(fn){var err=new Error(&quot;Connection error&quot;);err.data=data;fn(err)}self.maybeReconnectOnOpen()});if(false!==this._timeout){var timeout=this._timeout;debug(&quot;connect attempt will timeout after %d&quot;,timeout);var timer=setTimeout(function(){debug(&quot;connect attempt timed out after %d&quot;,timeout);openSub.destroy();socket.close();socket.emit(&quot;error&quot;,&quot;timeout&quot;);self.emitAll(&quot;connect_timeout&quot;,timeout)},timeout);this.subs.push({destroy:function(){clearTimeout(timer)}})}this.subs.push(openSub);this.subs.push(errorSub);return this};Manager.prototype.onopen=function(){debug(&quot;open&quot;);this.cleanup();this.readyState=&quot;open&quot;;this.emit(&quot;open&quot;);var socket=this.engine;this.subs.push(on(socket,&quot;data&quot;,bind(this,&quot;ondata&quot;)));this.subs.push(on(this.decoder,&quot;decoded&quot;,bind(this,&quot;ondecoded&quot;)));this.subs.push(on(socket,&quot;error&quot;,bind(this,&quot;onerror&quot;)));this.subs.push(on(socket,&quot;close&quot;,bind(this,&quot;onclose&quot;)))};Manager.prototype.ondata=function(data){this.decoder.add(data)};Manager.prototype.ondecoded=function(packet){this.emit(&quot;packet&quot;,packet)};Manager.prototype.onerror=function(err){debug(&quot;error&quot;,err);this.emitAll(&quot;error&quot;,err)};Manager.prototype.socket=function(nsp){var socket=this.nsps[nsp];if(!socket){socket=new Socket(this,nsp);this.nsps[nsp]=socket;var self=this;socket.on(&quot;connect&quot;,function(){if(!~indexOf(self.connected,socket)){self.connected.push(socket)}})}return socket};Manager.prototype.destroy=function(socket){var index=indexOf(this.connected,socket);if(~index)this.connected.splice(index,1);if(this.connected.length)return;this.close()};Manager.prototype.packet=function(packet){debug(&quot;writing packet %j&quot;,packet);var self=this;if(!self.encoding){self.encoding=true;this.encoder.encode(packet,function(encodedPackets){for(var i=0;i&lt;encodedPackets.length;i++){self.engine.write(encodedPackets[i])}self.encoding=false;self.processPacketQueue()})}else{self.packetBuffer.push(packet)}};Manager.prototype.processPacketQueue=function(){if(this.packetBuffer.length&gt;0&amp;&amp;!this.encoding){var pack=this.packetBuffer.shift();this.packet(pack)}};Manager.prototype.cleanup=function(){var sub;while(sub=this.subs.shift())sub.destroy();this.packetBuffer=[];this.encoding=false;this.decoder.destroy()};Manager.prototype.close=Manager.prototype.disconnect=function(){this.skipReconnect=true;this.readyState=&quot;closed&quot;;this.engine&amp;&amp;this.engine.close()};Manager.prototype.onclose=function(reason){debug(&quot;close&quot;);this.cleanup();this.readyState=&quot;closed&quot;;this.emit(&quot;close&quot;,reason);if(this._reconnection&amp;&amp;!this.skipReconnect){this.reconnect()}};Manager.prototype.reconnect=function(){if(this.reconnecting||this.skipReconnect)return this;var self=this;this.attempts++;if(this.attempts&gt;this._reconnectionAttempts){debug(&quot;reconnect failed&quot;);this.emitAll(&quot;reconnect_failed&quot;);this.reconnecting=false}else{var delay=this.attempts*this.reconnectionDelay();delay=Math.min(delay,this.reconnectionDelayMax());debug(&quot;will wait %dms before reconnect attempt&quot;,delay);this.reconnecting=true;var timer=setTimeout(function(){if(self.skipReconnect)return;debug(&quot;attempting reconnect&quot;);self.emitAll(&quot;reconnect_attempt&quot;,self.attempts);self.emitAll(&quot;reconnecting&quot;,self.attempts);if(self.skipReconnect)return;self.open(function(err){if(err){debug(&quot;reconnect attempt error&quot;);self.reconnecting=false;self.reconnect();self.emitAll(&quot;reconnect_error&quot;,err.data)}else{debug(&quot;reconnect success&quot;);self.onreconnect()}})},delay);this.subs.push({destroy:function(){clearTimeout(timer)}})}};Manager.prototype.onreconnect=function(){var attempt=this.attempts;this.attempts=0;this.reconnecting=false;this.emitAll(&quot;reconnect&quot;,attempt)}},{&quot;./on&quot;:4,&quot;./socket&quot;:5,&quot;./url&quot;:6,&quot;component-bind&quot;:7,&quot;component-emitter&quot;:8,debug:9,&quot;engine.io-client&quot;:10,indexof:36,&quot;object-component&quot;:37,&quot;socket.io-parser&quot;:40}],4:[function(_dereq_,module,exports){module.exports=on;function on(obj,ev,fn){obj.on(ev,fn);return{destroy:function(){obj.removeListener(ev,fn)}}}},{}],5:[function(_dereq_,module,exports){var parser=_dereq_(&quot;socket.io-parser&quot;);var Emitter=_dereq_(&quot;component-emitter&quot;);var toArray=_dereq_(&quot;to-array&quot;);var on=_dereq_(&quot;./on&quot;);var bind=_dereq_(&quot;component-bind&quot;);var debug=_dereq_(&quot;debug&quot;)(&quot;socket.io-client:socket&quot;);var hasBin=_dereq_(&quot;has-binary&quot;);module.exports=exports=Socket;var events={connect:1,connect_error:1,connect_timeout:1,disconnect:1,error:1,reconnect:1,reconnect_attempt:1,reconnect_failed:1,reconnect_error:1,reconnecting:1};var emit=Emitter.prototype.emit;function Socket(io,nsp){this.io=io;this.nsp=nsp;this.json=this;this.ids=0;this.acks={};if(this.io.autoConnect)this.open();this.receiveBuffer=[];this.sendBuffer=[];this.connected=false;this.disconnected=true}Emitter(Socket.prototype);Socket.prototype.subEvents=function(){if(this.subs)return;var io=this.io;this.subs=[on(io,&quot;open&quot;,bind(this,&quot;onopen&quot;)),on(io,&quot;packet&quot;,bind(this,&quot;onpacket&quot;)),on(io,&quot;close&quot;,bind(this,&quot;onclose&quot;))]};Socket.prototype.open=Socket.prototype.connect=function(){if(this.connected)return this;this.subEvents();this.io.open();if(&quot;open&quot;==this.io.readyState)this.onopen();return this};Socket.prototype.send=function(){var args=toArray(arguments);args.unshift(&quot;message&quot;);this.emit.apply(this,args);return this};Socket.prototype.emit=function(ev){if(events.hasOwnProperty(ev)){emit.apply(this,arguments);return this}var args=toArray(arguments);var parserType=parser.EVENT;if(hasBin(args)){parserType=parser.BINARY_EVENT}var packet={type:parserType,data:args};if(&quot;function&quot;==typeof args[args.length-1]){debug(&quot;emitting packet with ack id %d&quot;,this.ids);this.acks[this.ids]=args.pop();packet.id=this.ids++}if(this.connected){this.packet(packet)}else{this.sendBuffer.push(packet)}return this};Socket.prototype.packet=function(packet){packet.nsp=this.nsp;this.io.packet(packet)};Socket.prototype.onopen=function(){debug(&quot;transport is open - connecting&quot;);if(&quot;/&quot;!=this.nsp){this.packet({type:parser.CONNECT})}};Socket.prototype.onclose=function(reason){debug(&quot;close (%s)&quot;,reason);this.connected=false;this.disconnected=true;this.emit(&quot;disconnect&quot;,reason)};Socket.prototype.onpacket=function(packet){if(packet.nsp!=this.nsp)return;switch(packet.type){case parser.CONNECT:this.onconnect();break;case parser.EVENT:this.onevent(packet);break;case parser.BINARY_EVENT:this.onevent(packet);break;case parser.ACK:this.onack(packet);break;case parser.BINARY_ACK:this.onack(packet);break;case parser.DISCONNECT:this.ondisconnect();break;case parser.ERROR:this.emit(&quot;error&quot;,packet.data);break}};Socket.prototype.onevent=function(packet){var args=packet.data||[];debug(&quot;emitting event %j&quot;,args);if(null!=packet.id){debug(&quot;attaching ack callback to event&quot;);args.push(this.ack(packet.id))}if(this.connected){emit.apply(this,args)}else{this.receiveBuffer.push(args)}};Socket.prototype.ack=function(id){var self=this;var sent=false;return function(){if(sent)return;sent=true;var args=toArray(arguments);debug(&quot;sending ack %j&quot;,args);var type=hasBin(args)?parser.BINARY_ACK:parser.ACK;self.packet({type:type,id:id,data:args})}};Socket.prototype.onack=function(packet){debug(&quot;calling ack %s with %j&quot;,packet.id,packet.data);var fn=this.acks[packet.id];fn.apply(this,packet.data);delete this.acks[packet.id]};Socket.prototype.onconnect=function(){this.connected=true;this.disconnected=false;this.emit(&quot;connect&quot;);this.emitBuffered()};Socket.prototype.emitBuffered=function(){var i;for(i=0;i&lt;this.receiveBuffer.length;i++){emit.apply(this,this.receiveBuffer[i])}this.receiveBuffer=[];for(i=0;i&lt;this.sendBuffer.length;i++){this.packet(this.sendBuffer[i])}this.sendBuffer=[]};Socket.prototype.ondisconnect=function(){debug(&quot;server disconnect (%s)&quot;,this.nsp);this.destroy();this.onclose(&quot;io server disconnect&quot;)};Socket.prototype.destroy=function(){if(this.subs){for(var i=0;i&lt;this.subs.length;i++){this.subs[i].destroy()}this.subs=null}this.io.destroy(this)};Socket.prototype.close=Socket.prototype.disconnect=function(){if(this.connected){debug(&quot;performing disconnect (%s)&quot;,this.nsp);this.packet({type:parser.DISCONNECT})}this.destroy();if(this.connected){this.onclose(&quot;io client disconnect&quot;)}return this}},{&quot;./on&quot;:4,&quot;component-bind&quot;:7,&quot;component-emitter&quot;:8,debug:9,&quot;has-binary&quot;:32,&quot;socket.io-parser&quot;:40,&quot;to-array&quot;:44}],6:[function(_dereq_,module,exports){(function(global){var parseuri=_dereq_(&quot;parseuri&quot;);var debug=_dereq_(&quot;debug&quot;)(&quot;socket.io-client:url&quot;);module.exports=url;function url(uri,loc){var obj=uri;var loc=loc||global.location;if(null==uri)uri=loc.protocol+&quot;//&quot;+loc.hostname;if(&quot;string&quot;==typeof uri){if(&quot;/&quot;==uri.charAt(0)){if(&quot;/&quot;==uri.charAt(1)){uri=loc.protocol+uri}else{uri=loc.hostname+uri}}if(!/^(https?|wss?):\/\//.test(uri)){debug(&quot;protocol-less url %s&quot;,uri);if(&quot;undefined&quot;!=typeof loc){uri=loc.protocol+&quot;//&quot;+uri}else{uri=&quot;https://&quot;+uri}}debug(&quot;parse %s&quot;,uri);obj=parseuri(uri)}if(!obj.port){if(/^(http|ws)$/.test(obj.protocol)){obj.port=&quot;80&quot;}else if(/^(http|ws)s$/.test(obj.protocol)){obj.port=&quot;443&quot;}}obj.path=obj.path||&quot;/&quot;;obj.id=obj.protocol+&quot;://&quot;+obj.host+&quot;:&quot;+obj.port;obj.href=obj.protocol+&quot;://&quot;+obj.host+(loc&amp;&amp;loc.port==obj.port?&quot;&quot;:&quot;:&quot;+obj.port);return obj}}).call(this,typeof self!==&quot;undefined&quot;?self:typeof window!==&quot;undefined&quot;?window:{})},{debug:9,parseuri:38}],7:[function(_dereq_,module,exports){var slice=[].slice;module.exports=function(obj,fn){if(&quot;string&quot;==typeof fn)fn=obj[fn];if(&quot;function&quot;!=typeof fn)throw new Error(&quot;bind() requires a function&quot;);var args=slice.call(arguments,2);return function(){return fn.apply(obj,args.concat(slice.call(arguments)))}}},{}],8:[function(_dereq_,module,exports){module.exports=Emitter;function Emitter(obj){if(obj)return mixin(obj)}function mixin(obj){for(var key in Emitter.prototype){obj[key]=Emitter.prototype[key]}return obj}Emitter.prototype.on=Emitter.prototype.addEventListener=function(event,fn){this._callbacks=this._callbacks||{};(this._callbacks[event]=this._callbacks[event]||[]).push(fn);return this};Emitter.prototype.once=function(event,fn){var self=this;this._callbacks=this._callbacks||{};function on(){self.off(event,on);fn.apply(this,arguments)}on.fn=fn;this.on(event,on);return this};Emitter.prototype.off=Emitter.prototype.removeListener=Emitter.prototype.removeAllListeners=Emitter.prototype.removeEventListener=function(event,fn){this._callbacks=this._callbacks||{};if(0==arguments.length){this._callbacks={};return this}var callbacks=this._callbacks[event];if(!callbacks)return this;if(1==arguments.length){delete this._callbacks[event];return this}var cb;for(var i=0;i&lt;callbacks.length;i++){cb=callbacks[i];if(cb===fn||cb.fn===fn){callbacks.splice(i,1);break}}return this};Emitter.prototype.emit=function(event){this._callbacks=this._callbacks||{};var args=[].slice.call(arguments,1),callbacks=this._callbacks[event];if(callbacks){callbacks=callbacks.slice(0);for(var i=0,len=callbacks.length;i&lt;len;++i){callbacks[i].apply(this,args)}}return this};Emitter.prototype.listeners=function(event){this._callbacks=this._callbacks||{};return this._callbacks[event]||[]};Emitter.prototype.hasListeners=function(event){return!!this.listeners(event).length}},{}],9:[function(_dereq_,module,exports){module.exports=debug;function debug(name){if(!debug.enabled(name))return function(){};return function(fmt){fmt=coerce(fmt);var curr=new Date;var ms=curr-(debug[name]||curr);debug[name]=curr;fmt=name+&quot; &quot;+fmt+&quot; +&quot;+debug.humanize(ms);window.console&amp;&amp;console.log&amp;&amp;Function.prototype.apply.call(console.log,console,arguments)}}debug.names=[];debug.skips=[];debug.enable=function(name){try{localStorage.debug=name}catch(e){}var split=(name||&quot;&quot;).split(/[\s,]+/),len=split.length;for(var i=0;i&lt;len;i++){name=split[i].replace(&quot;*&quot;,&quot;.*?&quot;);if(name[0]===&quot;-&quot;){debug.skips.push(new RegExp(&quot;^&quot;+name.substr(1)+&quot;$&quot;))}else{debug.names.push(new RegExp(&quot;^&quot;+name+&quot;$&quot;))}}};debug.disable=function(){debug.enable(&quot;&quot;)};debug.humanize=function(ms){var sec=1e3,min=60*1e3,hour=60*min;if(ms&gt;=hour)return(ms/hour).toFixed(1)+&quot;h&quot;;if(ms&gt;=min)return(ms/min).toFixed(1)+&quot;m&quot;;if(ms&gt;=sec)return(ms/sec|0)+&quot;s&quot;;return ms+&quot;ms&quot;};debug.enabled=function(name){for(var i=0,len=debug.skips.length;i&lt;len;i++){if(debug.skips[i].test(name)){return false}}for(var i=0,len=debug.names.length;i&lt;len;i++){if(debug.names[i].test(name)){return true}}return false};function coerce(val){if(val instanceof Error)return val.stack||val.message;return val}try{if(window.localStorage)debug.enable(localStorage.debug)}catch(e){}},{}],10:[function(_dereq_,module,exports){module.exports=_dereq_(&quot;./lib/&quot;)},{&quot;./lib/&quot;:11}],11:[function(_dereq_,module,exports){module.exports=_dereq_(&quot;./socket&quot;);module.exports.parser=_dereq_(&quot;engine.io-parser&quot;)},{&quot;./socket&quot;:12,&quot;engine.io-parser&quot;:21}],12:[function(_dereq_,module,exports){(function(global){var transports=_dereq_(&quot;./transports&quot;);var Emitter=_dereq_(&quot;component-emitter&quot;);var debug=_dereq_(&quot;debug&quot;)(&quot;engine.io-client:socket&quot;);var index=_dereq_(&quot;indexof&quot;);var parser=_dereq_(&quot;engine.io-parser&quot;);var parseuri=_dereq_(&quot;parseuri&quot;);var parsejson=_dereq_(&quot;parsejson&quot;);var parseqs=_dereq_(&quot;parseqs&quot;);module.exports=Socket;function noop(){}function Socket(uri,opts){if(!(this instanceof Socket))return new Socket(uri,opts);opts=opts||{};if(uri&amp;&amp;&quot;object&quot;==typeof uri){opts=uri;uri=null}if(uri){uri=parseuri(uri);opts.host=uri.host;opts.secure=uri.protocol==&quot;https&quot;||uri.protocol==&quot;wss&quot;;opts.port=uri.port;if(uri.query)opts.query=uri.query}this.secure=null!=opts.secure?opts.secure:global.location&amp;&amp;&quot;https:&quot;==location.protocol;if(opts.host){var pieces=opts.host.split(&quot;:&quot;);opts.hostname=pieces.shift();if(pieces.length)opts.port=pieces.pop()}this.agent=opts.agent||false;this.hostname=opts.hostname||(global.location?location.hostname:&quot;localhost&quot;);this.port=opts.port||(global.location&amp;&amp;location.port?location.port:this.secure?443:80);this.query=opts.query||{};if(&quot;string&quot;==typeof this.query)this.query=parseqs.decode(this.query);this.upgrade=false!==opts.upgrade;this.path=(opts.path||&quot;/engine.io&quot;).replace(/\/$/,&quot;&quot;)+&quot;/&quot;;this.forceJSONP=!!opts.forceJSONP;this.jsonp=false!==opts.jsonp;this.forceBase64=!!opts.forceBase64;this.enablesXDR=!!opts.enablesXDR;this.timestampParam=opts.timestampParam||&quot;t&quot;;this.timestampRequests=opts.timestampRequests;this.transports=opts.transports||[&quot;polling&quot;,&quot;websocket&quot;];this.readyState=&quot;&quot;;this.writeBuffer=[];this.callbackBuffer=[];this.policyPort=opts.policyPort||843;this.rememberUpgrade=opts.rememberUpgrade||false;this.open();this.binaryType=null;this.onlyBinaryUpgrades=opts.onlyBinaryUpgrades}Socket.priorWebsocketSuccess=false;Emitter(Socket.prototype);Socket.protocol=parser.protocol;Socket.Socket=Socket;Socket.Transport=_dereq_(&quot;./transport&quot;);Socket.transports=_dereq_(&quot;./transports&quot;);Socket.parser=_dereq_(&quot;engine.io-parser&quot;);Socket.prototype.createTransport=function(name){debug(&#39;creating transport &quot;%s&quot;&#39;,name);var query=clone(this.query);query.EIO=parser.protocol;query.transport=name;if(this.id)query.sid=this.id;var transport=new transports[name]({agent:this.agent,hostname:this.hostname,port:this.port,secure:this.secure,path:this.path,query:query,forceJSONP:this.forceJSONP,jsonp:this.jsonp,forceBase64:this.forceBase64,enablesXDR:this.enablesXDR,timestampRequests:this.timestampRequests,timestampParam:this.timestampParam,policyPort:this.policyPort,socket:this});return transport};function clone(obj){var o={};for(var i in obj){if(obj.hasOwnProperty(i)){o[i]=obj[i]}}return o}Socket.prototype.open=function(){var transport;if(this.rememberUpgrade&amp;&amp;Socket.priorWebsocketSuccess&amp;&amp;this.transports.indexOf(&quot;websocket&quot;)!=-1){transport=&quot;websocket&quot;}else if(0==this.transports.length){var self=this;setTimeout(function(){self.emit(&quot;error&quot;,&quot;No transports available&quot;)},0);return}else{transport=this.transports[0]}this.readyState=&quot;opening&quot;;var transport;try{transport=this.createTransport(transport)}catch(e){this.transports.shift();this.open();return}transport.open();this.setTransport(transport)};Socket.prototype.setTransport=function(transport){debug(&quot;setting transport %s&quot;,transport.name);var self=this;if(this.transport){debug(&quot;clearing existing transport %s&quot;,this.transport.name);this.transport.removeAllListeners()}this.transport=transport;transport.on(&quot;drain&quot;,function(){self.onDrain()}).on(&quot;packet&quot;,function(packet){self.onPacket(packet)}).on(&quot;error&quot;,function(e){self.onError(e)}).on(&quot;close&quot;,function(){self.onClose(&quot;transport close&quot;)})};Socket.prototype.probe=function(name){debug(&#39;probing transport &quot;%s&quot;&#39;,name);var transport=this.createTransport(name,{probe:1}),failed=false,self=this;Socket.priorWebsocketSuccess=false;function onTransportOpen(){if(self.onlyBinaryUpgrades){var upgradeLosesBinary=!this.supportsBinary&amp;&amp;self.transport.supportsBinary;failed=failed||upgradeLosesBinary}if(failed)return;debug(&#39;probe transport &quot;%s&quot; opened&#39;,name);transport.send([{type:&quot;ping&quot;,data:&quot;probe&quot;}]);transport.once(&quot;packet&quot;,function(msg){if(failed)return;if(&quot;pong&quot;==msg.type&amp;&amp;&quot;probe&quot;==msg.data){debug(&#39;probe transport &quot;%s&quot; pong&#39;,name);self.upgrading=true;self.emit(&quot;upgrading&quot;,transport);if(!transport)return;Socket.priorWebsocketSuccess=&quot;websocket&quot;==transport.name;debug(&#39;pausing current transport &quot;%s&quot;&#39;,self.transport.name);self.transport.pause(function(){if(failed)return;if(&quot;closed&quot;==self.readyState)return;debug(&quot;changing transport and sending upgrade packet&quot;);cleanup();self.setTransport(transport);transport.send([{type:&quot;upgrade&quot;}]);self.emit(&quot;upgrade&quot;,transport);transport=null;self.upgrading=false;self.flush()})}else{debug(&#39;probe transport &quot;%s&quot; failed&#39;,name);var err=new Error(&quot;probe error&quot;);err.transport=transport.name;self.emit(&quot;upgradeError&quot;,err)}})}function freezeTransport(){if(failed)return;failed=true;cleanup();transport.close();transport=null}function onerror(err){var error=new Error(&quot;probe error: &quot;+err);error.transport=transport.name;freezeTransport();debug(&#39;probe transport &quot;%s&quot; failed because of error: %s&#39;,name,err);self.emit(&quot;upgradeError&quot;,error)}function onTransportClose(){onerror(&quot;transport closed&quot;)}function onclose(){onerror(&quot;socket closed&quot;)}function onupgrade(to){if(transport&amp;&amp;to.name!=transport.name){debug(&#39;&quot;%s&quot; works - aborting &quot;%s&quot;&#39;,to.name,transport.name);freezeTransport()}}function cleanup(){transport.removeListener(&quot;open&quot;,onTransportOpen);transport.removeListener(&quot;error&quot;,onerror);transport.removeListener(&quot;close&quot;,onTransportClose);self.removeListener(&quot;close&quot;,onclose);self.removeListener(&quot;upgrading&quot;,onupgrade)}transport.once(&quot;open&quot;,onTransportOpen);transport.once(&quot;error&quot;,onerror);transport.once(&quot;close&quot;,onTransportClose);this.once(&quot;close&quot;,onclose);this.once(&quot;upgrading&quot;,onupgrade);transport.open()};Socket.prototype.onOpen=function(){debug(&quot;socket open&quot;);this.readyState=&quot;open&quot;;Socket.priorWebsocketSuccess=&quot;websocket&quot;==this.transport.name;this.emit(&quot;open&quot;);this.flush();if(&quot;open&quot;==this.readyState&amp;&amp;this.upgrade&amp;&amp;this.transport.pause){debug(&quot;starting upgrade probes&quot;);for(var i=0,l=this.upgrades.length;i&lt;l;i++){this.probe(this.upgrades[i])}}};Socket.prototype.onPacket=function(packet){if(&quot;opening&quot;==this.readyState||&quot;open&quot;==this.readyState){debug(&#39;socket receive: type &quot;%s&quot;, data &quot;%s&quot;&#39;,packet.type,packet.data);this.emit(&quot;packet&quot;,packet);this.emit(&quot;heartbeat&quot;);switch(packet.type){case&quot;open&quot;:this.onHandshake(parsejson(packet.data));break;case&quot;pong&quot;:this.setPing();break;case&quot;error&quot;:var err=new Error(&quot;server error&quot;);err.code=packet.data;this.emit(&quot;error&quot;,err);break;case&quot;message&quot;:this.emit(&quot;data&quot;,packet.data);this.emit(&quot;message&quot;,packet.data);break}}else{debug(&#39;packet received with socket readyState &quot;%s&quot;&#39;,this.readyState)}};Socket.prototype.onHandshake=function(data){this.emit(&quot;handshake&quot;,data);this.id=data.sid;this.transport.query.sid=data.sid;this.upgrades=this.filterUpgrades(data.upgrades);this.pingInterval=data.pingInterval;this.pingTimeout=data.pingTimeout;this.onOpen();if(&quot;closed&quot;==this.readyState)return;this.setPing();this.removeListener(&quot;heartbeat&quot;,this.onHeartbeat);this.on(&quot;heartbeat&quot;,this.onHeartbeat)};Socket.prototype.onHeartbeat=function(timeout){clearTimeout(this.pingTimeoutTimer);var self=this;self.pingTimeoutTimer=setTimeout(function(){if(&quot;closed&quot;==self.readyState)return;self.onClose(&quot;ping timeout&quot;)},timeout||self.pingInterval+self.pingTimeout)};Socket.prototype.setPing=function(){var self=this;clearTimeout(self.pingIntervalTimer);self.pingIntervalTimer=setTimeout(function(){debug(&quot;writing ping packet - expecting pong within %sms&quot;,self.pingTimeout);self.ping();self.onHeartbeat(self.pingTimeout)},self.pingInterval)};Socket.prototype.ping=function(){this.sendPacket(&quot;ping&quot;)};Socket.prototype.onDrain=function(){for(var i=0;i&lt;this.prevBufferLen;i++){if(this.callbackBuffer[i]){this.callbackBuffer[i]()}}this.writeBuffer.splice(0,this.prevBufferLen);this.callbackBuffer.splice(0,this.prevBufferLen);this.prevBufferLen=0;if(this.writeBuffer.length==0){this.emit(&quot;drain&quot;)}else{this.flush()}};Socket.prototype.flush=function(){if(&quot;closed&quot;!=this.readyState&amp;&amp;this.transport.writable&amp;&amp;!this.upgrading&amp;&amp;this.writeBuffer.length){debug(&quot;flushing %d packets in socket&quot;,this.writeBuffer.length);this.transport.send(this.writeBuffer);this.prevBufferLen=this.writeBuffer.length;this.emit(&quot;flush&quot;)}};Socket.prototype.write=Socket.prototype.send=function(msg,fn){this.sendPacket(&quot;message&quot;,msg,fn);return this};Socket.prototype.sendPacket=function(type,data,fn){if(&quot;closing&quot;==this.readyState||&quot;closed&quot;==this.readyState){return}var packet={type:type,data:data};this.emit(&quot;packetCreate&quot;,packet);this.writeBuffer.push(packet);this.callbackBuffer.push(fn);this.flush()};Socket.prototype.close=function(){if(&quot;opening&quot;==this.readyState||&quot;open&quot;==this.readyState){this.readyState=&quot;closing&quot;;var self=this;function close(){self.onClose(&quot;forced close&quot;);debug(&quot;socket closing - telling transport to close&quot;);self.transport.close()}function cleanupAndClose(){self.removeListener(&quot;upgrade&quot;,cleanupAndClose);self.removeListener(&quot;upgradeError&quot;,cleanupAndClose);close()}function waitForUpgrade(){self.once(&quot;upgrade&quot;,cleanupAndClose);self.once(&quot;upgradeError&quot;,cleanupAndClose)}if(this.writeBuffer.length){this.once(&quot;drain&quot;,function(){if(this.upgrading){waitForUpgrade()}else{close()}})}else if(this.upgrading){waitForUpgrade()}else{close()}}return this};Socket.prototype.onError=function(err){debug(&quot;socket error %j&quot;,err);Socket.priorWebsocketSuccess=false;this.emit(&quot;error&quot;,err);this.onClose(&quot;transport error&quot;,err)};Socket.prototype.onClose=function(reason,desc){if(&quot;opening&quot;==this.readyState||&quot;open&quot;==this.readyState||&quot;closing&quot;==this.readyState){debug(&#39;socket close with reason: &quot;%s&quot;&#39;,reason);var self=this;clearTimeout(this.pingIntervalTimer);clearTimeout(this.pingTimeoutTimer);setTimeout(function(){self.writeBuffer=[];self.callbackBuffer=[];self.prevBufferLen=0},0);this.transport.removeAllListeners(&quot;close&quot;);this.transport.close();this.transport.removeAllListeners();this.readyState=&quot;closed&quot;;this.id=null;this.emit(&quot;close&quot;,reason,desc)}};Socket.prototype.filterUpgrades=function(upgrades){var filteredUpgrades=[];for(var i=0,j=upgrades.length;i&lt;j;i++){if(~index(this.transports,upgrades[i]))filteredUpgrades.push(upgrades[i])}return filteredUpgrades}}).call(this,typeof self!==&quot;undefined&quot;?self:typeof window!==&quot;undefined&quot;?window:{})},{&quot;./transport&quot;:13,&quot;./transports&quot;:14,&quot;component-emitter&quot;:8,debug:9,&quot;engine.io-parser&quot;:21,indexof:36,parsejson:28,parseqs:29,parseuri:30}],13:[function(_dereq_,module,exports){var parser=_dereq_(&quot;engine.io-parser&quot;);var Emitter=_dereq_(&quot;component-emitter&quot;);module.exports=Transport;function Transport(opts){this.path=opts.path;this.hostname=opts.hostname;this.port=opts.port;this.secure=opts.secure;this.query=opts.query;this.timestampParam=opts.timestampParam;this.timestampRequests=opts.timestampRequests;this.readyState=&quot;&quot;;this.agent=opts.agent||false;this.socket=opts.socket;this.enablesXDR=opts.enablesXDR}Emitter(Transport.prototype);Transport.timestamps=0;Transport.prototype.onError=function(msg,desc){var err=new Error(msg);err.type=&quot;TransportError&quot;;err.description=desc;this.emit(&quot;error&quot;,err);return this};Transport.prototype.open=function(){if(&quot;closed&quot;==this.readyState||&quot;&quot;==this.readyState){this.readyState=&quot;opening&quot;;this.doOpen()}return this};Transport.prototype.close=function(){if(&quot;opening&quot;==this.readyState||&quot;open&quot;==this.readyState){this.doClose();this.onClose()}return this};Transport.prototype.send=function(packets){if(&quot;open&quot;==this.readyState){this.write(packets)}else{throw new Error(&quot;Transport not open&quot;)}};Transport.prototype.onOpen=function(){this.readyState=&quot;open&quot;;this.writable=true;this.emit(&quot;open&quot;)};Transport.prototype.onData=function(data){var packet=parser.decodePacket(data,this.socket.binaryType);this.onPacket(packet)};Transport.prototype.onPacket=function(packet){this.emit(&quot;packet&quot;,packet)};Transport.prototype.onClose=function(){this.readyState=&quot;closed&quot;;this.emit(&quot;close&quot;)}},{&quot;component-emitter&quot;:8,&quot;engine.io-parser&quot;:21}],14:[function(_dereq_,module,exports){(function(global){var XMLHttpRequest=_dereq_(&quot;xmlhttprequest&quot;);var XHR=_dereq_(&quot;./polling-xhr&quot;);var JSONP=_dereq_(&quot;./polling-jsonp&quot;);var websocket=_dereq_(&quot;./websocket&quot;);exports.polling=polling;exports.websocket=websocket;function polling(opts){var xhr;var xd=false;var xs=false;var jsonp=false!==opts.jsonp;if(global.location){var isSSL=&quot;https:&quot;==location.protocol;var port=location.port;if(!port){port=isSSL?443:80}xd=opts.hostname!=location.hostname||port!=opts.port;xs=opts.secure!=isSSL}opts.xdomain=xd;opts.xscheme=xs;xhr=new XMLHttpRequest(opts);if(&quot;open&quot;in xhr&amp;&amp;!opts.forceJSONP){return new XHR(opts)}else{if(!jsonp)throw new Error(&quot;JSONP disabled&quot;);return new JSONP(opts)}}}).call(this,typeof self!==&quot;undefined&quot;?self:typeof window!==&quot;undefined&quot;?window:{})},{&quot;./polling-jsonp&quot;:15,&quot;./polling-xhr&quot;:16,&quot;./websocket&quot;:18,xmlhttprequest:19}],15:[function(_dereq_,module,exports){(function(global){var Polling=_dereq_(&quot;./polling&quot;);var inherit=_dereq_(&quot;component-inherit&quot;);module.exports=JSONPPolling;var rNewline=/\n/g;var rEscapedNewline=/\\n/g;var callbacks;var index=0;function empty(){}function JSONPPolling(opts){Polling.call(this,opts);this.query=this.query||{};if(!callbacks){if(!global.___eio)global.___eio=[];callbacks=global.___eio}this.index=callbacks.length;var self=this;callbacks.push(function(msg){self.onData(msg)});this.query.j=this.index;if(global.document&amp;&amp;global.addEventListener){global.addEventListener(&quot;beforeunload&quot;,function(){if(self.script)self.script.onerror=empty})}}inherit(JSONPPolling,Polling);JSONPPolling.prototype.supportsBinary=false;JSONPPolling.prototype.doClose=function(){if(this.script){this.script.parentNode.removeChild(this.script);this.script=null}if(this.form){this.form.parentNode.removeChild(this.form);this.form=null;this.iframe=null}Polling.prototype.doClose.call(this)};JSONPPolling.prototype.doPoll=function(){var self=this;var script=document.createElement(&quot;script&quot;);if(this.script){this.script.parentNode.removeChild(this.script);this.script=null}script.async=true;script.src=this.uri();script.onerror=function(e){self.onError(&quot;jsonp poll error&quot;,e)};var insertAt=document.getElementsByTagName(&quot;script&quot;)[0];insertAt.parentNode.insertBefore(script,insertAt);this.script=script;var isUAgecko=&quot;undefined&quot;!=typeof navigator&amp;&amp;/gecko/i.test(navigator.userAgent);if(isUAgecko){setTimeout(function(){var iframe=document.createElement(&quot;iframe&quot;);document.body.appendChild(iframe);document.body.removeChild(iframe)},100)}};JSONPPolling.prototype.doWrite=function(data,fn){var self=this;if(!this.form){var form=document.createElement(&quot;form&quot;);var area=document.createElement(&quot;textarea&quot;);var id=this.iframeId=&quot;eio_iframe_&quot;+this.index;var iframe;form.className=&quot;socketio&quot;;form.style.position=&quot;absolute&quot;;form.style.top=&quot;-1000px&quot;;form.style.left=&quot;-1000px&quot;;form.target=id;form.method=&quot;POST&quot;;form.setAttribute(&quot;accept-charset&quot;,&quot;utf-8&quot;);area.name=&quot;d&quot;;form.appendChild(area);document.body.appendChild(form);this.form=form;this.area=area}this.form.action=this.uri();function complete(){initIframe();fn()}function initIframe(){if(self.iframe){try{self.form.removeChild(self.iframe)</td>
      </tr>
      <tr>
        <td id="L2" class="blob-num js-line-number" data-line-number="2"></td>
        <td id="LC2" class="blob-code blob-code-inner js-file-line">}catch(e){self.onError(&quot;jsonp polling iframe removal error&quot;,e)}}try{var html=&#39;&lt;iframe src=&quot;javascript:0&quot; name=&quot;&#39;+self.iframeId+&#39;&quot;&gt;&#39;;iframe=document.createElement(html)}catch(e){iframe=document.createElement(&quot;iframe&quot;);iframe.name=self.iframeId;iframe.src=&quot;javascript:0&quot;}iframe.id=self.iframeId;self.form.appendChild(iframe);self.iframe=iframe}initIframe();data=data.replace(rEscapedNewline,&quot;\\\n&quot;);this.area.value=data.replace(rNewline,&quot;\\n&quot;);try{this.form.submit()}catch(e){}if(this.iframe.attachEvent){this.iframe.onreadystatechange=function(){if(self.iframe.readyState==&quot;complete&quot;){complete()}}}else{this.iframe.onload=complete}}}).call(this,typeof self!==&quot;undefined&quot;?self:typeof window!==&quot;undefined&quot;?window:{})},{&quot;./polling&quot;:17,&quot;component-inherit&quot;:20}],16:[function(_dereq_,module,exports){(function(global){var XMLHttpRequest=_dereq_(&quot;xmlhttprequest&quot;);var Polling=_dereq_(&quot;./polling&quot;);var Emitter=_dereq_(&quot;component-emitter&quot;);var inherit=_dereq_(&quot;component-inherit&quot;);var debug=_dereq_(&quot;debug&quot;)(&quot;engine.io-client:polling-xhr&quot;);module.exports=XHR;module.exports.Request=Request;function empty(){}function XHR(opts){Polling.call(this,opts);if(global.location){var isSSL=&quot;https:&quot;==location.protocol;var port=location.port;if(!port){port=isSSL?443:80}this.xd=opts.hostname!=global.location.hostname||port!=opts.port;this.xs=opts.secure!=isSSL}}inherit(XHR,Polling);XHR.prototype.supportsBinary=true;XHR.prototype.request=function(opts){opts=opts||{};opts.uri=this.uri();opts.xd=this.xd;opts.xs=this.xs;opts.agent=this.agent||false;opts.supportsBinary=this.supportsBinary;opts.enablesXDR=this.enablesXDR;return new Request(opts)};XHR.prototype.doWrite=function(data,fn){var isBinary=typeof data!==&quot;string&quot;&amp;&amp;data!==undefined;var req=this.request({method:&quot;POST&quot;,data:data,isBinary:isBinary});var self=this;req.on(&quot;success&quot;,fn);req.on(&quot;error&quot;,function(err){self.onError(&quot;xhr post error&quot;,err)});this.sendXhr=req};XHR.prototype.doPoll=function(){debug(&quot;xhr poll&quot;);var req=this.request();var self=this;req.on(&quot;data&quot;,function(data){self.onData(data)});req.on(&quot;error&quot;,function(err){self.onError(&quot;xhr poll error&quot;,err)});this.pollXhr=req};function Request(opts){this.method=opts.method||&quot;GET&quot;;this.uri=opts.uri;this.xd=!!opts.xd;this.xs=!!opts.xs;this.async=false!==opts.async;this.data=undefined!=opts.data?opts.data:null;this.agent=opts.agent;this.isBinary=opts.isBinary;this.supportsBinary=opts.supportsBinary;this.enablesXDR=opts.enablesXDR;this.create()}Emitter(Request.prototype);Request.prototype.create=function(){var xhr=this.xhr=new XMLHttpRequest({agent:this.agent,xdomain:this.xd,xscheme:this.xs,enablesXDR:this.enablesXDR});var self=this;try{debug(&quot;xhr open %s: %s&quot;,this.method,this.uri);xhr.open(this.method,this.uri,this.async);if(this.supportsBinary){xhr.responseType=&quot;arraybuffer&quot;}if(&quot;POST&quot;==this.method){try{if(this.isBinary){xhr.setRequestHeader(&quot;Content-type&quot;,&quot;application/octet-stream&quot;)}else{xhr.setRequestHeader(&quot;Content-type&quot;,&quot;text/plain;charset=UTF-8&quot;)}}catch(e){}}if(&quot;withCredentials&quot;in xhr){xhr.withCredentials=true}if(this.hasXDR()){xhr.onload=function(){self.onLoad()};xhr.onerror=function(){self.onError(xhr.responseText)}}else{xhr.onreadystatechange=function(){if(4!=xhr.readyState)return;if(200==xhr.status||1223==xhr.status){self.onLoad()}else{setTimeout(function(){self.onError(xhr.status)},0)}}}debug(&quot;xhr data %s&quot;,this.data);xhr.send(this.data)}catch(e){setTimeout(function(){self.onError(e)},0);return}if(global.document){this.index=Request.requestsCount++;Request.requests[this.index]=this}};Request.prototype.onSuccess=function(){this.emit(&quot;success&quot;);this.cleanup()};Request.prototype.onData=function(data){this.emit(&quot;data&quot;,data);this.onSuccess()};Request.prototype.onError=function(err){this.emit(&quot;error&quot;,err);this.cleanup()};Request.prototype.cleanup=function(){if(&quot;undefined&quot;==typeof this.xhr||null===this.xhr){return}if(this.hasXDR()){this.xhr.onload=this.xhr.onerror=empty}else{this.xhr.onreadystatechange=empty}try{this.xhr.abort()}catch(e){}if(global.document){delete Request.requests[this.index]}this.xhr=null};Request.prototype.onLoad=function(){var data;try{var contentType;try{contentType=this.xhr.getResponseHeader(&quot;Content-Type&quot;).split(&quot;;&quot;)[0]}catch(e){}if(contentType===&quot;application/octet-stream&quot;){data=this.xhr.response}else{if(!this.supportsBinary){data=this.xhr.responseText}else{data=&quot;ok&quot;}}}catch(e){this.onError(e)}if(null!=data){this.onData(data)}};Request.prototype.hasXDR=function(){return&quot;undefined&quot;!==typeof global.XDomainRequest&amp;&amp;!this.xs&amp;&amp;this.enablesXDR};Request.prototype.abort=function(){this.cleanup()};if(global.document){Request.requestsCount=0;Request.requests={};if(global.attachEvent){global.attachEvent(&quot;onunload&quot;,unloadHandler)}else if(global.addEventListener){global.addEventListener(&quot;beforeunload&quot;,unloadHandler)}}function unloadHandler(){for(var i in Request.requests){if(Request.requests.hasOwnProperty(i)){Request.requests[i].abort()}}}}).call(this,typeof self!==&quot;undefined&quot;?self:typeof window!==&quot;undefined&quot;?window:{})},{&quot;./polling&quot;:17,&quot;component-emitter&quot;:8,&quot;component-inherit&quot;:20,debug:9,xmlhttprequest:19}],17:[function(_dereq_,module,exports){var Transport=_dereq_(&quot;../transport&quot;);var parseqs=_dereq_(&quot;parseqs&quot;);var parser=_dereq_(&quot;engine.io-parser&quot;);var inherit=_dereq_(&quot;component-inherit&quot;);var debug=_dereq_(&quot;debug&quot;)(&quot;engine.io-client:polling&quot;);module.exports=Polling;var hasXHR2=function(){var XMLHttpRequest=_dereq_(&quot;xmlhttprequest&quot;);var xhr=new XMLHttpRequest({xdomain:false});return null!=xhr.responseType}();function Polling(opts){var forceBase64=opts&amp;&amp;opts.forceBase64;if(!hasXHR2||forceBase64){this.supportsBinary=false}Transport.call(this,opts)}inherit(Polling,Transport);Polling.prototype.name=&quot;polling&quot;;Polling.prototype.doOpen=function(){this.poll()};Polling.prototype.pause=function(onPause){var pending=0;var self=this;this.readyState=&quot;pausing&quot;;function pause(){debug(&quot;paused&quot;);self.readyState=&quot;paused&quot;;onPause()}if(this.polling||!this.writable){var total=0;if(this.polling){debug(&quot;we are currently polling - waiting to pause&quot;);total++;this.once(&quot;pollComplete&quot;,function(){debug(&quot;pre-pause polling complete&quot;);--total||pause()})}if(!this.writable){debug(&quot;we are currently writing - waiting to pause&quot;);total++;this.once(&quot;drain&quot;,function(){debug(&quot;pre-pause writing complete&quot;);--total||pause()})}}else{pause()}};Polling.prototype.poll=function(){debug(&quot;polling&quot;);this.polling=true;this.doPoll();this.emit(&quot;poll&quot;)};Polling.prototype.onData=function(data){var self=this;debug(&quot;polling got data %s&quot;,data);var callback=function(packet,index,total){if(&quot;opening&quot;==self.readyState){self.onOpen()}if(&quot;close&quot;==packet.type){self.onClose();return false}self.onPacket(packet)};parser.decodePayload(data,this.socket.binaryType,callback);if(&quot;closed&quot;!=this.readyState){this.polling=false;this.emit(&quot;pollComplete&quot;);if(&quot;open&quot;==this.readyState){this.poll()}else{debug(&#39;ignoring poll - transport state &quot;%s&quot;&#39;,this.readyState)}}};Polling.prototype.doClose=function(){var self=this;function close(){debug(&quot;writing close packet&quot;);self.write([{type:&quot;close&quot;}])}if(&quot;open&quot;==this.readyState){debug(&quot;transport open - closing&quot;);close()}else{debug(&quot;transport not open - deferring close&quot;);this.once(&quot;open&quot;,close)}};Polling.prototype.write=function(packets){var self=this;this.writable=false;var callbackfn=function(){self.writable=true;self.emit(&quot;drain&quot;)};var self=this;parser.encodePayload(packets,this.supportsBinary,function(data){self.doWrite(data,callbackfn)})};Polling.prototype.uri=function(){var query=this.query||{};var schema=this.secure?&quot;https&quot;:&quot;http&quot;;var port=&quot;&quot;;if(false!==this.timestampRequests){query[this.timestampParam]=+new Date+&quot;-&quot;+Transport.timestamps++}if(!this.supportsBinary&amp;&amp;!query.sid){query.b64=1}query=parseqs.encode(query);if(this.port&amp;&amp;(&quot;https&quot;==schema&amp;&amp;this.port!=443||&quot;http&quot;==schema&amp;&amp;this.port!=80)){port=&quot;:&quot;+this.port}if(query.length){query=&quot;?&quot;+query}return schema+&quot;://&quot;+this.hostname+port+this.path+query}},{&quot;../transport&quot;:13,&quot;component-inherit&quot;:20,debug:9,&quot;engine.io-parser&quot;:21,parseqs:29,xmlhttprequest:19}],18:[function(_dereq_,module,exports){var Transport=_dereq_(&quot;../transport&quot;);var parser=_dereq_(&quot;engine.io-parser&quot;);var parseqs=_dereq_(&quot;parseqs&quot;);var inherit=_dereq_(&quot;component-inherit&quot;);var debug=_dereq_(&quot;debug&quot;)(&quot;engine.io-client:websocket&quot;);var WebSocket=_dereq_(&quot;ws&quot;);module.exports=WS;function WS(opts){var forceBase64=opts&amp;&amp;opts.forceBase64;if(forceBase64){this.supportsBinary=false}Transport.call(this,opts)}inherit(WS,Transport);WS.prototype.name=&quot;websocket&quot;;WS.prototype.supportsBinary=true;WS.prototype.doOpen=function(){if(!this.check()){return}var self=this;var uri=this.uri();var protocols=void 0;var opts={agent:this.agent};this.ws=new WebSocket(uri,protocols,opts);if(this.ws.binaryType===undefined){this.supportsBinary=false}this.ws.binaryType=&quot;arraybuffer&quot;;this.addEventListeners()};WS.prototype.addEventListeners=function(){var self=this;this.ws.onopen=function(){self.onOpen()};this.ws.onclose=function(){self.onClose()};this.ws.onmessage=function(ev){self.onData(ev.data)};this.ws.onerror=function(e){self.onError(&quot;websocket error&quot;,e)}};if(&quot;undefined&quot;!=typeof navigator&amp;&amp;/iPad|iPhone|iPod/i.test(navigator.userAgent)){WS.prototype.onData=function(data){var self=this;setTimeout(function(){Transport.prototype.onData.call(self,data)},0)}}WS.prototype.write=function(packets){var self=this;this.writable=false;for(var i=0,l=packets.length;i&lt;l;i++){parser.encodePacket(packets[i],this.supportsBinary,function(data){try{self.ws.send(data)}catch(e){debug(&quot;websocket closed before onclose event&quot;)}})}function ondrain(){self.writable=true;self.emit(&quot;drain&quot;)}setTimeout(ondrain,0)};WS.prototype.onClose=function(){Transport.prototype.onClose.call(this)};WS.prototype.doClose=function(){if(typeof this.ws!==&quot;undefined&quot;){this.ws.close()}};WS.prototype.uri=function(){var query=this.query||{};var schema=this.secure?&quot;wss&quot;:&quot;ws&quot;;var port=&quot;&quot;;if(this.port&amp;&amp;(&quot;wss&quot;==schema&amp;&amp;this.port!=443||&quot;ws&quot;==schema&amp;&amp;this.port!=80)){port=&quot;:&quot;+this.port}if(this.timestampRequests){query[this.timestampParam]=+new Date}if(!this.supportsBinary){query.b64=1}query=parseqs.encode(query);if(query.length){query=&quot;?&quot;+query}return schema+&quot;://&quot;+this.hostname+port+this.path+query};WS.prototype.check=function(){return!!WebSocket&amp;&amp;!(&quot;__initialize&quot;in WebSocket&amp;&amp;this.name===WS.prototype.name)}},{&quot;../transport&quot;:13,&quot;component-inherit&quot;:20,debug:9,&quot;engine.io-parser&quot;:21,parseqs:29,ws:31}],19:[function(_dereq_,module,exports){var hasCORS=_dereq_(&quot;has-cors&quot;);module.exports=function(opts){var xdomain=opts.xdomain;var xscheme=opts.xscheme;var enablesXDR=opts.enablesXDR;try{if(&quot;undefined&quot;!=typeof XMLHttpRequest&amp;&amp;(!xdomain||hasCORS)){return new XMLHttpRequest}}catch(e){}try{if(&quot;undefined&quot;!=typeof XDomainRequest&amp;&amp;!xscheme&amp;&amp;enablesXDR){return new XDomainRequest}}catch(e){}if(!xdomain){try{return new ActiveXObject(&quot;Microsoft.XMLHTTP&quot;)}catch(e){}}}},{&quot;has-cors&quot;:34}],20:[function(_dereq_,module,exports){module.exports=function(a,b){var fn=function(){};fn.prototype=b.prototype;a.prototype=new fn;a.prototype.constructor=a}},{}],21:[function(_dereq_,module,exports){(function(global){var keys=_dereq_(&quot;./keys&quot;);var sliceBuffer=_dereq_(&quot;arraybuffer.slice&quot;);var base64encoder=_dereq_(&quot;base64-arraybuffer&quot;);var after=_dereq_(&quot;after&quot;);var utf8=_dereq_(&quot;utf8&quot;);var isAndroid=navigator.userAgent.match(/Android/i);exports.protocol=3;var packets=exports.packets={open:0,close:1,ping:2,pong:3,message:4,upgrade:5,noop:6};var packetslist=keys(packets);var err={type:&quot;error&quot;,data:&quot;parser error&quot;};var Blob=_dereq_(&quot;blob&quot;);exports.encodePacket=function(packet,supportsBinary,utf8encode,callback){if(&quot;function&quot;==typeof supportsBinary){callback=supportsBinary;supportsBinary=false}if(&quot;function&quot;==typeof utf8encode){callback=utf8encode;utf8encode=null}var data=packet.data===undefined?undefined:packet.data.buffer||packet.data;if(global.ArrayBuffer&amp;&amp;data instanceof ArrayBuffer){return encodeArrayBuffer(packet,supportsBinary,callback)}else if(Blob&amp;&amp;data instanceof global.Blob){return encodeBlob(packet,supportsBinary,callback)}var encoded=packets[packet.type];if(undefined!==packet.data){encoded+=utf8encode?utf8.encode(String(packet.data)):String(packet.data)}return callback(&quot;&quot;+encoded)};function encodeArrayBuffer(packet,supportsBinary,callback){if(!supportsBinary){return exports.encodeBase64Packet(packet,callback)}var data=packet.data;var contentArray=new Uint8Array(data);var resultBuffer=new Uint8Array(1+data.byteLength);resultBuffer[0]=packets[packet.type];for(var i=0;i&lt;contentArray.length;i++){resultBuffer[i+1]=contentArray[i]}return callback(resultBuffer.buffer)}function encodeBlobAsArrayBuffer(packet,supportsBinary,callback){if(!supportsBinary){return exports.encodeBase64Packet(packet,callback)}var fr=new FileReader;fr.onload=function(){packet.data=fr.result;exports.encodePacket(packet,supportsBinary,true,callback)};return fr.readAsArrayBuffer(packet.data)}function encodeBlob(packet,supportsBinary,callback){if(!supportsBinary){return exports.encodeBase64Packet(packet,callback)}if(isAndroid){return encodeBlobAsArrayBuffer(packet,supportsBinary,callback)}var length=new Uint8Array(1);length[0]=packets[packet.type];var blob=new Blob([length.buffer,packet.data]);return callback(blob)}exports.encodeBase64Packet=function(packet,callback){var message=&quot;b&quot;+exports.packets[packet.type];if(Blob&amp;&amp;packet.data instanceof Blob){var fr=new FileReader;fr.onload=function(){var b64=fr.result.split(&quot;,&quot;)[1];callback(message+b64)};return fr.readAsDataURL(packet.data)}var b64data;try{b64data=String.fromCharCode.apply(null,new Uint8Array(packet.data))}catch(e){var typed=new Uint8Array(packet.data);var basic=new Array(typed.length);for(var i=0;i&lt;typed.length;i++){basic[i]=typed[i]}b64data=String.fromCharCode.apply(null,basic)}message+=global.btoa(b64data);return callback(message)};exports.decodePacket=function(data,binaryType,utf8decode){if(typeof data==&quot;string&quot;||data===undefined){if(data.charAt(0)==&quot;b&quot;){return exports.decodeBase64Packet(data.substr(1),binaryType)}if(utf8decode){try{data=utf8.decode(data)}catch(e){return err}}var type=data.charAt(0);if(Number(type)!=type||!packetslist[type]){return err}if(data.length&gt;1){return{type:packetslist[type],data:data.substring(1)}}else{return{type:packetslist[type]}}}var asArray=new Uint8Array(data);var type=asArray[0];var rest=sliceBuffer(data,1);if(Blob&amp;&amp;binaryType===&quot;blob&quot;){rest=new Blob([rest])}return{type:packetslist[type],data:rest}};exports.decodeBase64Packet=function(msg,binaryType){var type=packetslist[msg.charAt(0)];if(!global.ArrayBuffer){return{type:type,data:{base64:true,data:msg.substr(1)}}}var data=base64encoder.decode(msg.substr(1));if(binaryType===&quot;blob&quot;&amp;&amp;Blob){data=new Blob([data])}return{type:type,data:data}};exports.encodePayload=function(packets,supportsBinary,callback){if(typeof supportsBinary==&quot;function&quot;){callback=supportsBinary;supportsBinary=null}if(supportsBinary){if(Blob&amp;&amp;!isAndroid){return exports.encodePayloadAsBlob(packets,callback)}return exports.encodePayloadAsArrayBuffer(packets,callback)}if(!packets.length){return callback(&quot;0:&quot;)}function setLengthHeader(message){return message.length+&quot;:&quot;+message}function encodeOne(packet,doneCallback){exports.encodePacket(packet,supportsBinary,true,function(message){doneCallback(null,setLengthHeader(message))})}map(packets,encodeOne,function(err,results){return callback(results.join(&quot;&quot;))})};function map(ary,each,done){var result=new Array(ary.length);var next=after(ary.length,done);var eachWithIndex=function(i,el,cb){each(el,function(error,msg){result[i]=msg;cb(error,result)})};for(var i=0;i&lt;ary.length;i++){eachWithIndex(i,ary[i],next)}}exports.decodePayload=function(data,binaryType,callback){if(typeof data!=&quot;string&quot;){return exports.decodePayloadAsBinary(data,binaryType,callback)}if(typeof binaryType===&quot;function&quot;){callback=binaryType;binaryType=null}var packet;if(data==&quot;&quot;){return callback(err,0,1)}var length=&quot;&quot;,n,msg;for(var i=0,l=data.length;i&lt;l;i++){var chr=data.charAt(i);if(&quot;:&quot;!=chr){length+=chr}else{if(&quot;&quot;==length||length!=(n=Number(length))){return callback(err,0,1)}msg=data.substr(i+1,n);if(length!=msg.length){return callback(err,0,1)}if(msg.length){packet=exports.decodePacket(msg,binaryType,true);if(err.type==packet.type&amp;&amp;err.data==packet.data){return callback(err,0,1)}var ret=callback(packet,i+n,l);if(false===ret)return}i+=n;length=&quot;&quot;}}if(length!=&quot;&quot;){return callback(err,0,1)}};exports.encodePayloadAsArrayBuffer=function(packets,callback){if(!packets.length){return callback(new ArrayBuffer(0))}function encodeOne(packet,doneCallback){exports.encodePacket(packet,true,true,function(data){return doneCallback(null,data)})}map(packets,encodeOne,function(err,encodedPackets){var totalLength=encodedPackets.reduce(function(acc,p){var len;if(typeof p===&quot;string&quot;){len=p.length}else{len=p.byteLength}return acc+len.toString().length+len+2},0);var resultArray=new Uint8Array(totalLength);var bufferIndex=0;encodedPackets.forEach(function(p){var isString=typeof p===&quot;string&quot;;var ab=p;if(isString){var view=new Uint8Array(p.length);for(var i=0;i&lt;p.length;i++){view[i]=p.charCodeAt(i)}ab=view.buffer}if(isString){resultArray[bufferIndex++]=0}else{resultArray[bufferIndex++]=1}var lenStr=ab.byteLength.toString();for(var i=0;i&lt;lenStr.length;i++){resultArray[bufferIndex++]=parseInt(lenStr[i])}resultArray[bufferIndex++]=255;var view=new Uint8Array(ab);for(var i=0;i&lt;view.length;i++){resultArray[bufferIndex++]=view[i]}});return callback(resultArray.buffer)})};exports.encodePayloadAsBlob=function(packets,callback){function encodeOne(packet,doneCallback){exports.encodePacket(packet,true,true,function(encoded){var binaryIdentifier=new Uint8Array(1);binaryIdentifier[0]=1;if(typeof encoded===&quot;string&quot;){var view=new Uint8Array(encoded.length);for(var i=0;i&lt;encoded.length;i++){view[i]=encoded.charCodeAt(i)}encoded=view.buffer;binaryIdentifier[0]=0}var len=encoded instanceof ArrayBuffer?encoded.byteLength:encoded.size;var lenStr=len.toString();var lengthAry=new Uint8Array(lenStr.length+1);for(var i=0;i&lt;lenStr.length;i++){lengthAry[i]=parseInt(lenStr[i])}lengthAry[lenStr.length]=255;if(Blob){var blob=new Blob([binaryIdentifier.buffer,lengthAry.buffer,encoded]);doneCallback(null,blob)}})}map(packets,encodeOne,function(err,results){return callback(new Blob(results))})};exports.decodePayloadAsBinary=function(data,binaryType,callback){if(typeof binaryType===&quot;function&quot;){callback=binaryType;binaryType=null}var bufferTail=data;var buffers=[];var numberTooLong=false;while(bufferTail.byteLength&gt;0){var tailArray=new Uint8Array(bufferTail);var isString=tailArray[0]===0;var msgLength=&quot;&quot;;for(var i=1;;i++){if(tailArray[i]==255)break;if(msgLength.length&gt;310){numberTooLong=true;break}msgLength+=tailArray[i]}if(numberTooLong)return callback(err,0,1);bufferTail=sliceBuffer(bufferTail,2+msgLength.length);msgLength=parseInt(msgLength);var msg=sliceBuffer(bufferTail,0,msgLength);if(isString){try{msg=String.fromCharCode.apply(null,new Uint8Array(msg))}catch(e){var typed=new Uint8Array(msg);msg=&quot;&quot;;for(var i=0;i&lt;typed.length;i++){msg+=String.fromCharCode(typed[i])}}}buffers.push(msg);bufferTail=sliceBuffer(bufferTail,msgLength)}var total=buffers.length;buffers.forEach(function(buffer,i){callback(exports.decodePacket(buffer,binaryType,true),i,total)})}}).call(this,typeof self!==&quot;undefined&quot;?self:typeof window!==&quot;undefined&quot;?window:{})},{&quot;./keys&quot;:22,after:23,&quot;arraybuffer.slice&quot;:24,&quot;base64-arraybuffer&quot;:25,blob:26,utf8:27}],22:[function(_dereq_,module,exports){module.exports=Object.keys||function keys(obj){var arr=[];var has=Object.prototype.hasOwnProperty;for(var i in obj){if(has.call(obj,i)){arr.push(i)}}return arr}},{}],23:[function(_dereq_,module,exports){module.exports=after;function after(count,callback,err_cb){var bail=false;err_cb=err_cb||noop;proxy.count=count;return count===0?callback():proxy;function proxy(err,result){if(proxy.count&lt;=0){throw new Error(&quot;after called too many times&quot;)}--proxy.count;if(err){bail=true;callback(err);callback=err_cb}else if(proxy.count===0&amp;&amp;!bail){callback(null,result)}}}function noop(){}},{}],24:[function(_dereq_,module,exports){module.exports=function(arraybuffer,start,end){var bytes=arraybuffer.byteLength;start=start||0;end=end||bytes;if(arraybuffer.slice){return arraybuffer.slice(start,end)}if(start&lt;0){start+=bytes}if(end&lt;0){end+=bytes}if(end&gt;bytes){end=bytes}if(start&gt;=bytes||start&gt;=end||bytes===0){return new ArrayBuffer(0)}var abv=new Uint8Array(arraybuffer);var result=new Uint8Array(end-start);for(var i=start,ii=0;i&lt;end;i++,ii++){result[ii]=abv[i]}return result.buffer}},{}],25:[function(_dereq_,module,exports){(function(chars){&quot;use strict&quot;;exports.encode=function(arraybuffer){var bytes=new Uint8Array(arraybuffer),i,len=bytes.length,base64=&quot;&quot;;for(i=0;i&lt;len;i+=3){base64+=chars[bytes[i]&gt;&gt;2];base64+=chars[(bytes[i]&amp;3)&lt;&lt;4|bytes[i+1]&gt;&gt;4];base64+=chars[(bytes[i+1]&amp;15)&lt;&lt;2|bytes[i+2]&gt;&gt;6];base64+=chars[bytes[i+2]&amp;63]}if(len%3===2){base64=base64.substring(0,base64.length-1)+&quot;=&quot;}else if(len%3===1){base64=base64.substring(0,base64.length-2)+&quot;==&quot;}return base64};exports.decode=function(base64){var bufferLength=base64.length*.75,len=base64.length,i,p=0,encoded1,encoded2,encoded3,encoded4;if(base64[base64.length-1]===&quot;=&quot;){bufferLength--;if(base64[base64.length-2]===&quot;=&quot;){bufferLength--}}var arraybuffer=new ArrayBuffer(bufferLength),bytes=new Uint8Array(arraybuffer);for(i=0;i&lt;len;i+=4){encoded1=chars.indexOf(base64[i]);encoded2=chars.indexOf(base64[i+1]);encoded3=chars.indexOf(base64[i+2]);encoded4=chars.indexOf(base64[i+3]);bytes[p++]=encoded1&lt;&lt;2|encoded2&gt;&gt;4;bytes[p++]=(encoded2&amp;15)&lt;&lt;4|encoded3&gt;&gt;2;bytes[p++]=(encoded3&amp;3)&lt;&lt;6|encoded4&amp;63}return arraybuffer}})(&quot;ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/&quot;)},{}],26:[function(_dereq_,module,exports){(function(global){var BlobBuilder=global.BlobBuilder||global.WebKitBlobBuilder||global.MSBlobBuilder||global.MozBlobBuilder;var blobSupported=function(){try{var b=new Blob([&quot;hi&quot;]);return b.size==2}catch(e){return false}}();var blobBuilderSupported=BlobBuilder&amp;&amp;BlobBuilder.prototype.append&amp;&amp;BlobBuilder.prototype.getBlob;function BlobBuilderConstructor(ary,options){options=options||{};var bb=new BlobBuilder;for(var i=0;i&lt;ary.length;i++){bb.append(ary[i])}return options.type?bb.getBlob(options.type):bb.getBlob()}module.exports=function(){if(blobSupported){return global.Blob}else if(blobBuilderSupported){return BlobBuilderConstructor}else{return undefined}}()}).call(this,typeof self!==&quot;undefined&quot;?self:typeof window!==&quot;undefined&quot;?window:{})},{}],27:[function(_dereq_,module,exports){(function(global){(function(root){var freeExports=typeof exports==&quot;object&quot;&amp;&amp;exports;var freeModule=typeof module==&quot;object&quot;&amp;&amp;module&amp;&amp;module.exports==freeExports&amp;&amp;module;var freeGlobal=typeof global==&quot;object&quot;&amp;&amp;global;if(freeGlobal.global===freeGlobal||freeGlobal.window===freeGlobal){root=freeGlobal}var stringFromCharCode=String.fromCharCode;function ucs2decode(string){var output=[];var counter=0;var length=string.length;var value;var extra;while(counter&lt;length){value=string.charCodeAt(counter++);if(value&gt;=55296&amp;&amp;value&lt;=56319&amp;&amp;counter&lt;length){extra=string.charCodeAt(counter++);if((extra&amp;64512)==56320){output.push(((value&amp;1023)&lt;&lt;10)+(extra&amp;1023)+65536)}else{output.push(value);counter--}}else{output.push(value)}}return output}function ucs2encode(array){var length=array.length;var index=-1;var value;var output=&quot;&quot;;while(++index&lt;length){value=array[index];if(value&gt;65535){value-=65536;output+=stringFromCharCode(value&gt;&gt;&gt;10&amp;1023|55296);value=56320|value&amp;1023}output+=stringFromCharCode(value)}return output}function createByte(codePoint,shift){return stringFromCharCode(codePoint&gt;&gt;shift&amp;63|128)}function encodeCodePoint(codePoint){if((codePoint&amp;4294967168)==0){return stringFromCharCode(codePoint)}var symbol=&quot;&quot;;if((codePoint&amp;4294965248)==0){symbol=stringFromCharCode(codePoint&gt;&gt;6&amp;31|192)}else if((codePoint&amp;4294901760)==0){symbol=stringFromCharCode(codePoint&gt;&gt;12&amp;15|224);symbol+=createByte(codePoint,6)}else if((codePoint&amp;4292870144)==0){symbol=stringFromCharCode(codePoint&gt;&gt;18&amp;7|240);symbol+=createByte(codePoint,12);symbol+=createByte(codePoint,6)}symbol+=stringFromCharCode(codePoint&amp;63|128);return symbol}function utf8encode(string){var codePoints=ucs2decode(string);var length=codePoints.length;var index=-1;var codePoint;var byteString=&quot;&quot;;while(++index&lt;length){codePoint=codePoints[index];byteString+=encodeCodePoint(codePoint)}return byteString}function readContinuationByte(){if(byteIndex&gt;=byteCount){throw Error(&quot;Invalid byte index&quot;)}var continuationByte=byteArray[byteIndex]&amp;255;byteIndex++;if((continuationByte&amp;192)==128){return continuationByte&amp;63}throw Error(&quot;Invalid continuation byte&quot;)}function decodeSymbol(){var byte1;var byte2;var byte3;var byte4;var codePoint;if(byteIndex&gt;byteCount){throw Error(&quot;Invalid byte index&quot;)}if(byteIndex==byteCount){return false}byte1=byteArray[byteIndex]&amp;255;byteIndex++;if((byte1&amp;128)==0){return byte1}if((byte1&amp;224)==192){var byte2=readContinuationByte();codePoint=(byte1&amp;31)&lt;&lt;6|byte2;if(codePoint&gt;=128){return codePoint}else{throw Error(&quot;Invalid continuation byte&quot;)}}if((byte1&amp;240)==224){byte2=readContinuationByte();byte3=readContinuationByte();codePoint=(byte1&amp;15)&lt;&lt;12|byte2&lt;&lt;6|byte3;if(codePoint&gt;=2048){return codePoint}else{throw Error(&quot;Invalid continuation byte&quot;)}}if((byte1&amp;248)==240){byte2=readContinuationByte();byte3=readContinuationByte();byte4=readContinuationByte();codePoint=(byte1&amp;15)&lt;&lt;18|byte2&lt;&lt;12|byte3&lt;&lt;6|byte4;if(codePoint&gt;=65536&amp;&amp;codePoint&lt;=1114111){return codePoint}}throw Error(&quot;Invalid UTF-8 detected&quot;)}var byteArray;var byteCount;var byteIndex;function utf8decode(byteString){byteArray=ucs2decode(byteString);byteCount=byteArray.length;byteIndex=0;var codePoints=[];var tmp;while((tmp=decodeSymbol())!==false){codePoints.push(tmp)}return ucs2encode(codePoints)}var utf8={version:&quot;2.0.0&quot;,encode:utf8encode,decode:utf8decode};if(typeof define==&quot;function&quot;&amp;&amp;typeof define.amd==&quot;object&quot;&amp;&amp;define.amd){define(function(){return utf8})}else if(freeExports&amp;&amp;!freeExports.nodeType){if(freeModule){freeModule.exports=utf8}else{var object={};var hasOwnProperty=object.hasOwnProperty;for(var key in utf8){hasOwnProperty.call(utf8,key)&amp;&amp;(freeExports[key]=utf8[key])}}}else{root.utf8=utf8}})(this)}).call(this,typeof self!==&quot;undefined&quot;?self:typeof window!==&quot;undefined&quot;?window:{})},{}],28:[function(_dereq_,module,exports){(function(global){var rvalidchars=/^[\],:{}\s]*$/;var rvalidescape=/\\(?:[&quot;\\\/bfnrt]|u[0-9a-fA-F]{4})/g;var rvalidtokens=/&quot;[^&quot;\\\n\r]*&quot;|true|false|null|-?\d+(?:\.\d*)?(?:[eE][+\-]?\d+)?/g;var rvalidbraces=/(?:^|:|,)(?:\s*\[)+/g;var rtrimLeft=/^\s+/;var rtrimRight=/\s+$/;module.exports=function parsejson(data){if(&quot;string&quot;!=typeof data||!data){return null}data=data.replace(rtrimLeft,&quot;&quot;).replace(rtrimRight,&quot;&quot;);if(global.JSON&amp;&amp;JSON.parse){return JSON.parse(data)}if(rvalidchars.test(data.replace(rvalidescape,&quot;@&quot;).replace(rvalidtokens,&quot;]&quot;).replace(rvalidbraces,&quot;&quot;))){return new Function(&quot;return &quot;+data)()}}}).call(this,typeof self!==&quot;undefined&quot;?self:typeof window!==&quot;undefined&quot;?window:{})},{}],29:[function(_dereq_,module,exports){exports.encode=function(obj){var str=&quot;&quot;;for(var i in obj){if(obj.hasOwnProperty(i)){if(str.length)str+=&quot;&amp;&quot;;str+=encodeURIComponent(i)+&quot;=&quot;+encodeURIComponent(obj[i])}}return str};exports.decode=function(qs){var qry={};var pairs=qs.split(&quot;&amp;&quot;);for(var i=0,l=pairs.length;i&lt;l;i++){var pair=pairs[i].split(&quot;=&quot;);qry[decodeURIComponent(pair[0])]=decodeURIComponent(pair[1])}return qry}},{}],30:[function(_dereq_,module,exports){var re=/^(?:(?![^:@]+:[^:@\/]*@)(http|https|ws|wss):\/\/)?((?:(([^:@]*)(?::([^:@]*))?)?@)?((?:[a-f0-9]{0,4}:){2,7}[a-f0-9]{0,4}|[^:\/?#]*)(?::(\d*))?)(((\/(?:[^?#](?![^?#\/]*\.[^?#\/.]+(?:[?#]|$)))*\/?)?([^?#\/]*))(?:\?([^#]*))?(?:#(.*))?)/;var parts=[&quot;source&quot;,&quot;protocol&quot;,&quot;authority&quot;,&quot;userInfo&quot;,&quot;user&quot;,&quot;password&quot;,&quot;host&quot;,&quot;port&quot;,&quot;relative&quot;,&quot;path&quot;,&quot;directory&quot;,&quot;file&quot;,&quot;query&quot;,&quot;anchor&quot;];module.exports=function parseuri(str){var src=str,b=str.indexOf(&quot;[&quot;),e=str.indexOf(&quot;]&quot;);if(b!=-1&amp;&amp;e!=-1){str=str.substring(0,b)+str.substring(b,e).replace(/:/g,&quot;;&quot;)+str.substring(e,str.length)}var m=re.exec(str||&quot;&quot;),uri={},i=14;while(i--){uri[parts[i]]=m[i]||&quot;&quot;}if(b!=-1&amp;&amp;e!=-1){uri.source=src;uri.host=uri.host.substring(1,uri.host.length-1).replace(/;/g,&quot;:&quot;);uri.authority=uri.authority.replace(&quot;[&quot;,&quot;&quot;).replace(&quot;]&quot;,&quot;&quot;).replace(/;/g,&quot;:&quot;);uri.ipv6uri=true}return uri}},{}],31:[function(_dereq_,module,exports){var global=function(){return this}();var WebSocket=global.WebSocket||global.MozWebSocket;module.exports=WebSocket?ws:null;function ws(uri,protocols,opts){var instance;if(protocols){instance=new WebSocket(uri,protocols)}else{instance=new WebSocket(uri)}return instance}if(WebSocket)ws.prototype=WebSocket.prototype},{}],32:[function(_dereq_,module,exports){(function(global){var isArray=_dereq_(&quot;isarray&quot;);module.exports=hasBinary;function hasBinary(data){function _hasBinary(obj){if(!obj)return false;if(global.Buffer&amp;&amp;global.Buffer.isBuffer(obj)||global.ArrayBuffer&amp;&amp;obj instanceof ArrayBuffer||global.Blob&amp;&amp;obj instanceof Blob||global.File&amp;&amp;obj instanceof File){return true}if(isArray(obj)){for(var i=0;i&lt;obj.length;i++){if(_hasBinary(obj[i])){return true}}}else if(obj&amp;&amp;&quot;object&quot;==typeof obj){if(obj.toJSON){obj=obj.toJSON()}for(var key in obj){if(obj.hasOwnProperty(key)&amp;&amp;_hasBinary(obj[key])){return true}}}return false}return _hasBinary(data)}}).call(this,typeof self!==&quot;undefined&quot;?self:typeof window!==&quot;undefined&quot;?window:{})},{isarray:33}],33:[function(_dereq_,module,exports){module.exports=Array.isArray||function(arr){return Object.prototype.toString.call(arr)==&quot;[object Array]&quot;}},{}],34:[function(_dereq_,module,exports){var global=_dereq_(&quot;global&quot;);try{module.exports=&quot;XMLHttpRequest&quot;in global&amp;&amp;&quot;withCredentials&quot;in new global.XMLHttpRequest}catch(err){module.exports=false}},{global:35}],35:[function(_dereq_,module,exports){module.exports=function(){return this}()},{}],36:[function(_dereq_,module,exports){var indexOf=[].indexOf;module.exports=function(arr,obj){if(indexOf)return arr.indexOf(obj);for(var i=0;i&lt;arr.length;++i){if(arr[i]===obj)return i}return-1}},{}],37:[function(_dereq_,module,exports){var has=Object.prototype.hasOwnProperty;exports.keys=Object.keys||function(obj){var keys=[];for(var key in obj){if(has.call(obj,key)){keys.push(key)}}return keys};exports.values=function(obj){var vals=[];for(var key in obj){if(has.call(obj,key)){vals.push(obj[key])}}return vals};exports.merge=function(a,b){for(var key in b){if(has.call(b,key)){a[key]=b[key]}}return a};exports.length=function(obj){return exports.keys(obj).length};exports.isEmpty=function(obj){return 0==exports.length(obj)}},{}],38:[function(_dereq_,module,exports){var re=/^(?:(?![^:@]+:[^:@\/]*@)(http|https|ws|wss):\/\/)?((?:(([^:@]*)(?::([^:@]*))?)?@)?((?:[a-f0-9]{0,4}:){2,7}[a-f0-9]{0,4}|[^:\/?#]*)(?::(\d*))?)(((\/(?:[^?#](?![^?#\/]*\.[^?#\/.]+(?:[?#]|$)))*\/?)?([^?#\/]*))(?:\?([^#]*))?(?:#(.*))?)/;var parts=[&quot;source&quot;,&quot;protocol&quot;,&quot;authority&quot;,&quot;userInfo&quot;,&quot;user&quot;,&quot;password&quot;,&quot;host&quot;,&quot;port&quot;,&quot;relative&quot;,&quot;path&quot;,&quot;directory&quot;,&quot;file&quot;,&quot;query&quot;,&quot;anchor&quot;];module.exports=function parseuri(str){var m=re.exec(str||&quot;&quot;),uri={},i=14;while(i--){uri[parts[i]]=m[i]||&quot;&quot;}return uri}},{}],39:[function(_dereq_,module,exports){(function(global){var isArray=_dereq_(&quot;isarray&quot;);var isBuf=_dereq_(&quot;./is-buffer&quot;);exports.deconstructPacket=function(packet){var buffers=[];var packetData=packet.data;function _deconstructPacket(data){if(!data)return data;if(isBuf(data)){var placeholder={_placeholder:true,num:buffers.length};buffers.push(data);return placeholder}else if(isArray(data)){var newData=new Array(data.length);for(var i=0;i&lt;data.length;i++){newData[i]=_deconstructPacket(data[i])}return newData}else if(&quot;object&quot;==typeof data&amp;&amp;!(data instanceof Date)){var newData={};for(var key in data){newData[key]=_deconstructPacket(data[key])}return newData}return data}var pack=packet;pack.data=_deconstructPacket(packetData);pack.attachments=buffers.length;return{packet:pack,buffers:buffers}};exports.reconstructPacket=function(packet,buffers){var curPlaceHolder=0;function _reconstructPacket(data){if(data&amp;&amp;data._placeholder){var buf=buffers[data.num];return buf</td>
      </tr>
      <tr>
        <td id="L3" class="blob-num js-line-number" data-line-number="3"></td>
        <td id="LC3" class="blob-code blob-code-inner js-file-line">}else if(isArray(data)){for(var i=0;i&lt;data.length;i++){data[i]=_reconstructPacket(data[i])}return data}else if(data&amp;&amp;&quot;object&quot;==typeof data){for(var key in data){data[key]=_reconstructPacket(data[key])}return data}return data}packet.data=_reconstructPacket(packet.data);packet.attachments=undefined;return packet};exports.removeBlobs=function(data,callback){function _removeBlobs(obj,curKey,containingObject){if(!obj)return obj;if(global.Blob&amp;&amp;obj instanceof Blob||global.File&amp;&amp;obj instanceof File){pendingBlobs++;var fileReader=new FileReader;fileReader.onload=function(){if(containingObject){containingObject[curKey]=this.result}else{bloblessData=this.result}if(!--pendingBlobs){callback(bloblessData)}};fileReader.readAsArrayBuffer(obj)}else if(isArray(obj)){for(var i=0;i&lt;obj.length;i++){_removeBlobs(obj[i],i,obj)}}else if(obj&amp;&amp;&quot;object&quot;==typeof obj&amp;&amp;!isBuf(obj)){for(var key in obj){_removeBlobs(obj[key],key,obj)}}}var pendingBlobs=0;var bloblessData=data;_removeBlobs(bloblessData);if(!pendingBlobs){callback(bloblessData)}}}).call(this,typeof self!==&quot;undefined&quot;?self:typeof window!==&quot;undefined&quot;?window:{})},{&quot;./is-buffer&quot;:41,isarray:42}],40:[function(_dereq_,module,exports){var debug=_dereq_(&quot;debug&quot;)(&quot;socket.io-parser&quot;);var json=_dereq_(&quot;json3&quot;);var isArray=_dereq_(&quot;isarray&quot;);var Emitter=_dereq_(&quot;component-emitter&quot;);var binary=_dereq_(&quot;./binary&quot;);var isBuf=_dereq_(&quot;./is-buffer&quot;);exports.protocol=4;exports.types=[&quot;CONNECT&quot;,&quot;DISCONNECT&quot;,&quot;EVENT&quot;,&quot;BINARY_EVENT&quot;,&quot;ACK&quot;,&quot;BINARY_ACK&quot;,&quot;ERROR&quot;];exports.CONNECT=0;exports.DISCONNECT=1;exports.EVENT=2;exports.ACK=3;exports.ERROR=4;exports.BINARY_EVENT=5;exports.BINARY_ACK=6;exports.Encoder=Encoder;exports.Decoder=Decoder;function Encoder(){}Encoder.prototype.encode=function(obj,callback){debug(&quot;encoding packet %j&quot;,obj);if(exports.BINARY_EVENT==obj.type||exports.BINARY_ACK==obj.type){encodeAsBinary(obj,callback)}else{var encoding=encodeAsString(obj);callback([encoding])}};function encodeAsString(obj){var str=&quot;&quot;;var nsp=false;str+=obj.type;if(exports.BINARY_EVENT==obj.type||exports.BINARY_ACK==obj.type){str+=obj.attachments;str+=&quot;-&quot;}if(obj.nsp&amp;&amp;&quot;/&quot;!=obj.nsp){nsp=true;str+=obj.nsp}if(null!=obj.id){if(nsp){str+=&quot;,&quot;;nsp=false}str+=obj.id}if(null!=obj.data){if(nsp)str+=&quot;,&quot;;str+=json.stringify(obj.data)}debug(&quot;encoded %j as %s&quot;,obj,str);return str}function encodeAsBinary(obj,callback){function writeEncoding(bloblessData){var deconstruction=binary.deconstructPacket(bloblessData);var pack=encodeAsString(deconstruction.packet);var buffers=deconstruction.buffers;buffers.unshift(pack);callback(buffers)}binary.removeBlobs(obj,writeEncoding)}function Decoder(){this.reconstructor=null}Emitter(Decoder.prototype);Decoder.prototype.add=function(obj){var packet;if(&quot;string&quot;==typeof obj){packet=decodeString(obj);if(exports.BINARY_EVENT==packet.type||exports.BINARY_ACK==packet.type){this.reconstructor=new BinaryReconstructor(packet);if(this.reconstructor.reconPack.attachments==0){this.emit(&quot;decoded&quot;,packet)}}else{this.emit(&quot;decoded&quot;,packet)}}else if(isBuf(obj)||obj.base64){if(!this.reconstructor){throw new Error(&quot;got binary data when not reconstructing a packet&quot;)}else{packet=this.reconstructor.takeBinaryData(obj);if(packet){this.reconstructor=null;this.emit(&quot;decoded&quot;,packet)}}}else{throw new Error(&quot;Unknown type: &quot;+obj)}};function decodeString(str){var p={};var i=0;p.type=Number(str.charAt(0));if(null==exports.types[p.type])return error();if(exports.BINARY_EVENT==p.type||exports.BINARY_ACK==p.type){p.attachments=&quot;&quot;;while(str.charAt(++i)!=&quot;-&quot;){p.attachments+=str.charAt(i)}p.attachments=Number(p.attachments)}if(&quot;/&quot;==str.charAt(i+1)){p.nsp=&quot;&quot;;while(++i){var c=str.charAt(i);if(&quot;,&quot;==c)break;p.nsp+=c;if(i+1==str.length)break}}else{p.nsp=&quot;/&quot;}var next=str.charAt(i+1);if(&quot;&quot;!=next&amp;&amp;Number(next)==next){p.id=&quot;&quot;;while(++i){var c=str.charAt(i);if(null==c||Number(c)!=c){--i;break}p.id+=str.charAt(i);if(i+1==str.length)break}p.id=Number(p.id)}if(str.charAt(++i)){try{p.data=json.parse(str.substr(i))}catch(e){return error()}}debug(&quot;decoded %s as %j&quot;,str,p);return p}Decoder.prototype.destroy=function(){if(this.reconstructor){this.reconstructor.finishedReconstruction()}};function BinaryReconstructor(packet){this.reconPack=packet;this.buffers=[]}BinaryReconstructor.prototype.takeBinaryData=function(binData){this.buffers.push(binData);if(this.buffers.length==this.reconPack.attachments){var packet=binary.reconstructPacket(this.reconPack,this.buffers);this.finishedReconstruction();return packet}return null};BinaryReconstructor.prototype.finishedReconstruction=function(){this.reconPack=null;this.buffers=[]};function error(data){return{type:exports.ERROR,data:&quot;parser error&quot;}}},{&quot;./binary&quot;:39,&quot;./is-buffer&quot;:41,&quot;component-emitter&quot;:8,debug:9,isarray:42,json3:43}],41:[function(_dereq_,module,exports){(function(global){module.exports=isBuf;function isBuf(obj){return global.Buffer&amp;&amp;global.Buffer.isBuffer(obj)||global.ArrayBuffer&amp;&amp;obj instanceof ArrayBuffer}}).call(this,typeof self!==&quot;undefined&quot;?self:typeof window!==&quot;undefined&quot;?window:{})},{}],42:[function(_dereq_,module,exports){module.exports=_dereq_(33)},{}],43:[function(_dereq_,module,exports){(function(window){var getClass={}.toString,isProperty,forEach,undef;var isLoader=typeof define===&quot;function&quot;&amp;&amp;define.amd;var nativeJSON=typeof JSON==&quot;object&quot;&amp;&amp;JSON;var JSON3=typeof exports==&quot;object&quot;&amp;&amp;exports&amp;&amp;!exports.nodeType&amp;&amp;exports;if(JSON3&amp;&amp;nativeJSON){JSON3.stringify=nativeJSON.stringify;JSON3.parse=nativeJSON.parse}else{JSON3=window.JSON=nativeJSON||{}}var isExtended=new Date(-0xc782b5b800cec);try{isExtended=isExtended.getUTCFullYear()==-109252&amp;&amp;isExtended.getUTCMonth()===0&amp;&amp;isExtended.getUTCDate()===1&amp;&amp;isExtended.getUTCHours()==10&amp;&amp;isExtended.getUTCMinutes()==37&amp;&amp;isExtended.getUTCSeconds()==6&amp;&amp;isExtended.getUTCMilliseconds()==708}catch(exception){}function has(name){if(has[name]!==undef){return has[name]}var isSupported;if(name==&quot;bug-string-char-index&quot;){isSupported=&quot;a&quot;[0]!=&quot;a&quot;}else if(name==&quot;json&quot;){isSupported=has(&quot;json-stringify&quot;)&amp;&amp;has(&quot;json-parse&quot;)}else{var value,serialized=&#39;{&quot;a&quot;:[1,true,false,null,&quot;\\u0000\\b\\n\\f\\r\\t&quot;]}&#39;;if(name==&quot;json-stringify&quot;){var stringify=JSON3.stringify,stringifySupported=typeof stringify==&quot;function&quot;&amp;&amp;isExtended;if(stringifySupported){(value=function(){return 1}).toJSON=value;try{stringifySupported=stringify(0)===&quot;0&quot;&amp;&amp;stringify(new Number)===&quot;0&quot;&amp;&amp;stringify(new String)==&#39;&quot;&quot;&#39;&amp;&amp;stringify(getClass)===undef&amp;&amp;stringify(undef)===undef&amp;&amp;stringify()===undef&amp;&amp;stringify(value)===&quot;1&quot;&amp;&amp;stringify([value])==&quot;[1]&quot;&amp;&amp;stringify([undef])==&quot;[null]&quot;&amp;&amp;stringify(null)==&quot;null&quot;&amp;&amp;stringify([undef,getClass,null])==&quot;[null,null,null]&quot;&amp;&amp;stringify({a:[value,true,false,null,&quot;\x00\b\n\f\r	&quot;]})==serialized&amp;&amp;stringify(null,value)===&quot;1&quot;&amp;&amp;stringify([1,2],null,1)==&quot;[\n 1,\n 2\n]&quot;&amp;&amp;stringify(new Date(-864e13))==&#39;&quot;-271821-04-20T00:00:00.000Z&quot;&#39;&amp;&amp;stringify(new Date(864e13))==&#39;&quot;+275760-09-13T00:00:00.000Z&quot;&#39;&amp;&amp;stringify(new Date(-621987552e5))==&#39;&quot;-000001-01-01T00:00:00.000Z&quot;&#39;&amp;&amp;stringify(new Date(-1))==&#39;&quot;1969-12-31T23:59:59.999Z&quot;&#39;}catch(exception){stringifySupported=false}}isSupported=stringifySupported}if(name==&quot;json-parse&quot;){var parse=JSON3.parse;if(typeof parse==&quot;function&quot;){try{if(parse(&quot;0&quot;)===0&amp;&amp;!parse(false)){value=parse(serialized);var parseSupported=value[&quot;a&quot;].length==5&amp;&amp;value[&quot;a&quot;][0]===1;if(parseSupported){try{parseSupported=!parse(&#39;&quot;	&quot;&#39;)}catch(exception){}if(parseSupported){try{parseSupported=parse(&quot;01&quot;)!==1}catch(exception){}}if(parseSupported){try{parseSupported=parse(&quot;1.&quot;)!==1}catch(exception){}}}}}catch(exception){parseSupported=false}}isSupported=parseSupported}}return has[name]=!!isSupported}if(!has(&quot;json&quot;)){var functionClass=&quot;[object Function]&quot;;var dateClass=&quot;[object Date]&quot;;var numberClass=&quot;[object Number]&quot;;var stringClass=&quot;[object String]&quot;;var arrayClass=&quot;[object Array]&quot;;var booleanClass=&quot;[object Boolean]&quot;;var charIndexBuggy=has(&quot;bug-string-char-index&quot;);if(!isExtended){var floor=Math.floor;var Months=[0,31,59,90,120,151,181,212,243,273,304,334];var getDay=function(year,month){return Months[month]+365*(year-1970)+floor((year-1969+(month=+(month&gt;1)))/4)-floor((year-1901+month)/100)+floor((year-1601+month)/400)}}if(!(isProperty={}.hasOwnProperty)){isProperty=function(property){var members={},constructor;if((members.__proto__=null,members.__proto__={toString:1},members).toString!=getClass){isProperty=function(property){var original=this.__proto__,result=property in(this.__proto__=null,this);this.__proto__=original;return result}}else{constructor=members.constructor;isProperty=function(property){var parent=(this.constructor||constructor).prototype;return property in this&amp;&amp;!(property in parent&amp;&amp;this[property]===parent[property])}}members=null;return isProperty.call(this,property)}}var PrimitiveTypes={&quot;boolean&quot;:1,number:1,string:1,undefined:1};var isHostType=function(object,property){var type=typeof object[property];return type==&quot;object&quot;?!!object[property]:!PrimitiveTypes[type]};forEach=function(object,callback){var size=0,Properties,members,property;(Properties=function(){this.valueOf=0}).prototype.valueOf=0;members=new Properties;for(property in members){if(isProperty.call(members,property)){size++}}Properties=members=null;if(!size){members=[&quot;valueOf&quot;,&quot;toString&quot;,&quot;toLocaleString&quot;,&quot;propertyIsEnumerable&quot;,&quot;isPrototypeOf&quot;,&quot;hasOwnProperty&quot;,&quot;constructor&quot;];forEach=function(object,callback){var isFunction=getClass.call(object)==functionClass,property,length;var hasProperty=!isFunction&amp;&amp;typeof object.constructor!=&quot;function&quot;&amp;&amp;isHostType(object,&quot;hasOwnProperty&quot;)?object.hasOwnProperty:isProperty;for(property in object){if(!(isFunction&amp;&amp;property==&quot;prototype&quot;)&amp;&amp;hasProperty.call(object,property)){callback(property)}}for(length=members.length;property=members[--length];hasProperty.call(object,property)&amp;&amp;callback(property));}}else if(size==2){forEach=function(object,callback){var members={},isFunction=getClass.call(object)==functionClass,property;for(property in object){if(!(isFunction&amp;&amp;property==&quot;prototype&quot;)&amp;&amp;!isProperty.call(members,property)&amp;&amp;(members[property]=1)&amp;&amp;isProperty.call(object,property)){callback(property)}}}}else{forEach=function(object,callback){var isFunction=getClass.call(object)==functionClass,property,isConstructor;for(property in object){if(!(isFunction&amp;&amp;property==&quot;prototype&quot;)&amp;&amp;isProperty.call(object,property)&amp;&amp;!(isConstructor=property===&quot;constructor&quot;)){callback(property)}}if(isConstructor||isProperty.call(object,property=&quot;constructor&quot;)){callback(property)}}}return forEach(object,callback)};if(!has(&quot;json-stringify&quot;)){var Escapes={92:&quot;\\\\&quot;,34:&#39;\\&quot;&#39;,8:&quot;\\b&quot;,12:&quot;\\f&quot;,10:&quot;\\n&quot;,13:&quot;\\r&quot;,9:&quot;\\t&quot;};var leadingZeroes=&quot;000000&quot;;var toPaddedString=function(width,value){return(leadingZeroes+(value||0)).slice(-width)};var unicodePrefix=&quot;\\u00&quot;;var quote=function(value){var result=&#39;&quot;&#39;,index=0,length=value.length,isLarge=length&gt;10&amp;&amp;charIndexBuggy,symbols;if(isLarge){symbols=value.split(&quot;&quot;)}for(;index&lt;length;index++){var charCode=value.charCodeAt(index);switch(charCode){case 8:case 9:case 10:case 12:case 13:case 34:case 92:result+=Escapes[charCode];break;default:if(charCode&lt;32){result+=unicodePrefix+toPaddedString(2,charCode.toString(16));break}result+=isLarge?symbols[index]:charIndexBuggy?value.charAt(index):value[index]}}return result+&#39;&quot;&#39;};var serialize=function(property,object,callback,properties,whitespace,indentation,stack){var value,className,year,month,date,time,hours,minutes,seconds,milliseconds,results,element,index,length,prefix,result;try{value=object[property]}catch(exception){}if(typeof value==&quot;object&quot;&amp;&amp;value){className=getClass.call(value);if(className==dateClass&amp;&amp;!isProperty.call(value,&quot;toJSON&quot;)){if(value&gt;-1/0&amp;&amp;value&lt;1/0){if(getDay){date=floor(value/864e5);for(year=floor(date/365.2425)+1970-1;getDay(year+1,0)&lt;=date;year++);for(month=floor((date-getDay(year,0))/30.42);getDay(year,month+1)&lt;=date;month++);date=1+date-getDay(year,month);time=(value%864e5+864e5)%864e5;hours=floor(time/36e5)%24;minutes=floor(time/6e4)%60;seconds=floor(time/1e3)%60;milliseconds=time%1e3}else{year=value.getUTCFullYear();month=value.getUTCMonth();date=value.getUTCDate();hours=value.getUTCHours();minutes=value.getUTCMinutes();seconds=value.getUTCSeconds();milliseconds=value.getUTCMilliseconds()}value=(year&lt;=0||year&gt;=1e4?(year&lt;0?&quot;-&quot;:&quot;+&quot;)+toPaddedString(6,year&lt;0?-year:year):toPaddedString(4,year))+&quot;-&quot;+toPaddedString(2,month+1)+&quot;-&quot;+toPaddedString(2,date)+&quot;T&quot;+toPaddedString(2,hours)+&quot;:&quot;+toPaddedString(2,minutes)+&quot;:&quot;+toPaddedString(2,seconds)+&quot;.&quot;+toPaddedString(3,milliseconds)+&quot;Z&quot;}else{value=null}}else if(typeof value.toJSON==&quot;function&quot;&amp;&amp;(className!=numberClass&amp;&amp;className!=stringClass&amp;&amp;className!=arrayClass||isProperty.call(value,&quot;toJSON&quot;))){value=value.toJSON(property)}}if(callback){value=callback.call(object,property,value)}if(value===null){return&quot;null&quot;}className=getClass.call(value);if(className==booleanClass){return&quot;&quot;+value}else if(className==numberClass){return value&gt;-1/0&amp;&amp;value&lt;1/0?&quot;&quot;+value:&quot;null&quot;}else if(className==stringClass){return quote(&quot;&quot;+value)}if(typeof value==&quot;object&quot;){for(length=stack.length;length--;){if(stack[length]===value){throw TypeError()}}stack.push(value);results=[];prefix=indentation;indentation+=whitespace;if(className==arrayClass){for(index=0,length=value.length;index&lt;length;index++){element=serialize(index,value,callback,properties,whitespace,indentation,stack);results.push(element===undef?&quot;null&quot;:element)}result=results.length?whitespace?&quot;[\n&quot;+indentation+results.join(&quot;,\n&quot;+indentation)+&quot;\n&quot;+prefix+&quot;]&quot;:&quot;[&quot;+results.join(&quot;,&quot;)+&quot;]&quot;:&quot;[]&quot;}else{forEach(properties||value,function(property){var element=serialize(property,value,callback,properties,whitespace,indentation,stack);if(element!==undef){results.push(quote(property)+&quot;:&quot;+(whitespace?&quot; &quot;:&quot;&quot;)+element)}});result=results.length?whitespace?&quot;{\n&quot;+indentation+results.join(&quot;,\n&quot;+indentation)+&quot;\n&quot;+prefix+&quot;}&quot;:&quot;{&quot;+results.join(&quot;,&quot;)+&quot;}&quot;:&quot;{}&quot;}stack.pop();return result}};JSON3.stringify=function(source,filter,width){var whitespace,callback,properties,className;if(typeof filter==&quot;function&quot;||typeof filter==&quot;object&quot;&amp;&amp;filter){if((className=getClass.call(filter))==functionClass){callback=filter}else if(className==arrayClass){properties={};for(var index=0,length=filter.length,value;index&lt;length;value=filter[index++],(className=getClass.call(value),className==stringClass||className==numberClass)&amp;&amp;(properties[value]=1));}}if(width){if((className=getClass.call(width))==numberClass){if((width-=width%1)&gt;0){for(whitespace=&quot;&quot;,width&gt;10&amp;&amp;(width=10);whitespace.length&lt;width;whitespace+=&quot; &quot;);}}else if(className==stringClass){whitespace=width.length&lt;=10?width:width.slice(0,10)}}return serialize(&quot;&quot;,(value={},value[&quot;&quot;]=source,value),callback,properties,whitespace,&quot;&quot;,[])}}if(!has(&quot;json-parse&quot;)){var fromCharCode=String.fromCharCode;var Unescapes={92:&quot;\\&quot;,34:&#39;&quot;&#39;,47:&quot;/&quot;,98:&quot;\b&quot;,116:&quot;	&quot;,110:&quot;\n&quot;,102:&quot;\f&quot;,114:&quot;\r&quot;};var Index,Source;var abort=function(){Index=Source=null;throw SyntaxError()};var lex=function(){var source=Source,length=source.length,value,begin,position,isSigned,charCode;while(Index&lt;length){charCode=source.charCodeAt(Index);switch(charCode){case 9:case 10:case 13:case 32:Index++;break;case 123:case 125:case 91:case 93:case 58:case 44:value=charIndexBuggy?source.charAt(Index):source[Index];Index++;return value;case 34:for(value=&quot;@&quot;,Index++;Index&lt;length;){charCode=source.charCodeAt(Index);if(charCode&lt;32){abort()}else if(charCode==92){charCode=source.charCodeAt(++Index);switch(charCode){case 92:case 34:case 47:case 98:case 116:case 110:case 102:case 114:value+=Unescapes[charCode];Index++;break;case 117:begin=++Index;for(position=Index+4;Index&lt;position;Index++){charCode=source.charCodeAt(Index);if(!(charCode&gt;=48&amp;&amp;charCode&lt;=57||charCode&gt;=97&amp;&amp;charCode&lt;=102||charCode&gt;=65&amp;&amp;charCode&lt;=70)){abort()}}value+=fromCharCode(&quot;0x&quot;+source.slice(begin,Index));break;default:abort()}}else{if(charCode==34){break}charCode=source.charCodeAt(Index);begin=Index;while(charCode&gt;=32&amp;&amp;charCode!=92&amp;&amp;charCode!=34){charCode=source.charCodeAt(++Index)}value+=source.slice(begin,Index)}}if(source.charCodeAt(Index)==34){Index++;return value}abort();default:begin=Index;if(charCode==45){isSigned=true;charCode=source.charCodeAt(++Index)}if(charCode&gt;=48&amp;&amp;charCode&lt;=57){if(charCode==48&amp;&amp;(charCode=source.charCodeAt(Index+1),charCode&gt;=48&amp;&amp;charCode&lt;=57)){abort()}isSigned=false;for(;Index&lt;length&amp;&amp;(charCode=source.charCodeAt(Index),charCode&gt;=48&amp;&amp;charCode&lt;=57);Index++);if(source.charCodeAt(Index)==46){position=++Index;for(;position&lt;length&amp;&amp;(charCode=source.charCodeAt(position),charCode&gt;=48&amp;&amp;charCode&lt;=57);position++);if(position==Index){abort()}Index=position}charCode=source.charCodeAt(Index);if(charCode==101||charCode==69){charCode=source.charCodeAt(++Index);if(charCode==43||charCode==45){Index++}for(position=Index;position&lt;length&amp;&amp;(charCode=source.charCodeAt(position),charCode&gt;=48&amp;&amp;charCode&lt;=57);position++);if(position==Index){abort()}Index=position}return+source.slice(begin,Index)}if(isSigned){abort()}if(source.slice(Index,Index+4)==&quot;true&quot;){Index+=4;return true}else if(source.slice(Index,Index+5)==&quot;false&quot;){Index+=5;return false}else if(source.slice(Index,Index+4)==&quot;null&quot;){Index+=4;return null}abort()}}return&quot;$&quot;};var get=function(value){var results,hasMembers;if(value==&quot;$&quot;){abort()}if(typeof value==&quot;string&quot;){if((charIndexBuggy?value.charAt(0):value[0])==&quot;@&quot;){return value.slice(1)}if(value==&quot;[&quot;){results=[];for(;;hasMembers||(hasMembers=true)){value=lex();if(value==&quot;]&quot;){break}if(hasMembers){if(value==&quot;,&quot;){value=lex();if(value==&quot;]&quot;){abort()}}else{abort()}}if(value==&quot;,&quot;){abort()}results.push(get(value))}return results}else if(value==&quot;{&quot;){results={};for(;;hasMembers||(hasMembers=true)){value=lex();if(value==&quot;}&quot;){break}if(hasMembers){if(value==&quot;,&quot;){value=lex();if(value==&quot;}&quot;){abort()}}else{abort()}}if(value==&quot;,&quot;||typeof value!=&quot;string&quot;||(charIndexBuggy?value.charAt(0):value[0])!=&quot;@&quot;||lex()!=&quot;:&quot;){abort()}results[value.slice(1)]=get(lex())}return results}abort()}return value};var update=function(source,property,callback){var element=walk(source,property,callback);if(element===undef){delete source[property]}else{source[property]=element}};var walk=function(source,property,callback){var value=source[property],length;if(typeof value==&quot;object&quot;&amp;&amp;value){if(getClass.call(value)==arrayClass){for(length=value.length;length--;){update(value,length,callback)}}else{forEach(value,function(property){update(value,property,callback)})}}return callback.call(source,property,value)};JSON3.parse=function(source,callback){var result,value;Index=0;Source=&quot;&quot;+source;result=get(lex());if(lex()!=&quot;$&quot;){abort()}Index=Source=null;return callback&amp;&amp;getClass.call(callback)==functionClass?walk((value={},value[&quot;&quot;]=result,value),&quot;&quot;,callback):result}}}if(isLoader){define(function(){return JSON3})}})(this)},{}],44:[function(_dereq_,module,exports){module.exports=toArray;function toArray(list,index){var array=[];index=index||0;for(var i=index||0;i&lt;list.length;i++){array[i-index]=list[i]}return array}},{}]},{},[1])(1)});</td>
      </tr>
</table>

  </div>

</div>

<button type="button" data-facebox="#jump-to-line" data-facebox-class="linejump" data-hotkey="l" class="d-none">Jump to Line</button>
<div id="jump-to-line" style="display:none">
  <!-- </textarea> --><!-- '"` --><form accept-charset="UTF-8" action="" class="js-jump-to-line-form" method="get"><div style="margin:0;padding:0;display:inline"><input name="utf8" type="hidden" value="&#x2713;" /></div>
    <input class="form-control linejump-input js-jump-to-line-field" type="text" placeholder="Jump to line&hellip;" aria-label="Jump to line" autofocus>
    <button type="submit" class="btn">Go</button>
</form></div>

  </div>
  <div class="modal-backdrop js-touch-events"></div>
</div>


    </div>
  </div>

    </div>

        <div class="container site-footer-container">
  <div class="site-footer" role="contentinfo">
    <ul class="site-footer-links float-right">
        <li><a href="https://github.com/contact" data-ga-click="Footer, go to contact, text:contact">Contact GitHub</a></li>
      <li><a href="https://developer.github.com" data-ga-click="Footer, go to api, text:api">API</a></li>
      <li><a href="https://training.github.com" data-ga-click="Footer, go to training, text:training">Training</a></li>
      <li><a href="https://shop.github.com" data-ga-click="Footer, go to shop, text:shop">Shop</a></li>
        <li><a href="https://github.com/blog" data-ga-click="Footer, go to blog, text:blog">Blog</a></li>
        <li><a href="https://github.com/about" data-ga-click="Footer, go to about, text:about">About</a></li>

    </ul>

    <a href="https://github.com" aria-label="Homepage" class="site-footer-mark" title="GitHub">
      <svg aria-hidden="true" class="octicon octicon-mark-github" height="24" version="1.1" viewBox="0 0 16 16" width="24"><path d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.013 8.013 0 0 0 16 8c0-4.42-3.58-8-8-8z"></path></svg>
</a>
    <ul class="site-footer-links">
      <li>&copy; 2016 <span title="0.10551s from github-fe-c5e6852.cp1-iad.github.net">GitHub</span>, Inc.</li>
        <li><a href="https://github.com/site/terms" data-ga-click="Footer, go to terms, text:terms">Terms</a></li>
        <li><a href="https://github.com/site/privacy" data-ga-click="Footer, go to privacy, text:privacy">Privacy</a></li>
        <li><a href="https://github.com/security" data-ga-click="Footer, go to security, text:security">Security</a></li>
        <li><a href="https://status.github.com/" data-ga-click="Footer, go to status, text:status">Status</a></li>
        <li><a href="https://help.github.com" data-ga-click="Footer, go to help, text:help">Help</a></li>
    </ul>
  </div>
</div>



    

    <div id="ajax-error-message" class="ajax-error-message flash flash-error">
      <svg aria-hidden="true" class="octicon octicon-alert" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path d="M8.865 1.52c-.18-.31-.51-.5-.87-.5s-.69.19-.87.5L.275 13.5c-.18.31-.18.69 0 1 .19.31.52.5.87.5h13.7c.36 0 .69-.19.86-.5.17-.31.18-.69.01-1L8.865 1.52zM8.995 13h-2v-2h2v2zm0-3h-2V6h2v4z"></path></svg>
      <button type="button" class="flash-close js-flash-close js-ajax-error-dismiss" aria-label="Dismiss error">
        <svg aria-hidden="true" class="octicon octicon-x" height="16" version="1.1" viewBox="0 0 12 16" width="12"><path d="M7.48 8l3.75 3.75-1.48 1.48L6 9.48l-3.75 3.75-1.48-1.48L4.52 8 .77 4.25l1.48-1.48L6 6.52l3.75-3.75 1.48 1.48z"></path></svg>
      </button>
      You can't perform that action at this time.
    </div>


      
      <script crossorigin="anonymous" integrity="sha256-iEca8f7ED/lBjvvi3dFbaJavjXcvgXkATCVN/8JepJA=" src="https://assets-cdn.github.com/assets/frameworks-88471af1fec40ff9418efbe2ddd15b6896af8d772f8179004c254dffc25ea490.js"></script>
      <script async="async" crossorigin="anonymous" integrity="sha256-DuxGmfeMMuI8OEYt6MzjINPuMwidgQpY+B5ltvb8fv4=" src="https://assets-cdn.github.com/assets/github-0eec4699f78c32e23c38462de8cce320d3ee33089d810a58f81e65b6f6fc7efe.js"></script>
      
      
      
      
      
      
    <div class="js-stale-session-flash stale-session-flash flash flash-warn flash-banner d-none">
      <svg aria-hidden="true" class="octicon octicon-alert" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path d="M8.865 1.52c-.18-.31-.51-.5-.87-.5s-.69.19-.87.5L.275 13.5c-.18.31-.18.69 0 1 .19.31.52.5.87.5h13.7c.36 0 .69-.19.86-.5.17-.31.18-.69.01-1L8.865 1.52zM8.995 13h-2v-2h2v2zm0-3h-2V6h2v4z"></path></svg>
      <span class="signed-in-tab-flash">You signed in with another tab or window. <a href="">Reload</a> to refresh your session.</span>
      <span class="signed-out-tab-flash">You signed out in another tab or window. <a href="">Reload</a> to refresh your session.</span>
    </div>
    <div class="facebox" id="facebox" style="display:none;">
  <div class="facebox-popup">
    <div class="facebox-content" role="dialog" aria-labelledby="facebox-header" aria-describedby="facebox-description">
    </div>
    <button type="button" class="facebox-close js-facebox-close" aria-label="Close modal">
      <svg aria-hidden="true" class="octicon octicon-x" height="16" version="1.1" viewBox="0 0 12 16" width="12"><path d="M7.48 8l3.75 3.75-1.48 1.48L6 9.48l-3.75 3.75-1.48-1.48L4.52 8 .77 4.25l1.48-1.48L6 6.52l3.75-3.75 1.48 1.48z"></path></svg>
    </button>
  </div>
</div>

  </body>
</html>

