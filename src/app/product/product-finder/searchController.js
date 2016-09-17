(function() {
    angular
        .module('augularWorkplace')
        .controller('SearchController', SearchController);

    function SearchController ($scope){
        $scope.productList =
        [
                {
                    // solid-chip
                    "series":"MA",
                    "name": "Conductive Polymer Aluminum Solid Electrolytic Capacitors",
                    "partNumber": "EPMA",
                    templateUrl: "../assets/product/solid-chip-type/ma.pdf"
                },
                {
                    "series":"MB",
                    "name": "Conductive Polymer Aluminum Solid Electrolytic Capacitors",
                    "partNumber": "EPMB",
                    templateUrl: "../assets/product/solid-chip-type/mb.pdf"
                },
                {
                    "series":"MR",
                    "name": "Conductive Polymer Aluminum Solid Electrolytic Capacitors",
                    "partNumber": "EPMR",
                    templateUrl: "../assets/product/solid-chip-type/mr.pdf"
                },
                {
                    "series":"MS",
                    "name": "Conductive Polymer Aluminum Solid Electrolytic Capacitors",
                    "partNumber": "EPMS",
                    templateUrl: "../assets/product/solid-chip-type/ms.pdf"

                },
                {
                    "series":"MV",
                    "name": "Conductive Polymer Aluminum Solid Electrolytic Capacitors",
                    "partNumber": "EPMV",
                    templateUrl: "../assets/product/solid-chip-type/mv.pdf"

                },
                {
                    "series":"MX",
                    "name": "Conductive Polymer Aluminum Solid Electrolytic Capacitors",
                    "partNumber": "EPMX",
                    templateUrl: "../assets/product/solid-chip-type/mx.pdf"

                },
                // solid-lead
                {
                    "series":"PA",
                    "name": "Conductive Polymer Aluminum Solid Electrolytic Capacitors",
                    "partNumber": "EPPA",
                    templateUrl: "../assets/product/solid-lead-type/pa.pdf"
                },
                {
                    "series":"PB",
                    "name": "Conductive Polymer Aluminum Solid Electrolytic Capacitors",
                    "partNumber": "EPPB",
                    templateUrl: "../assets/product/solid-lead-type/pb.pdf"
                },
                {
                    "series":"PB-2",
                    "name": "Conductive Polymer Aluminum Solid Electrolytic Capacitors",
                    "partNumber": "EPPB",
                    templateUrl: "../assets/product/solid-lead-type/pb-2.pdf"
                },
                {
                    "series":"PR",
                    "name": "Conductive Polymer Aluminum Solid Electrolytic Capacitors",
                    "partNumber": "EPPR",
                    templateUrl: "../assets/product/solid-lead-type/pr.pdf"
                },
                {
                    "series":"PS",
                    "name": "Conductive Polymer Aluminum Solid Electrolytic Capacitors",
                    "partNumber": "EPPS",
                    templateUrl: "../assets/product/solid-lead-type/ps.pdf"
                },
                {
                    "series":"PV",
                    "name": "Conductive Polymer Aluminum Solid Electrolytic Capacitors",
                    "partNumber": "EPPV",
                    templateUrl: "../assets/product/solid-chip-type/pv.pdf"
                },
                {
                    "series":"PX",
                    "name": "Conductive Polymer Aluminum Solid Electrolytic Capacitors",
                    "partNumber": "EPPX",
                    templateUrl: "../assets/product/solid-chip-type/px.pdf"
                },
                // miniature
                {
                    "series":"UH",
                    "name": "Radial Lead Aluminum Electrolytic Capacitors",
                    templateUrl: "../assets/product/miniature/43-44-UH.pdf"
                },
                {
                    "series":"TP",
                    "name": "Radial Lead Aluminum Electrolytic Capacitors",
                    templateUrl: "../assets/product/miniature/49-50-TP.pdf"
                },
                {
                    "series":"LA",
                    "name": "Radial Lead Aluminum Electrolytic Capacitors",
                    templateUrl: "../assets/product/miniature/57-58-LA.pdf"
                },
                {
                    "series":"SK",
                    "name": "Radial Lead Aluminum Electrolytic Capacitors",
                    templateUrl: "../assets/product/miniature/65-66-SK.pdf"
                },
                {
                    "series":"SL",
                    "name": "Radial Lead Aluminum Electrolytic Capacitors",
                    templateUrl: "../assets/product/miniature/69-70-SL.pdf"
                },
                {
                    "series":"SG",
                    "name": "Radial Lead Aluminum Electrolytic Capacitors",
                    templateUrl: "../assets/product/miniature/73-74-SG.pdf"
                },
                {
                    "series":"HG",
                    "name": "Radial Lead Aluminum Electrolytic Capacitors",
                    templateUrl: "../assets/product/miniature/81-82-HG.pdf"
                },
                {
                    "series":"EG",
                    "name": "Radial Lead Aluminum Electrolytic Capacitors",
                    templateUrl: "../assets/product/miniature/83-84-EG.pdf"
                },
                {
                    "series":"GC",
                    "name": "Radial Lead Aluminum Electrolytic Capacitors",
                    templateUrl: "../assets/product/miniature/85-86-GC.pdf"
                },
                // high-rip
                {
                    "series":"LR",
                    "name": "Radial Lead Aluminum Electrolytic Capacitors",
                    templateUrl: "../assets/product/high-rip/95-96-97-LR.pdf"
                },
                {
                    "series":"LH",
                    "name": "Radial Lead Aluminum Electrolytic Capacitors",
                    templateUrl: "../assets/product/high-rip/101-102-103-LH.pdf"
                },
                {
                    "series":"ZL",
                    "name": "Radial Lead Aluminum Electrolytic Capacitors",
                    templateUrl: "../assets/product/high-rip/107-108-ZL.pdf"
                },
                {
                    "series":"LF",
                    "name": "Radial Lead Aluminum Electrolytic Capacitors",
                    templateUrl: "../assets/product/high-rip/111-112-LF.pdf"
                },
                {
                    "series":"YA",
                    "name": "Radial Lead Aluminum Electrolytic Capacitors",
                    templateUrl: "../assets/product/high-rip/117-118-119-YA.pdf"
                },
                {
                    "series":"EB",
                    "name": "Radial Lead Aluminum Electrolytic Capacitors",
                    templateUrl: "../assets/product/high-rip/124-125-126-EB.pdf"
                },
                {
                    "series":"XF",
                    "name": "Radial Lead Aluminum Electrolytic Capacitors",
                    templateUrl: "../assets/product/high-rip/127-128-129-XF.pdf"
                },
                // snap-in-terminal
                {
                    "series":"GS GH",
                    "name": "Snap-in Terminal Type Aluminum Electrolytic Capacitors",
                    templateUrl: "../assets/product/snap-in-terminal/130-131-132-133-GS-GH.pdf"
                },
                {
                    "series":"MP",
                    "name": "Snap-in Terminal Type Aluminum Electrolytic Capacitors",
                    templateUrl: "../assets/product/snap-in-terminal/138-139-140-MP.pdf"
                },
                {
                    "series":"MZ",
                    "name": "Snap-in Terminal Type Aluminum Electrolytic Capacitors",
                    templateUrl: "../assets/product/snap-in-terminal/141-142-143-144-=MA_MZ.pdf"
                },
                {
                    "series":"KM",
                    "name": "Snap-in Terminal Type Aluminum Electrolytic Capacitors",
                    templateUrl: "../assets/product/snap-in-terminal/149-150-KM.pdf"
                },
                {
                    "series":"MQ",
                    "name": "Snap-in Terminal Type Aluminum Electrolytic Capacitors",
                    templateUrl: "../assets/product/snap-in-terminal/156-157-158-MQ.pdf"
                },
                // special application
                {
                    "series":"EH",
                    "name": "Radial Lead Aluminum Electrolytic Capacitors",
                    templateUrl: "../assets/product/special-app/159-160-EH.pdf"
                },
                {
                    "series":"XH",
                    "name": "Radial Lead Aluminum Electrolytic Capacitors",
                    templateUrl: "../assets/product/special-app/161-162-163-XH.pdf"
                },
                {
                    "series":"MH",
                    "name": "Screw Terminal Type Aluminum Electrolytic Capacitors",
                    templateUrl: "../assets/product/special-app/168-169-MH.pdf"
                }
            ];

        $scope.submit = function() {
            if($scope.newData == productList.series || productList.partNumber || productList.name) {
                return newData;
            } else {
                return error;
            }
        };
    }
})();
