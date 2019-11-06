<!DOCTYPE html>
<html>

<head>
    <meta charset="utf-8" />
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <title>Crystal Collector</title>
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <!-- Style Sheets -->
    <link rel="stylesheet" type="text/css" href="assets/css/reset.css" />
    <link rel="stylesheet" type="text/css" href="assets/css/style.css" />
    <!-- Bootstrap -->
    <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.1.1/css/bootstrap.min.css" integrity="sha384-WskhaSGFgHYWDcbwN70/dfYBj47jz9qbsMId/iRN3ewGhXQFZCSftd1LZCfmhktB"
        crossorigin="anonymous">

</head>

<body>

    <div class="container">
        <!--Crystal Collector Jumbotron-->
        <div class="jumbotron" id="background">
            <h1 class="text-center">
                <strong>Crystal Collector!</strong>
            </h1>
        </div>

        <!--Main Content of Game-->
        <div class="row">
            <div class="col-lg-12">
                <!--Instructions-->
                <div class="card">
                    <div class="card-header1" id = "instructions">Instructions:</div>
                    <div class="card-body">Can you match your Score to the Target Score? Click a crystal to begin playing.</div>
                </div>
            </div>
        </div>
        <br>
        <div class="row">
            <!--Target Score-->
            <div class="col-lg-3">
                <div class="card">
                    <div class="card-header text-center" id = "targetScore">Target Score</div>
                    <div class="card-body text-center">
                        <div class="targetScore">
                        </div>
                    </div>
                </div>
            </div>
            <!--User Score-->
            <div class="col-lg-3">
                <div class="card">
                    <div class="card-header text-center" id = "score">Your Score</div>
                    <div class="card-body text-center" id = "userScore">
                    </div>
                </div>
            </div>
            <!--Crystals-->
            <div class="col-lg-6">
                <div class="card">
                    <div class="card-header text-center" id = "crystals">Click the Crystal</div>
                    <div class="card-body text-center">
                        <img src="assets/images/blue.jpg" alt="blue crystal" id="blue">
                        <img src="assets/images/green.jpg" alt="green crystal" id="green">
                        <img src="assets/images/purple.jpg" alt="purple crystal" id="purple">
                        <img src="assets/images/orange.jpg" alt="orange crystal" id="orange">
                    </div>
                </div>
            </div>
        </div>
        <br>
        <div class="row">
            <!--Win & Loss Counters-->
            <!--Wins-->
            <div class="col-lg-6">
                <div class="card">
                    <div class="card-header text-center" id = "wins">Wins</div>
                    <div class="card-body text-center" id = "win">
                        <!-- <strong>2</strong> -->
                    </div>
                </div>
            </div>
            <!--Losses-->
            <div class="col-lg-6">
                <div class="card">
                    <div class="card-header text-center" id = "lose">Losses</div>
                    <div class="card-body text-center" id = "losses">
                        <!-- <strong>4</strong> -->
                    </div>
                </div>
            </div>
        </div>

    </div>


    <!-- jQuery-->
    <script src="https://code.jquery.com/jquery-3.3.1.slim.min.js" integrity="sha384-q8i/X+965DzO0rT7abK41JStQIAqVgRVzpbzo5smXKp4YfRvH+8abtTE1Pi6jizo"
        crossorigin="anonymous"></script>
    <!-- JavaScript-->
    <script src="assets/javascript/game.js"></script>
</body>

</html>