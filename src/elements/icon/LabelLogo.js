import React from "react";

const LabelLogo = ({className, height, width}) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      width={width}
      height={height}
      x="0"
      y="0"
      version="1.1"
      viewBox="0 0 1024 576"
      xmlSpace="preserve"
    >
      <path
        d="M467.29 311.312c-.228 7.74-10.27 15.738-16.979 16.946-1.468.265-3.056.15-4.272 1.172-10.107 8.488-22.071 3.346-33.172 4.474-2.266.23-2.99-1.707-2.989-3.772.02-18.489.045-36.978.049-55.467 0-3.908 2.21-3.605 5.034-2.978 30.662 6.81 60.86-9.972 70.936-39.343 1.688-4.92 2.797-10.038 2.722-15.17-.074-5.017 1.563-6.533 6.627-6.506 36.477.197 72.956.1 109.435.097 2.832 0 5.668.09 8.494-.036 3.12-.14 4.722 1.19 4.702 4.333-.07 10.654-.152 21.308-.244 31.962-.004.49.014 1.26-.262 1.426-7.45 4.453-6.688 13.132-10.054 19.67-2.988 5.8-5.702 7.192-11.225 3.653-4.464-2.861-8.583-6.278-12.741-9.59-1.511-1.203-2.985-1.947-4.95-1.928-9.562.09-18.012-2.944-26.3-7.82-10.345-6.085-20.03-12.973-29.433-20.34-3.786-2.966-10.727-1.472-12.044 3.142-.922 3.232-2.636 5.73-4.65 8.076-2.934 3.422-3.414 7.912-5.448 11.55-3.21 5.741-9.773 8.694-13.645 14.292-1.433 2.071-5.677 2.514-8.752 3.056-4.062.717-5.246 2.982-4.82 6.685.075.659-.165 1.424.088 1.983 3.542 7.795-1.289 14.846-1.932 22.26-.275 3.164-3.901 4.58-4.176 8.173z"
        opacity="1"
      ></path>
      <path
        d="M553.369 315.988c-1.937-10.814.02-21.772-5.813-31.777-3.325-5.703-5.672-12.205-8.151-18.605 3.954 1.362 6.468 4.38 8.757 7.35 2.052 2.66 4.278 4.35 7.534 5.257 5.38 1.499 9.255 4.501 10.877 10.471 1.182 4.35 4.759 7.812 5.483 12.63.337 2.24.566 4.09-1.416 5.206-2.26 1.273-3.278-.843-4.248-2.31-1.8-2.72-3.443-5.542-5.577-9.013.38 9.047 8.96 20.387 15.992 21.902-3.53-3.38-5.085-7.117-2.811-11.896 2.872.987 1.166 4.746 4.322 5.556.099-3.543-1.283-6.54-2.868-9.43 1.79-1.304 2.804-.108 3.526.861 5.979 8.03 13.939 13.334 22.644 18.106 4.333 2.374 8.18 5.37 13.234 6.184 1.972.318 2.412 2.044 2.41 3.858-.006 7.995.09 15.992-.027 23.985-.053 3.646-6.065 6.518-10.732 4.194-6.49-3.232-13.667-4.624-19.217-10.704-4.095-4.486-9.706-8.85-16.348-10.77-10.29-2.973-13.907-11.922-17.571-21.055m56.213 20.89c-1.5-2.29-3.52-3.965-6.192-4.576-7.536-1.721-12.547-6.391-15.659-13.26-1.377-3.039-3.897-4.218-6.988-4.953 4.412 1.899 5.394 5.954 7.076 9.723 1.501 3.365 4.415 5.78 7.846 7.33 4.504 2.035 9.046 3.988 13.917 5.735zM475.004 370.273c-4.163-.006-7.828.066-11.49-.037-4.547-.127-4.703-1.196-3.966-5.541 1.674-9.867 9.02-14.409 16.462-19.092 6.35-3.996 11.14-10.318 19.111-11.98 1.41 2.266.913 4.423-2.403 5.502-4.424 1.44-5.226 6.241-9.704 9.38 3.304-.347 4.443-1.53 5.485-3.013 1.824-2.593 3.863-4.87 6.813-6.403 3.86-2.008 4.59-6.633 5.978-9.987 2.5-6.04 8.43-8.72 11.17-14.738 2.728 7.238-3.121 10.337-5.818 14.61-1.267 2.006-2.517 3.68-2.642 6.186-.234 4.705-3.862 7.493-6.974 10.747 6.743-.143 10.551-3.965 10.308-10.356-.08-2.095.656-3.573 2.05-4.824 3.875-3.48 6.225-7.655 6.683-12.941.181-2.104 1.042-4.135 3.129-5.667 5.094 14.735-3.822 25.671-9.245 37.604 4.89-8.191 14.46-13.769 13.066-25.729 3.552 2.081 4.535 4.583 4.498 8.072-.053 4.984-.178 9.8-2.377 14.472-1.718 3.651-.627 7.103 3.045 8.895 5.846 2.853 7.295 9.156 11.82 12.974l-.536 1.867h-64.463zM577.64 172.125c.2-6.675 1.046-7.45 6.345-7.084 3.16.22 4.353 1.717 4.32 4.774-.067 6.483.026 12.968.046 19.452.007 2.27.104 4.465 3.163 4.653 3.485.214 3.041-2.474 3.081-4.476.13-6.482.184-12.97.036-19.45-.077-3.37 1.227-4.998 4.603-4.911.166.004.332-.016.499-.022 16.01-.551 18.122 2.324 17.609 16.447-.157 4.318.05 8.648-.112 12.966-.208 5.556-2.284 8.093-7.835 8.324-9.249.384-18.521.219-27.784.258-3.409.015-3.988-2.18-3.971-5.012.05-8.479 0-16.958 0-25.919m28.963 17.196V177.71l-1.038.078v13.953l.472.054c.17-.597.34-1.194.566-2.473zM438.27 165.02c3.949.02 7.442-.009 10.932.081 1.964.051 3.747.672 3.863 3.015.109 2.222.94 5.038-2.177 5.864-2.908.772-2.875 2.808-2.885 5.007-.03 6.153-.166 12.31-.02 18.459.093 3.979-1.357 5.698-5.522 5.655-4.017-.042-5.787-1.457-5.65-5.578.184-5.482-.122-10.982.096-16.461.159-3.987-.048-7.411-5.453-7.774.22 5.21-3.9 4.87-8.566 5.027 2.15 1.853 3.75 3.125 5.226 4.526 3.543 3.364 4.646 12.956 1.984 16.748-2.823 4.02-9.842 5.46-14.973 3.074-4.063-1.89-6.55-7.585-5.32-11.794 1.034-3.536 4.845-1.29 6.623-3.252-7.012-6.966-9.032-15.372-4.867-19.988 4.018-4.453 12.974-3.915 19.356 1.512.326-4.913 3.852-4.046 7.353-4.12zM562.197 376.724c4.294.004 8.116-.1 11.929.041 6.182.229 9.458 2.984 9.814 8.983.383 6.45.34 12.949.058 19.408-.205 4.69-3.529 7.216-7.848 7.596-5.105.449-10.278.159-15.42.115-2.654-.023-3.842-1.497-3.83-4.132.041-9.295.056-18.59.035-27.884-.007-3.307 1.804-4.359 5.262-4.127m8.878 8.65c-.437.022-1.245-.015-1.26.075-.995 6.25-.575 12.46.704 18.687 1.41-6.029 1.356-12.095.556-18.763zM440.117 382.522c.041 3.557.69 6.774-1.146 9.669-.607.957-.535 1.914.16 2.77 2.812 3.473 1.976 7.595 2.007 11.526.046 5.824-4.183 8.407-9.55 6.089-2.048-.885-1.755-2.535-1.905-4.159-.324-3.503.792-7.162-1.023-11.157-2.584 3.43-1.521 6.847-1.394 9.894.205 4.91-2.22 5.827-6.391 5.896-4.418.073-6.33-1.36-6.162-6.051.293-8.143.297-16.31.017-24.454-.162-4.698 1.69-6.3 6.164-5.869 4.608.445 9.267-.502 13.888.785 2.67.744 4.528 1.933 5.335 5.061zM553.693 402.597c-.063 1.685-.363 3.05-.166 4.338.777 5.095-1.702 6.35-6.296 6.1-3.603-.195-5.017-1.418-4.767-5.164.234-3.497.88-7.168-1.001-11.134-2.55 3.179-1.398 6.377-1.485 9.285-.19 6.35-3.55 8.705-9.654 6.658-2.268-.76-2.488-2.421-2.492-4.32-.02-9.16-.015-18.319-.047-27.477-.008-2.236.48-4.07 3.181-4.089 4.66-.032 9.362-.356 13.974.132 7.353.778 10.295 6.552 7.466 13.896-.352.914-.95 1.733-1.576 2.85 2.337 2.343 3.334 5.234 2.863 8.925zM523.935 389.328c-.072 4.774.138 9.114-.263 13.396-.762 8.13-5.22 11.094-15.36 10.65-7.478-.328-11.253-4.046-11.5-11.52-.131-3.98-.055-7.966-.036-11.95.045-9.714 3.738-13.773 12.755-14.057 9.542-.3 13.615 3.38 14.404 13.481m-12.495-4.22c-.54-.816-1.644-1.263-1.796-.205-.972 6.758-.612 13.504-.231 20.234l2.17.022c0-6.449 0-12.897-.143-20.05zM491.033 167.461c1.813-3.06 4.406-2.68 6.782-2.012 2.747.772 2.278 3.36 2.293 5.45.062 8.804.034 17.609.055 26.413.007 2.77.044 5.476-3.816 5.696-3.212.182-6.046-.072-6.874-3.998a10.277 10.277 0 00-1.92-4.219c-.103 1.35-.306 2.703-.288 4.051.044 3.384-1.995 4.196-4.858 4.175-2.792-.02-4.407-1.209-4.403-4.155.013-9.8.004-19.6.052-29.4.01-2.104.449-4.105 3.112-4.283 2.465-.165 5.168-.643 6.445 2.347 1.023 2.396 1.853 4.874 3.32 7.235 0-2.297 0-4.593.1-7.3zM552.838 188.857c.026-4.795-.122-9.119.106-13.423.364-6.886 4.427-10.83 11.031-11.048 6.46-.215 10.586 3.61 11.52 10.483.763 5.627.654 11.274.383 16.9-.39 8.115-4.757 12.406-12.03 12.264-6.815-.134-10.77-4.69-11.018-12.704-.02-.663 0-1.328.008-2.472m11.697-13.625c-1.058 6.126-.303 12.25.21 18.375 0-5.974 0-11.948-.21-18.375zM604.32 412.978c-3.743.586-7.073.678-10.366-.002-5.57-1.15-8.367-5.606-7.308-11.153.351-1.837 1.353-2.583 2.991-2.744 1.812-.18 3.636-.244 6.407-.419-2.218-1.547-3.761-2.625-5.306-3.7-4.165-2.902-4.582-7.105-3.884-11.593.695-4.46 3.857-6.334 7.934-7.137 4.555-.896 9.004-.594 13.106 1.642 2.843 1.55 4.332 4.114 3.988 7.467-.21 2.041-1.631 2.925-3.491 2.77-3.005-.25-6.98 1.81-8.213-3.169-.092-.373-.634-.635-1.322-1.282-1.198 3.197.693 4.47 2.613 5.688 2.38 1.51 4.978 2.585 7.273 4.327 5.964 4.528 5.905 17.972-4.423 19.305zM479.396 399.746c.321 2.099-.81 4.12 1.137 5.373 1.127-.243 1.227-1.078 1.357-1.905.968-6.172 3.482-7.79 9.679-6.368 1.479.339 2.265 1.022 2.625 2.535 1.162 4.876-1.65 10.885-6.298 12.764-5.004 2.024-10.165 1.94-15.047-.206-3.452-1.517-5.183-4.7-5.26-8.456-.116-5.817-.193-11.65.114-17.456.353-6.7 6.058-10.538 14.572-10.206 7.411.29 11.954 4.611 12.055 11.214.05 3.239-1.003 5.222-4.504 5.004-3.197-.2-7.478 1.522-7.852-4.161-.081-1.243.367-2.697-1.818-4.37-.878 5.614-.79 10.708-.76 16.238zM461.527 164.871c10.66-.631 14.48 2.87 14.621 13.057.067 4.82.136 9.65-.077 14.462-.326 7.353-4.792 11.652-11.655 11.535-6.708-.115-10.636-4.325-10.753-11.7-.093-5.81-.068-11.622-.04-17.433.024-5.13 2.448-8.49 7.904-9.92m2.646 11.616c-.003 2.98-.008 5.961-.01 8.942-.002 2.797 0 5.594 0 8.391 1.891-5.522 1.7-15.52.225-20.272a59.99 59.99 0 00-.215 2.939zM539.232 186.818c.002 2.52.002 4.58.002 6.64 2.229-2.077.444-5.796 4.568-6.536 6.62-1.188 9.225 1.32 7.71 7.874-1.363 5.888-6.193 9.42-12.558 9.18-5.94-.225-9.434-3.553-10.362-10.03-.901-6.293-.807-12.642-.248-18.933.636-7.16 4.757-10.54 12.004-10.53 6.357.009 10.142 3.553 11.108 10.403.968 6.858-.22 7.945-7.062 7.419-5.669-.436-2.596-5.154-5.164-7.693 0 3.916 0 7.83.002 12.206zM464.119 380.84c.07 2.927-1.31 4.03-3.636 4.23-1.72.149-3.497.373-3.56 2.609-.061 2.235 1.808 2.013 3.23 2.125 2.68.212 3.131 1.937 3.119 4.164-.013 2.237-.53 4.039-3.18 4.112-2.304.063-3.793.632-3.657 3.433.136 2.78 1.734 3.269 3.98 3.164 2.83-.133 3.745 1.389 3.731 4.017-.013 2.613-1.032 4.156-3.738 4.195a555.8 555.8 0 01-12.448.031c-2.457-.02-3.468-1.283-3.444-3.791.09-9.627.093-19.256.03-28.883-.018-2.562 1.045-3.594 3.558-3.544 4.149.081 8.3.06 12.45.023 2.534-.023 3.624 1.247 3.565 4.114zM516.517 179.457c3.346 4.522 3.096 6.252-1.228 8.578-1.364.734-2.033 1.518-2.045 3.018-.015 1.875 1.006 2.697 2.723 2.884 3.963.43 3.392 3.39 3.312 6.011-.097 3.169-2.517 3.054-4.674 3.07-14.49.112-12.553.933-12.664-11.878-.06-6.973.114-13.948.001-20.92-.062-3.852 1.602-5.47 5.396-5.23 2.15.135 4.316-.007 6.474.039 2.367.05 4.866.02 5.173 3.283.259 2.764.363 5.497-3.461 5.912-1.306.142-2.158.791-2.214 2.21-.08 1.98 1.394 2.422 3.207 3.023zM566.82 370.148c-4.789.131-8.589-1.213-11.828-4.256-1.066-1.001-2.399-1.885-3.77-2.368-7.204-2.54-11.762-8.116-15.21-14.33-2.514-4.531-1.57-10.333-4.276-15.288 2.2.02 3.188 1.243 3.678 2.246 3.487 7.131 10.235 11.317 15.829 16.142 5.206 4.49 9.776 10.177 16.411 12.994 1.305.555 2.316 1.468 2.17 3.011-.142 1.494-1.446 1.612-3.003 1.849zM564.232 274.215c1.362-.932 2.63-.187 3.867.086 3.634.803 5.142-.237 3.869-4.375 2.846 3.716 6.836 5.755 8.78 10.369 1.743 4.138 6.61 6.287 10.504 8.778 4.444 2.842 8.268 6.243 10.975 10.857-13.492-7.34-27.558-13.72-37.995-25.715zM577.316 263.9c7.094 1.14 11.503 6.452 17.217 9.423 3.668 1.907 7.149 3.385 11.813 1.944-.56 3.08-1.813 5.682-.78 8.644-9.568-5.222-17.66-12.52-27.266-17.273-1.398 1.614 1.458 2.245.259 3.837-2.543-1.327-4.27-3.397-5.684-5.765 1.146-2.098 2.737-.769 4.441-.81zM600.868 311.255c-4.563-4.722-10.806-7.839-10.734-15.547 8.1 4.624 12.31 13.318 19.886 18.513-3.65.63-6.197-1.228-9.152-2.966zM614.304 296.598c1.117 1.174 2.388 1.877 2.187 3.466-5.528-.673-14.794-8.55-18.055-15.824 6.432 3.232 11.847 6.573 15.868 12.358z"
        opacity="1"
      ></path>
    </svg>
  );
};

export { LabelLogo };
