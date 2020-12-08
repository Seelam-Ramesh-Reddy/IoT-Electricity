import { Component, OnInit } from '@angular/core';
import { User } from '../user';
import { UserRegistationService } from '../user-registation.service';
import { DatePipe } from '@angular/common';
import 'leader-line';
declare let LeaderLine: any;
import { interval } from 'rxjs';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.css'],
  providers: [DatePipe]
})
export class RegistrationComponent implements OnInit {

  public user: User;
  public user1: User;
  private closeLine: any;
  private rmuLine1: any;
  private rmuLine2: any
  private toogleSwitch1: any;
  private toogleSwitch2: any;

  public transformer1: string;
  public transformer2: string;
  public transformer3: string;
  public transformer4: string;
  private rmu1bubble1: boolean=true;
  private rmu2bubble2: boolean=true;

  public home1: string;
  public home2: string;
  public home3: string;
  public home4: string;

  // user: User=new User("xxxxx","",this.datePipe.transform(new Date(), 'yyyy-MM-dd'));
  message: any;

  constructor(private service: UserRegistationService, private datePipe: DatePipe) { }

  ngOnInit() {
    this.toogleSwitch1 = document.getElementById('switch-input1');
    this.toogleSwitch2 = document.getElementById('switch-input2');
    this.registerNowrmu1();
    this.loadDesign();
    this.registerNowrmu2();
  }


  public registerNowrmu1() {

    //     let resp= this.service.deleteUser(id);
    //  resp.subscribe((data)=>this.users=data);
    interval(1000).subscribe(x => {
      this.service.doRegistration().subscribe(data => {
        this.user = data;
        console.log(this.user);
        if (this.user.switchs === "ON") {
          this.toogleSwitch1.setAttribute('checked', 'checked');
          this.rmuLine1.dash = { animation: true };
        } else {
          if(this.rmu1bubble1){
            this.rmu1bubble1=false;
           // this.showbubble1();
          }
          this.rmuLine1.dash = true;
          this.toogleSwitch1.removeAttribute('checked');
        }
      });
    });

  }


  public registerNowrmu2() {

    //     let resp= this.service.deleteUser(id);
    //  resp.subscribe((data)=>this.users=data);
    interval(1000).subscribe(x => {
      this.service.doRegistrationrmu2().subscribe(data => {
        this.user1 = data;
        console.log(this.user1);
        if (this.user1.switchs === "ON") {
          this.rmu2bubble2=true;
          this.closeLine.color = 'black';
          this.rmuLine2.dash = { animation: true };
          this.toogleSwitch2.setAttribute('checked', 'checked');
        } else {
          if(this.rmu2bubble2){
            this.rmu2bubble2=false;
            this.showbubble();
          }
          this.rmuLine2.dash = true;
          this.toogleSwitch2.removeAttribute('checked');
        }
      });
    });

  }

  public loadDesign() {
    var powerstation = document.getElementById('powerstation');
    var rmu1 = document.getElementById('rmu1');
    var rmu2 = document.getElementById('rmu2');
    var transformer_1 = document.getElementById('transformer-1');
    var transformer_2 = document.getElementById('transformer-2');
    var transformer_3 = document.getElementById('transformer-3');
    var transformer_4 = document.getElementById('transformer-4');
    var home_1 = document.getElementById('home-1');
    var home_2 = document.getElementById('home-2');
    var home_3 = document.getElementById('home-3');
    var home_4 = document.getElementById('home-4');
    var home_5 = document.getElementById('home-5');
    var home_6 = document.getElementById('home-6');
    var home_7 = document.getElementById('home-7');
    var home_8 = document.getElementById('home-8');


    setTimeout(() => {
      this.rmuLine1 = new LeaderLine(powerstation, rmu1, {
        color: 'black', size: 2.5,
        path: 'grid',
        endLabel: LeaderLine.pathLabel('line1'),
        startPlug: 'arrow1', endPlug: 'arrow',
        startSocket: 'top', endSocket: 'left',
        dash: { animation: true }
      });

      this.rmuLine2 = new LeaderLine(powerstation, rmu2, {
        color: 'black', size: 2.5,
        path: 'grid',
        endLabel: LeaderLine.pathLabel('line2'),
        startPlug: 'arrow1', endPlug: 'arrow',
        startSocket: 'bottom', endSocket: 'left',
        dash: { animation: true }
      });

      new LeaderLine(rmu1, transformer_1, {
        endLabel: 'line3',
        color: 'black', size: 2.5,
        path: 'grid',
        startLabel: 'RMU-1',
        startPlug: 'arrow1', endPlug: 'arrow',
        startSocket: 'top', endSocket: 'left'
      });

      new LeaderLine(rmu1, transformer_2, {
        color: 'black', size: 2.5,
        path: 'grid',
        endLabel: LeaderLine.pathLabel('line4'),
        startPlug: 'arrow1', endPlug: 'arrow',
        startSocket: 'bottom', endSocket: 'left'
      });

      new LeaderLine(rmu2, transformer_3, {
        color: 'black', size: 2.5,
        path: 'grid',
        endLabel: LeaderLine.pathLabel('line5'),
        startLabel: 'RMU-2',
        startPlug: 'arrow1', endPlug: 'arrow',
        startSocket: 'top', endSocket: 'left'
      });

      this.closeLine = new LeaderLine(rmu2, transformer_4, {
        color: 'black', size: 2.5,
        path: 'grid',
        endLabel: LeaderLine.pathLabel('line6'),
        startPlug: 'arrow1', endPlug: 'arrow',
        startSocket: 'bottom', endSocket: 'left'
      });

      new LeaderLine(transformer_1, home_1, {
        color: 'black', size: 2.5,
        path: 'grid',
        topLabel: 'Transformer 1',
        startPlug: 'arrow1', endPlug: 'arrow',
        startSocket: 'right', endSocket: 'left'
      });

      new LeaderLine(transformer_1, home_2, {
        color: 'black', size: 2.5,
        path: 'grid',
        startPlug: 'arrow1', endPlug: 'arrow',
        startSocket: 'right', endSocket: 'left'
      });

      new LeaderLine(transformer_2, home_3, {
        color: 'black', size: 2.5,
        path: 'grid',
        startPlug: 'arrow1', endPlug: 'arrow',
        startSocket: 'right', endSocket: 'left'
      });

      new LeaderLine(transformer_2, home_4, {
        color: 'black', size: 2.5,
        path: 'grid',
        startPlug: 'arrow1', endPlug: 'arrow',
        startSocket: 'right', endSocket: 'left'
      });

      new LeaderLine(transformer_3, home_5, {
        color: 'black', size: 2.5,
        path: 'grid',
        startPlug: 'arrow1', endPlug: 'arrow',
        startSocket: 'right', endSocket: 'left'
      });

      new LeaderLine(transformer_3, home_6, {
        color: 'black', size: 2.5,
        path: 'grid',
        startPlug: 'arrow1', endPlug: 'arrow',
        startSocket: 'right', endSocket: 'left'
      });

      new LeaderLine(transformer_4, home_7, {
        color: 'black', size: 2.5,
        path: 'grid',
        startPlug: 'arrow1', endPlug: 'arrow',
        startSocket: 'right', endSocket: 'left'
      });

      new LeaderLine(transformer_4, home_8, {
        color: 'black', size: 2.5,
        path: 'grid',
        startPlug: 'arrow1', endPlug: 'arrow',
        startSocket: 'right', endSocket: 'left'
      });
    }, 100);

  }
  public fadeLine() {
    this.closeLine.color = 'red';
    this.rmuLine2.dash = true;
  }

  public showbubble() {
    var speechBubble = document.getElementById('bubble');
    speechBubble.style.animationName = "expand-bounce";
    speechBubble.style.animationDuration = "0.25s";

    setTimeout(() => {
      speechBubble.style.animationName = "shrink";
      speechBubble.style.animationDuration = "0.1s";
    }, 10000);
  }

  
  public showbubble1() {
    var speechBubble = document.getElementById('bubble1');
    speechBubble.style.animationName = "expand-bounce";
    speechBubble.style.animationDuration = "0.25s";

     setTimeout(() => {
       speechBubble.style.animationName = "shrink";
       speechBubble.style.animationDuration = "0.1s";
     }, 3000);
  }

  public transformmer1Clicked() {
    this.readtransformer1();
    document.getElementById("power1").style.display = 'block';
    document.getElementById("transformer1").style.display = 'none';
    setTimeout(() => {
      document.getElementById("power1").style.display = 'none';
      document.getElementById("transformer1").style.display = 'block';
    }, 1200000);
  }

  public transformmer2Clicked() {
    this.readtransformer2();
    document.getElementById("power2").style.display = 'block';
    document.getElementById("transformer2").style.display = 'none';
    setTimeout(() => {
      document.getElementById("power2").style.display = 'none';
      document.getElementById("transformer2").style.display = 'block';
    }, 1200000);
  }
  public transformmer3Clicked() {
    this.readtransformer3();
    document.getElementById("power3").style.display = 'block';
    document.getElementById("transformer3").style.display = 'none';
    setTimeout(() => {
      document.getElementById("power3").style.display = 'none';
      document.getElementById("transformer3").style.display = 'block';
    }, 1200000);
  }
  public transformmer4Clicked() {
    this.readtransformer4();
    document.getElementById("power4").style.display = 'block';
    document.getElementById("transformer4").style.display = 'none';
    setTimeout(() => {
      document.getElementById("power4").style.display = 'none';
      document.getElementById("transformer4").style.display = 'block';
    }, 1200000);
  }
  public readtransformer1() {
    this.service.readtransformer1()
      .subscribe((data) => this.transformer1 = data.toString());
  }
  public readtransformer2() {
    this.service.readtransformer2()
      .subscribe((data) => this.transformer2 = data.toString());
  }
  public readtransformer3() {
    this.service.readtransformer3()
      .subscribe((data) => this.transformer3 = data.toString());
  }
  public readtransformer4() {
    this.service.readtransformer4()
      .subscribe((data) => this.transformer4 = data.toString());
  }
  public home1Clicked(){
    this.service.readhome1()
      .subscribe((data) => {
        this.home1 = data.toString();
        document.getElementById("result1").style.display = 'block';
        document.getElementById("home1").style.display = 'none';
        setTimeout(() => {
          document.getElementById("result1").style.display = 'none';
          document.getElementById("home1").style.display = 'block';
        }, 1200000);
      });
  }
  public home2Clicked(){
    this.service.readhome2()
    .subscribe((data) => {
      this.home2 = data.toString();
      document.getElementById("result2").style.display = 'block';
      document.getElementById("home2").style.display = 'none';
      setTimeout(() => {
        document.getElementById("result2").style.display = 'none';
        document.getElementById("home2").style.display = 'block';
      }, 1200000);
    });
  }
  public home3Clicked(){
    this.service.readhome3()
    .subscribe((data) => {
      this.home3 = data.toString();
      document.getElementById("result3").style.display = 'block';
      document.getElementById("home3").style.display = 'none';
      setTimeout(() => {
        document.getElementById("result3").style.display = 'none';
        document.getElementById("home3").style.display = 'block';
      }, 1200000);
    });
  }
  public home4Clicked(){
    this.service.readhome4()
    .subscribe((data) => {
      this.home4 = data.toString();
      document.getElementById("result4").style.display = 'block';
      document.getElementById("home4").style.display = 'none';
      setTimeout(() => {
        document.getElementById("result4").style.display = 'none';
        document.getElementById("home4").style.display = 'block';
      }, 1200000);
    });
  }

}
