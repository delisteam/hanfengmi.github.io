<template lang="html">
  <div class="texiao3">
    <router-link to="/"><a href="javascript:;" class="logo" ref="a"></a></router-link>
    <div class="content">
      <Row class="item-list" type="flex" justify="center">
        <Col class="item-box" :xs="24" :sm="12" :md="8" :lg="5" >
          <div class="shine"></div>
          <div class="shang">
            <div class="cloud r-cloud"></div>
            <div class="cloud r-sCloud "></div>
            <div class="cloud r-bCloud "></div>
            <div class="cloud Bigcloud"></div>
            <div class="cloud smallcloud"></div>
            <svg class="mountain">
              <path d="M0 50 L30 50 L70 80 L110 50 L130 50 L160 30 L190 50 L250 10 L280 30 L320 15 L400 30 L400 200 L0 100 Z" style="fill:#8ad4f4"/>
              <path d="M100 100 L200 30 L430 200 L100 100 Z" style="fill:#d0fff7"/>
              <path d="M170 100 L190 65 L180 65 L200 30  L430 200 L170 100 Z" style="fill:#68c2e1"/>
              <path d="M250 100 L265 85 C270 80,280 80,290 80 L340 80 L350 70 L360 70 L370 55 C385 50,390 50,400 50 L400 100 Z" style="fill:#8fe3d2"/>
              <path d="M370 55 C375 60,385 60,390 60 C394 65,398 68,400 70 L400 50 C390 50,380 50,370 55 Z" style="fill:#69cfbe"/>
            </svg>
            <div class="fengche">
              <div class="feng-top">
                <div class="shadow"></div>
                <div class="blow">
                  <div class="blow-row blow-row1"></div>
                  <div class="blow-row blow-row2"></div>
                  <div class="blow-row blow-row3"></div>
                  <div class="blow-row blow-row4"></div>
                  <div class="blow-row blow-row5"></div>
                  <div class="blow-row blow-row6"></div>
                </div>
                <div class="fengcheshan">
                  <div class="shanye s"></div>
                  <div class="shanye x"></div>
                  <div class="shanye z"></div>
                  <div class="shanye y"></div>
                  <span class="center"></span>
                </div>
              </div>
              <div class="feng-center">
                <div class="chuan"></div>
                <div class="chuan xia"></div>
              </div>
            </div>
          </div>
          <div class="xia">
            <svg class="caocong">
              <defs>
                <linearGradient id="linear"  x1="0" x2="0" y1="0" y2="1">
                  <stop offset="0%" stop-color="#2a7053"/>
                  <stop offset="100%" stop-color="#91c4b0"/>
                </linearGradient>
              </defs>
              <path d="M0 15 L60 15 C75 15, 75 18,80 20 C85 25, 90 26,100,26 L130 26 C130 20,135 20,138 20 C132 25,132 30,132 24 C133 25,135 22,145 22 C142 23,136 30,136 25 L170 25 C180 30,185 50,190 70 L220 70 C300 40,280 20,400 25  L400 100 L0 100 Z" style="fill:url(#linear)"/>
              <!-- <rect x="0" y="0" width="400" height="200" fill="url(#linear)" /> -->
            </svg>
            <div class="jilong">
              <div class="room">
                <svg class="room-svg">
                  <path d="M0 60 L20 24 L55 0 L90 24 L110 60 L110 120 L4 120 L4 60 Z" style="fill:#e5585e"/>
                  <path d="M-2 64 L20 24 L55 3 L90 24 L110 60" style="fill:#e5585e;stroke:rgb(250,250,250);stroke-width:6"/>
                  <path d="M4 66 L24 28 L56 8 L86 28 L110 66" style="fill:#e5585e;stroke:rgb(82,3,6);stroke-width:4"/>
                  <path d="M42 20 L70 20" style="fill:#e5585e;stroke:dc4a4d;stroke-width:3" />
                  <path d="M26 30 L84 30" style="fill:#e5585e;stroke:dc4a4d;stroke-width:3" />
                  <path d="M20 40 L90 40" style="fill:#e5585e;stroke:dc4a4d;stroke-width:3" />
                  <path d="M15 50 L96 50" style="fill:#e5585e;stroke:dc4a4d;stroke-width:3" />
                  <path d="M10 60 L102 60" style="fill:#e5585e;stroke:dc4a4d;stroke-width:3" />
                  <path d="M5 70 L108 70" style="fill:#e5585e;stroke:dc4a4d;stroke-width:3" />
                  <path d="M5 80 L108 80" style="fill:#e5585e;stroke:dc4a4d;stroke-width:3" />
                  <path d="M5 90 L108 90" style="fill:#e5585e;stroke:dc4a4d;stroke-width:3" />
                  <path d="M5 100 L108 100" style="fill:#e5585e;stroke:dc4a4d;stroke-width:3" />
                  <path d="M5 110 L108 110" style="fill:#e5585e;stroke:dc4a4d;stroke-width:3" />
                </svg>
                <div class="door">
                  <div class="door-in"></div>
                  <div class="window"></div>
                </div>
                <div class="wall">
                  <div class="top-wall"></div>
                  <div class="window"></div>
                  <div class="window window-r"></div>
                </div>
              </div>
              <div class="chibang">
                <div class="l-chi"></div>
                <div class="r-chi">
                  <div class="fantuan"></div>
                  <div class="shou shou1"></div>
                  <div class="shou shou2"></div>
                  <div class="shou shou3"></div>
                  <div class="jishou"></div>
                </div>
              </div>
              <div class="jiguan">
                <span></span>
                <span></span>
                <span></span>
              </div>
              <div class="jifoot"></div>
              <div class="xiaoji">
                <div class="eye">
                  <span class="close-eye"></span>
                  <div class="l-eye"></div>
                  <div class="r-eye"></div>
                </div>
                <div class="mouth"></div>
                <div class="haixiu"></div>

              </div>
            </div>
          </div>
        </Col>
      </Row>
    </div>
  </div>
</template>

<script>
export default {
}
</script>

<style lang="scss" scoped>
@keyframes move {
  0% {left:-150px}
  100% {left:400px}
}
@keyframes move-f {
  0% {left:400px}
  100% {left:-150px}
}
@keyframes shine {
  0% {opacity: 0}
  30% {opacity: 1}
  70% {opacity: 1}
  100% {opacity: 0}
}
@keyframes rotate {
  0% {transform: rotate(0deg);}
  100% {transform: rotate(360deg);}
}
@keyframes danHeight {
  0% {height:180px;}
  50% {height:184px;}
  100% {height:180px;}
}
@keyframes jiR {
  0% {width:30px;}
  50% {width:35px;}
  100% {width:30px;}
}
@keyframes closeE {
  0% {top:-15px;}
  2% {top:-5px;}
  4% {top:-15px;}
  56% {top:-15px;}
  58% {top:-5px;}
  60% {top:-15px;}
}
@keyframes mouthR {
  0% {border-radius:0 0 0 0;}
  50% {border-radius:0 6px 0 6px;}
  100% {border-radius:0 0 0 0;}
}
@keyframes mouthIn {
  0% {height:1px;}
  50% {height:3px;}
  100% {height:1px;}
}
.texiao3 {
  height:100%;
  width:100%;
  background: #000;
  .content {
    position: absolute;
    width:100%;
    margin:100px 0 0 0;
    background: #f2f1f1;
    z-index: 19;
    box-sizing: border-box;
    padding:30px 0;
    .item-list {
      width:100%;
      .item-box {
        height:650px;
        background: linear-gradient(to bottom, #79d1f9, #cbebf2 50%, #6edbb2);
        position:relative;
        overflow: hidden;
      }
    }
  }
  .shine {
    position:absolute;
    left:220px;
    top:-100px;
    transform:rotate(-35deg);
    width: 120px;
  	height: 0;
  	border-bottom: 900px solid rgba(250,250,250,.15);
  	border-left: 32px solid transparent;
  	border-right: 32px solid transparent;
    animation: shine 10s linear infinite;
    z-index:99;
  }
  .mountain {
    width:100%;
    height:100px;
    position:absolute;
    bottom:0;
    left:0;
  }
  .cloud {
    position: absolute;
    width:120px;
    height:30px;
    top:80px;
    left:100px;
    background: #bceafa;
    border-radius: 20px;
    &:after {
      content:'';
      display: block;
      width:50px;
      height:12px;
      background: #bceafa;
      position: absolute;
      bottom:0;
      right:-20px;
      border-radius: 10px;
    }
  }
  .r-cloud {
    transform: rotateY(180deg);
    animation: move 25s linear infinite;
  }
  .Bigcloud {
    top:40px;
    left:450px;
    transform: scale(1.2);
    opacity: .6;
    animation: move-f 70s 15s linear infinite;
  }
  .smallcloud {
    top:140px;
    width:100px;
    transform: scale(0.5);
    animation: move-f 30s linear infinite;
  }
  .r-sCloud {
    top:200px;
    width:100px;
    transform:scale(0.5) rotateY(180deg);
    animation: move 20s linear infinite;
  }
  .r-bCloud {
    top:20px;
    opacity: .6;
    transform:scale(1.2) rotateY(180deg);
    animation: move 80s linear infinite;
  }
  .shang {
    width:100%;
    height:250px;
    position: relative;
    // background: rgba(231,45,33,.3);
  }

  .fengche {
    width:55px;
  	height: 0;
  	border-bottom: 60px solid #f0f4f3;
  	border-left: 10px solid transparent;
  	border-right: 10px solid transparent;
    // background: #f0f4f3;
    position:absolute;
    bottom:20px;
    left:280px;
    .feng-top {
      position:absolute;
      width:0px;
    	height: 0;
      top:-16px;
    	border-bottom: 16px solid #e3524f;
    	border-left: 18px solid transparent;
    	border-right: 18px solid transparent;
      .shadow {
        position:absolute;
        width:0px;
      	height: 0;
        top:0px;
        right:-10px;
      	border-bottom: 16px solid rgba(0,0,0,.3);
      	border-left: 4px solid transparent;
      	border-right: 4px solid transparent;
        transform: skewX(40deg);
      }
      .fengcheshan {
        width:6px;
        height:6px;
        top:-3px;
        left:50%;
        margin-left:-3px;
        position: absolute;
        border-radius: 50%;
        background: #fff;
        animation: rotate 8s linear infinite;
        z-index: 99;
        .center {
          position: absolute;
          width:100%;
          height:100%;
          background: #fff;
          z-index:99;
          left:0px;
          top:0px;
          border-radius: 50%;
        }
        .shanye {
          position: absolute;
          width:60px;
          height:2px;
          top:2px;
          left:3px;
          background: #9d9885;
          transform-origin: left;
          &:after {
            content: '';
            width:40px;
            height:10px;
            position: absolute;
            top:-10px;
            right:0;
            background: #fef8e2;
            border-radius: 4px 4px 0px 0px;
          }
        }
        .x {
          transform: rotate(90deg);
        }
        .z {
          transform: rotate(180deg);
        }
        .y {
          transform: rotate(270deg);
        }
      }
      .blow {
        position: absolute;
        width:80px;
        height:80px;
        left:-40px;
        top:-40px;
        animation: rotate 3s linear infinite;
        .blow-row {
          position: absolute;
          width:40px;
          height:40px;
          border-radius: 50%;
          left:50%;
          top:50%;
          margin-left:-20px;
          margin-top:-20px;
          border-left: 1px solid transparent;
        	border-right: 1px solid transparent;
        }
        .blow-row1 {
          border-bottom: 1px solid #fff;
          border-top: 1px solid #fff;
        }
        .blow-row2 {
          border-bottom: 1px solid transparent;
          border-top: 1px solid #fff;
          transform: scale(2) rotate(30deg);
        }
        .blow-row3 {
          border-bottom: 1px solid transparent;
          border-top: 1px solid #fff;
          transform: scale(0.5) rotate(70deg);
        }
        .blow-row4 {
          border-bottom: 1px solid transparent;
          border-top: 1px solid #fff;
          transform: scale(1.4) rotate(130deg);
        }
        .blow-row5 {
          border-bottom: 1px solid transparent;
          border-top: 1px solid #fff;
          transform: scale(1.4) rotate(260deg);
        }
        .blow-row6 {
          border-bottom: 1px solid transparent;
          border-top: 1px solid #fff;
          transform: scale(2) rotate(260deg);
        }
      }
    }
  }
  .feng-center {
    width:100%;
    height:60px;
    position: absolute;
    .chuan {
      position:absolute;
      top:15px;
      left:12px;
      width:14px;
      height:14px;
      background: #d59651;
      box-shadow: inset 2px 1px 1px rgba(0,0,0,.6);
      border-radius: 7px 7px 0 0;
      &:after {
        position: absolute;
        content: '';
        width:16px;
        height:5px;
        bottom:-5px;
        left:-1px;
        background: #8eccc0;
      }
    }
    .xia {
      top:42px;
      &:after {
        background: #aec3c3;
      }
    }
  }
  .xia {
    width:100%;
    height:400px;
    background: #6edbb2;
    position: relative;
    .caocong {
      height:100px;
      width:100%;
    }
    .jilong {
      height:100%;
      height:320px;
      background: #9dca3a;
      margin-top:-10px;
      position: relative;
      .room {
        position: absolute;
        top:-100px;
        right:-25px;
        width:210px;
        height:120px;
        .room-svg {
          position: absolute;
          left:0;
          top:0;
          width:110px;
          height:100%;
        }
        .door {
          position: absolute;
          width:110px;
          height:60px;
          // background:#000;
          bottom:0;
          left:0;
          .door-in {
            margin-top:15px;
            margin-left:15px;
            width:55px;
            height:45px;
            background: #7d8e80;
            box-shadow: inset -8px 14px 0px #59615c;
            &:after {
              position: absolute;
              content: '';
              width:80px;
              height:8px;
              top:7px;
              left:10px;
              background: #fff;
              box-shadow: 1px -1px 1px #fff;
            }
          }
          .window {
            position:absolute;
            bottom:20px;
            right:0;
            width:40px;
            height:25px;
            box-sizing: border-box;
            border:5px solid #fff;
            &:after {
              position: absolute;
              content: '';
              width:40px;
              right:-5px;
              top:15px;
              height:25px;
              box-sizing: border-box;
              border:5px solid #fff;
              border-top:none;
            }
          }
        }
        .wall {
          position: absolute;
          width:100px;
          height:65px;
          background: #b8232c;
          border-top:5px solid #fff;
          bottom:0;
          right:0;
          &:after {
            position: absolute;
            left:0;
            content:'';
            width:100%;
            height:20px;
            background:rgba(0,0,0,.4);
          }
          .top-wall {
            position:absolute;
            width:100%;
            height:35px;
            background: #512e30;
            top:-40px;
            left:-10px;
            transform: skewX(30deg);
            &:after {
              position:absolute;
              content:'';
              width:100%;
              height:20px;
              top:-20px;
              left:-11px;
              background: #603938;
              transform: skewX(47deg);
            }
          }
          .window {
            position: absolute;
            width:15px;
            height:23px;
            top:13px;
            left:20px;
            background: #45220f;
            border:3px solid #fff;
          }
          .window-r {
            left:55px;
          }
        }
      }
      .jifoot {
        position: absolute;
        width:80px;
        height:10px;
        bottom:125px;
        left:50%;
        margin-left:-40px;
        background: rgba(0,0,0,.2);
        border-radius: 50%;
        transform: rotateX(50deg);
        font-size: 30px;
        font-family:inherit;
        color:#584510;
        &:after {
          content: '7';
          position: absolute;
          left:12px;
          top:-30px;
          transform: rotateX(180deg) ;
        }
        &:before {
          content: '7';
          position: absolute;
          right:12px;
          top:-30px;
          transform: rotate(180deg) ;
        }
      }
      .xiaoji {
        position:absolute;
        top:0;
        left:50%;
        margin-left:-75px;
        width:150px;
        height:180px;
        background: #fffbf8;
        border-radius: 50%;
        animation: danHeight 2s linear infinite;
        &:after {
          position: absolute;
          content:'';
          left:-2px;
          width:155px;
          height:120px;
          background: #fffbf8;
          bottom:0px;
          border-radius: 15px 15px 90px 90px/60px 60px 85px 85px;
          box-shadow: inset -2px -6px 1px #f0cecc;
        }
        .eye {
          width:52px;
          height:14px;
          margin:30px auto;
          position: relative;
          .close-eye {
            position:absolute;
            width:100%;
            height:15px;
            top:-15px;
            z-index: 99;
            left:0;
            animation:closeE 5s linear infinite;
            &:before {
              position: absolute;
              content: "";
              width:14px;
              height:12px;
              left:-4px;
              bottom:0;
              background: #fff;
              border-radius: 50%;
            }
            &:after {
              position: absolute;
              content: "";
              width:14px;
              height:12px;
              right:-4px;
              bottom:0;
              background: #fff;
              border-radius: 50%;
            }
          }
          div {
            width:6px;
            height:100%;
            border-radius: 50%;
            background: #000;
            position: relative;
          }
          div:after {
            position: absolute;
            content: '';
            width:2px;
            height:2px;
            background: #fff;
            border-radius: 50%;
            top:3px;
            left:2px;
          }
          .l-eye {
            float:left;
          }
          .r-eye {
            float:right;
          }
        }
        .mouth {
          position: absolute;
          width:13px;
          height:13px;
          z-index: 99;
          top:55px;
          left:50%;
          margin-left:-6px;
          transform: rotate(50deg);
          &:before {
            position: absolute;
            width:10px;
            height:1px;
            top:6px;
            left:2px;
            content:'';
            background: #ad6a05;
            z-index: 99;
            transform: rotate(-50deg);
            border-radius: 50%;
            animation:mouthIn 1s linear infinite;
          }
          &:after {
            position: absolute;
            width:100%;
            height:100%;
            background: #e4b90d;
            border:1px solid #dbb206;
            content: "";
            left:0;
            top:0;
            transform: skew(10deg);
            animation: mouthR 1s linear infinite;
          }
        }
        .haixiu {
          position: absolute;
          width:90px;
          height:12px;
          top:48px;
          left:50%;
          margin-left:-45px;
          // background: red;
          z-index:99;
          &:before {
            position: absolute;
            content: '';
            width:14px;
            height:5px;
            left:10px;
            top:3px;
            background:#f97e68;
            box-shadow:-2px 0px 1px 4px rgba(245,118,102,.6);// rgba(245,118,102)
            border-radius:50%;
          }
          &:after {
            position: absolute;
            content: '';
            width:14px;
            height:5px;
            right:10px;
            top:3px;
            background:#f97e68;
            box-shadow:2px 0px 1px 4px rgba(245,118,102,.6);// rgba(245,118,102)
            border-radius:50%;
          }
        }
      }
      .jiguan {
        width:35px;
        height:30px;
        position: absolute;
        top:-15px;
        left:50%;
        margin-left:-17px;
        span {
          float:left;
          width:20px;
          height:100%;
          background: #dc2829;
          border-radius: 20px 15px 0 0/30px 30px 0 0;
        }
        span:nth-of-type(2){
          position: absolute;
          transform: scale(.6);
          left:12px;
        }
        span:nth-of-type(3){
          position: absolute;
          transform: scale(.3);
          left:20px;
        }
      }
      .chibang {
        position:absolute;
        width:180px;
        height:55px;
        left:50%;
        top:60px;
        margin-left:-87px;
        .l-chi {
          width:40px;
          height:60px;
          background: #edcacb;
          border-radius: 30px 0px 0px 15px/33px 0px 0px 18px;
          &:after {
            position: absolute;
            width:15px;
            height:40px;
            left:4px;
            top:2px;
            background: #fff;
            content: '';
            border-radius:50%;
            transform: rotate(25deg);
          }
        }
        .r-chi {
          position: absolute;
          left:150px;
          top:0;
          width:30px;
          height:60px;
          background: linear-gradient(to right,#fff,#f1bac3);
          border-radius: 0px 30px 15px 0;
          animation: jiR 2s linear infinite;
          .shou {
            position: absolute;
            background: #f4eae9;
            border-radius:40%;
            box-shadow: 0px 2px 2px rgba(0,0,0,.3);
            z-index:98;
          }
          .shou1 {
            width:50px;
            height:16px;
            right:16px;
            top:18px;
            transform: rotate(40deg);
          }
          .shou2 {
            width:40px;
            height:16px;
            right:24px;
            top:28px;
            transform: rotate(24deg);
          }
          .shou3 {
            width:40px;
            height:13px;
            right:26px;
            top:44px;
            transform: rotate(30deg);
          }
          .fantuan {
            position: absolute;
            width:34px;
            height:30px;
            right:55px;
            top:8px;
            background: #eec406;
            border-radius: 20px 20px 10px 10px/30px 30px 10px 10px;
            transform: rotate(-50deg) scaleY(1.3) ;
            z-index:90;
            box-shadow: inset 0px -4px 3px rgba(162,133,12,.8);
          }
          .jishou {
            position: absolute;
            width:50px;
            height:44px;
            background: #f4eae9;
            z-index:99;
            right:6px;
            border-radius: 15px 46px 35px 40px/20px 30px 30px 40px;
            bottom:-5px;
            transform: rotate(20deg) skew(-10deg);
            box-shadow: 4px 5px 1px #f0cecc;
          }
        }
      }
    }
  }
  .logo {
    position:fixed;
    top:30px;
    left:50%;
    width:50px;
    height:50px;
    margin-left:-25px;
    background:url('../../assets/img/fan-logo-hollow.png') repeat-x;
    background-size:50px 50px;
    z-index: 9;
  }
}

</style>
