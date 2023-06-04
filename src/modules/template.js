import { htmlToElement } from "./util.js";

export const baseTemplate = (conf) =>
  htmlToElement(`
	<div class="hack base cardgroup">
	    <div class="hack card header">
			GymHack (${conf.hackName})
    	    <div class="small">Press Ctrl+H to hide, Ctrl+M to attach to mouse</div>
	    </div>
    	<div class="hack card main_card">No answer detected</div>
	</div>
`);
