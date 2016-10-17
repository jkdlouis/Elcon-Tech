(function() {
    angular
        .module('augularWorkplace')
        .controller('SearchController', SearchController);

    function SearchController (){
        var vm = this;
        vm.productList =
        [
                {
                    // solid-chip
                    "series":"MA",
                    "name": "Conductive Polymer Aluminum Solid Electrolytic Capacitors",
                    "partNumber": "EPMA",
                    templateUrl: "../assets/product/solid-chip-type/ma.pdf",
                    "image": "../assets/product/solid-chip-type/ma.png",
                    "alt": "MA Series Conductive Polymer Aluminum Solid Electrolytic Capacitors"
                },
                {
                    "series":"MB",
                    "name": "Conductive Polymer Aluminum Solid Electrolytic Capacitors",
                    "partNumber": "EPMB",
                    templateUrl: "../assets/product/solid-chip-type/mb.pdf",
                    "image": "../assets/product/solid-chip-type/mb.png",
                    "alt": "MB Series Conductive Polymer Aluminum Solid Electrolytic Capacitors"
                },
                {
                    "series":"MR",
                    "name": "Conductive Polymer Aluminum Solid Electrolytic Capacitors",
                    "partNumber": "EPMR",
                    templateUrl: "../assets/product/solid-chip-type/mr.pdf",
                    "image": "../assets/product/solid-chip-type/mr.png",
                    "alt": "MR Series Conductive Polymer Aluminum Solid Electrolytic Capacitors"
                },
                {
                    "series":"MS",
                    "name": "Conductive Polymer Aluminum Solid Electrolytic Capacitors",
                    "partNumber": "EPMS",
                    templateUrl: "../assets/product/solid-chip-type/ms.pdf",
                    "image": "../assets/product/solid-chip-type/ms.png",
                    "alt": "MS Series Conductive Polymer Aluminum Solid Electrolytic Capacitors"

                },
                {
                    "series":"MV",
                    "name": "Conductive Polymer Aluminum Solid Electrolytic Capacitors",
                    "partNumber": "EPMV",
                    templateUrl: "../assets/product/solid-chip-type/mv.pdf",
                    "image": "../assets/product/solid-chip-type/mv.png",
                    "alt": "MV Series Conductive Polymer Aluminum Solid Electrolytic Capacitors"

                },
                {
                    "series":"MX",
                    "name": "Conductive Polymer Aluminum Solid Electrolytic Capacitors",
                    "partNumber": "EPMX",
                    templateUrl: "../assets/product/solid-chip-type/mx.pdf",
                    "image": "../assets/product/solid-chip-type/mx.png",
                    "alt": "MX Series Capacitors"

                },
                // solid-lead
                {
                    "series":"PA",
                    "name": "Conductive Polymer Aluminum Solid Electrolytic Capacitors",
                    "partNumber": "EPPA",
                    templateUrl: "../assets/product/solid-lead-type/pa.pdf",
                    "image": "../assets/product/solid-lead-type/pa.png",
                    "alt": "PA Series Conductive Polymer Aluminum Solid Electrolytic Capacitors"
                },
                {
                    "series":"PB",
                    "name": "Conductive Polymer Aluminum Solid Electrolytic Capacitors",
                    "partNumber": "EPPB",
                    templateUrl: "../assets/product/solid-lead-type/pb.pdf",
                    "image": "../assets/product/solid-lead-type/pb.png",
                    "alt": "PB Series Conductive Polymer Aluminum Solid Electrolytic Capacitors"
                },
                {
                    "series":"PB-2",
                    "name": "Conductive Polymer Aluminum Solid Electrolytic Capacitors",
                    "partNumber": "EPPB",
                    templateUrl: "../assets/product/solid-lead-type/pb-2.pdf",
                    "image": "../assets/product/solid-lead-type/pb.png",
                    "alt": "PB-2 Series Conductive Polymer Aluminum Solid Electrolytic Capacitors"
                },
                {
                    "series":"PR",
                    "name": "Conductive Polymer Aluminum Solid Electrolytic Capacitors",
                    "partNumber": "EPPR",
                    templateUrl: "../assets/product/solid-lead-type/pr.pdf",
                    "image": "../assets/product/solid-lead-type/pr.png",
                    "alt": "PR Series Conductive Polymer Aluminum Solid Electrolytic Capacitors"
                },
                {
                    "series":"PS",
                    "name": "Conductive Polymer Aluminum Solid Electrolytic Capacitors",
                    "partNumber": "EPPS",
                    templateUrl: "../assets/product/solid-lead-type/ps.pdf",
                    "image": "../assets/product/solid-lead-type/ps.png",
                    "alt": "PS Series Conductive Polymer Aluminum Solid Electrolytic Capacitors"
                },
                {
                    "series":"PV",
                    "name": "Conductive Polymer Aluminum Solid Electrolytic Capacitors",
                    "partNumber": "EPPV",
                    templateUrl: "../assets/product/solid-lead-type/pv.pdf",
                    "image": "../assets/product/solid-lead-type/pv.png",
                    "alt": "PV Series Conductive Polymer Aluminum Solid Electrolytic Capacitors"
                },
                {
                    "series":"PX",
                    "name": "Conductive Polymer Aluminum Solid Electrolytic Capacitors",
                    "partNumber": "EPPX",
                    templateUrl: "../assets/product/solid-lead-type/px.pdf",
                    "image": "../assets/product/solid-lead-type/px.png",
                    "alt": "PX Series Conductive Polymer Aluminum Solid Electrolytic Capacitors"
                },
            // chip-type series
            {
                "series": "CH",
                "name": "Surface Mount Aluminum Electrolytic Capacitors",
                "partNumber": "",
                templateUrl: "../assets/product/chip-type/CH.pdf",
                "image": "../assets/product/chip-type/ch.png",
                "alt": "CH Series Surface Mount Aluminum Electrolytic Capacitors"
            },
            {
                "series": "CK",
                "name": "Surface Mount Aluminum Electrolytic Capacitors",
                "partNumber": "",
                templateUrl: "../assets/product/chip-type/CK.pdf",
                "image": "../assets/product/chip-type/ch.png",
                "alt": "CK Series Surface Mount Aluminum Electrolytic Capacitors"
            },
            {
                "series": "EL",
                "name": "Surface Mount Aluminum Electrolytic Capacitors",
                "partNumber": "",
                templateUrl: "../assets/product/chip-type/EL.pdf",
                "image": "../assets/product/chip-type/el.png",
                "alt": "EL Series Surface Mount Aluminum Electrolytic Capacitors"
            },
            {
                "series": "FZ",
                "name": "Surface Mount Aluminum Electrolytic Capacitors",
                "partNumber": "",
                templateUrl: "../assets/product/chip-type/FZ.pdf",
                "image": "../assets/product/chip-type/fz.png",
                "alt": "FZ Series Surface Mount Aluminum Electrolytic Capacitors"
            },
            {
                "series": "HU",
                "name": "Surface Mount Aluminum Electrolytic Capacitors",
                "partNumber": "",
                templateUrl: "../assets/product/chip-type/HU.pdf",
                "image": "../assets/product/chip-type/hu.png",
                "alt": "HU Series Surface Mount Aluminum Electrolytic Capacitors"
            },
            {
                "series": "KH",
                "name": "Surface Mount Aluminum Electrolytic Capacitors",
                "partNumber": "",
                templateUrl: "../assets/product/chip-type/KH.pdf",
                "image": "../assets/product/chip-type/kh.png",
                "alt": "KH Series Surface Mount Aluminum Electrolytic Capacitors"
            },
            {
                "series": "KL",
                "name": "Surface Mount Aluminum Electrolytic Capacitors",
                "partNumber": "",
                templateUrl: "../assets/product/chip-type/KL.pdf",
                "image": "../assets/product/chip-type/kl.png",
                "alt": "KL Series Surface Mount Aluminum Electrolytic Capacitors"
            },
            {
                "series": "KP",
                "name": "Surface Mount Aluminum Electrolytic Capacitors",
                "partNumber": "",
                templateUrl: "../assets/product/chip-type/KP.pdf",
                "image": "../assets/product/chip-type/kp.png",
                "alt": "KP Series Surface Mount Aluminum Electrolytic Capacitors"
            },
            {
                "series": "KZ",
                "name": "Surface Mount Aluminum Electrolytic Capacitors",
                "partNumber": "",
                templateUrl: "../assets/product/chip-type/KZ.pdf",
                "image": "../assets/product/chip-type/kz.png",
                "alt": "KZ Series Surface Mount Aluminum Electrolytic Capacitors"
            },
            {
                "series": "LZ",
                "name": "Surface Mount Aluminum Electrolytic Capacitors",
                "partNumber": "",
                templateUrl: "../assets/product/chip-type/LZ.pdf",
                "image": "../assets/product/chip-type/lz.png",
                "alt": "LZ Series Surface Mount Aluminum Electrolytic Capacitors"
            },
            {
                "series": "SC",
                "name": "Surface Mount Aluminum Electrolytic Capacitors",
                "partNumber": "",
                templateUrl: "../assets/product/chip-type/SC.pdf",
                "image": "../assets/product/chip-type/sc.png",
                "alt": "SC Series Surface Mount Aluminum Electrolytic Capacitors"
            },
                // miniature
                {
                    "series":"UH",
                    "name": "Radial Lead Aluminum Electrolytic Capacitors",
                    templateUrl: "../assets/product/miniature/43-44-UH.pdf",
                    "image": "../assets/product/miniature/uh.png",
                    "alt": "Miniature Series Radial Lead Aluminum Electrolytic Capacitors"
                },
                {
                    "series":"TP",
                    "name": "Radial Lead Aluminum Electrolytic Capacitors",
                    templateUrl: "../assets/product/miniature/49-50-TP.pdf",
                    "image": "../assets/product/miniature/tp.png",
                    "alt": "Miniature Series Radial Lead Aluminum Electrolytic Capacitors"
                },
                {
                    "series":"LA",
                    "name": "Radial Lead Aluminum Electrolytic Capacitors",
                    templateUrl: "../assets/product/miniature/57-58-LA.pdf",
                    "image": "../assets/product/miniature/la.png",
                    "alt": "Miniature Series Radial Lead Aluminum Electrolytic Capacitors"
                },
                {
                    "series":"SK",
                    "name": "Radial Lead Aluminum Electrolytic Capacitors",
                    templateUrl: "../assets/product/miniature/65-66-SK.pdf",
                    "image": "../assets/product/miniature/sk.png",
                    "alt": "Miniature Series Radial Lead Aluminum Electrolytic Capacitors"
                },
                {
                    "series":"SL",
                    "name": "Radial Lead Aluminum Electrolytic Capacitors",
                    templateUrl: "../assets/product/miniature/69-70-SL.pdf",
                    "image": "../assets/product/miniature/sl.png",
                    "alt": "Miniature Series Radial Lead Aluminum Electrolytic Capacitors"
                },
                {
                    "series":"SG",
                    "name": "Radial Lead Aluminum Electrolytic Capacitors",
                    templateUrl: "../assets/product/miniature/73-74-SG.pdf",
                    "image": "../assets/product/miniature/sg.png",
                    "alt": "Miniature Series Radial Lead Aluminum Electrolytic Capacitors"
                },
                {
                    "series":"HG",
                    "name": "Radial Lead Aluminum Electrolytic Capacitors",
                    templateUrl: "../assets/product/miniature/81-82-HG.pdf",
                    "image": "../assets/product/miniature/hg.png",
                    "alt": "Miniature Series Radial Lead Aluminum Electrolytic Capacitors"
                },
                {
                    "series":"EG",
                    "name": "Radial Lead Aluminum Electrolytic Capacitors",
                    templateUrl: "../assets/product/miniature/83-84-EG.pdf",
                    "image": "../assets/product/miniature/eg.png",
                    "alt": "Miniature Series Radial Lead Aluminum Electrolytic Capacitors"
                },
                {
                    "series":"GC",
                    "name": "Radial Lead Aluminum Electrolytic Capacitors",
                    templateUrl: "../assets/product/miniature/85-86-GC.pdf",
                    "image": "../assets/product/miniature/gc.png",
                    "alt": "Miniature Series Radial Lead Aluminum Electrolytic Capacitors"
                },
                // high-rip
                {
                    "series":"LR",
                    "name": "Radial Lead Aluminum Electrolytic Capacitors",
                    templateUrl: "../assets/product/high-rip/95-96-97-LR.pdf",
                    "image": "../assets/product/high-rip/lr.png",
                    "alt": "High Rips Low ESR Series Radial Lead Aluminum Electrolytic Capacitors"
                },
                {
                    "series":"LH",
                    "name": "Radial Lead Aluminum Electrolytic Capacitors",
                    templateUrl: "../assets/product/high-rip/101-102-103-LH.pdf",
                    "image": "../assets/product/high-rip/lh.png",
                    "alt": "High Rips Low ESR Series Radial Lead Aluminum Electrolytic Capacitors"
                },
                {
                    "series":"ZL",
                    "name": "Radial Lead Aluminum Electrolytic Capacitors",
                    templateUrl: "../assets/product/high-rip/107-108-ZL.pdf",
                    "image": "../assets/product/high-rip/zl.png",
                    "alt": "High Rips Low ESR Series Radial Lead Aluminum Electrolytic Capacitors"
                },
                {
                    "series":"LF",
                    "name": "Radial Lead Aluminum Electrolytic Capacitors",
                    templateUrl: "../assets/product/high-rip/111-112-LF.pdf",
                    "image": "../assets/product/high-rip/lf.png",
                    "alt": "High Rips Low ESR Series Radial Lead Aluminum Electrolytic Capacitors"
                },
                {
                    "series":"YA",
                    "name": "Radial Lead Aluminum Electrolytic Capacitors",
                    templateUrl: "../assets/product/high-rip/117-118-119-YA.pdf",
                    "image": "../assets/product/high-rip/ya.png",
                    "alt": "YA Series Radial Lead Aluminum Electrolytic Capacitors"
                },
                {
                    "series":"EB",
                    "name": "Radial Lead Aluminum Electrolytic Capacitors",
                    templateUrl: "../assets/product/high-rip/124-125-126-EB.pdf",
                    "image": "../assets/product/high-rip/eb.png",
                    "alt": "EB Series Radial Lead Aluminum Electrolytic Capacitors"
                },
                {
                    "series":"XF",
                    "name": "Radial Lead Aluminum Electrolytic Capacitors",
                    templateUrl: "../assets/product/high-rip/127-128-129-XF.pdf",
                    "image": "../assets/product/high-rip/xf.png",
                    "alt": "XF Series Radial Lead Aluminum Electrolytic Capacitors"
                },
                // snap-in-terminal
                {
                    "series":"GS GH",
                    "name": "Snap-in Terminal Type Aluminum Electrolytic Capacitors",
                    templateUrl: "../assets/product/snap-in-terminal/130-131-132-133-GS-GH.pdf",
                    "image": "../assets/product/snap-in-terminal/gs-gh.png",
                    "alt": "GS-GH Series Snap-in Terminal Type Aluminum Electrolytic Capacitors"
                },
                {
                    "series":"MP",
                    "name": "Snap-in Terminal Type Aluminum Electrolytic Capacitors",
                    templateUrl: "../assets/product/snap-in-terminal/138-139-140-MP.pdf",
                    "image": "../assets/product/snap-in-terminal/mp.png",
                    "alt": "MP Series Snap-in Terminal Type Aluminum Electrolytic Capacitors"
                },
                {
                    "series":"MZ",
                    "name": "Snap-in Terminal Type Aluminum Electrolytic Capacitors",
                    templateUrl: "../assets/product/snap-in-terminal/141-142-143-144-=MA_MZ.pdf",
                    "image": "../assets/product/snap-in-terminal/mz.png",
                    "alt": "MZ Series Snap-in Terminal Type Aluminum Electrolytic Capacitors"
                },
                {
                    "series":"KM",
                    "name": "Snap-in Terminal Type Aluminum Electrolytic Capacitors",
                    templateUrl: "../assets/product/snap-in-terminal/149-150-KM.pdf",
                    "image": "../assets/product/snap-in-terminal/km.png",
                    "alt": "KM Series Snap-in Terminal Type Aluminum Electrolytic Capacitors"
                },
                {
                    "series":"MQ",
                    "name": "Snap-in Terminal Type Aluminum Electrolytic Capacitors",
                    templateUrl: "../assets/product/snap-in-terminal/156-157-158-MQ.pdf",
                    "image": "../assets/product/snap-in-terminal/mq.png",
                    "alt": "MQ Series Snap-in Terminal Type Aluminum Electrolytic Capacitors"
                },
                // special application
                {
                    "series":"EH",
                    "name": "Radial Lead Aluminum Electrolytic Capacitors",
                    templateUrl: "../assets/product/special-app/159-160-EH.pdf",
                    "image": "../assets/product/special-app/eh.png",
                    "alt": "Special Series Radial Lead Aluminum Electrolytic Capacitors"
                },
                {
                    "series":"XH",
                    "name": "Radial Lead Aluminum Electrolytic Capacitors",
                    templateUrl: "../assets/product/special-app/161-162-163-XH.pdf",
                    "image": "../assets/product/special-app/xh.png",
                    "alt": "Special Series Radial Lead Aluminum Electrolytic Capacitors"
                },
                {
                    "series":"MH",
                    "name": "Screw Terminal Type Aluminum Electrolytic Capacitors",
                    templateUrl: "../assets/product/special-app/168-169-MH.pdf",
                    "image": "../assets/product/special-app/mh.png",
                    "alt": "Special Series Radial Lead Aluminum Electrolytic Capacitors"
                }
            ];
    }
})();
