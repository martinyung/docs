(window.webpackJsonp=window.webpackJsonp||[]).push([[36],{413:function(a,t,s){"use strict";s.r(t);var e=s(5),r=Object(e.a)({},(function(){var a=this,t=a.$createElement,s=a._self._c||t;return s("ContentSlotsDistributor",{attrs:{"slot-key":a.$parent.slotKey}},[s("h1",{attrs:{id:"governance"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#governance"}},[a._v("#")]),a._v(" Governance")]),a._v(" "),s("h2",{attrs:{id:"create-a-proposal"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#create-a-proposal"}},[a._v("#")]),a._v(" Create a Proposal")]),a._v(" "),s("p",[a._v("In order to create a governance proposal, you must submit an initial deposit along with a title and description. You may also provide the proposal directly through the "),s("code",[a._v("--proposal")]),a._v(" flag which points to a JSON file containing the proposal.")]),a._v(" "),s("h3",{attrs:{id:"text-proposals"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#text-proposals"}},[a._v("#")]),a._v(" Text Proposals")]),a._v(" "),s("div",{staticClass:"language-bash extra-class"},[s("pre",{pre:!0,attrs:{class:"language-bash"}},[s("code",[a._v("$ terracli tx gov submit-proposal "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("\\")]),a._v("\n    --title"),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v("=")]),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v("<")]),a._v("title"),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v(">")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("\\")]),a._v("\n    --description"),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v("=")]),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v("<")]),a._v("description"),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v(">")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("\\")]),a._v("\n    --type"),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v("=")]),s("span",{pre:!0,attrs:{class:"token string"}},[a._v('"Text"')]),a._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("\\")]),a._v("\n    --deposit"),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v("=")]),s("span",{pre:!0,attrs:{class:"token string"}},[a._v('"1000000uluna"')]),a._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("\\")]),a._v("\n    --from"),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v("=")]),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v("<")]),a._v("name"),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v(">")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("\\")]),a._v("\n    --chain-id"),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v("=")]),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v("<")]),a._v("chain_id"),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v(">")]),a._v("\n")])])]),s("h3",{attrs:{id:"parameter-change-proposals"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#parameter-change-proposals"}},[a._v("#")]),a._v(" Parameter Change Proposals")]),a._v(" "),s("p",[a._v("To submit a parameter change proposal, it is highly recommended to pass in the proposal as a JSON file as its\ncontents are less friendly to command-line input.")]),a._v(" "),s("div",{staticClass:"language-bash extra-class"},[s("pre",{pre:!0,attrs:{class:"language-bash"}},[s("code",[a._v("$ terracli tx gov submit-proposal "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("\\")]),a._v("\n    param-change "),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v("<")]),a._v("path/to/proposal.json"),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v(">")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("\\")]),a._v("\n    --from"),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v("=")]),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v("<")]),a._v("name"),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v(">")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("\\")]),a._v("\n    --chain-id"),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v("=")]),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v("<")]),a._v("chain_id"),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v(">")]),a._v("\n")])])]),s("p",[a._v("Where "),s("code",[a._v("proposal.json")]),a._v(" is a file with the following schema:")]),a._v(" "),s("div",{staticClass:"language-json extra-class"},[s("pre",{pre:!0,attrs:{class:"language-json"}},[s("code",[s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("{")]),a._v("\n  "),s("span",{pre:!0,attrs:{class:"token property"}},[a._v('"title"')]),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v(":")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[a._v('"Param Change"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(",")]),a._v("\n  "),s("span",{pre:!0,attrs:{class:"token property"}},[a._v('"description"')]),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v(":")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[a._v('"Update max validators"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(",")]),a._v("\n  "),s("span",{pre:!0,attrs:{class:"token property"}},[a._v('"changes"')]),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v(":")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("[")]),a._v("\n    "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("{")]),a._v("\n      "),s("span",{pre:!0,attrs:{class:"token property"}},[a._v('"subspace"')]),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v(":")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[a._v('"staking"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(",")]),a._v("\n      "),s("span",{pre:!0,attrs:{class:"token property"}},[a._v('"key"')]),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v(":")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[a._v('"MaxValidators"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(",")]),a._v("\n      "),s("span",{pre:!0,attrs:{class:"token property"}},[a._v('"value"')]),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v(":")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[a._v("105")]),a._v("\n    "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("}")]),a._v("\n  "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("]")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(",")]),a._v("\n  "),s("span",{pre:!0,attrs:{class:"token property"}},[a._v('"deposit"')]),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v(":")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("[")]),a._v("\n    "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("{")]),a._v("\n      "),s("span",{pre:!0,attrs:{class:"token property"}},[a._v('"denom"')]),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v(":")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[a._v('"uluna"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(",")]),a._v("\n      "),s("span",{pre:!0,attrs:{class:"token property"}},[a._v('"amount"')]),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v(":")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[a._v('"10000000"')]),a._v("\n    "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("}")]),a._v("\n  "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("]")]),a._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("}")]),a._v("\n")])])]),s("div",{staticClass:"custom-block warning"},[s("p",{staticClass:"custom-block-title"},[a._v("WARNING")]),a._v(" "),s("p",[a._v("Currently parameter changes are "),s("em",[a._v("evaluated")]),a._v(" but not "),s("em",[a._v("validated")]),a._v(", so it is very important\nthat any "),s("code",[a._v("value")]),a._v(" change is valid (ie. correct type and within bounds) for its\nrespective parameter, eg. "),s("code",[a._v("MaxValidators")]),a._v(" should be an integer and not a decimal.")]),a._v(" "),s("p",[a._v("Proper vetting of a parameter change proposal should prevent this from happening\n(no deposits should occur during the governance process), but it should be noted\nregardless.")])]),a._v(" "),s("h3",{attrs:{id:"community-pool-spend-proposal"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#community-pool-spend-proposal"}},[a._v("#")]),a._v(" Community Pool Spend Proposal")]),a._v(" "),s("p",[a._v("To submit a community pool spend proposal, it is highly recommended to pass in the proposal as a JSON file as its\ncontents are less friendly to command-line input.")]),a._v(" "),s("div",{staticClass:"language-bash extra-class"},[s("pre",{pre:!0,attrs:{class:"language-bash"}},[s("code",[a._v("$ terracli tx gov submit-proposal "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("\\")]),a._v("\n    community-pool-spend "),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v("<")]),a._v("path/to/proposal.json"),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v(">")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("\\")]),a._v("\n    --from"),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v("=")]),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v("<")]),a._v("name"),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v(">")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("\\")]),a._v("\n    --chain-id"),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v("=")]),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v("<")]),a._v("chain_id"),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v(">")]),a._v("\n")])])]),s("p",[a._v("Where "),s("code",[a._v("proposal.json")]),a._v(" contains the following:")]),a._v(" "),s("div",{staticClass:"language-json extra-class"},[s("pre",{pre:!0,attrs:{class:"language-json"}},[s("code",[s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("{")]),a._v("\n  "),s("span",{pre:!0,attrs:{class:"token property"}},[a._v('"title"')]),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v(":")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[a._v('"Community Pool Spend"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(",")]),a._v("\n  "),s("span",{pre:!0,attrs:{class:"token property"}},[a._v('"description"')]),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v(":")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[a._v('"Pay me some Lunas!"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(",")]),a._v("\n  "),s("span",{pre:!0,attrs:{class:"token property"}},[a._v('"recipient"')]),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v(":")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[a._v('"terra1s5afhd6gxevu37mkqcvvsj8qeylhn0rzn7cdaq"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(",")]),a._v("\n  "),s("span",{pre:!0,attrs:{class:"token property"}},[a._v('"amount"')]),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v(":")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("[")]),a._v("\n    "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("{")]),a._v("\n      "),s("span",{pre:!0,attrs:{class:"token property"}},[a._v('"denom"')]),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v(":")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[a._v('"uluna"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(",")]),a._v("\n      "),s("span",{pre:!0,attrs:{class:"token property"}},[a._v('"amount"')]),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v(":")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[a._v('"10000"')]),a._v("\n    "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("}")]),a._v("\n  "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("]")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(",")]),a._v("\n  "),s("span",{pre:!0,attrs:{class:"token property"}},[a._v('"deposit"')]),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v(":")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("[")]),a._v("\n    "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("{")]),a._v("\n      "),s("span",{pre:!0,attrs:{class:"token property"}},[a._v('"denom"')]),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v(":")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[a._v('"uluna"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(",")]),a._v("\n      "),s("span",{pre:!0,attrs:{class:"token property"}},[a._v('"amount"')]),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v(":")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[a._v('"10000"')]),a._v("\n    "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("}")]),a._v("\n  "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("]")]),a._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("}")]),a._v("\n")])])]),s("h4",{attrs:{id:"tax-rate-and-reward-weight-update-proposals"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#tax-rate-and-reward-weight-update-proposals"}},[a._v("#")]),a._v(" Tax-Rate and Reward-Weight Update Proposals")]),a._v(" "),s("p",[a._v("Tax Rate and Reward Weight are important monetary policy levers handled by the "),s("RouterLink",{attrs:{to:"/terracli/dev-spec-treasury.html"}},[s("code",[a._v("Treasury")])]),a._v(" module to modulate miner incentives toward stable demand and steady growth. Usually, they are automatically calibrated once per epoch by the protocol. However, they can be changed at any moment if an update proposal gets passed with enough supporters.")],1),a._v(" "),s("p",[a._v("To submit Tax Rate or Reward Weight update proposal, you must provide a proposal file as its contents are less friendly to CLI input:")]),a._v(" "),s("p",[a._v("For Tax Rate:")]),a._v(" "),s("div",{staticClass:"language-bash extra-class"},[s("pre",{pre:!0,attrs:{class:"language-bash"}},[s("code",[a._v("$ terracli tx gov submit-proposal "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("\\")]),a._v("\n    tax-rate-update "),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v("<")]),a._v("path/to/proposal.json"),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v(">")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("\\")]),a._v("\n    --from"),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v("=")]),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v("<")]),a._v("name"),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v(">")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("\\")]),a._v("\n    --chain-id"),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v("=")]),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v("<")]),a._v("chain_id"),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v(">")]),a._v("\n")])])]),s("p",[a._v("Where "),s("code",[a._v("proposal.json")]),a._v(" contains the following:")]),a._v(" "),s("div",{staticClass:"language-json extra-class"},[s("pre",{pre:!0,attrs:{class:"language-json"}},[s("code",[s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("{")]),a._v("\n  "),s("span",{pre:!0,attrs:{class:"token property"}},[a._v('"title"')]),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v(":")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[a._v('"Update Tax-Rate"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(",")]),a._v("\n  "),s("span",{pre:!0,attrs:{class:"token property"}},[a._v('"description"')]),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v(":")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[a._v('"Let\'s update the tax-rate to 1.5%"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(",")]),a._v("\n  "),s("span",{pre:!0,attrs:{class:"token property"}},[a._v('"tax_rate"')]),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v(":")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[a._v('"0.015"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(",")]),a._v("\n  "),s("span",{pre:!0,attrs:{class:"token property"}},[a._v('"deposit"')]),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v(":")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("[")]),a._v("\n    "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("{")]),a._v("\n      "),s("span",{pre:!0,attrs:{class:"token property"}},[a._v('"denom"')]),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v(":")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[a._v('"uluna"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(",")]),a._v("\n      "),s("span",{pre:!0,attrs:{class:"token property"}},[a._v('"amount"')]),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v(":")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[a._v('"10000"')]),a._v("\n    "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("}")]),a._v("\n  "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("]")]),a._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("}")]),a._v("\n")])])]),s("p",[a._v("For Reward Weight:")]),a._v(" "),s("div",{staticClass:"language-bash extra-class"},[s("pre",{pre:!0,attrs:{class:"language-bash"}},[s("code",[a._v("$ terracli tx gov submit-proposal "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("\\")]),a._v("\n    reward-weight-update "),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v("<")]),a._v("path/to/proposal.json"),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v(">")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("\\")]),a._v("\n    --from"),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v("=")]),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v("<")]),a._v("name"),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v(">")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("\\")]),a._v("\n    --chain-id"),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v("=")]),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v("<")]),a._v("chain_id"),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v(">")]),a._v("\n")])])]),s("p",[a._v("Where "),s("code",[a._v("proposal.json")]),a._v(" contains the following:")]),a._v(" "),s("div",{staticClass:"language-json extra-class"},[s("pre",{pre:!0,attrs:{class:"language-json"}},[s("code",[s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("{")]),a._v("\n  "),s("span",{pre:!0,attrs:{class:"token property"}},[a._v('"title"')]),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v(":")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[a._v('"Update Reward Weight"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(",")]),a._v("\n  "),s("span",{pre:!0,attrs:{class:"token property"}},[a._v('"description"')]),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v(":")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[a._v('"Let\'s update reward weight to 1.5%"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(",")]),a._v("\n  "),s("span",{pre:!0,attrs:{class:"token property"}},[a._v('"reward_weight"')]),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v(":")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[a._v('"0.015"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(",")]),a._v("\n  "),s("span",{pre:!0,attrs:{class:"token property"}},[a._v('"deposit"')]),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v(":")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("[")]),a._v("\n    "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("{")]),a._v("\n      "),s("span",{pre:!0,attrs:{class:"token property"}},[a._v('"denom"')]),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v(":")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[a._v('"uluna"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(",")]),a._v("\n      "),s("span",{pre:!0,attrs:{class:"token property"}},[a._v('"amount"')]),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v(":")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[a._v('"10000"')]),a._v("\n    "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("}")]),a._v("\n  "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("]")]),a._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("}")]),a._v("\n")])])]),s("p",[a._v("Note that Tax Reward and Reward Weight updates through pased Governance proposals are subject to "),s("RouterLink",{attrs:{to:"/terracli/dev-spec-treasury.html#policy-constraints"}},[a._v("Policy Constraints")]),a._v(".")],1),a._v(" "),s("h3",{attrs:{id:"software-upgrade-proposals"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#software-upgrade-proposals"}},[a._v("#")]),a._v(" Software Upgrade Proposals")]),a._v(" "),s("p",[a._v("The "),s("code",[a._v("SoftwareUpgrade")]),a._v(" is "),s("strong",[a._v("currently not supported")]),a._v(" as it has not yet been implemented and currently does not differ from the semantics of a "),s("code",[a._v("Text")]),a._v(" proposal.")]),a._v(" "),s("h2",{attrs:{id:"query-proposals"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#query-proposals"}},[a._v("#")]),a._v(" Query Proposals")]),a._v(" "),s("p",[a._v("Once created, you can now query information of the proposal:")]),a._v(" "),s("div",{staticClass:"language-bash extra-class"},[s("pre",{pre:!0,attrs:{class:"language-bash"}},[s("code",[a._v("$ terracli query gov proposal "),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v("<")]),a._v("proposal_id"),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v(">")]),a._v("\n")])])]),s("p",[a._v("Or query all available proposals:")]),a._v(" "),s("div",{staticClass:"language-bash extra-class"},[s("pre",{pre:!0,attrs:{class:"language-bash"}},[s("code",[a._v("$ terracli query gov proposals\n")])])]),s("p",[a._v("You can also query proposals filtered by "),s("code",[a._v("voter")]),a._v(" or "),s("code",[a._v("depositor")]),a._v(" by using the corresponding flags.")]),a._v(" "),s("p",[a._v("To query for the proposer of a given governance proposal:")]),a._v(" "),s("div",{staticClass:"language-bash extra-class"},[s("pre",{pre:!0,attrs:{class:"language-bash"}},[s("code",[a._v("$ terracli query gov proposer "),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v("<")]),a._v("proposal_id"),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v(">")]),a._v("\n")])])]),s("h2",{attrs:{id:"increase-deposit"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#increase-deposit"}},[a._v("#")]),a._v(" Increase Deposit")]),a._v(" "),s("p",[a._v("In order for a proposal to be broadcasted to the network, the amount deposited must be above a "),s("code",[a._v("minDeposit")]),a._v(" value (initial value: "),s("code",[a._v("512000000uluna")]),a._v("). If the proposal you previously created didn't meet this requirement, you can still increase the total amount deposited to activate it. Once the minimum deposit is reached, the proposal enters voting period:")]),a._v(" "),s("div",{staticClass:"language-bash extra-class"},[s("pre",{pre:!0,attrs:{class:"language-bash"}},[s("code",[a._v("$ terracli tx gov deposit "),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v("<")]),a._v("proposal_id"),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v(">")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[a._v('"10000000luluna"')]),a._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("\\")]),a._v("\n    --from"),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v("=")]),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v("<")]),a._v("name"),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v(">")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("\\")]),a._v("\n    --chain-id"),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v("=")]),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v("<")]),a._v("chain_id"),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v(">")]),a._v("\n")])])]),s("div",{staticClass:"custom-block warning"},[s("p",{staticClass:"custom-block-title"},[a._v("WARNING")]),a._v(" "),s("p",[a._v("Proposals that don't meet this requirement will be deleted after "),s("code",[a._v("MaxDepositPeriod")]),a._v(" is reached.")])]),a._v(" "),s("h2",{attrs:{id:"query-deposits"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#query-deposits"}},[a._v("#")]),a._v(" Query Deposits")]),a._v(" "),s("p",[a._v("Once a new proposal is created, you can query all the deposits submitted to it:")]),a._v(" "),s("div",{staticClass:"language-bash extra-class"},[s("pre",{pre:!0,attrs:{class:"language-bash"}},[s("code",[a._v("$ terracli query gov deposits "),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v("<")]),a._v("proposal_id"),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v(">")]),a._v("\n")])])]),s("p",[a._v("You can also query a deposit submitted by a specific address:")]),a._v(" "),s("div",{staticClass:"language-bash extra-class"},[s("pre",{pre:!0,attrs:{class:"language-bash"}},[s("code",[a._v("$ terracli query gov deposit "),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v("<")]),a._v("proposal_id"),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v(">")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v("<")]),a._v("depositor_address"),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v(">")]),a._v("\n")])])]),s("h2",{attrs:{id:"vote-on-a-proposal"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#vote-on-a-proposal"}},[a._v("#")]),a._v(" Vote on a Proposal")]),a._v(" "),s("p",[a._v("After a proposal's deposit reaches the "),s("code",[a._v("MinDeposit")]),a._v(" value, the voting period opens. Bonded LUNA holders can then cast vote on it:")]),a._v(" "),s("div",{staticClass:"language-bash extra-class"},[s("pre",{pre:!0,attrs:{class:"language-bash"}},[s("code",[a._v("$ terracli tx gov vote "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("\\")]),a._v("\n    "),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v("<")]),a._v("proposal_id"),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v(">")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v("<")]),a._v("Yes/No/NoWithVeto/Abstain"),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v(">")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("\\")]),a._v("\n    --from"),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v("=")]),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v("<")]),a._v("name"),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v(">")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("\\")]),a._v("\n    --chain-id"),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v("=")]),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v("<")]),a._v("chain_id"),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v(">")]),a._v("\n")])])]),s("h2",{attrs:{id:"query-votes"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#query-votes"}},[a._v("#")]),a._v(" Query Votes")]),a._v(" "),s("p",[a._v("Check the vote with the option you just submitted:")]),a._v(" "),s("div",{staticClass:"language-bash extra-class"},[s("pre",{pre:!0,attrs:{class:"language-bash"}},[s("code",[a._v("$ terracli query gov vote "),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v("<")]),a._v("proposal_id"),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v(">")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v("<")]),a._v("voter_address"),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v(">")]),a._v("\n")])])]),s("p",[a._v("You can also get all the previous votes submitted to the proposal with:")]),a._v(" "),s("div",{staticClass:"language-bash extra-class"},[s("pre",{pre:!0,attrs:{class:"language-bash"}},[s("code",[a._v("$ terracli query gov votes "),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v("<")]),a._v("proposal_id"),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v(">")]),a._v("\n")])])]),s("h2",{attrs:{id:"query-proposal-tally-results"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#query-proposal-tally-results"}},[a._v("#")]),a._v(" Query Proposal Tally Results")]),a._v(" "),s("p",[a._v("To check the current tally of a given proposal you can use the "),s("code",[a._v("tally")]),a._v(" command:")]),a._v(" "),s("div",{staticClass:"language-bash extra-class"},[s("pre",{pre:!0,attrs:{class:"language-bash"}},[s("code",[a._v("$ terracli query gov tally "),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v("<")]),a._v("proposal_id"),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v(">")]),a._v("\n")])])]),s("h2",{attrs:{id:"query-governance-parameters"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#query-governance-parameters"}},[a._v("#")]),a._v(" Query Governance Parameters")]),a._v(" "),s("p",[a._v("To check the current governance parameters run:")]),a._v(" "),s("div",{staticClass:"language-bash extra-class"},[s("pre",{pre:!0,attrs:{class:"language-bash"}},[s("code",[a._v("$ terracli query gov params\n")])])]),s("p",[a._v("To query subsets of the governance parameters run:")]),a._v(" "),s("div",{staticClass:"language-bash extra-class"},[s("pre",{pre:!0,attrs:{class:"language-bash"}},[s("code",[a._v("$ terracli query gov param voting\n$ terracli query gov param tallying\n$ terracli query gov param deposit\n")])])])])}),[],!1,null,null,null);t.default=r.exports}}]);