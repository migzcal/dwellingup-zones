// IMAGE COMPARER FOR ZONES AND EXPANSION PROPOSAL
// Shoelace. n.d. "Image Comparer". Shoelance. Accessed on October 7, 2022. https://shoelace.style/components/imagecomparer.
import { SlImageComparer } from '@shoelace-style/shoelace/dist/react';

const App = () => (
  <SlImageComparer>
    <img
      slot="before"
      src="https://images.unsplash.com/photo-1517331156700-3c241d2b4d83?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=80&sat=-100&bri=-5"
      alt="Grayscale version of kittens in a basket looking around."
    />
    <img
      slot="after"
      src="https://images.unsplash.com/photo-1517331156700-3c241d2b4d83?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=80"
      alt="Color version of kittens in a basket looking around."
    />
  </SlImageComparer>
);

// ENVELOPE ICON FOR CONTACT
// Shoelace. n.d. "Icon". Shoelance. Accessed on October 7, 2022. https://shoelace.style/components/icon.
import { SlIcon } from '@shoelace-style/shoelace/dist/react';

const App = () => (
    <div style={{ fontSize: '70px', color: '#1e1e1e'}}>
        <SlIcon name="envelope-heart" />
    </div>
);

// BUTTON LINK FOR CONTACT
// Shoelace. n.d. "Button". Shoelance. Accessed on October 7, 2022. https://shoelace.style/components/button.
import { SlButton } from '@shoelace-style/shoelace/dist/react';

const App = () => (
  <>
    <SlButton href="https://www.parliament.wa.gov.au/parliament/memblist.nsf/WAMembers">Link</SlButton>
  </>
);
